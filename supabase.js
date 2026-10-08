/**
 * 든든한 걸음 - Supabase 데이터베이스 연동 모듈
 * 
 * 1. Supabase JS v2 클라이언트 초기화
 * 2. 운동 기록(exercise_records) 및 자가진단(assessment_records) CRUD
 * 3. 미설정 시 로컬스토리지(LocalStorage)로 자동 대체 (Graceful Fallback)
 */

// -----------------------------------------------------------------------------
// [설정] 여기에 본인의 Supabase Project URL과 anon key를 직접 입력하셔도 되고,
// 웹 화면의 [DB 설정] 모달창을 통해 브라우저에서 직접 등록하실 수도 있습니다.
// -----------------------------------------------------------------------------
const DEFAULT_SUPABASE_CONFIG = {
  url: "https://dgnekwjodrxuyhllmflk.supabase.co",
  anonKey: "sb_publishable_IT3hWT88aJ3WzssZ6DCwQQ_Y5ZKE1_b"
};

class SupabaseService {
  constructor() {
    this.client = null;
    this.isConnected = false;
    this.url = "";
    this.anonKey = "";
    this.init();
  }

  // 초기화: 로컬스토리지 우선, 없으면 기본 설정 상수 사용
  init() {
    const savedUrl = localStorage.getItem("fall_prev_sb_url");
    const savedKey = localStorage.getItem("fall_prev_sb_key");

    this.url = savedUrl || DEFAULT_SUPABASE_CONFIG.url || "";
    this.anonKey = savedKey || DEFAULT_SUPABASE_CONFIG.anonKey || "";

    if (this.url && this.anonKey && window.supabase) {
      try {
        this.client = window.supabase.createClient(this.url, this.anonKey);
        this.isConnected = true;
      } catch (err) {
        console.warn("Supabase 클라이언트 초기화 실패:", err);
        this.client = null;
        this.isConnected = false;
      }
    } else {
      this.isConnected = false;
    }
  }

  // 연결 상태 확인
  isReady() {
    return this.isConnected && this.client !== null;
  }

  // 연결 테스트
  async testConnection(url, key) {
    if (!window.supabase) {
      return { success: false, message: "Supabase JS 라이브러리를 불러오지 못했습니다." };
    }
    try {
      const testClient = window.supabase.createClient(url, key);
      // 단순 조회 쿼리로 연결 확인
      const { data, error } = await testClient
        .from("exercise_records")
        .select("id")
        .limit(1);

      if (error) {
        // 테이블이 아직 없는 경우와 인증 키 오류 구분
        if (error.code === "42P01") {
          return {
            success: false, 
            message: "연결 성공했으나 테이블이 없습니다. supabase_setup.sql 쿼리를 실행해 주세요."
          };
        }
        return { success: false, message: `오류: ${error.message}` };
      }

      return { success: true, message: "수파베이스 데이터베이스 연결에 성공했습니다!" };
    } catch (e) {
      return { success: false, message: `연결 실패: ${e.message}` };
    }
  }

  // 새 설정 저장 및 클라이언트 갱신
  saveCredentials(url, key) {
    this.url = (url || "").trim();
    this.anonKey = (key || "").trim();

    localStorage.setItem("fall_prev_sb_url", this.url);
    localStorage.setItem("fall_prev_sb_key", this.anonKey);

    this.init();
    return this.isReady();
  }

  // 설정 초기화 (로컬 모드로 전환)
  clearCredentials() {
    localStorage.removeItem("fall_prev_sb_url");
    localStorage.removeItem("fall_prev_sb_key");
    this.url = "";
    this.anonKey = "";
    this.client = null;
    this.isConnected = false;
  }

  // ===========================================================================
  // 1. 운동 기록 (exercise_records) 연동
  // ===========================================================================

  // 모든 운동 기록 불러오기
  async fetchExerciseRecords() {
    if (!this.isReady()) {
      return null; // 로컬스토리지 사용
    }

    try {
      const { data, error } = await this.client
        .from("exercise_records")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.warn("Supabase 운동 기록 불러오기 오류:", error);
        return null;
      }
      return data;
    } catch (e) {
      console.warn("Supabase fetch 예외:", e);
      return null;
    }
  }

  // 운동 완료 기록 저장
  async saveExerciseRecord(record) {
    if (!this.isReady()) {
      return false;
    }

    try {
      const { data, error } = await this.client
        .from("exercise_records")
        .insert([
          {
            date: record.date,
            exercise_count: record.exerciseCount || 1,
            seconds: record.seconds || 30,
            category: record.category || "all",
            exercise_title: record.exerciseTitle || "루틴 운동",
            user_id: localStorage.getItem("fall_prev_user_id") || "guest"
          }
        ]);

      if (error) {
        console.warn("Supabase 운동 기록 저장 실패:", error);
        return false;
      }
      return true;
    } catch (e) {
      console.warn("Supabase insert 예외:", e);
      return false;
    }
  }

  // ===========================================================================
  // 2. 자가진단 기록 (assessment_records) 연동
  // ===========================================================================

  // 자가진단 결과 저장
  async saveAssessmentRecord(data) {
    if (!this.isReady()) {
      return false;
    }

    try {
      const { error } = await this.client
        .from("assessment_records")
        .insert([
          {
            total_score: data.totalScore,
            risk_level: data.riskLevel,
            answers: data.answers || {},
            user_id: localStorage.getItem("fall_prev_user_id") || "guest"
          }
        ]);

      if (error) {
        console.warn("Supabase 자가진단 저장 실패:", error);
        return false;
      }
      return true;
    } catch (e) {
      console.warn("Supabase assessment insert 예외:", e);
      return false;
    }
  }

  // 최근 자가진단 기록 조회
  async fetchLatestAssessment() {
    if (!this.isReady()) return null;

    try {
      const { data, error } = await this.client
        .from("assessment_records")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1);

      if (error || !data || data.length === 0) return null;
      return data[0];
    } catch (e) {
      return null;
    }
  }
}

// 글로벌 인스턴스 생성
window.dbService = new SupabaseService();
