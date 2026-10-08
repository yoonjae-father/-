/**
 * 든든한 걸음 - 어르신 낙상예방 운동 가이드
 * 카테고리: 상지 부분, 하지 부분, 전신운동 부분
 * 각 항목별 유튜브 영상 연동, 인터랙티브 타이머, 음성 안내(TTS), 자가진단, 출석 달력
 */

// =============================================================================
// 1. 카테고리별 운동 데이터 (상지 / 하지 / 전신 & 유튜브 연동)
// =============================================================================
const EXERCISE_LIST = [
  // --- [1. 상지(상체) 부분] ---
  {
    id: "ex_upper_1",
    category: "upper",
    categoryName: "상지 운동",
    title: "벽 짚고 팔굽혀펴기 (상지 지지력)",
    duration: 30,
    target: "가슴·어깨 근육 & 상지 지지 안정성",
    safety: "바닥이 미끄럽지 않은 곳에서 벽과 한 걸음 거리를 두고 서세요.",
    description: "벽에 양손을 어깨너비로 짚고 팔을 천천히 굽혔다 펴며 상체 근력을 기릅니다. 넘어질 때 손을 짚어 부상을 방지하는 지지력을 만듭니다.",
    steps: [
      "벽을 마주보고 한 걸음(약 50cm) 떨어져 바르게 섭니다.",
      "두 손을 어깨높이와 너비에 맞춰 벽에 댑니다.",
      "숨을 들이마시며 팔꿈치를 굽혀 가슴이 벽에 가까워지게 내려갑니다.",
      "숨을 내쉬며 손바닥으로 벽을 밀어 제자리로 돌아옵니다. (30초간 반복)"
    ],
    youtubeId: "sXh0_dYFwKw", // 벽 팔굽혀펴기 / 상체 근력
    youtubeUrl: "https://www.youtube.com/watch?v=sXh0_dYFwKw",
    svg: getSvgIllustration("wall_pushup")
  },
  {
    id: "ex_upper_2",
    category: "upper",
    categoryName: "상지 운동",
    title: "앉아서 양팔 벌려 가슴 펴기",
    duration: 30,
    target: "등 근육 강화 & 굽은 어깨·척추 교정",
    safety: "목이나 어깨에 과도한 힘이 들어가지 않도록 힘을 빼고 펴세요.",
    description: "의자에 앉아 양팔을 W자로 만들며 날개뼈를 모아 가슴을 활짝 폅니다. 굽은 등을 펴주어 신체 무게중심이 앞으로 쏠리는 것을 막아줍니다.",
    steps: [
      "의자에 등을 펴고 앉아 정면을 바라봅니다.",
      "양팔을 들어 팔꿈치를 살짝 접어 W 모양을 만듭니다.",
      "숨을 내쉬며 등 뒤 날개뼈를 가운데로 꽉 조이듯 팔을 뒤로 당깁니다.",
      "3초간 유지한 뒤 천천히 긴장을 풀고 이를 반복합니다."
    ],
    youtubeId: "2jXU9jZ0y9w", // 의자 상체 스트레칭
    youtubeUrl: "https://www.youtube.com/watch?v=2jXU9jZ0y9w",
    svg: getSvgIllustration("chest_open")
  },
  {
    id: "ex_upper_3",
    category: "upper",
    categoryName: "상지 운동",
    title: "어깨 으쓱으쓱 및 회전 스트레칭",
    duration: 30,
    target: "승모근 이완 & 어깨 관절 가동성",
    safety: "천천히 원을 그리듯 돌리고 통증이 없는 범위만 움직이세요.",
    description: "어깨를 귀 가까이 올렸다가 뒤로 큰 원을 그리며 내립니다. 상체 긴장을 풀어주고 돌발 충격 시 상체 유연성을 지켜줍니다.",
    steps: [
      "편안히 앉거나 선 자세로 양팔을 몸 옆에 내립니다.",
      "숨을 들이마시며 양 어깨를 귀 쪽으로 으쓱 올려 2초간 멈춥니다.",
      "숨을 내쉬며 어깨를 뒤쪽으로 큰 원을 그리듯 돌려 내립니다.",
      "앞에서 뒤로 5회, 뒤에서 앞으로 5회 부드럽게 반복합니다."
    ],
    youtubeId: "Gz1Rz8J4x28", // 어깨 관절 가동성
    youtubeUrl: "https://www.youtube.com/watch?v=Gz1Rz8J4x28",
    svg: getSvgIllustration("shoulder_roll")
  },
  {
    id: "ex_upper_4",
    category: "upper",
    categoryName: "상지 운동",
    title: "잼잼 악력 기르기 & 손목 돌리기",
    duration: 30,
    target: "손아귀 쥐는 힘(악력) & 손목 지지력",
    safety: "손가락 관절염이 심한 분은 너무 강하게 쥐지 마세요.",
    description: "양손을 힘껏 쥐었다 쫙 펴는 잼잼 동작과 손목 회전을 통해, 난간이나 손잡이를 꽉 잡을 수 있는 악력을 강화합니다.",
    steps: [
      "양손을 앞으로 뻗거나 편하게 둡니다.",
      "주먹을 꽉 쥐어 2초간 멈춘 뒤, 손가락을 최대한 활짝 폅니다.",
      "이를 5회 반복한 뒤, 양 손목을 안쪽과 바깥쪽으로 부드럽게 돌립니다.",
      "손끝까지 혈액순환이 돌고 손아귀 힘이 생깁니다."
    ],
    youtubeId: "w7n3e_6B-r4", // 시니어 손목 악력 운동
    youtubeUrl: "https://www.youtube.com/watch?v=w7n3e_6B-r4",
    svg: getSvgIllustration("wrist_grip")
  },

  // --- [2. 하지(하체) 부분] ---
  {
    id: "ex_lower_1",
    category: "lower",
    categoryName: "하지 운동",
    title: "의자 잡고 까치발 들기 (종아리 강화)",
    duration: 30,
    target: "종아리 근육 & 발목 안정성",
    safety: "흔들리지 않는 튼튼한 의자 등받이나 벽을 두 손으로 꼭 잡으세요.",
    description: "두 손으로 의자를 잡고 양발 뒤꿈치를 높이 들어 올렸다가 천천히 내립니다. 보행 시 바닥을 박차는 힘과 발목 지지력을 극대화합니다.",
    steps: [
      "의자 등받이를 잡고 양발을 골반 너비로 벌립니다.",
      "숨을 내쉬며 발뒤꿈치를 최대한 번쩍 들어 올립니다.",
      "가장 높은 지점에서 2초간 버팁니다.",
      "뒤꿈치가 쿵 떨어지지 않도록 천천히 바닥에 내려놓습니다."
    ],
    youtubeId: "kYJ9g1V-L4g", // 국민건강보험공단 낙상예방 하체운동
    youtubeUrl: "https://www.youtube.com/watch?v=kYJ9g1V-L4g",
    svg: getSvgIllustration("calf_raise")
  },
  {
    id: "ex_lower_2",
    category: "lower",
    categoryName: "하지 운동",
    title: "의자 앉았다 일어서기 (미니 스쿼트)",
    duration: 30,
    target: "허벅지 앞쪽(대퇴사두근) & 엉덩이 근육",
    safety: "무릎이 발끝보다 앞으로 많이 튀어나오지 않게 엉덩이를 뒤로 빼세요.",
    description: "의자에 앉았다가 다리 힘으로 바르게 일어서는 동작을 반복합니다. 일상에서 주저앉거나 다리에 힘이 풀리는 것을 막아줍니다.",
    steps: [
      "의자 바로 앞에 등을 돌리고 서서 발을 어깨너비로 벌립니다.",
      "양손을 가슴 앞에 모으거나 무릎 위에 가볍게 얹습니다.",
      "엉덩이를 뒤로 빼며 천천히 의자에 닿기 직전까지 앉습니다.",
      "발바닥 전체로 지면을 지긋이 밀며 힘차게 일어섭니다."
    ],
    youtubeId: "f3_J3b9iCgQ", // 어르신 하체 근력 스쿼트
    youtubeUrl: "https://www.youtube.com/watch?v=f3_J3b9iCgQ",
    svg: getSvgIllustration("sit_to_stand")
  },
  {
    id: "ex_lower_3",
    category: "lower",
    categoryName: "하지 운동",
    title: "의자 잡고 다리 옆으로 들기 (중둔근)",
    duration: 30,
    target: "엉덩이 옆 중둔근 (보행 좌우 균형의 핵심)",
    safety: "상체가 옆으로 기울지 않도록 몸통을 곧게 세우세요.",
    description: "의자를 잡고 선 채 한쪽 다리를 바깥쪽으로 약 30도 들어 올렸다 내립니다. 걸을 때 몸이 좌우로 휘청거리는 것을 막아주는 필수 운동입니다.",
    steps: [
      "의자 등받이를 잡고 정면을 향해 바르게 섭니다.",
      "오른쪽 다리를 옆으로 곧게 뻗어 올린 뒤 2초간 멈춥니다.",
      "천천히 제자리로 내린 후, 반대쪽 다리도 똑같이 진행합니다.",
      "좌우 번갈아 가며 30초 동안 리듬감 있게 반복합니다."
    ],
    youtubeId: "q3a_F66v8gQ", // 중둔근 강화 보행 안정
    youtubeUrl: "https://www.youtube.com/watch?v=q3a_F66v8gQ",
    svg: getSvgIllustration("side_leg_raise")
  },
  {
    id: "ex_lower_4",
    category: "lower",
    categoryName: "하지 운동",
    title: "발목 까딱까딱 펌프 운동",
    duration: 30,
    target: "전경골근(앞정강이) & 발목 유연성",
    safety: "의자에 등을 편안히 기대고 허리를 곧게 펴세요.",
    description: "발뒤꿈치를 대고 발가락 끝을 몸 쪽으로 바짝 당겼다가 다시 내립니다. 작은 문턱이나 돌부리에 발끝이 걸려 넘어지는 것을 방지합니다.",
    steps: [
      "의자에 바르게 앉아 양발을 바닥에 놓습니다.",
      "뒤꿈치는 바닥에 고정한 채 발가락 끝을 몸 쪽으로 바짝 당깁니다.",
      "다시 발끝을 바닥에 대고 뒤꿈치를 최대한 높이 들어 올립니다.",
      "마치 페달을 밟듯 부드럽게 30초간 반복합니다."
    ],
    youtubeId: "l8t6-H5yU-E", // 발목 펌프 운동
    youtubeUrl: "https://www.youtube.com/watch?v=l8t6-H5yU-E",
    svg: getSvgIllustration("ankle")
  },

  // --- [3. 전신 운동 부분] ---
  {
    id: "ex_full_1",
    category: "full",
    categoryName: "전신 & 균형",
    title: "한 발로 서서 버티기 (외발 서기)",
    duration: 30,
    target: "전신 균형 감각 & 뇌-신경 고유수용성 감각",
    safety: "넘어짐을 방지하기 위해 반드시 벽이나 의자 옆에서 손을 댈 준비를 하세요.",
    description: "한쪽 발을 살짝 들고 나머지 한 발로 서서 균형을 잡습니다. 낙상 위험을 평가하고 예방하는 가장 효과적인 전신 밸런스 훈련입니다.",
    steps: [
      "옆에 의자나 벽을 두고 안전하게 섭니다.",
      "오른쪽 발을 바닥에서 5~10cm 정도 들어 올립니다.",
      "시선은 앞쪽 벽 한 점을 바라보며 10초간 버팁니다.",
      "발을 바꾸어 왼쪽 발로도 10초간 균형을 유지합니다."
    ],
    youtubeId: "QvFjXyT1kM8", // 어르신 균형감각 한 발 서기
    youtubeUrl: "https://www.youtube.com/watch?v=QvFjXyT1kM8",
    svg: getSvgIllustration("one_leg_stand")
  },
  {
    id: "ex_full_2",
    category: "full",
    categoryName: "전신 & 균형",
    title: "발뒤꿈치-발가락 일자 걷기 (탠덤 보행)",
    duration: 30,
    target: "보행 밸런스 & 좁은 지지면 제어 능력",
    safety: "복도나 벽을 따라 걸으며 언제든 벽을 짚을 수 있게 하세요.",
    description: "앞발의 뒤꿈치를 뒷발의 발가락 끝에 붙여 일직선으로 줄타기하듯 천천히 걷습니다. 좁은 길이나 불규칙한 바닥에서도 균형을 유지합니다.",
    steps: [
      "벽 옆에 서서 오른발 앞쪽에 왼발을 일직선으로 놓습니다.",
      "뒤꿈치와 발가락이 맞닿게 서서 5초간 중심을 잡습니다.",
      "천천히 앞으로 한 발씩 발뒤꿈치를 대며 일자로 나아갑니다.",
      "좌우로 흔들리지 않도록 아랫배에 힘을 살짝 줍니다."
    ],
    youtubeId: "kYJ9g1V-L4g", // 탠덤 보행 훈련
    youtubeUrl: "https://www.youtube.com/watch?v=kYJ9g1V-L4g",
    svg: getSvgIllustration("tandem_stance")
  },
  {
    id: "ex_full_3",
    category: "full",
    categoryName: "전신 & 균형",
    title: "제자리 무릎 높여 천천히 걷기",
    duration: 30,
    target: "전신 협응력 & 유산소 심폐 지구력",
    safety: "어지러우면 의자 등받이를 손으로 살짝 잡고 진행하세요.",
    description: "제자리에서 양팔을 자연스럽게 흔들며 무릎을 골반 높이까지 천천히 들어 올려 걷습니다. 전신 혈액순환과 신체 조화 능력을 키웁니다.",
    steps: [
      "시선을 정면에 두고 가슴을 폅니다.",
      "오른쪽 무릎을 들어 올리며 반대쪽 팔을 앞으로 흔듭니다.",
      "발을 가볍게 딛고, 왼쪽 무릎을 들어 올리며 걷습니다.",
      "호흡을 규칙적으로 들이마시고 내쉬며 30초간 지속합니다."
    ],
    youtubeId: "f3_J3b9iCgQ", // 시니어 제자리 걷기
    youtubeUrl: "https://www.youtube.com/watch?v=f3_J3b9iCgQ",
    svg: getSvgIllustration("high_knee_walk")
  },
  {
    id: "ex_full_4",
    category: "full",
    categoryName: "전신 & 균형",
    title: "좌우 무게중심 이동하기 (체중 시프팅)",
    duration: 30,
    target: "돌발 비틀거림 회복력 & 전신 무게중심 제어",
    safety: "발바닥이 바닥에서 완전히 떨어지지 않도록 지긋이 밟으세요.",
    description: "양발을 어깨너비로 벌리고 체중을 오른쪽과 왼쪽으로 부드럽게 이동합니다. 몸이 한쪽으로 쏠렸을 때 스스로 자세를 바로잡는 감각을 익힙니다.",
    steps: [
      "양발을 어깨너비보다 조금 넓게 벌리고 손은 골반에 둡니다.",
      "무게중심을 오른쪽 다리로 천천히 옮겨 3초간 머뭅니다.",
      "다시 천천히 중앙을 지나 왼쪽 다리로 체중을 실어줍니다.",
      "좌우로 부드럽게 파도타듯 30초간 반복합니다."
    ],
    youtubeId: "QvFjXyT1kM8", // 무게중심 이동
    youtubeUrl: "https://www.youtube.com/watch?v=QvFjXyT1kM8",
    svg: getSvgIllustration("weight_shift")
  }
];

// =============================================================================
// 2. SVG 일러스트 생성기
// =============================================================================
function getSvgIllustration(type) {
  switch (type) {
    case "wall_pushup":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="160" y1="20" x2="160" y2="130" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/>
          <circle cx="90" cy="35" r="12" fill="#0284c7"/>
          <line x1="90" y1="47" x2="115" y2="90" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
          <line x1="115" y1="90" x2="80" y2="125" stroke="#0369a1" stroke-width="8" stroke-linecap="round"/>
          <line x1="100" y1="60" x2="155" y2="55" stroke="#d97706" stroke-width="6" stroke-linecap="round"/>
          <path d="M120 70 L140 70" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
          <polygon points="140,70 133,66 133,74" fill="#d97706"/>
          <text x="30" y="25" fill="#475569" font-size="12" font-weight="bold">벽 짚고 밀기</text>
        </svg>
      `;
    case "chest_open":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="35" y="55" width="25" height="65" rx="3" fill="#cbd5e1"/>
          <circle cx="65" cy="30" r="12" fill="#0284c7"/>
          <line x1="65" y1="42" x2="65" y2="85" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
          <line x1="65" y1="85" x2="95" y2="85" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
          <line x1="95" y1="85" x2="95" y2="120" stroke="#0369a1" stroke-width="8" stroke-linecap="round"/>
          <path d="M65 55 L95 45 L105 35" stroke="#d97706" stroke-width="6" stroke-linecap="round"/>
          <circle cx="105" cy="35" r="4" fill="#d97706"/>
          <text x="110" y="25" fill="#475569" font-size="12" font-weight="bold">가슴 활짝 펴기</text>
        </svg>
      `;
    case "shoulder_roll":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="30" r="14" fill="#0284c7"/>
          <line x1="100" y1="44" x2="100" y2="95" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
          <line x1="100" y1="95" x2="85" y2="130" stroke="#0369a1" stroke-width="8" stroke-linecap="round"/>
          <line x1="100" y1="95" x2="115" y2="130" stroke="#0369a1" stroke-width="8" stroke-linecap="round"/>
          <!-- 어깨 회전 궤적 -->
          <path d="M70 50 A 15 15 0 1 1 85 65" stroke="#d97706" stroke-width="3" fill="none" stroke-linecap="round"/>
          <polygon points="85,65 85,57 78,63" fill="#d97706"/>
          <text x="50" y="15" fill="#475569" font-size="12" font-weight="bold">어깨 으쓱 돌리기</text>
        </svg>
      `;
    case "wrist_grip":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="70" y="45" width="25" height="35" rx="6" fill="#0284c7"/>
          <circle cx="78" cy="35" r="4" fill="#0369a1"/>
          <circle cx="86" cy="33" r="4" fill="#0369a1"/>
          <circle cx="94" cy="35" r="4" fill="#0369a1"/>
          <path d="M60 60 H50" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
          <path d="M105 60 H115" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
          <text x="60" y="105" fill="#d97706" font-size="13" font-weight="bold">쥐었다 펴기 (잼잼)</text>
        </svg>
      `;
    case "calf_raise":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="135" y="40" width="8" height="85" rx="2" fill="#94a3b8"/>
          <circle cx="80" cy="25" r="12" fill="#16a34a"/>
          <line x1="80" y1="37" x2="80" y2="85" stroke="#16a34a" stroke-width="8" stroke-linecap="round"/>
          <line x1="80" y1="55" x2="135" y2="55" stroke="#16a34a" stroke-width="6" stroke-linecap="round"/>
          <line x1="80" y1="85" x2="80" y2="120" stroke="#15803d" stroke-width="8" stroke-linecap="round"/>
          <path d="M80 120 L90 120" stroke="#15803d" stroke-width="8" stroke-linecap="round"/>
          <path d="M100 120 V95" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
          <polygon points="100,90 95,98 105,98" fill="#d97706"/>
          <text x="40" y="15" fill="#475569" font-size="12" font-weight="bold">까치발 번쩍 들기</text>
        </svg>
      `;
    case "sit_to_stand":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="65" width="25" height="55" rx="2" fill="#cbd5e1"/>
          <circle cx="105" cy="30" r="12" fill="#16a34a"/>
          <line x1="105" y1="42" x2="105" y2="80" stroke="#16a34a" stroke-width="8" stroke-linecap="round"/>
          <polyline points="105,80 95,100 95,125" stroke="#15803d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M75 90 Q85 60 100 55" stroke="#d97706" stroke-width="3" stroke-linecap="round" stroke-dasharray="3 3"/>
          <polygon points="100,55 92,57 96,64" fill="#d97706"/>
          <text x="80" y="15" fill="#475569" font-size="12" font-weight="bold">앉았다 일어서기</text>
        </svg>
      `;
    case "side_leg_raise":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="140" y="40" width="8" height="85" rx="2" fill="#94a3b8"/>
          <circle cx="95" cy="25" r="12" fill="#16a34a"/>
          <line x1="95" y1="37" x2="95" y2="85" stroke="#16a34a" stroke-width="8" stroke-linecap="round"/>
          <line x1="95" y1="55" x2="140" y2="55" stroke="#16a34a" stroke-width="6" stroke-linecap="round"/>
          <line x1="95" y1="85" x2="95" y2="125" stroke="#15803d" stroke-width="8" stroke-linecap="round"/>
          <line x1="95" y1="85" x2="55" y2="110" stroke="#d97706" stroke-width="8" stroke-linecap="round"/>
          <text x="30" y="25" fill="#475569" font-size="12" font-weight="bold">옆으로 다리 들기</text>
        </svg>
      `;
    case "ankle":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="50" width="30" height="70" rx="3" fill="#cbd5e1"/>
          <circle cx="55" cy="30" r="12" fill="#16a34a"/>
          <path d="M55 42 V80 H95" stroke="#16a34a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="95" y1="80" x2="95" y2="115" stroke="#15803d" stroke-width="8" stroke-linecap="round"/>
          <line x1="95" y1="115" x2="125" y2="105" stroke="#d97706" stroke-width="7" stroke-linecap="round"/>
          <text x="100" y="25" fill="#475569" font-size="12" font-weight="bold">발목 위/아래 펌프</text>
        </svg>
      `;
    case "one_leg_stand":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="25" r="12" fill="#7e22ce"/>
          <line x1="100" y1="37" x2="100" y2="85" stroke="#7e22ce" stroke-width="8" stroke-linecap="round"/>
          <line x1="75" y1="55" x2="125" y2="55" stroke="#7e22ce" stroke-width="6" stroke-linecap="round"/>
          <line x1="100" y1="85" x2="100" y2="125" stroke="#6b21a8" stroke-width="8" stroke-linecap="round"/>
          <polyline points="100,85 125,95 125,110" stroke="#d97706" stroke-width="7" stroke-linecap="round"/>
          <line x1="60" y1="130" x2="140" y2="130" stroke="#94a3b8" stroke-width="2"/>
          <text x="65" y="15" fill="#475569" font-size="12" font-weight="bold">한 발로 서서 버티기</text>
        </svg>
      `;
    case "tandem_stance":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="25" r="12" fill="#7e22ce"/>
          <line x1="100" y1="37" x2="100" y2="85" stroke="#7e22ce" stroke-width="8" stroke-linecap="round"/>
          <ellipse cx="95" cy="120" rx="6" ry="12" fill="#6b21a8"/>
          <ellipse cx="108" cy="100" rx="6" ry="12" fill="#d97706"/>
          <line x1="101" y1="80" x2="101" y2="132" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3 3"/>
          <text x="60" y="15" fill="#475569" font-size="12" font-weight="bold">발뒤꿈치-발가락 일자</text>
        </svg>
      `;
    case "high_knee_walk":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="25" r="12" fill="#7e22ce"/>
          <line x1="100" y1="37" x2="100" y2="85" stroke="#7e22ce" stroke-width="8" stroke-linecap="round"/>
          <line x1="100" y1="85" x2="90" y2="125" stroke="#6b21a8" stroke-width="8" stroke-linecap="round"/>
          <polyline points="100,85 125,75 125,95" stroke="#d97706" stroke-width="8" stroke-linecap="round"/>
          <text x="50" y="15" fill="#475569" font-size="12" font-weight="bold">무릎 높여 제자리 걷기</text>
        </svg>
      `;
    case "weight_shift":
      return `
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="25" r="12" fill="#7e22ce"/>
          <line x1="100" y1="37" x2="100" y2="85" stroke="#7e22ce" stroke-width="8" stroke-linecap="round"/>
          <line x1="100" y1="85" x2="80" y2="125" stroke="#6b21a8" stroke-width="8" stroke-linecap="round"/>
          <line x1="100" y1="85" x2="120" y2="125" stroke="#6b21a8" stroke-width="8" stroke-linecap="round"/>
          <path d="M70 60 H130" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
          <polygon points="68,60 74,56 74,64" fill="#d97706"/>
          <polygon points="132,60 126,56 126,64" fill="#d97706"/>
          <text x="50" y="15" fill="#475569" font-size="12" font-weight="bold">좌우 무게중심 이동</text>
        </svg>
      `;
    default:
      return `<div style="font-size:3rem">🚶‍♂️</div>`;
  }
}

// =============================================================================
// 3. 자가진단 질문 데이터
// =============================================================================
const ASSESSMENT_QUESTIONS = [
  { id: "q1", question: "지난 1년 동안 넘어지거나 미끄러져 쓰러진 적이 있습니까?", scoreYes: 2, tip: "과거의 낙상 경험은 향후 낙상 위험을 3배 이상 높입니다." },
  { id: "q2", question: "걸을 때 불안하여 지팡이나 우산, 주변 물건을 자주 붙잡으십니까?", scoreYes: 1, tip: "보행 시 지지대 의존은 하지 근력 또는 평형감각 저하의 신호입니다." },
  { id: "q3", question: "손을 짚지 않고 의자에서 일어나는 것이 힘에 부치십니까?", scoreYes: 1, tip: "허벅지 대퇴사두근 힘이 약해지면 일상 동작 중 주저앉기 쉽습니다." },
  { id: "q4", question: "외출 시 인도 턱이나 작은 돌부리에 발이 걸려 비틀거린 적이 있습니까?", scoreYes: 1, tip: "발목을 들어 올리는 전경골근이 약해지면 발끝 걸림이 잦아집니다." },
  { id: "q5", question: "현재 정기적으로 복용 중인 약물이 4가지 이상입니까? (혈압약, 수면제 등)", scoreYes: 1, tip: "다제약물 복용은 기립성 저혈압이나 졸림으로 낙상 위험을 높입니다." }
];

// =============================================================================
// 4. 애플리케이션 상태 (State)
// =============================================================================
const state = {
  activeCategory: "all", // "all", "upper", "lower", "full"
  ttsEnabled: true,
  currentRoutineQueue: [],
  currentQueueIndex: 0,
  currentExercise: null,
  timerSecondsLeft: 0,
  timerTotalDuration: 30,
  timerInterval: null,
  isTimerPaused: false,
  isRestPhase: false,
  calendarCurrentDate: new Date(),
  records: []
};

// =============================================================================
// 5. 사운드 및 한국어 음성 안내 (TTS & Web Audio)
// =============================================================================
class SoundEngine {
  constructor() {
    this.audioCtx = null;
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.audioCtx = new AudioContext();
    }
  }

  playBeep(freq = 440, duration = 0.15) {
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("오디오 에러:", e);
    }
  }

  playCelebrationSound() {
    setTimeout(() => this.playBeep(523.25, 0.2), 0);
    setTimeout(() => this.playBeep(659.25, 0.2), 200);
    setTimeout(() => this.playBeep(783.99, 0.2), 400);
    setTimeout(() => this.playBeep(1046.50, 0.4), 600);
  }

  speak(text) {
    if (!state.ttsEnabled) return;
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    utterance.rate = 0.92; // 어르신을 위해 천천히 안정적인 속도
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const koVoice = voices.find(v => v.lang.startsWith("ko"));
    if (koVoice) utterance.voice = koVoice;

    window.speechSynthesis.speak(utterance);
  }

  stopVoice() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }
}

const sound = new SoundEngine();

// =============================================================================
// 6. 초기화 및 이벤트 연결
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadRecords();
  initAccessibility();
  initNavigation();
  initCategoryFilters();
  initYoutubeModal();
  initAssessment();
  renderCalendar();
  updateStatsDisplay();

  renderExerciseGrid();
});

// 상단 접근성 컨트롤
function initAccessibility() {
  const btnFontSm = document.getElementById("btnFontSm");
  const btnFontMd = document.getElementById("btnFontMd");
  const btnFontLg = document.getElementById("btnFontLg");
  const btnTtsToggle = document.getElementById("btnTtsToggle");
  const ttsStatusText = document.getElementById("ttsStatusText");

  const savedSize = localStorage.getItem("fall_prev_font_size") || "md";
  setFontSize(savedSize);

  btnFontSm.addEventListener("click", () => setFontSize("sm"));
  btnFontMd.addEventListener("click", () => setFontSize("md"));
  btnFontLg.addEventListener("click", () => setFontSize("lg"));

  function setFontSize(size) {
    document.body.className = `font-size-${size}`;
    [btnFontSm, btnFontMd, btnFontLg].forEach(btn => btn.classList.remove("active"));
    if (size === "sm") btnFontSm.classList.add("active");
    if (size === "md") btnFontMd.classList.add("active");
    if (size === "lg") btnFontLg.classList.add("active");
    localStorage.setItem("fall_prev_font_size", size);
  }

  btnTtsToggle.addEventListener("click", () => {
    state.ttsEnabled = !state.ttsEnabled;
    if (state.ttsEnabled) {
      btnTtsToggle.classList.add("active");
      ttsStatusText.textContent = "음성 켜짐";
      sound.speak("음성 안내가 켜졌습니다.");
    } else {
      btnTtsToggle.classList.remove("active");
      ttsStatusText.textContent = "음성 꺼짐";
      sound.stopVoice();
    }
  });
}

// 네비게이션 탭
function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetId = tab.dataset.tab;
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add("active");

      if (targetId === "tab-history") {
        renderCalendar();
        updateStatsDisplay();
      }
    });
  });
}

// =============================================================================
// 7. 카테고리 필터 (상지 / 하지 / 전신)
// =============================================================================
function initCategoryFilters() {
  const categoryBtns = document.querySelectorAll(".btn-category");
  categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeCategory = btn.dataset.category;
      renderExerciseGrid();
    });
  });

  // 전체 연속 재생 버튼
  document.getElementById("btnStartFilteredRoutine").addEventListener("click", () => {
    const list = getFilteredExercises();
    if (list.length > 0) {
      startExerciseRoutine(list, 0);
    }
  });
}

function getFilteredExercises() {
  if (state.activeCategory === "all") return EXERCISE_LIST;
  return EXERCISE_LIST.filter(item => item.category === state.activeCategory);
}

function renderExerciseGrid() {
  const filtered = getFilteredExercises();
  const grid = document.getElementById("exerciseGrid");
  grid.innerHTML = "";

  // 헤더 설명 문구 업데이트
  const titleElem = document.getElementById("currentCategoryTitle");
  const descElem = document.getElementById("currentCategoryDesc");

  if (state.activeCategory === "all") {
    titleElem.textContent = "전체 운동 목록 (총 12개 동작)";
    descElem.textContent = "상지 지지력, 하지 근력, 전신 평형감각을 고루 단련하는 낙상 예방 종합 코스입니다.";
  } else if (state.activeCategory === "upper") {
    titleElem.textContent = "상지(상체) 부분 운동 (총 4개 동작)";
    descElem.textContent = "낙상 시 손을 짚거나 난간을 붙잡을 수 있는 상체 지지력과 악력, 척추 유연성을 기릅니다.";
  } else if (state.activeCategory === "lower") {
    titleElem.textContent = "하지(하체) 부분 운동 (총 4개 동작)";
    descElem.textContent = "넘어짐 예방의 핵심! 종아리, 허벅지, 엉덩이 근육을 키우고 발목 안정성을 다집니다.";
  } else if (state.activeCategory === "full") {
    titleElem.textContent = "전신 & 균형 부분 운동 (총 4개 동작)";
    descElem.textContent = "돌발적인 휘청거림에도 쓰러지지 않도록 전신 협응력과 고유수용성 균형 감각을 훈련합니다.";
  }

  filtered.forEach(ex => {
    const card = document.createElement("div");
    card.className = "exercise-card";

    let badgeClass = "cat-upper";
    if (ex.category === "lower") badgeClass = "cat-lower";
    if (ex.category === "full") badgeClass = "cat-full";

    card.innerHTML = `
      <div class="card-header-visual">
        <span class="badge-category ${badgeClass}">${ex.categoryName}</span>
        <span class="badge-duration"><i class="fa-regular fa-clock"></i> ${ex.duration}초</span>
        ${ex.svg}
      </div>
      <div class="card-body">
        <h4>${ex.title}</h4>
        <span class="card-target-part">${ex.target}</span>
        <p class="card-description">${ex.description}</p>
        <div class="card-tip">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>${ex.safety}</span>
        </div>
        <div class="card-button-group">
          <button class="btn-card-youtube" data-id="${ex.id}">
            <i class="fa-brands fa-youtube"></i> 유튜브 영상 보기
          </button>
          <button class="btn-card-start" data-id="${ex.id}">
            <i class="fa-solid fa-stopwatch"></i> 타이머 시작
          </button>
        </div>
      </div>
    `;

    // 유튜브 버튼 클릭
    card.querySelector(".btn-card-youtube").addEventListener("click", () => {
      openYoutubeModal(ex);
    });

    // 타이머 단독 시작
    card.querySelector(".btn-card-start").addEventListener("click", () => {
      startExerciseRoutine([ex], 0);
    });

    grid.appendChild(card);
  });
}

// =============================================================================
// 8. 유튜브 모달 연동 (YouTube Embed & 외부 링크)
// =============================================================================
const youtubeModal = document.getElementById("youtubeModal");
const youtubeIframe = document.getElementById("youtubeIframe");
const btnCloseYoutubeModal = document.getElementById("btnCloseYoutubeModal");
const btnOpenExternalYoutube = document.getElementById("btnOpenExternalYoutube");
const btnStartThisFromVideo = document.getElementById("btnStartThisFromVideo");
let currentModalExercise = null;

function initYoutubeModal() {
  btnCloseYoutubeModal.addEventListener("click", closeYoutubeModal);

  btnStartThisFromVideo.addEventListener("click", () => {
    if (currentModalExercise) {
      closeYoutubeModal();
      startExerciseRoutine([currentModalExercise], 0);
    }
  });

  // 배경 클릭 시 닫기
  youtubeModal.addEventListener("click", (e) => {
    if (e.target === youtubeModal) closeYoutubeModal();
  });
}

function openYoutubeModal(exercise) {
  currentModalExercise = exercise;
  document.getElementById("youtubeModalTitle").textContent = exercise.title;
  document.getElementById("youtubeModalDesc").textContent = 
    `${exercise.categoryName} · ${exercise.target} - 영상을 보며 올바른 동작을 익혀보세요.`;

  // 유튜브 임베드 URL 설정
  // 낙상예방 관련 검색/영상 파라미터 적용
  youtubeIframe.src = `https://www.youtube-nocookie.com/embed/${exercise.youtubeId}?autoplay=1&rel=0`;
  
  // 외부 링크 버튼 설정
  btnOpenExternalYoutube.href = exercise.youtubeUrl;

  youtubeModal.classList.remove("hidden");
  sound.speak(`${exercise.title} 영상을 준비했습니다. 편안하게 시청해 보세요.`);
}

function closeYoutubeModal() {
  youtubeIframe.src = ""; // 영상 및 사운드 정지
  youtubeModal.classList.add("hidden");
}

// =============================================================================
// 9. 인터랙티브 운동 플레이어 모달 (타이머 & 음성 코칭)
// =============================================================================
const exerciseModal = document.getElementById("exerciseModal");
const completeModal = document.getElementById("completeModal");
const btnCloseModal = document.getElementById("btnCloseModal");
const btnPrevExercise = document.getElementById("btnPrevExercise");
const btnNextExercise = document.getElementById("btnNextExercise");
const btnToggleTimer = document.getElementById("btnToggleTimer");
const playPauseIcon = document.getElementById("playPauseIcon");
const playPauseText = document.getElementById("playPauseText");

btnCloseModal.addEventListener("click", closeExerciseModal);
btnPrevExercise.addEventListener("click", moveToPrevExercise);
btnNextExercise.addEventListener("click", moveToNextExercise);
btnToggleTimer.addEventListener("click", toggleTimerPause);

document.getElementById("btnFinishCelebration").addEventListener("click", () => {
  completeModal.classList.add("hidden");
  document.querySelector('.nav-tab[data-tab="tab-history"]').click();
});

function startExerciseRoutine(queue, startIndex = 0) {
  state.currentRoutineQueue = queue;
  state.currentQueueIndex = startIndex;
  state.isTimerPaused = false;
  state.isRestPhase = false;

  exerciseModal.classList.remove("hidden");
  loadCurrentExerciseInModal();
}

function loadCurrentExerciseInModal() {
  clearInterval(state.timerInterval);

  const currentEx = state.currentRoutineQueue[state.currentQueueIndex];
  state.currentExercise = currentEx;
  state.timerTotalDuration = currentEx.duration;
  state.timerSecondsLeft = currentEx.duration;
  state.isTimerPaused = false;
  state.isRestPhase = false;

  document.getElementById("playerRoutineStep").textContent = 
    `운동 ${state.currentQueueIndex + 1} / ${state.currentRoutineQueue.length}`;
  document.getElementById("playerExerciseTitle").textContent = currentEx.title;
  document.getElementById("playerExerciseTag").textContent = `${currentEx.categoryName} · ${currentEx.target}`;
  document.getElementById("playerSafetyTip").textContent = currentEx.safety;
  document.getElementById("playerVisual").innerHTML = currentEx.svg;

  const stepsList = document.getElementById("playerStepsList");
  stepsList.innerHTML = "";
  currentEx.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);
  });

  updatePlayPauseBtnUI(true);
  updateTimerUI();

  btnPrevExercise.disabled = (state.currentQueueIndex === 0);
  btnPrevExercise.style.opacity = state.currentQueueIndex === 0 ? "0.4" : "1";

  const voiceMsg = `${state.currentQueueIndex + 1}번째 동작, ${currentEx.title}입니다. ${currentEx.safety} 30초 동안 천천히 따라 해보세요.`;
  sound.speak(voiceMsg);
  document.getElementById("timerMessage").textContent = "천천히 호흡하며 동작을 시작해 보세요";

  setTimeout(() => {
    runTimerCountdown();
  }, 1000);
}

function runTimerCountdown() {
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    if (state.isTimerPaused) return;

    state.timerSecondsLeft--;
    updateTimerUI();

    if (state.timerSecondsLeft <= 3 && state.timerSecondsLeft > 0) {
      sound.playBeep(600, 0.1);
    }

    if (state.timerSecondsLeft === 10) {
      sound.speak("10초 남았습니다. 끝까지 호흡을 유지하세요.");
      document.getElementById("timerMessage").textContent = "잘하고 계십니다! 10초 남았습니다.";
    }

    if (state.timerSecondsLeft <= 0) {
      clearInterval(state.timerInterval);
      handleExerciseFinished();
    }
  }, 1000);
}

function updateTimerUI() {
  document.getElementById("timerSeconds").textContent = state.timerSecondsLeft;
  const circle = document.getElementById("timerProgressCircle");
  const fraction = state.timerSecondsLeft / state.timerTotalDuration;
  const offset = 440 - (fraction * 440);
  circle.style.strokeDashoffset = offset;
}

function handleExerciseFinished() {
  sound.playBeep(880, 0.4);

  if (state.currentQueueIndex < state.currentRoutineQueue.length - 1) {
    sound.speak("동작 완료! 5초간 가볍게 숨을 고른 후 다음 동작으로 넘어갑니다.");
    document.getElementById("timerMessage").textContent = "잠시 휴식 후 다음 동작으로 이어집니다.";

    state.isRestPhase = true;
    state.timerSecondsLeft = 5;
    state.timerTotalDuration = 5;
    updateTimerUI();

    state.timerInterval = setInterval(() => {
      state.timerSecondsLeft--;
      updateTimerUI();
      if (state.timerSecondsLeft <= 0) {
        clearInterval(state.timerInterval);
        state.currentQueueIndex++;
        loadCurrentExerciseInModal();
      }
    }, 1000);
  } else {
    finishAllRoutine();
  }
}

function finishAllRoutine() {
  closeExerciseModal();
  sound.playCelebrationSound();
  sound.speak("축하합니다! 오늘의 낙상 예방 운동을 모두 성공하셨습니다.");

  const totalExercises = state.currentRoutineQueue.length;
  const totalSeconds = state.currentRoutineQueue.reduce((acc, cur) => acc + cur.duration, 0);

  saveCompletedSession(totalExercises, totalSeconds);

  document.getElementById("completedCountText").textContent = `${totalExercises}개 동작 완료`;
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  document.getElementById("completedTimeText").textContent = 
    mins > 0 ? `${mins}분 ${secs}초` : `${secs}초`;

  completeModal.classList.remove("hidden");
}

function toggleTimerPause() {
  state.isTimerPaused = !state.isTimerPaused;
  updatePlayPauseBtnUI(!state.isTimerPaused);
  if (state.isTimerPaused) {
    sound.stopVoice();
    document.getElementById("timerMessage").textContent = "일시정지 중입니다.";
  } else {
    document.getElementById("timerMessage").textContent = "동작을 다시 진행합니다.";
  }
}

function updatePlayPauseBtnUI(isPlaying) {
  if (isPlaying) {
    playPauseIcon.className = "fa-solid fa-pause";
    playPauseText.textContent = "일시정지";
    btnToggleTimer.style.backgroundColor = "var(--primary)";
  } else {
    playPauseIcon.className = "fa-solid fa-play";
    playPauseText.textContent = "계속하기";
    btnToggleTimer.style.backgroundColor = "var(--accent)";
  }
}

function moveToPrevExercise() {
  if (state.currentQueueIndex > 0) {
    state.currentQueueIndex--;
    loadCurrentExerciseInModal();
  }
}

function moveToNextExercise() {
  if (state.currentQueueIndex < state.currentRoutineQueue.length - 1) {
    state.currentQueueIndex++;
    loadCurrentExerciseInModal();
  } else {
    finishAllRoutine();
  }
}

function closeExerciseModal() {
  clearInterval(state.timerInterval);
  sound.stopVoice();
  exerciseModal.classList.add("hidden");
}

// =============================================================================
// 10. 낙상 위험도 자가진단 로직
// =============================================================================
function initAssessment() {
  const form = document.getElementById("assessmentForm");
  form.innerHTML = "";

  ASSESSMENT_QUESTIONS.forEach((q, idx) => {
    const item = document.createElement("div");
    item.className = "assessment-item";
    item.innerHTML = `
      <div class="item-question">
        <span class="item-num">${idx + 1}</span>
        <div>
          <div>${q.question}</div>
          <small style="color:var(--text-light); font-weight:normal; margin-top:3px; display:block;">💡 ${q.tip}</small>
        </div>
      </div>
      <div class="item-options">
        <div class="radio-pill">
          <input type="radio" id="${q.id}_yes" name="${q.id}" value="yes">
          <label for="${q.id}_yes">예</label>
        </div>
        <div class="radio-pill">
          <input type="radio" id="${q.id}_no" name="${q.id}" value="no" checked>
          <label for="${q.id}_no">아니오</label>
        </div>
      </div>
    `;
    form.appendChild(item);
  });

  document.getElementById("btnCheckRisk").addEventListener("click", evaluateAssessment);
}

function evaluateAssessment(e) {
  e.preventDefault();
  let totalScore = 0;

  ASSESSMENT_QUESTIONS.forEach(q => {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    if (selected && selected.value === "yes") {
      totalScore += q.scoreYes;
    }
  });

  const resultContainer = document.getElementById("assessmentResult");
  const resultCard = document.getElementById("resultCard");
  const resultBadge = document.getElementById("resultBadge");
  const resultTitle = document.getElementById("resultTitle");
  const resultDesc = document.getElementById("resultDesc");
  const resultRec = document.getElementById("resultRec");
  const resultIcon = document.getElementById("resultIcon");

  resultContainer.classList.remove("hidden");
  resultCard.classList.remove("low", "medium", "high");

  if (totalScore <= 1) {
    resultCard.classList.add("low");
    resultIcon.innerHTML = `<i class="fa-solid fa-shield-check"></i>`;
    resultBadge.textContent = "안전 단계 (저위험)";
    resultTitle.textContent = "현재 낙상 위험도가 낮고 건강합니다!";
    resultDesc.textContent = "상체와 하체 기초 근력이 잘 유지되고 있습니다. 평소 상태를 지키기 위해 하지 및 전신 균형 운동을 매일 실천하세요.";
    resultRec.innerHTML = `
      <strong>💡 추천 실천 가이드:</strong>
      <ul>
        <li>주 3회 이상 <strong>하지 운동(까치발, 스쿼트)</strong>과 <strong>전신 균형 운동(외발서기)</strong>을 병행하세요.</li>
        <li>각 운동별 <strong>유튜브 영상</strong>을 보면서 자세의 정확성을 높여보세요.</li>
      </ul>
    `;
    sound.speak("자가진단 결과, 위험도가 낮고 건강한 상태입니다. 꾸준한 운동으로 건강을 유지하세요.");
  } else if (totalScore <= 3) {
    resultCard.classList.add("medium");
    resultIcon.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;
    resultBadge.textContent = "주의 단계 (중등도 위험)";
    resultTitle.textContent = "낙상 주의가 필요합니다. 상체 및 하체 지지력을 보강하세요.";
    resultDesc.textContent = "보행 시 다리 힘이 다소 부치거나 비틀거림이 발생할 수 있습니다. 벽과 의자를 잡고 안전하게 기초 근력을 다져보세요.";
    resultRec.innerHTML = `
      <strong>💡 추천 실천 가이드:</strong>
      <ul>
        <li>먼저 <strong>상지 운동(벽 짚고 팔굽혀펴기)</strong>과 <strong>하지 운동(의자 잡고 까치발)</strong>부터 2주간 매일 실천하세요.</li>
        <li>집 안 화장실 미끄럼 방지 매트와 조명을 점검하세요.</li>
      </ul>
    `;
    sound.speak("자가진단 결과, 주의 단계입니다. 벽과 의자를 잡고 안전한 동작부터 매일 10분씩 실천해 보세요.");
  } else {
    resultCard.classList.add("high");
    resultIcon.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    resultBadge.textContent = "경고 단계 (고위험)";
    resultTitle.textContent = "낙상 고위험군입니다. 보호자 동반과 세심한 주의가 필요합니다!";
    resultDesc.textContent = "일상생활 중 넘어질 위험이 높습니다. 혼자 서서 무리한 운동을 하지 마시고, 앉아서 하는 동작 위주로 시작하세요.";
    resultRec.innerHTML = `
      <strong>💡 추천 실천 가이드:</strong>
      <ul>
        <li><strong>의자에 앉아서 하는 상지·하지 운동</strong>만 안전하게 수행하세요.</li>
        <li>복용 중인 약물이 어지럼증을 유발하는지 의사나 약사와 상담하세요.</li>
        <li>외출 시 지팡이나 보행 보조기를 반드시 사용하세요.</li>
      </ul>
    `;
    sound.speak("자가진단 결과, 낙상 고위험 단계입니다. 반드시 의자에 앉아서 안전하게 운동하시고 보호자의 도움을 받으세요.");
  }

  resultContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// =============================================================================
// 11. 로컬스토리지 기록 및 출석 달력
// =============================================================================
function loadRecords() {
  try {
    const raw = localStorage.getItem("fall_prev_records");
    state.records = raw ? JSON.parse(raw) : [];
  } catch (e) {
    state.records = [];
  }
}

function saveCompletedSession(count, seconds) {
  const todayStr = getLocalDateString(new Date());
  const existing = state.records.find(r => r.date === todayStr);
  if (existing) {
    existing.exerciseCount += count;
    existing.seconds += seconds;
    existing.timestamp = new Date().toISOString();
  } else {
    state.records.push({
      date: todayStr,
      exerciseCount: count,
      seconds: seconds,
      timestamp: new Date().toISOString()
    });
  }

  localStorage.setItem("fall_prev_records", JSON.stringify(state.records));
  updateStatsDisplay();
  renderCalendar();
}

function getLocalDateString(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function updateStatsDisplay() {
  let streak = 0;
  const today = new Date();
  let checkDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const todayStr = getLocalDateString(checkDate);
  const doneToday = state.records.some(r => r.date === todayStr);
  if (!doneToday) checkDate.setDate(checkDate.getDate() - 1);

  while (true) {
    const str = getLocalDateString(checkDate);
    if (state.records.some(r => r.date === str)) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  document.getElementById("streakDays").innerHTML = `${streak}<small>일째</small>`;

  const thisMonthPrefix = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
  const thisMonthRecords = state.records.filter(r => r.date.startsWith(thisMonthPrefix));
  const monthlyCount = thisMonthRecords.reduce((acc, cur) => acc + (cur.exerciseCount > 0 ? 1 : 0), 0);
  document.getElementById("monthlyTotal").innerHTML = `${monthlyCount}<small>회</small>`;

  const totalSecs = state.records.reduce((acc, cur) => acc + (cur.seconds || 0), 0);
  const totalMins = Math.round(totalSecs / 60);
  document.getElementById("totalMinutes").innerHTML = `${totalMins}<small>분</small>`;

  const recentLogsList = document.getElementById("recentLogsList");
  recentLogsList.innerHTML = "";

  if (state.records.length === 0) {
    recentLogsList.innerHTML = `<li class="empty-log">아직 완료한 운동 기록이 없습니다. 오늘 첫 운동을 시작해보세요!</li>`;
  } else {
    const sorted = [...state.records].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
    sorted.forEach(item => {
      const li = document.createElement("li");
      const mins = Math.floor(item.seconds / 60);
      const secs = item.seconds % 60;
      const timeStr = mins > 0 ? `${mins}분 ${secs}초` : `${secs}초`;

      li.innerHTML = `
        <div>
          <strong>${item.date}</strong>
          <span style="color:var(--text-light); margin-left:8px;">${item.exerciseCount}개 동작 완료</span>
        </div>
        <span style="color:var(--primary-dark); font-weight:800;">${timeStr} 운동</span>
      `;
      recentLogsList.appendChild(li);
    });
  }
}

function renderCalendar() {
  const current = state.calendarCurrentDate;
  const year = current.getFullYear();
  const month = current.getMonth();

  document.getElementById("calYearMonth").textContent = `${year}년 ${month + 1}월`;

  const firstDayIndex = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  const container = document.getElementById("calendarDays");
  container.innerHTML = "";

  for (let i = 0; i < firstDayIndex; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "cal-day-cell empty";
    container.appendChild(emptyCell);
  }

  const todayStr = getLocalDateString(new Date());

  for (let d = 1; d <= lastDay; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const cell = document.createElement("div");
    cell.className = "cal-day-cell";
    cell.textContent = d;

    if (dateStr === todayStr) cell.classList.add("today");

    const isDone = state.records.some(r => r.date === dateStr);
    if (isDone) {
      cell.classList.add("completed");
      cell.title = "운동 완료!";
    }

    container.appendChild(cell);
  }
}

document.getElementById("btnPrevMonth").addEventListener("click", () => {
  state.calendarCurrentDate.setMonth(state.calendarCurrentDate.getMonth() - 1);
  renderCalendar();
});
document.getElementById("btnNextMonth").addEventListener("click", () => {
  state.calendarCurrentDate.setMonth(state.calendarCurrentDate.getMonth() + 1);
  renderCalendar();
});
document.getElementById("btnToday").addEventListener("click", () => {
  state.calendarCurrentDate = new Date();
  renderCalendar();
});
