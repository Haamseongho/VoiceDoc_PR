const slides = [
  {
    id: "intro",
    tab: "Intro",
    title: "회의를 기록하는 AI를 넘어 실행되도록 만드는 AI Agent",
    lead: "VoiceDoc은 실시간 전사, 녹음 파일 일괄 처리, 결정사항과 액션 아이템, 캘린더 연동, 회의 맥락 질의응답을 하나의 업무 흐름으로 연결합니다.",
    script:
      "대부분의 회의록 서비스는 회의를 텍스트로 남기는 데서 끝납니다. VoiceDoc은 회의 내용이 실제 담당자의 다음 업무까지 이어지도록 설계한 AI Agent입니다.",
    time: "예상 45초",
    className: "hero",
    html: `
      <div class="copy">
        <p class="eyebrow">VoiceDoc Enterprise AI Agent</p>
        <h1>회의를 기록하는 AI를 넘어<br />실행되도록 만드는 AI Agent</h1>
        <p class="lead">실시간 전사 · 녹음 파일 일괄 처리 · 결정사항/액션 아이템 · 캘린더 연동 · 회의 맥락 질의응답</p>
        <div class="actions">
          <a class="cta" href="#problem">발표 시작</a>
          <button class="ghost" type="button" id="planningReasonOpen">기획 배경 작성</button>
          <a class="ghost" href="#architecture">아키텍처 보기</a>
        </div>
      </div>
      <div class="panel">
        <p class="eyebrow">Closed-loop workflow</p>
        <div class="flow">
          ${["Audio", "Transcript", "Decision", "Action Item", "Calendar / Follow-up Chat"]
            .map((item, index) => `<div class="flow-step"><span>${index + 1}</span><strong>${item}</strong></div>`)
            .join("")}
        </div>
      </div>
    `,
  },
  {
    id: "problem",
    tab: "Why Now",
    title: "회의의 진짜 비용은 회의가 끝난 뒤 발생합니다",
    lead: "비구조화된 회의 데이터는 정리, 확인, 공유, 추적이라는 반복 업무로 바뀌고 조직 전체의 운영 비용을 만듭니다.",
    script:
      "문제는 회의 한 시간 자체가 아닙니다. 회의가 끝난 뒤 누군가는 녹음을 다시 듣고, 회의록을 만들고, 의사결정을 확인하고, 담당자에게 다시 물어봐야 합니다.",
    time: "예상 60초",
    html: `
      <div class="copy">
        <p class="eyebrow">Why Now</p>
        <h2>회의의 진짜 비용은 ‘회의 시간’이 아니라 후속 업무입니다</h2>
        <p class="lead">수기 정리, 결정사항 분산, 후속 조치 누락, 재검색 어려움, 감사 공백이 반복되며 표준화되지 않은 비용을 만듭니다.</p>
      </div>
      <div class="grid two">
        ${[
          ["수기 정리", "녹음 재청취와 회의록 초안 작성이 사람마다 다른 품질과 시간을 만듭니다."],
          ["결정사항 분산", "메신저, 메일, 개인 노트에 흩어져 재확인과 책임 공방이 생깁니다."],
          ["후속 조치 누락", "담당자와 기한이 불명확하면 일정 지연과 업무 누락으로 이어집니다."],
          ["감사·보안 공백", "누가 언제 무엇을 수정했는지 남지 않으면 내부통제 리스크가 커집니다."],
        ]
          .map(([h, p]) => `<article class="card"><h3>${h}</h3><p>${p}</p></article>`)
          .join("")}
      </div>
    `,
  },
  {
    id: "impact",
    tab: "Business Impact",
    title: "작성 시간을 줄이고 실행 누락을 낮춥니다",
    lead: "외부 공개 사례와 내부 PoC 수치를 분리하고, VoiceDoc의 효과는 회의 후속 업무 전체를 기준으로 측정합니다.",
    script:
      "절감 효과는 단순히 전사 속도가 아니라 회의 후속 업무 전체를 기준으로 봐야 합니다. 행정안전부의 공개 시범 사례는 1시간 분량 파일을 약 5분 내 회의록 형태로 제공할 수 있음을 보여줍니다. VoiceDoc은 이 외부 처리 사례를 참고하되, 실제 도입 효과는 자체 PoC 수치로 검증하겠습니다.",
    time: "예상 75초",
    html: `
      <div class="copy">
        <p class="eyebrow">Business Impact</p>
        <h2>외부 처리 사례와 VoiceDoc PoC 가정값을 분리해 보여줍니다</h2>
        <p class="lead">국내 공개 사례는 시장과 처리 가능성의 근거로, VoiceDoc의 절감 수치는 내부 PoC 실측값으로 별도 검증합니다.</p>
        <div class="grid two">
          <article class="metric"><span class="badge assumed">PoC 가정값</span><strong>85.2%</strong><p>회의당 후속 작업 절감률</p></article>
          <article class="metric"><span class="badge assumed">계산값</span><strong id="savingHours">176h</strong><p>월 80회 기준 예상 절감 시간</p></article>
        </div>
      </div>
      <div class="panel">
        <p class="eyebrow">Domestic Evidence</p>
        <div class="grid">
          <article class="card">
            <span class="badge external">정부 시범 운영</span>
            <h3>행정안전부 AI 자동회의록</h3>
            <p>1시간 분량 회의 영상·음성 파일을 약 5분 내 보고서 형태 회의록으로 제공한다고 공개했습니다. 이 수치는 VoiceDoc 성능이 아니라 배치 처리 가능성 근거입니다.</p>
          </article>
          <article class="card">
            <span class="badge assumed">PoC 가정값</span>
            <h3>회의당 후속 작업 155분 → 23분</h3>
            <p>작성·검수, 결정사항 재확인, 액션 아이템 배정·공유 시간을 합산해 후속 업무 전체의 개선폭을 측정합니다.</p>
          </article>
        </div>
        <div class="timeline compact-chart">
          ${[
            ["작성·검수", 120, 15],
            ["재확인", 20, 5],
            ["배정·공유", 15, 3],
          ]
            .map(
              ([label, before, after]) => `
              <div class="timeline-row"><strong>${label}</strong><div class="bar"><span class="${before <= 20 ? "bar-label-compact" : ""}" style="width:${Math.max(before / 1.3, 16)}%">AS-IS ${before}분</span></div></div>
              <div class="timeline-row"><span></span><div class="bar"><span style="width:${Math.max(after * 2.2, 15)}%; background:linear-gradient(90deg, #ffcc00, #ffb800); color:#545045;">VoiceDoc ${after}분</span></div></div>
            `
            )
            .join("")}
        </div>
      </div>
    `,
  },
  {
    id: "market",
    tab: "Market Proof",
    title: "AI 회의록은 더 이상 실험적인 기능이 아닙니다",
    lead: "금융권도 STT와 LLM을 결합해 회의 기록, 요약, 의사결정 관리에 적용하기 시작했습니다.",
    script:
      "시장에는 이미 회의 전사와 요약 서비스가 존재하고, 국내 금융권도 STT와 LLM을 결합한 회의록 도입을 시작했습니다. 핵심은 금융 환경에서 안전하고 지속적으로 운영하면서 실제 업무로 연결할 수 있느냐입니다.",
    time: "예상 60초",
    html: `
      <div class="copy">
        <p class="eyebrow">Market Proof</p>
        <h2>국내 금융권과 공공부문 모두 AI 회의록을 업무 환경으로 들여오고 있습니다</h2>
        <p class="lead">핵심은 AI 회의록을 만들 수 있느냐가 아니라, 안전하게 운영하고 실제 업무 흐름으로 연결할 수 있느냐입니다.</p>
      </div>
      <div class="grid two">
        ${[
          ["NH농협은행 ‘NH AI회의록’", "STT로 회의 내용을 텍스트로 전환하고 LLM으로 핵심 내용과 주요 의사결정 사항을 요약·공유합니다.", "국내 금융권 도입"],
          ["행정안전부 AI 자동회의록", "녹화·녹음 파일 업로드 후 문자 추출, 참석자·시간순 정리, 보고서 형태 회의록 제공을 시범 운영했습니다.", "국내 공공부문"],
          ["공공용 네이버웍스·클로바노트", "발화자 구분, 요약, 다음 할 일 추천과 행정망 기반 보안형 사용을 강조합니다.", "공공 보안형 협업"],
          ["VoiceDoc의 위치", "전사·요약 기준선에 실시간 STT, 배치 업로드, 액션 아이템, 캘린더, Meeting Chat, 감사 이력을 더합니다.", "전략 포지션"],
        ]
          .map(([h, p, b]) => `<article class="card"><span class="badge external">${b}</span><h3>${h}</h3><p>${p}</p></article>`)
          .join("")}
      </div>
    `,
  },
  {
    id: "difference",
    tab: "Why VoiceDoc",
    title: "기록을 업무 실행으로 연결하는 Dual Engine",
    lead: "실시간 회의와 녹음 파일 기반 사후 회의를 모두 수용하고 결과를 액션 아이템, 캘린더, 회의 맥락 Chat으로 확장합니다.",
    script:
      "VoiceDoc은 실시간 회의와 녹음 파일 기반의 사후 회의를 모두 수용합니다. 회의 결과를 요약문으로 끝내지 않고 담당자와 기한이 있는 액션 아이템으로 확장합니다.",
    time: "예상 75초",
    className: "single",
    html: `
      <div class="copy">
        <p class="eyebrow">Why VoiceDoc</p>
        <h2>일반 회의록 서비스를 넘어 업무 객체를 만듭니다</h2>
      </div>
      <div class="matrix panel">
        ${[
          ["기능", "일반 회의록 서비스", "VoiceDoc Enterprise AI Agent"],
          ["음성 → 텍스트", "가능", "<b>가능</b>"],
          ["회의 중 실시간 전사", "서비스별 상이", "<b>지원</b>"],
          ["녹음 파일 일괄 변환", "서비스별 상이", "<b>지원</b>"],
          ["결정사항·이슈 구조화", "제한적", "<b>근거 발화 단위로 구조화</b>"],
          ["액션 아이템", "기본 추출 또는 수동 관리", "<b>담당자·기한·상태가 있는 업무 객체</b>"],
          ["회의록 후속 질의", "일부 요약 재생성", "<b>회의 맥락 기반 Chat과 근거 링크</b>"],
          ["엔터프라이즈 운영", "서비스별 상이", "<b>상태관리·Audit Trail·재시도·권한 통제</b>"],
        ]
          .map((row) => `<div class="matrix-row">${row.map((cell) => `<div>${cell}</div>`).join("")}</div>`)
          .join("")}
      </div>
    `,
  },
  {
    id: "meeting-chat",
    tab: "Meeting Chat",
    title: "배치테스트 회의록에서 담당자와 기한을 바로 확인합니다",
    lead: "VoiceDoc은 배치테스트 회의록에 흩어진 교육 준비 업무를 질문 한 번으로 찾아 담당자, 기한, 근거까지 함께 보여줍니다.",
    script:
      "실제 배치테스트 사례입니다. 사용자가 실습 환경이나 커리큘럼 담당자를 질문하면, VoiceDoc은 담당자만 답하는 것이 아니라 해야 할 일과 기한, 답변의 근거가 된 회의록 문장까지 함께 연결합니다.",
    time: "예상 70초",
    html: `
      <div class="copy">
        <p class="eyebrow">Meeting Chat · Test Case 01</p>
        <h2>“누가, 언제까지?”를 회의록에 바로 질문합니다</h2>
        <p class="lead">긴 회의록을 다시 읽지 않아도 교육 준비 업무의 담당자와 마감일을 근거 문장과 함께 확인합니다.</p>
        <div class="meeting-context">
          <span class="meeting-state">● 완료</span>
          <div>
            <strong>배치테스트</strong>
            <small>MTG-20260628-011 · 2026.06.28 23:23</small>
          </div>
        </div>
        <div class="grid two chat-points">
          <article class="card"><h3>담당자 즉시 확인</h3><p>역할과 해야 할 일을 한 답변 안에서 구조화합니다.</p></article>
          <article class="card"><h3>회의록 근거 연결</h3><p>답변마다 원문 요약 근거를 함께 제시합니다.</p></article>
        </div>
      </div>
      <div class="panel chat-panel">
        <div class="test-case-head">
          <div><span>VD</span><strong>회의록 챗봇</strong></div>
          <small>배치테스트 · MTG-20260628-011</small>
        </div>
        <div class="chat-window" aria-label="회의록 채팅 예시">
          <div class="chat-bubble user">실습 환경 준비 담당자는?</div>
          <div class="chat-bubble agent">
            <strong>실습 담당자입니다.</strong>
            2026년 7월 31일까지 실습 환경 구성 방식, 필요한 계정 및 권한, 사전 준비 사항을 정리합니다.
            <span>근거 · minutes / 실습 환경 구성 방식·계정·권한 정리</span>
          </div>
          <div class="chat-bubble user">커리큘럼 목차 초안 작성 담당자는?</div>
          <div class="chat-bubble agent compact">
            <strong>커리큘럼 담당자입니다.</strong>
            2026년 7월 24일까지 UDEMY 과정을 선정하고 KB 맞춤형 교육 목차 초안을 작성합니다.
            <span>근거 · minutes / UDEMY 과정 선정·KB 맞춤형 목차 초안</span>
          </div>
        </div>
        <div class="suggestion-row" aria-label="추천 질문">
          <span>추천 질문</span>
          <span class="suggestion-chip">운영 방식 검토 담당자는?</span>
          <span class="suggestion-chip">10월 2일 최종 확정 사항은?</span>
        </div>
      </div>
    `,
  },
  {
    id: "mind-node",
    tab: "Mind-node",
    title: "회의록을 열기 전에 전체 흐름을 먼저 확인합니다",
    lead: "Meeting Chat으로 세부 내용을 검증하기 전에, Mind-node 뷰에서 회의의 안건, 결정사항, 확인 필요사항, 후속 조치를 한눈에 파악할 수 있습니다.",
    script:
      "회의록 전문을 처음부터 읽지 않아도 전체 회의가 어떤 흐름으로 진행됐는지 먼저 확인할 수 있습니다. VoiceDoc은 회의 내용을 Mind-node 형태로 구조화해 핵심 안건, 결정사항, 확인 필요사항, 액션 아이템을 연결해서 보여줍니다. 사용자는 이 지도를 보고 궁금한 지점을 Meeting Chat으로 바로 검증할 수 있습니다.",
    time: "예상 60초",
    className: "single mind-node-slide",
    html: `
      <div class="copy">
        <p class="eyebrow">Mind-node Preview</p>
        <h2>회의 전체 구조를 Mind-node로 미리 체크합니다</h2>
        <p class="lead">회의록을 열어 긴 문서를 읽기 전에, 어떤 안건이 어떤 결정과 후속 조치로 이어졌는지 시각적으로 검토합니다.</p>
      </div>
      <div class="mind-map panel" aria-label="회의 흐름 Mind-node 예시">
        <div class="mind-center">
          <span>Meeting</span>
          <strong>서비스 개선 정기 회의</strong>
          <small>2026-07-01 · Product / Design / QA</small>
        </div>
        <div class="mind-branch agenda">
          <span class="mind-label">Agenda</span>
          <h3>사용자 피드백 검토</h3>
          <p>최근 회의에서 접수된 개선 의견과 우선 검토할 화면 흐름을 정리했습니다.</p>
        </div>
        <div class="mind-branch decision">
          <span class="mind-label">Decision</span>
          <h3>우선순위 기준 확정</h3>
          <p>사용 빈도, 수정 범위, 고객 영향도를 기준으로 개선 항목을 분류하기로 했습니다.</p>
        </div>
        <div class="mind-branch risk">
          <span class="mind-label">Check Point</span>
          <h3>추가 확인 필요사항</h3>
          <p>담당 부서별 검토 범위와 다음 회의 전까지 필요한 자료를 확인 항목으로 남겼습니다.</p>
        </div>
        <div class="mind-branch action">
          <span class="mind-label">Action Item</span>
          <h3>담당자·기한 자동 정리</h3>
          <p>김OO · 2026-07-02 · 개선 항목 목록 정리와 검토 결과 공유가 후속 조치로 추출됩니다.</p>
        </div>
        <div class="mind-branch verify">
          <span class="mind-label">Verify with Chat</span>
          <h3>근거 발화로 검증</h3>
          <p>각 노드를 클릭하면 관련 발화 시점과 Meeting Chat 질의로 이어지는 구조입니다.</p>
        </div>
      </div>
      <div class="mind-summary">
        <article class="card"><h3>빠른 스캔</h3><p>회의록 전문을 열기 전에도 주요 흐름과 쟁점을 먼저 파악합니다.</p></article>
        <article class="card"><h3>맥락 검증</h3><p>Mind-node에서 발견한 노드를 Meeting Chat으로 질문해 근거를 확인합니다.</p></article>
        <article class="card"><h3>실행 연결</h3><p>결정사항과 액션 아이템이 담당자, 기한, 상태로 이어지는지 확인합니다.</p></article>
      </div>
    `,
  },
  {
    id: "closed-loop",
    tab: "Closed-loop",
    title: "회의에서 추출된 N개의 후속 조치를 실행 일정으로 전환합니다",
    lead: "회의에서 합의한 교육 준비 항목을 담당자와 기한이 있는 업무 객체로 구조화해 누락 없이 추적합니다.",
    script:
      "회의마다 내용에 따라 N개의 후속 조치가 추출됩니다. 배치테스트 사례에서는 7월 참여 의사 확인부터 10월 정식 운영과 COP 활동 계획 확정까지, 각 항목을 담당자와 기한이 있는 실행 일정으로 연결합니다.",
    time: "예상 60초",
    className: "single closed-loop-slide",
    html: `
      <div class="copy">
        <p class="eyebrow">Closed-loop · Test Case 02</p>
        <h2>회의가 끝난 순간, N개의 후속 조치가 시작됩니다</h2>
        <p class="lead">회의마다 추출되는 후속 조치의 수는 달라집니다. 아래는 배치테스트 회의록에서 추출한 교육 준비 업무 예시입니다.</p>
      </div>
      <div class="panel followup-board">
        <div class="followup-head">
          <div>
            <span class="meeting-state">● 완료</span>
            <strong>배치테스트</strong>
            <small>MTG-20260628-011</small>
          </div>
          <span class="followup-count">후속 조치 <b>N</b></span>
        </div>
        <div class="followup-list">
          ${[
            ["교육 참여 의사 및 가능 시간대 공유", "현 회의 참석자 4명", "2026-07-10"],
            ["온라인·오프라인 운영 장단점 및 추천안 정리", "교육 담당자", "2026-07-17"],
            ["UDEMY 과정 선정 및 KB 맞춤형 목차 초안 작성", "커리큘럼 담당자", "2026-07-24"],
            ["실습 환경 구성 방식·계정·권한·사전 준비 사항 정리", "실습 담당자", "2026-07-31"],
            ["교육 운영 방식 및 최종 참여자 명단 확정, 교육 준비 시작", "담당자 미정", "2026-08-04"],
            ["교육 세부 목차 및 실습 과제 운영 가이드 최종 검토", "담당자 미정", "2026-09-18"],
            ["교육 준비 결과 공유 및 정식 운영·COP 활동 계획 확정", "담당자 미정", "2026-10-02"],
          ]
            .map(
              ([title, owner, date], index) => `
                <article class="followup-item">
                  <span class="followup-check" aria-hidden="true">${index + 1}</span>
                  <div>
                    <h3>${title}</h3>
                    <p><b>${owner}</b><span>기한 ${date}</span></p>
                  </div>
                  <button
                    class="schedule-add"
                    type="button"
                    data-calendar-open
                    data-action-id="batch-followup-${index + 1}"
                    data-action-title="${title}"
                    data-action-owner="${owner}"
                    data-action-date="${date}"
                  >+ 일정 추가</button>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="followup-summary">
          <span><b>담당자 지정</b> 항목 추적</span>
          <span><b>담당자 미정</b> 항목 확인</span>
          <span><b>2026-10-02</b> 최종 마감</span>
        </div>
        <p class="followup-note">※ 추출된 후속 조치가 없는 회의는 캘린더 연동을 제공하지 않습니다.</p>
      </div>
    `,
  },
  {
    id: "architecture",
    tab: "Architecture",
    title: "실시간성과 안정성을 함께 설계했습니다",
    lead: "실시간성은 사용자 경험을 위해, 비동기 Worker는 안정적인 대용량 처리를 위해 분리합니다.",
    script:
      "실시간 전사와 대용량 파일 처리를 하나의 요청 흐름으로 억지로 묶으면 경험과 안정성 모두 나빠질 수 있습니다. VoiceDoc은 즉시성과 재시도 가능한 Worker 파이프라인을 분리했습니다.",
    time: "예상 90초",
    className: "single architecture-slide",
    html: `
      <div class="copy">
        <p class="eyebrow">Architecture</p>
        <h2>Live Frontend와 Worker Pipeline의 Dual Engine</h2>
        <div class="actions compact-actions">
          <button class="ghost" type="button" data-arch-modal="tech">기술 아키텍처 보기</button>
          <button class="ghost" type="button" data-arch-modal="business">비즈니스 플로우 보기</button>
        </div>
      </div>
      <div class="architecture">
        <section class="arch-col"><h3>Client</h3><div class="arch-node">Flutter App</div><div class="arch-node">iOS / AOS 구현</div><div class="arch-node">실시간 마이크 입력</div><div class="arch-node">녹음 파일 업로드</div></section>
        <section class="arch-col"><h3>Ingestion</h3><div class="arch-node">WebSocket / API</div><div class="arch-node">Object Storage</div></section>
        <section class="arch-col"><h3>Processing</h3><div class="arch-node">RDS: Meeting / Segment / Status</div><div class="arch-node">Queue or Polling Worker</div><div class="arch-node">STT → Segment Chunk</div><div class="arch-node">전처리 → LangGraph 사실 추출</div></section>
        <section class="arch-col"><h3>Output</h3><div class="arch-node">Transcript</div><div class="arch-node">Decision / Action Item</div><div class="arch-node">Calendar Connector</div><div class="arch-node">Meeting Chat / Audit Trail</div></section>
      </div>
      <div class="panel status-panel">
        <p class="eyebrow">Status Model</p>
        <div class="status-flow" aria-label="처리 상태 흐름">
          ${["READY / QUEUED", "UPLOADED / STREAMING", "TRANSCRIBING", "SUMMARIZING", "COMPLETED", "FAILED"]
            .map(
              (s, i, list) => `
                <div class="status-step ${i === 4 ? "complete" : ""} ${i === 5 ? "failed" : ""}">
                  <b>${i + 1}</b>
                  <span>${s}</span>
                  <small>${i === 5 ? "Retry" : i === 4 ? "Done" : "Processing"}</small>
                </div>
                ${i < list.length - 1 ? '<span class="status-arrow" aria-hidden="true">→</span>' : '<span class="status-arrow retry" aria-hidden="true">↺</span>'}
              `
            )
            .join("")}
        </div>
      </div>
    `,
  },
  {
    id: "governance",
    tab: "Agent Pipeline",
    title: "Agent 파이프라인은 빠르게 처리하고 안전하게 복구되어야 합니다",
    lead: "VoiceDoc은 실시간 입력과 대용량 파일 처리를 분리하고, 각 단계의 상태를 저장해 재시도 가능한 구조로 회의 데이터를 업무 객체로 전환합니다.",
    script:
      "이 화면에서는 VoiceDoc의 데이터가 어떤 구조로 처리되는지 설명합니다. 입력은 실시간 스트림과 파일 업로드로 들어오고, 원본과 세그먼트를 먼저 저장한 뒤 Worker가 전사, 사실 추출, 요약, 액션 아이템 생성을 비동기로 처리합니다. 그래서 사용자는 빠르게 진행 상태를 확인할 수 있고, 실패한 단계만 다시 처리할 수 있어 전체 파이프라인이 효율적이고 안정적으로 동작합니다.",
    time: "예상 70초",
    className: "single pipeline-slide",
    html: `
      <div class="copy">
        <p class="eyebrow">Agent Pipeline</p>
        <h2>데이터를 단계별로 분리해 처리하고, 실패 지점만 복구합니다</h2>
        <p class="lead">실시간 응답이 필요한 경로와 무거운 AI 처리를 분리해 사용자 경험은 빠르게 유지하고, Worker Pipeline은 상태 기반으로 안정성을 확보합니다.</p>
      </div>
      <div class="pipeline-flow">
        ${[
          ["Input", "Live STT / Batch Upload", "음성 스트림과 녹음 파일을 동일한 회의 단위로 수집"],
          ["Persist", "Raw Audio / Segment", "원본과 발화 조각을 먼저 저장해 중간 실패에도 데이터 보존"],
          ["Worker", "STT · Chunk · Extract", "무거운 AI 처리는 비동기로 분리해 앱 응답성을 유지"],
          ["Agent", "Decision / Action Item", "결정사항, 이슈, 담당자, 기한을 구조화된 업무 객체로 생성"],
          ["Use", "Calendar / Meeting Chat", "캘린더 등록과 회의 맥락 질의응답으로 후속 실행 연결"],
        ]
          .map(
            ([step, title, desc], index, list) => `
              <article class="pipeline-node">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <strong>${step}</strong>
                <h3>${title}</h3>
                <p>${desc}</p>
              </article>
              ${index < list.length - 1 ? '<div class="pipeline-arrow" aria-hidden="true">→</div>' : ""}
            `
          )
          .join("")}
      </div>
      <div class="pipeline-outcomes">
        <article class="card"><span class="badge assumed">Efficiency</span><h3>대기 시간을 줄입니다</h3><p>사용자 화면은 상태 업데이트 중심으로 빠르게 반응하고, 전사·요약·추출은 Worker가 병렬/비동기로 처리합니다.</p></article>
        <article class="card"><span class="badge external">Stability</span><h3>실패 범위를 작게 만듭니다</h3><p>READY부터 COMPLETED/FAILED까지 상태를 저장하므로 전체 회의를 다시 처리하지 않고 실패 단계만 재시도할 수 있습니다.</p></article>
        <article class="card"><span class="badge assumed">Expected Effect</span><h3>회의 후속 실행률을 높입니다</h3><p>회의 데이터가 문서에서 끝나지 않고 액션 아이템, 캘린더, Meeting Chat으로 이어져 누락과 재확인 비용을 줄입니다.</p></article>
      </div>
    `,
  },
  {
    id: "roadmap",
    tab: "Q&A",
    title: "발표 Q&A에서 예상되는 핵심 질문",
    lead: "이전 질의에서 반복된 화자 분리 방식과 일반 AI 회의록 대비 차별점을 중심으로 답변을 정리했습니다.",
    script:
      "마지막으로 예상 질문 두 가지에 답변드리겠습니다. 첫째, 화자 분리는 음성 구간을 발화 단위로 나누고 STT 결과와 시간 정보를 묶어 참석자 라벨을 붙이는 방식으로 처리합니다. 완전 자동 식별이 어려운 경우에는 사용자 보정과 참석자 매핑을 통해 정확도를 높이는 구조입니다. 둘째, VoiceDoc의 차별점은 회의록 생성에서 끝나지 않고 결정사항, 액션 아이템, 캘린더, Meeting Chat, Mind-node까지 이어져 회의 내용을 실행 가능한 업무 흐름으로 바꾼다는 점입니다.",
    time: "예상 60초",
    className: "single qa-slide",
    html: `
      <div class="copy">
        <p class="eyebrow">Q&A</p>
        <h2>질문이 들어와도 답변 흐름이 흔들리지 않게 정리합니다</h2>
        <p class="lead">기술 구현 방식과 서비스 차별점을 분리해 설명하면, VoiceDoc이 단순 회의록이 아니라 업무 실행형 Agent라는 메시지가 선명해집니다.</p>
      </div>
      <div class="qa-grid">
        <article class="qa-card">
          <span class="badge assumed">Question 01</span>
          <h3>화자 분리는 어떻게 구분했나요?</h3>
          <p>음성 데이터를 발화 구간 단위로 나누고, STT 결과와 타임스탬프를 함께 저장해 참석자별 발화 흐름을 구성합니다.</p>
          <div class="qa-answer">
            <strong>답변 포인트</strong>
            <ul>
              <li>실시간 입력과 녹음 파일 모두 발화 단위 Segment로 분리합니다.</li>
              <li>각 Segment에는 시간, 텍스트, 임시 화자 라벨을 함께 저장합니다.</li>
              <li>회의 참석자 정보와 사용자 보정값을 매핑해 최종 화자명을 정리합니다.</li>
              <li>완전 자동 식별이 어려운 상황을 고려해 수정 가능한 구조로 설계했습니다.</li>
            </ul>
          </div>
        </article>
        <article class="qa-card">
          <span class="badge external">Question 02</span>
          <h3>다른 AI 회의록과 비교한 특장점은 무엇인가요?</h3>
          <p>VoiceDoc은 전사와 요약에서 끝나는 것이 아니라, 회의 내용을 검증하고 실행 가능한 업무 객체로 연결합니다.</p>
          <div class="qa-answer">
            <strong>답변 포인트</strong>
            <ul>
              <li>Meeting Chat으로 회의록 생성 후에도 근거 기반 질의가 가능합니다.</li>
              <li>Mind-node로 회의의 안건, 결정사항, 확인 필요사항을 먼저 스캔할 수 있습니다.</li>
              <li>Action Item은 담당자, 기한, 상태를 가진 업무 객체로 분리됩니다.</li>
              <li>Calendar 연결까지 이어져 회의 후속 실행 흐름을 닫는 구조입니다.</li>
            </ul>
          </div>
        </article>
      </div>
      <div class="qa-close panel">
        <h3>핵심 메시지</h3>
        <p>VoiceDoc은 회의를 기록하는 도구가 아니라, 회의 내용을 검증하고 실행으로 연결하는 AI Agent입니다.</p>
      </div>
    `,
  },
];

const els = {
  app: document.getElementById("app"),
  tabs: document.getElementById("tabs"),
  slides: document.getElementById("slides"),
  prev: document.getElementById("prevBtn"),
  next: document.getElementById("nextBtn"),
  counter: document.getElementById("counter"),
  mobileTitle: document.getElementById("mobileTitle"),
  progressFill: document.getElementById("progressFill"),
  presenterToggle: document.getElementById("presenterToggle"),
  presenterPanel: document.getElementById("presenterPanel"),
  presenterTitle: document.getElementById("presenterTitle"),
  presenterTime: document.getElementById("presenterTime"),
  presenterScript: document.getElementById("presenterScript"),
  nextPreview: document.getElementById("nextPreview"),
  sourceToggle: document.getElementById("sourceToggle"),
  sourceDrawer: document.getElementById("sourceDrawer"),
  sourceClose: document.getElementById("sourceClose"),
  reasonModal: document.getElementById("planningReasonModal"),
  reasonOpen: null,
  reasonClose: document.getElementById("planningReasonClose"),
  reasonCancel: document.getElementById("planningReasonCancel"),
  reasonBackdrop: document.querySelector(".reason-backdrop"),
  reasonSave: document.getElementById("planningReasonSave"),
  reasonText: document.getElementById("planningReasonText"),
  reasonStatus: document.getElementById("planningReasonStatus"),
  calendarModal: document.getElementById("calendarModal"),
  calendarClose: document.getElementById("calendarClose"),
  calendarCancel: document.getElementById("calendarCancel"),
  calendarBackdrop: document.querySelector(".calendar-backdrop"),
  calendarPicker: document.getElementById("calendarPicker"),
  calendarMonthLabel: document.getElementById("calendarMonthLabel"),
  calendarGrid: document.getElementById("calendarGrid"),
  calendarSelected: document.getElementById("calendarSelected"),
  calendarSave: document.getElementById("calendarSave"),
  calendarEvents: document.getElementById("calendarEvents"),
  calendarEventsTitle: document.getElementById("calendarEventsTitle"),
  calendarActionTitle: document.getElementById("calendarActionTitle"),
  calendarActionOwner: document.getElementById("calendarActionOwner"),
  calendarActionDue: document.getElementById("calendarActionDue"),
  calendarActionStatus: document.getElementById("calendarActionStatus"),
  archModal: document.getElementById("architectureModal"),
  archClose: document.getElementById("architectureClose"),
  archBackdrop: document.querySelector(".architecture-backdrop"),
  archTitle: document.getElementById("architectureModalTitle"),
  archCaption: document.getElementById("architectureModalCaption"),
  archImage: document.getElementById("architectureImage"),
  blackout: document.getElementById("blackout"),
};

let activeIndex = 0;
let lastIndex = 0;
let touchStartX = 0;
let touchStartY = 0;
let selectedCalendarDate = "2026-07-02";

let currentActionItem = {
  id: "batch-followup-1",
  title: "교육 참여 의사 및 가능 시간대 공유",
  owner: "현 회의 참석자 4명",
  dueDate: "2026-07-10",
  status: "등록 전",
};

function render() {
  els.tabs.innerHTML = slides.map((slide) => `<a class="tab" href="#${slide.id}">${slide.tab}</a>`).join("");
  els.slides.innerHTML = slides
    .map(
      (slide) => `
        <section class="slide ${slide.className || ""}" id="${slide.id}" tabindex="-1" aria-labelledby="${slide.id}-title">
          ${slide.html.replace(/<h([12])/, `<h$1 id="${slide.id}-title"`)}
        </section>
      `
    )
    .join("");
}

function getIndexFromHash() {
  const id = window.location.hash.replace("#", "") || "intro";
  const found = slides.findIndex((slide) => slide.id === id);
  return found >= 0 ? found : 0;
}

function update(nextIndex = getIndexFromHash()) {
  lastIndex = activeIndex;
  activeIndex = Math.max(0, Math.min(slides.length - 1, nextIndex));
  const slideNodes = [...document.querySelectorAll(".slide")];
  const tabNodes = [...document.querySelectorAll(".tab")];

  slideNodes.forEach((node, index) => {
    node.classList.toggle("active", index === activeIndex);
    node.classList.toggle("exit-left", index < activeIndex);
  });
  tabNodes.forEach((node, index) => {
    node.classList.toggle("active", index === activeIndex);
    if (index === activeIndex) node.scrollIntoView({ inline: "center", block: "nearest" });
  });

  const slide = slides[activeIndex];
  const nextSlide = slides[Math.min(activeIndex + 1, slides.length - 1)];
  els.counter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  els.mobileTitle.textContent = slide.tab;
  els.progressFill.style.width = `${((activeIndex + 1) / slides.length) * 100}%`;
  els.prev.disabled = activeIndex === 0;
  els.next.textContent = activeIndex === slides.length - 1 ? "처음으로 ↑" : "다음 →";
  els.presenterTitle.textContent = slide.tab;
  els.presenterTime.textContent = slide.time;
  els.presenterScript.textContent = slide.script;
  els.nextPreview.textContent = activeIndex === slides.length - 1 ? "발표 마무리" : `${nextSlide.tab}: ${nextSlide.title}`;

  if (lastIndex !== activeIndex) {
    requestAnimationFrame(() => slideNodes[activeIndex]?.focus({ preventScroll: true }));
  }
}

function go(delta) {
  const target = activeIndex + delta;
  if (target >= slides.length) {
    window.location.hash = slides[0].id;
    return;
  }
  if (target < 0) return;
  window.location.hash = slides[target].id;
}

render();
update();

els.reasonOpen = document.getElementById("planningReasonOpen");

const defaultPlanningReason =
  "회의가 끝난 뒤에도 정리, 확인, 공유, 후속 조치가 반복되며 의사결정과 담당자 정보가 흩어지는 문제를 해결하기 위해 VoiceDoc을 기획했습니다. 단순 회의록 생성이 아니라 결정사항을 실행 가능한 업무로 연결하고, 이후에도 회의 맥락을 질문할 수 있는 AI Agent를 목표로 합니다.";

function openPlanningReason() {
  const saved = localStorage.getItem("voicedocPlanningReason");
  els.reasonText.value = saved || defaultPlanningReason;
  els.reasonStatus.textContent = saved ? "저장된 기획 배경을 불러왔습니다." : "초안 문구를 자유롭게 수정해보세요.";
  els.reasonModal.classList.add("open");
  els.reasonModal.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => els.reasonText.focus());
}

function closePlanningReason() {
  els.reasonModal.classList.remove("open");
  els.reasonModal.setAttribute("aria-hidden", "true");
}

function savePlanningReason() {
  localStorage.setItem("voicedocPlanningReason", els.reasonText.value.trim());
  els.reasonStatus.textContent = "저장했습니다. 이 브라우저에서 다시 열면 그대로 유지됩니다.";
}

function getCalendarEvents() {
  try {
    return JSON.parse(localStorage.getItem("voicedocCalendarEvents") || "[]");
  } catch {
    return [];
  }
}

function setCalendarEvents(events) {
  localStorage.setItem("voicedocCalendarEvents", JSON.stringify(events));
}

function renderCalendar() {
  const [yearText, monthText] = selectedCalendarDate.split("-");
  const year = Number(yearText);
  const month = Number(monthText) - 1;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const events = getCalendarEvents();
  const eventDates = new Set(events.map((event) => event.date));
  const cells = [];

  for (let i = 0; i < firstDay; i += 1) {
    cells.push(`<span class="calendar-day empty" aria-hidden="true"></span>`);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = `${yearText}-${monthText}-${String(day).padStart(2, "0")}`;
    const isSelected = date === selectedCalendarDate;
    const hasEvent = eventDates.has(date);
    cells.push(`
      <button class="calendar-day ${isSelected ? "selected" : ""} ${hasEvent ? "has-event" : ""}" type="button" data-calendar-date="${date}">
        <span>${day}</span>
        ${hasEvent ? "<small>등록됨</small>" : ""}
      </button>
    `);
  }

  els.calendarMonthLabel.textContent = `${year}년 ${month + 1}월`;
  els.calendarPicker.setAttribute("aria-label", `${year}년 ${month + 1}월 캘린더`);
  els.calendarGrid.innerHTML = cells.join("");
  els.calendarSelected.textContent = `${selectedCalendarDate}에 등록할 예정입니다.`;
  renderCalendarEvents();
}

function renderCalendarEvents() {
  const visibleMonth = selectedCalendarDate.slice(0, 7);
  const events = getCalendarEvents().filter((event) => event.date.startsWith(visibleMonth));
  const [year, month] = visibleMonth.split("-");
  els.calendarEventsTitle.textContent = `${year}년 ${Number(month)}월 등록 일정`;

  if (events.length === 0) {
    els.calendarEvents.innerHTML = `<p class="subcopy">이 달에 등록된 액션 아이템이 없습니다.</p>`;
    return;
  }

  els.calendarEvents.innerHTML = events
    .map(
      (event) => `
        <article class="calendar-event">
          <strong>${event.date}</strong>
          <span>${event.title}</span>
          <small>담당 ${event.owner} · ${event.status}</small>
        </article>
      `
    )
    .join("");
}

function openCalendar(trigger) {
  currentActionItem = {
    id: trigger?.dataset.actionId || currentActionItem.id,
    title: trigger?.dataset.actionTitle || currentActionItem.title,
    owner: trigger?.dataset.actionOwner || currentActionItem.owner,
    dueDate: trigger?.dataset.actionDate || currentActionItem.dueDate,
    status: "등록 전",
  };
  selectedCalendarDate = currentActionItem.dueDate;
  els.calendarActionTitle.textContent = currentActionItem.title;
  els.calendarActionOwner.textContent = currentActionItem.owner;
  els.calendarActionDue.textContent = currentActionItem.dueDate;
  els.calendarActionStatus.textContent = currentActionItem.status;
  renderCalendar();
  els.calendarModal.classList.add("open");
  els.calendarModal.setAttribute("aria-hidden", "false");
}

function closeCalendar() {
  els.calendarModal.classList.remove("open");
  els.calendarModal.setAttribute("aria-hidden", "true");
}

function registerCalendarEvent() {
  const events = getCalendarEvents();
  const nextEvent = {
    id: currentActionItem.id,
    date: selectedCalendarDate,
    title: currentActionItem.title,
    owner: currentActionItem.owner,
    status: "등록 완료",
  };
  const deduped = events.filter((event) => event.id !== nextEvent.id);
  setCalendarEvents([...deduped, nextEvent].sort((a, b) => a.date.localeCompare(b.date)));
  currentActionItem.status = "등록 완료";
  els.calendarActionStatus.textContent = currentActionItem.status;
  renderCalendar();
  els.calendarSelected.textContent = `${selectedCalendarDate}에 액션 아이템을 등록했습니다.`;
}

function openArchitectureModal(type) {
  const content = {
    tech: {
      title: "기술 아키텍처",
      caption: "Flutter App 기반 iOS/AOS 클라이언트에서 입력된 회의 데이터를 Segment Chunk로 전처리한 뒤 LangGraph에 전달합니다. Vector DB 유사도 검색 대신 근거 발화에 묶인 사실 기반 결정론적 데이터 추출을 목표로 합니다.",
      src: "assets/tech-architecture.svg",
    },
    business: {
      title: "비즈니스 플로우",
      caption: "회의 기록이 결정사항, 액션 아이템, 캘린더 등록, 상태 추적, 회의 맥락 재질의로 이어지는 업무 흐름입니다.",
      src: "assets/business-flow.svg",
    },
  }[type];

  if (!content) return;
  els.archTitle.textContent = content.title;
  els.archCaption.textContent = content.caption;
  els.archImage.src = content.src;
  els.archImage.alt = content.title;
  els.archModal.classList.add("open");
  els.archModal.setAttribute("aria-hidden", "false");
}

function closeArchitectureModal() {
  els.archModal.classList.remove("open");
  els.archModal.setAttribute("aria-hidden", "true");
}

window.addEventListener("hashchange", () => update());
els.prev.addEventListener("click", () => go(-1));
els.next.addEventListener("click", () => go(1));
document.addEventListener("click", (event) => {
  const calendarOpen = event.target.closest("[data-calendar-open]");
  const calendarDay = event.target.closest("[data-calendar-date]");
  const archOpen = event.target.closest("[data-arch-modal]");

  if (calendarOpen) {
    openCalendar(calendarOpen);
  }

  if (archOpen) {
    openArchitectureModal(archOpen.dataset.archModal);
  }

  if (calendarDay) {
    selectedCalendarDate = calendarDay.dataset.calendarDate;
    renderCalendar();
  }
});
els.reasonOpen.addEventListener("click", openPlanningReason);
els.reasonClose.addEventListener("click", closePlanningReason);
els.reasonCancel.addEventListener("click", closePlanningReason);
els.reasonBackdrop.addEventListener("click", closePlanningReason);
els.reasonSave.addEventListener("click", savePlanningReason);
els.calendarClose.addEventListener("click", closeCalendar);
els.calendarCancel.addEventListener("click", closeCalendar);
els.calendarBackdrop.addEventListener("click", closeCalendar);
els.calendarSave.addEventListener("click", registerCalendarEvent);
els.archClose.addEventListener("click", closeArchitectureModal);
els.archBackdrop.addEventListener("click", closeArchitectureModal);
els.presenterToggle.addEventListener("click", () => els.app.classList.toggle("presenter"));
els.sourceToggle.addEventListener("click", () => {
  els.sourceDrawer.classList.add("open");
  els.sourceDrawer.setAttribute("aria-hidden", "false");
});
els.sourceClose.addEventListener("click", () => {
  els.sourceDrawer.classList.remove("open");
  els.sourceDrawer.setAttribute("aria-hidden", "true");
});

window.addEventListener("keydown", (event) => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
  if (["ArrowRight", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    go(1);
  }
  if (["ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    go(-1);
  }
  if (event.key === "Home") window.location.hash = slides[0].id;
  if (event.key === "End") window.location.hash = slides[slides.length - 1].id;
  if (event.key.toLowerCase() === "s") els.app.classList.toggle("presenter");
  if (event.key.toLowerCase() === "b") els.blackout.classList.toggle("on");
  if (event.key.toLowerCase() === "d") window.location.hash = slides[0].id;
  if (event.key === "Escape") {
    els.sourceDrawer.classList.remove("open");
    closePlanningReason();
    closeCalendar();
    closeArchitectureModal();
    els.blackout.classList.remove("on");
  }
});

window.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  },
  { passive: true }
);

window.addEventListener(
  "touchend",
  (event) => {
    const dx = event.changedTouches[0].clientX - touchStartX;
    const dy = event.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      go(dx < 0 ? 1 : -1);
    }
  },
  { passive: true }
);
