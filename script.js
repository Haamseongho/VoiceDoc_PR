const slides = [
  {
    id: "intro",
    tab: "Intro",
    title: "회의를 기록하는 AI를 넘어, 실행되도록 만드는 AI Agent",
    lead: "VoiceDoc은 실시간 전사, 녹음 파일 일괄 처리, 결정사항과 액션 아이템, 캘린더 연동, 회의 맥락 질의응답을 하나의 업무 흐름으로 연결합니다.",
    script:
      "대부분의 회의록 서비스는 회의를 텍스트로 남기는 데서 끝납니다. VoiceDoc은 회의 내용이 실제 담당자의 다음 업무까지 이어지도록 설계한 AI Agent입니다.",
    time: "예상 45초",
    className: "hero",
    html: `
      <div class="copy">
        <p class="eyebrow">VoiceDoc Enterprise AI Agent</p>
        <h1>회의를 기록하는 AI를 넘어,<br />실행되도록 만드는 AI Agent</h1>
        <p class="lead">실시간 전사 · 녹음 파일 일괄 처리 · 결정사항/액션 아이템 · 캘린더 연동 · 회의 맥락 질의응답</p>
        <div class="actions">
          <a class="cta" href="#problem">발표 시작</a>
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
              <div class="timeline-row"><strong>${label}</strong><div class="bar"><span style="width:${before / 1.3}%">AS-IS ${before}분</span></div></div>
              <div class="timeline-row"><span></span><div class="bar"><span style="width:${Math.max(after * 2.2, 15)}%; background:linear-gradient(90deg, #ffd51a, #b88700); color:#2f2a25;">VoiceDoc ${after}분</span></div></div>
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
    title: "회의록은 생성된 뒤에도 질문할 수 있어야 합니다",
    lead: "VoiceDoc은 회의록 생성이 끝나면 회의 맥락 기반 채팅을 활성화해 결정 근거, 담당자, 일정, 누락된 후속 조치를 능동적으로 확인할 수 있습니다.",
    script:
      "타 AI Agent 서비스가 회의록 생성이나 요약에서 멈춘다면, VoiceDoc은 생성된 회의록을 다시 질문할 수 있는 업무 지식으로 전환합니다. 사용자는 누가 무엇을 하기로 했는지, 왜 그렇게 결정했는지, 다음 회의 전까지 무엇을 확인해야 하는지 회의 근거와 함께 확인할 수 있습니다.",
    time: "예상 70초",
    html: `
      <div class="copy">
        <p class="eyebrow">Meeting Chat</p>
        <h2>생성된 회의록을 다시 질문하는 능동형 체크 기능</h2>
        <p class="lead">회의록은 문서로 저장되는 순간 끝나는 것이 아니라, 이후 업무 의사결정과 실행 상태를 확인하는 인터페이스가 됩니다.</p>
        <div class="grid two">
          <article class="card"><h3>근거 기반 질의</h3><p>요약문만 다시 보여주지 않고 관련 발화, 참석자, 시점을 함께 연결해 답변합니다.</p></article>
          <article class="card"><h3>실행 항목 점검</h3><p>담당자, 기한, 상태를 기준으로 누락된 후속 조치와 다음 확인 대상을 찾아냅니다.</p></article>
        </div>
      </div>
      <div class="panel chat-panel">
        <p class="eyebrow">After Meeting Intelligence</p>
        <div class="chat-window" aria-label="회의록 채팅 예시">
          <div class="chat-bubble user">이번 회의에서 다음 배포 전까지 반드시 확인해야 할 항목은?</div>
          <div class="chat-bubble agent">
            <strong>확인 대상은 3개입니다.</strong>
            <ol>
              <li>iOS foreground 푸시 배너 노출 수정 — 담당 김OO, 기한 2026-07-02</li>
              <li>QA 체크리스트에 배너 케이스 추가 — 담당 박OO</li>
              <li>배포 전 마케팅 문구 최종 승인 — 담당 이OO</li>
            </ol>
            <span>근거: 32:14, 38:02, 44:51 발화</span>
          </div>
          <div class="chat-bubble user">왜 iOS 이슈가 우선순위 High로 분류됐나요?</div>
          <div class="chat-bubble agent compact">
            고객 알림 누락 가능성이 있고 다음 앱 배포 일정에 직접 영향을 주기 때문입니다. 관련 결정사항과 액션 아이템을 연결했습니다.
          </div>
        </div>
        <div class="grid three chat-benefits">
          <article class="card"><h3>Recall</h3><p>과거 회의 결정을 즉시 검색</p></article>
          <article class="card"><h3>Verify</h3><p>AI 답변의 발화 근거 확인</p></article>
          <article class="card"><h3>Follow-up</h3><p>담당자·기한 중심 실행 점검</p></article>
        </div>
      </div>
    `,
  },
  {
    id: "closed-loop",
    tab: "Closed-loop",
    title: "결정사항과 액션 아이템은 추적되어야 합니다",
    lead: "회의 데이터를 담당자, 기한, 우선순위, 상태가 있는 업무 카드로 전환해 실행 루프를 닫습니다.",
    script:
      "회의록이 남아도 업무가 실행되지 않으면 생산성 개선은 완성되지 않습니다. VoiceDoc은 회의 데이터를 액션 아이템이라는 업무 객체로 바꾸고 일정, 담당자, 상태까지 연결합니다.",
    time: "예상 60초",
    html: `
      <div class="copy">
        <p class="eyebrow">Closed-loop</p>
        <h2>회의록에서 실행 가능한 업무 카드로</h2>
        <p class="lead">Live STT와 Batch Upload로 입력 방식을 통합하고, Meeting Chat으로 시간이 지난 뒤에도 결정 근거를 다시 확인합니다.</p>
      </div>
      <div class="panel demo-card">
        <div class="action-item">
          <div class="action-head">
            <span class="pill">High</span>
            <span class="badge assumed">Action Item</span>
          </div>
          <h3>모바일 앱 푸시 배너 노출 수정</h3>
          <div class="mini-meta">
            <span>담당자 <b>김OO</b></span>
            <span>기한 <b>2026-07-02</b></span>
            <span>상태 <b>진행 중</b></span>
          </div>
          <p class="quote">“다음 배포 전까지 iOS foreground 배너를 확인하겠습니다.”</p>
          <div class="actions">
            <a class="cta" href="#closed-loop">캘린더 등록</a>
            <a class="ghost" href="#closed-loop">회의 근거 보기</a>
          </div>
        </div>
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
    className: "single",
    html: `
      <div class="copy">
        <p class="eyebrow">Architecture</p>
        <h2>Live Frontend와 Worker Pipeline의 Dual Engine</h2>
      </div>
      <div class="architecture">
        <section class="arch-col"><h3>Client</h3><div class="arch-node">Web / Mobile Web</div><div class="arch-node">실시간 마이크 입력</div><div class="arch-node">녹음 파일 업로드</div></section>
        <section class="arch-col"><h3>Ingestion</h3><div class="arch-node">WebSocket / API</div><div class="arch-node">Object Storage</div></section>
        <section class="arch-col"><h3>Processing</h3><div class="arch-node">RDS: Meeting / Segment / Status</div><div class="arch-node">Queue or Polling Worker</div><div class="arch-node">STT Engine</div><div class="arch-node">LLM Orchestrator / LangGraph</div></section>
        <section class="arch-col"><h3>Output</h3><div class="arch-node">Transcript</div><div class="arch-node">Decision / Action Item</div><div class="arch-node">Calendar Connector</div><div class="arch-node">Meeting Chat / Audit Trail</div></section>
      </div>
      <div class="panel">
        <p class="eyebrow">Status Model</p>
        <div class="status-list">
          ${["READY / QUEUED", "UPLOADED / STREAMING", "TRANSCRIBING", "SUMMARIZING", "COMPLETED", "FAILED"]
            .map((s, i) => `<div class="status-item"><b>${i + 1}</b><span>${s}</span><small>${i === 5 ? "재시도 또는 문의" : i === 4 ? "결과 확인 가능" : "처리 중"}</small></div>`)
            .join("")}
        </div>
      </div>
    `,
  },
  {
    id: "governance",
    tab: "Trust & KPI",
    title: "운영을 증명하는 AI 시스템이어야 합니다",
    lead: "엔터프라이즈 AI는 잘 요약하는가뿐 아니라 누가, 언제, 무엇을 처리했고 실패 시 어떻게 복구되는가를 증명해야 합니다.",
    script:
      "엔터프라이즈 환경에서는 요약 품질만으로 충분하지 않습니다. 열람 이력, 실패 사유, 액션 아이템 전환율까지 측정해야 서비스가 운영 시스템이 됩니다.",
    time: "예상 70초",
    html: `
      <div class="copy">
        <p class="eyebrow">Trust & KPI</p>
        <h2>상태 관리·감사 로그·지표로 운영을 증명합니다</h2>
        <p class="lead">접근권한, 보존정책, 감사 이력, 품질 피드백, 실패 복구, 근거 발화 링크가 엔터프라이즈 적합성을 만듭니다.</p>
      </div>
      <div class="kpi">
        ${[
          ["Adoption", "WAU, 회의 생성 수, 실시간 : 배치 비율"],
          ["Efficiency", "회의당 후속 작업 시간, 수정 소요 시간"],
          ["Quality", "전사 수정률, 액션 아이템 승인율"],
          ["Reliability", "처리 성공률, P95 처리 시간, 실패 원인 Top 5"],
        ]
          .map(([h, p]) => `<article class="card"><h3>${h}</h3><p>${p}</p></article>`)
          .join("")}
      </div>
    `,
  },
  {
    id: "roadmap",
    tab: "Rollout",
    title: "PoC에서 전사 확산까지 측정 가능하게 도입합니다",
    lead: "VoiceDoc은 회의를 자동 기록하는 서비스가 아니라, 회의의 결정을 실행 가능한 업무로 바꾸고 운영 지표로 축적하는 AI Agent입니다.",
    script:
      "PoC에서는 회의당 후속 시간과 정확성, 사용자 만족도를 측정합니다. Pilot에서는 캘린더 연동과 안정성을 검증하고, Scale 단계에서 표준 업무 프로세스로 확산합니다.",
    time: "예상 60초",
    className: "single",
    html: `
      <div class="copy">
        <p class="eyebrow">Rollout</p>
        <h2>PoC → Pilot → Scale</h2>
        <p class="lead">Baseline을 먼저 측정하고 조직 특성에 맞게 성공 기준을 재설정합니다.</p>
      </div>
      <div class="roadmap">
        <article class="card"><h3>PoC · 4~6주</h3><p>회의가 잦은 1~2개 조직에서 회의당 후속 시간, 정확성, 사용자 만족도를 검증합니다.</p></article>
        <article class="card"><h3>Pilot · 2~3개월</h3><p>유관 부서로 확대하고 액션 아이템 전환율, 캘린더 연동, 보안 검토를 확인합니다.</p></article>
        <article class="card"><h3>Scale · 분기 단위</h3><p>전사 또는 핵심 업무군에 확산하고 절감 비용, 준수율, 표준 업무 프로세스 정착을 측정합니다.</p></article>
      </div>
      <div class="panel">
        <h3>최종 결론</h3>
        <p class="lead">VoiceDoc은 회의의 결정을 실행 가능한 업무로 바꾸고, 그 결과를 다시 조직의 지식과 운영 지표로 축적하는 AI Agent입니다.</p>
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
  blackout: document.getElementById("blackout"),
};

let activeIndex = 0;
let lastIndex = 0;
let touchStartX = 0;
let touchStartY = 0;

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

window.addEventListener("hashchange", () => update());
els.prev.addEventListener("click", () => go(-1));
els.next.addEventListener("click", () => go(1));
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
