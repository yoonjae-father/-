-- =============================================================================
-- 든든한 걸음 (어르신 낙상예방 웹앱) - Supabase 테이블 생성 SQL
-- Supabase 대시보드 -> [SQL Editor] -> [New query] 에 붙여넣고 [Run] 하세요.
-- =============================================================================

-- 1. 운동 완료 기록 테이블 (exercise_records)
CREATE TABLE IF NOT EXISTS public.exercise_records (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    user_id TEXT DEFAULT 'guest',              -- 회원 관리 시 user uid 또는 닉네임
    date DATE NOT NULL,                         -- 운동 날짜 (YYYY-MM-DD)
    exercise_count INTEGER NOT NULL DEFAULT 1,  -- 완료한 동작 수
    seconds INTEGER NOT NULL DEFAULT 30,        -- 총 운동 소요 시간 (초)
    category TEXT,                              -- 'upper', 'lower', 'full', 'all'
    exercise_title TEXT                         -- 운동 명칭 (단일 운동일 경우)
);

-- 2. 낙상 위험도 자가진단 기록 테이블 (assessment_records)
CREATE TABLE IF NOT EXISTS public.assessment_records (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    user_id TEXT DEFAULT 'guest',
    date DATE DEFAULT CURRENT_DATE NOT NULL,
    total_score INTEGER NOT NULL,               -- 자가진단 총점 (0 ~ 6)
    risk_level TEXT NOT NULL,                   -- 'low'(안전), 'medium'(주의), 'high'(경고)
    answers JSONB                               -- 문항별 답변 상세 데이터
);

-- 인덱스 추가 (조회 성능 최적화)
CREATE INDEX IF NOT EXISTS idx_exercise_records_date ON public.exercise_records(date);
CREATE INDEX IF NOT EXISTS idx_exercise_records_user ON public.exercise_records(user_id);
CREATE INDEX IF NOT EXISTS idx_assessment_records_created ON public.assessment_records(created_at);

-- 3. Row Level Security (RLS) 및 접근 정책 설정
-- 익명 사용자(anon)도 브라우저에서 읽기 및 작성이 가능하도록 기본 정책 허용
ALTER TABLE public.exercise_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_records ENABLE ROW LEVEL SECURITY;

-- 기존 정책이 있다면 삭제 후 재생성
DROP POLICY IF EXISTS "모든 사용자 운동기록 조회 허용" ON public.exercise_records;
DROP POLICY IF EXISTS "모든 사용자 운동기록 추가 허용" ON public.exercise_records;
DROP POLICY IF EXISTS "모든 사용자 자가진단 조회 허용" ON public.assessment_records;
DROP POLICY IF EXISTS "모든 사용자 자가진단 추가 허용" ON public.assessment_records;

-- 운동 기록 정책
CREATE POLICY "모든 사용자 운동기록 조회 허용" 
ON public.exercise_records FOR SELECT 
TO anon, authenticated 
USING (true);

CREATE POLICY "모든 사용자 운동기록 추가 허용" 
ON public.exercise_records FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- 자가진단 기록 정책
CREATE POLICY "모든 사용자 자가진단 조회 허용" 
ON public.assessment_records FOR SELECT 
TO anon, authenticated 
USING (true);

CREATE POLICY "모든 사용자 자가진단 추가 허용" 
ON public.assessment_records FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);
