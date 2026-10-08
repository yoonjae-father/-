# 든든한 걸음 - 어르신 낙상예방 운동 가이드 🚶‍♂️🌿

> **"안전하고 활기찬 일상을 위한 시니어 맞춤형 낙상 예방 운동 웹 애플리케이션"**  
> 보건복지부, 질병관리청, 국립재활원의 시니어 낙상 예방 가이드를 기반으로 상지·하지·전신 운동과 영상 코칭을 제공합니다.  
> 클라우드 데이터베이스 **Supabase(수파베이스)** 연동을 지원하여 어느 기기에서나 운동 기록과 출석을 보존할 수 있습니다.

[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-2ea44f?style=flat-square&logo=github)](https://yoonjae-father.github.io/-/)
[![Supabase](https://img.shields.io/badge/Database-Supabase-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](#)

---

## 🔗 바로가기 & 서비스 데모

- **공식 저장소:** [https://github.com/yoonjae-father/-](https://github.com/yoonjae-father/-)
- **웹 서비스 접속 (GitHub Pages):** [https://yoonjae-father.github.io/-/](https://yoonjae-father.github.io/-/)

---

## 🗄️ Supabase 데이터베이스 연동 가이드

본 웹앱은 **Supabase(수파베이스)** 클라우드 DB 연동을 지원합니다.  
(DB를 설정하지 않아도 브라우저 내부 **LocalStorage**로 모든 기능이 정상 동작합니다.)

### 1단계: Supabase 테이블 생성 (SQL 실행)
1. [Supabase](https://supabase.com)에 로그인 후 프로젝트를 생성합니다.
2. 좌측 메뉴에서 **SQL Editor** -> **New query**를 클릭합니다.
3. 프로젝트 내 [supabase_setup.sql](file:///c:/Users/jjazu/OneDrive/바탕%20화면/바이브코딩%20실습/supabase_setup.sql) 파일의 내용을 그대로 복사하여 붙여넣고 **Run**을 실행합니다.
   - `exercise_records` (운동 완료 기록 테이블)
   - `assessment_records` (자가진단 결과 테이블)
   - 익명(anon) 읽기/쓰기 RLS 정책이 자동 구성됩니다.

### 2단계: 웹앱에서 DB 연결하기 (2가지 방법 중 택 1)
- **방법 A (화면에서 바로 입력 - 추천)**:
  1. 웹앱 우측 상단의 **[🟡 로컬 모드 (DB 설정)]** 버튼을 클릭합니다.
  2. Supabase 대시보드의 `Project Settings` -> `API`에 있는 **Project URL**과 **anon public API Key**를 입력합니다.
  3. **[연결 테스트]** 후 **[저장 및 동기화]**를 누르면 끝! (초록색 `🟢 Supabase 연결됨`으로 변경)
- **방법 B (코드에 직접 설정)**:
  - `supabase.js` 상단의 `DEFAULT_SUPABASE_CONFIG` 객체에 `url`과 `anonKey`를 직접 입력하실 수도 있습니다.

---

## 🌟 주요 핵심 기능

### 1. 3대 부위별 맞춤 운동 프로그램 (총 12개 동작)
| 카테고리 | 주요 목표 | 포함된 운동 동작 (총 4개씩) |
| :--- | :--- | :--- |
| **💪 상지(상체) 부분** | 낙상 시 손 짚는 지지력 확보 & 악력 및 척추 유연성 | ① 벽 짚고 팔굽혀펴기<br>② 앉아서 양팔 벌려 가슴 펴기<br>③ 어깨 으쓱으쓱 및 회전<br>④ 잼잼 악력 기르기 & 손목 돌리기 |
| **🦵 하지(하체) 부분** | 넘어짐 방지 핵심 근력 & 발목 지지력 및 보행 안정성 | ① 의자 잡고 까치발 들기<br>② 의자 앉았다 일어서기 (미니 스쿼트)<br>③ 의자 잡고 다리 옆으로 들기 (중둔근)<br>④ 발목 까딱까딱 펌프 운동 |
| **🏃‍♂️ 전신 & 균형 부분** | 돌발적인 휘청거림 회복 & 고유수용성 감각 훈련 | ① 한 발로 서서 버티기 (외발 서기)<br>② 발뒤꿈치-발가락 일자 걷기 (탠덤 보행)<br>③ 제자리 무릎 높여 천천히 걷기<br>④ 좌우 무게중심 이동하기 (체중 시프팅) |

### 2. 📺 각 운동별 유튜브(YouTube) 영상 인앱 시청
- 각 운동 카드마다 **[유튜브 영상 보기]** 버튼 제공.
- 화면 이동 없이 **반응형 팝업 플레이어(YouTube Embed)**로 바로 시청.
- 큰 화면 시청(`새 창`) 및 시청 후 즉시 **[이 운동 타이머로 따라하기]** 원클릭 전환.

### 3. ⏱️ 스마트 코칭 타이머 & 한국어 음성 안내 (TTS)
- 동작별 30초 원형 카운트다운 게이지 + 동작 간 5초 휴식.
- "운동을 시작합니다", "10초 남았습니다", "동작 완료!" 등 친절한 한국어 음성 코칭.
- 비프음 카운트다운 & 완료 팡파레 효과음 탑재.

### 4. 👓 시니어 친화적 UI & 접근성
- 글자 크기 3단계 조절 ([보통 / 크게 / 아주 크게]).
- 고대비 컬러와 큼직한 버튼 터치 인터페이스.
- 동작별 SVG 벡터 모션 일러스트.

### 5. 📋 낙상 위험도 자가진단 & 📅 출석 달력
- 5문항 자가진단 (안전 / 주의 / 경고) 및 맞춤 운동 가이드 제공.
- 운동 완료 시 **Supabase DB 및 LocalStorage에 자동 저장**.
- 연속 실천일(스트릭), 이번 달 횟수, 누적 시간 집계.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Frontend**: HTML5, CSS3, Modern JavaScript (Vanilla ES6+)
- **Database / Backend**: **Supabase (PostgreSQL, Row Level Security, JS SDK v2)**
- **Font & Icons**: Pretendard Variable, Font Awesome 6
- **Web APIs**: Web Speech API (`SpeechSynthesis`), Web Audio API (`AudioContext`), Web Storage API (`localStorage`)
- **Hosting**: GitHub Pages

---

## 📁 디렉토리 구조

```plaintext
├── index.html            # 메인 웹페이지 구조 및 모달 (DB 설정 / 유튜브 / 타이머)
├── style.css             # 시니어 접근성, 고대비, 반응형 CSS 스타일
├── app.js                # 앱 메인 로직 (운동, 타이머, 음성 안내, 달력)
├── supabase.js           # Supabase 클라이언트 연동 및 Fallback 모듈
├── supabase_setup.sql    # Supabase 테이블 및 RLS 생성 SQL 쿼리
└── README.md             # 프로젝트 소개 및 설명서
```

---

## 💻 로컬 실행 방법

1. 저장소를 클론(Clone)합니다:
   ```bash
   git clone https://github.com/yoonjae-father/-.git
   ```
2. `index.html` 파일을 더블 클릭하여 브라우저에서 열면 바로 실행됩니다.
