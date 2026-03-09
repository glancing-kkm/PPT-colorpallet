const PURPOSES = [
  {
    id: "report",
    label: "보고용",
    previewLabel: "Report Mode",
    previewTone: "Grounded editorial tone",
    tooltip: "묵직한 표현",
    profile: { hueShift: 0, saturationShift: -6, lightShift: -5, contrast: 18, neutralBias: 0.18 },
    slides: {
      coverTitle: "Board Review",
      coverSubtitle: "A concise premium deck for performance reporting.",
      agenda: ["Overview", "Performance", "Risk view", "Decision"],
      bullets: [
        "Revenue stayed above plan across the core portfolio.",
        "Two issues remain material and need direct ownership.",
        "Next-quarter spend narrows to the highest-yield channels.",
      ],
      highlightTitle: "Executive Note",
      highlightCopy: "The layout should feel calm, premium, and evidence-led.",
      tableHeaders: ["Area", "Target", "Actual", "Status"],
      tableRows: [
        ["Revenue", "120", "128", "On track"],
        ["Margin", "18", "20", "Ahead"],
        ["Retention", "84%", "86%", "Stable"],
      ],
      barTitle: "Segment mix",
      barLabels: ["Revenue", "Margin", "New", "Retention"],
      barValues: [72, 58, 64, 81],
      graphTitle: "Monthly pace",
      graphLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      graphValues: [44, 52, 58, 67, 72, 78],
      footerNote: "Quiet authority with strong hierarchy",
    },
  },
  {
    id: "proposal",
    label: "제안용",
    previewLabel: "Pitch Mode",
    previewTone: "Sharp and polished tone",
    tooltip: "선명하고 세련된 표현",
    profile: { hueShift: 8, saturationShift: 14, lightShift: 2, contrast: 14, neutralBias: -0.06 },
    slides: {
      coverTitle: "Concept Pitch",
      coverSubtitle: "A refined proposal deck with clear persuasion points.",
      agenda: ["Context", "Idea", "Execution", "Impact"],
      bullets: [
        "Use one bold message per screen for faster buy-in.",
        "Create cleaner contrast between the brand field and the proof field.",
        "Keep the visual rhythm polished, bright, and directional.",
      ],
      highlightTitle: "Pitch Thesis",
      highlightCopy: "Crisp contrast and confident whitespace make the story feel premium.",
      tableHeaders: ["Area", "Current", "Proposed", "Effect"],
      tableRows: [
        ["Main tone", "Scattered", "Focused", "Sharper"],
        ["Density", "Busy", "Reduced", "Cleaner"],
        ["Attention", "Soft", "Directed", "Faster"],
      ],
      barTitle: "Projected lift",
      barLabels: ["Awareness", "Appeal", "Conversion", "Return"],
      barValues: [68, 74, 62, 79],
      graphTitle: "Response curve",
      graphLabels: ["W1", "W2", "W3", "W4", "W5", "W6"],
      graphValues: [38, 49, 63, 72, 81, 88],
      footerNote: "Sharper contrast with polished restraint",
    },
  },
  {
    id: "planning",
    label: "계획용",
    previewLabel: "Planning Mode",
    previewTone: "Composed operational tone",
    tooltip: "차분하고 안정적 표현",
    profile: { hueShift: -10, saturationShift: -10, lightShift: 5, contrast: 8, neutralBias: 0.22 },
    slides: {
      coverTitle: "Execution Plan",
      coverSubtitle: "A stable planning deck built for roadmap clarity.",
      agenda: ["Goal", "Timeline", "Resourcing", "Risk"],
      bullets: [
        "Separate milestones by ownership instead of by department.",
        "Keep pacing steady and remove avoidable visual noise.",
        "Show risk and mitigation in the same field for faster reading.",
      ],
      highlightTitle: "Operating Rule",
      highlightCopy: "The deck should feel measured, spacious, and dependable.",
      tableHeaders: ["Phase", "Timing", "Owner", "Status"],
      tableRows: [
        ["Setup", "Q1", "PM", "Ready"],
        ["Launch", "Q2", "Ops", "Live"],
        ["Scale", "Q3", "Lead", "Queued"],
      ],
      barTitle: "Resource split",
      barLabels: ["Setup", "Launch", "Review", "Scale"],
      barValues: [46, 71, 59, 64],
      graphTitle: "Roadmap pace",
      graphLabels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
      graphValues: [24, 36, 49, 59, 68, 77],
      footerNote: "Measured structure with calm pacing",
    },
  },
  {
    id: "analysis",
    label: "분석용",
    previewLabel: "Analysis Mode",
    previewTone: "Crisp analytical tone",
    tooltip: "명확한 표현",
    profile: { hueShift: -18, saturationShift: 2, lightShift: 0, contrast: 22, neutralBias: 0.04 },
    slides: {
      coverTitle: "Market Readout",
      coverSubtitle: "A data-first deck with crisp hierarchy and fast scan paths.",
      agenda: ["Hypothesis", "Data", "Insight", "Action"],
      bullets: [
        "Put the conclusion first and let the evidence follow.",
        "Use clean contrast to separate signal from supporting data.",
        "Avoid decorative weight so the numbers stay primary.",
      ],
      highlightTitle: "Reading Frame",
      highlightCopy: "High legibility and clear sequencing are the core of the style.",
      tableHeaders: ["Metric", "Baseline", "Current", "Reading"],
      tableRows: [
        ["Conversion", "3.2", "3.8", "Up"],
        ["Drop-off", "41", "34", "Improved"],
        ["Return", "22", "27", "Growing"],
      ],
      barTitle: "Metric comparison",
      barLabels: ["Acquire", "Convert", "Repeat", "Retain"],
      barValues: [61, 78, 58, 73],
      graphTitle: "Change over time",
      graphLabels: ["W1", "W2", "W3", "W4", "W5", "W6"],
      graphValues: [35, 46, 57, 65, 74, 82],
      footerNote: "Data-first clarity with crisp contrast",
    },
  },
  {
    id: "submission",
    label: "제출용",
    previewLabel: "Submission Mode",
    previewTone: "Formal and neutral tone",
    tooltip: "무난하고 보수적 표현",
    profile: { hueShift: 4, saturationShift: -14, lightShift: 7, contrast: 10, neutralBias: 0.28 },
    slides: {
      coverTitle: "Formal Submission",
      coverSubtitle: "A disciplined presentation style for official review settings.",
      agenda: ["Scope", "Requirement", "Evidence", "Conclusion"],
      bullets: [
        "Keep the tone neutral and the composition highly structured.",
        "Make every label easy to locate on the first pass.",
        "Use polish without looking overly expressive or risky.",
      ],
      highlightTitle: "Review Standard",
      highlightCopy: "The safest premium look is restrained, ordered, and balanced.",
      tableHeaders: ["Section", "Content", "Owner", "Note"],
      tableRows: [
        ["Overview", "Program scope", "Planning", "Ready"],
        ["Budget", "Allocation", "Finance", "Review"],
        ["Schedule", "Submission", "Ops", "Locked"],
      ],
      barTitle: "Readiness",
      barLabels: ["Docs", "Budget", "Review", "Timing"],
      barValues: [66, 57, 73, 69],
      graphTitle: "Review path",
      graphLabels: ["Draft", "R1", "R2", "R3", "Final", "Send"],
      graphValues: [28, 42, 55, 63, 74, 84],
      footerNote: "Formal polish with measured restraint",
    },
  },
];

const TONE_ON_TONE_VARIANTS = [
  {
    id: "tone-on-deep",
    label: "톤온톤 01",
    short: "딥",
    groupLabel: "Tone on Tone",
    note: "짙고 단단한 톤",
    hueOffset: 0,
    saturationShift: 8,
    neutralBias: -0.05,
    lightStops: [8, 16, 24, 32, 40, 50, 60, 72, 84, 94],
    satCurve: [6, 3, 1, 0, 2, 4, 6, 4, 0, -16],
    hueJitter: [-2, -1, 0, 0, 1, 1, 0, -1, -2, -2],
  },
  {
    id: "tone-on-balance",
    label: "톤온톤 02",
    short: "밸런스",
    groupLabel: "Tone on Tone",
    note: "균형 잡힌 톤",
    hueOffset: 4,
    saturationShift: 0,
    neutralBias: 0.04,
    lightStops: [10, 20, 30, 40, 50, 58, 66, 74, 84, 94],
    satCurve: [2, 1, 0, -1, 0, 2, 3, 1, -2, -18],
    hueJitter: [-1, -1, 0, 1, 1, 0, -1, -1, -2, -2],
  },
  {
    id: "tone-on-soft",
    label: "톤온톤 03",
    short: "소프트",
    groupLabel: "Tone on Tone",
    note: "밝고 차분한 톤",
    hueOffset: -6,
    saturationShift: -10,
    neutralBias: 0.16,
    lightStops: [12, 22, 32, 42, 52, 60, 68, 76, 86, 95],
    satCurve: [0, -2, -3, -4, -3, -1, 1, 0, -4, -20],
    hueJitter: [0, 0, 1, 1, 0, -1, -1, -1, -2, -2],
  },
];

const TONE_IN_TONE_VARIANTS = [
  {
    id: "tone-in-adjacent",
    label: "톤인톤 01",
    short: "인접",
    groupLabel: "Tone in Tone",
    note: "인접색 중심",
    hueOffsets: [0, -10, 14, -18, 22, 8, 30, -26, 18, 36],
    lightStops: [14, 24, 32, 42, 50, 58, 66, 74, 84, 94],
    saturationShift: 0,
  },
  {
    id: "tone-in-modern",
    label: "톤인톤 02",
    short: "포인트",
    groupLabel: "Tone in Tone",
    note: "포인트 확장",
    hueOffsets: [0, 12, 24, -16, 38, 8, -28, 48, 18, -36],
    lightStops: [16, 26, 36, 46, 54, 62, 70, 78, 86, 95],
    saturationShift: 10,
  },
  {
    id: "tone-in-refined",
    label: "톤인톤 03",
    short: "리파인",
    groupLabel: "Tone in Tone",
    note: "절제된 변주",
    hueOffsets: [0, -8, 10, 18, -16, 28, 8, -24, 34, 16],
    lightStops: [18, 28, 38, 46, 54, 62, 70, 78, 88, 96],
    saturationShift: -8,
  },
];

const state = {
  baseColor: { r: 31, g: 76, b: 149 },
  activePaletteId: "",
  palettes: [],
  lastExtractedHex: "#1F4C95",
};

const refs = {};

document.addEventListener("DOMContentLoaded", () => {
  bindRefs();
  bindEvents();
  syncBaseInputs(state.baseColor);
  regenerateExperience();
});

function bindRefs() {
  refs.hexInput = document.getElementById("hexInput");
  refs.rInput = document.getElementById("rInput");
  refs.gInput = document.getElementById("gInput");
  refs.bInput = document.getElementById("bInput");
  refs.imageInput = document.getElementById("imageInput");
  refs.imagePreview = document.getElementById("imagePreview");
  refs.imageFeedback = document.getElementById("imageFeedback");
  refs.extractedSwatch = document.getElementById("extractedSwatch");
  refs.extractedColorCode = document.getElementById("extractedColorCode");
  refs.baseSwatch = document.getElementById("baseSwatch");
  refs.baseHexLabel = document.getElementById("baseHexLabel");
  refs.baseRgbLabel = document.getElementById("baseRgbLabel");
  refs.heroColorDot = document.getElementById("heroColorDot");
  refs.heroColorCode = document.getElementById("heroColorCode");
  refs.heroPurposeSummary = document.getElementById("heroPurposeSummary");
  refs.toneOnToneList = document.getElementById("toneOnToneList");
  refs.toneInToneList = document.getElementById("toneInToneList");
  refs.paletteSection = document.getElementById("paletteSection");
  refs.slidePreviewGrid = document.getElementById("slidePreviewGrid");
  refs.activePaletteName = document.getElementById("activePaletteName");
  refs.activePaletteMeta = document.getElementById("activePaletteMeta");
  refs.copyPaletteButton = document.getElementById("copyPaletteButton");
  refs.copyStatus = document.getElementById("copyStatus");
  refs.purposeInputs = Array.from(document.querySelectorAll('input[name="purpose"]'));
}

function bindEvents() {
  refs.hexInput.addEventListener("input", handleHexInput);
  refs.hexInput.addEventListener("blur", () => {
    refs.hexInput.value = rgbToHex(state.baseColor);
    refs.hexInput.classList.remove("is-invalid");
  });

  [refs.rInput, refs.gInput, refs.bInput].forEach((input) => {
    input.addEventListener("input", handleRgbInput);
    input.addEventListener("blur", () => {
      input.value = clamp(parseInt(input.value || "0", 10), 0, 255);
    });
  });

  refs.imageInput.addEventListener("change", handleImageUpload);

  refs.purposeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      regenerateExperience();
    });
  });

  refs.paletteSection.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || target.dataset.paletteId === undefined) {
      return;
    }

    if (target.checked) {
      state.activePaletteId = target.dataset.paletteId;
    } else if (state.activePaletteId === target.dataset.paletteId && state.palettes.length > 0) {
      state.activePaletteId = state.palettes[0].id;
    }

    renderPalettes();
    renderPreviews();
  });

  refs.copyPaletteButton.addEventListener("click", async () => {
    const palette = getActivePalette();
    if (!palette) {
      return;
    }

    try {
      await copyText(palette.colors.join(", "));
      refs.copyStatus.textContent = `${palette.label} 팔레트를 클립보드에 복사했습니다.`;
    } catch (error) {
      refs.copyStatus.textContent = "클립보드 복사에 실패했습니다.";
      console.error(error);
    }
  });
}

function handleHexInput(event) {
  const value = event.target.value.trim();
  const parsed = parseHex(value);
  const showInvalid = value.replace("#", "").length >= 3 && !parsed;
  refs.hexInput.classList.toggle("is-invalid", showInvalid);

  if (!parsed) {
    return;
  }

  setBaseColor(parsed);
}

function handleRgbInput() {
  const next = {
    r: clamp(parseInt(refs.rInput.value || "0", 10), 0, 255),
    g: clamp(parseInt(refs.gInput.value || "0", 10), 0, 255),
    b: clamp(parseInt(refs.bInput.value || "0", 10), 0, 255),
  };
  setBaseColor(next);
}

async function handleImageUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    return;
  }

  try {
    const dataUrl = await readFileAsDataUrl(file);
    refs.imagePreview.src = dataUrl;
    refs.imagePreview.hidden = false;
    const extracted = await extractDominantColor(dataUrl);
    const extractedHex = rgbToHex(extracted);
    state.lastExtractedHex = extractedHex;
    refs.extractedColorCode.textContent = extractedHex;
    refs.extractedSwatch.style.background = extractedHex;
    refs.imageFeedback.textContent = "이미지에서 대표 색상을 추출해 기준색으로 반영했습니다.";
    setBaseColor(extracted);
  } catch (error) {
    refs.imageFeedback.textContent = "이미지에서 색상을 읽지 못했습니다. 다른 이미지를 시도해 주세요.";
    console.error(error);
  }
}

function setBaseColor(rgb) {
  state.baseColor = {
    r: clamp(Math.round(rgb.r), 0, 255),
    g: clamp(Math.round(rgb.g), 0, 255),
    b: clamp(Math.round(rgb.b), 0, 255),
  };
  syncBaseInputs(state.baseColor);
  regenerateExperience();
}

function syncBaseInputs(rgb) {
  const hex = rgbToHex(rgb);
  refs.hexInput.value = hex;
  refs.rInput.value = rgb.r;
  refs.gInput.value = rgb.g;
  refs.bInput.value = rgb.b;
  refs.baseSwatch.style.background = hex;
  refs.baseHexLabel.textContent = hex;
  refs.baseRgbLabel.textContent = `RGB ${rgb.r}, ${rgb.g}, ${rgb.b}`;
  refs.heroColorDot.style.background = hex;
  refs.heroColorCode.textContent = hex;
  refs.extractedSwatch.style.background = state.lastExtractedHex;
  refs.extractedColorCode.textContent = state.lastExtractedHex;
}

function regenerateExperience() {
  const selectedPurposes = getSelectedPurposes();
  const baseHsl = rgbToHsl(state.baseColor);
  const profile = buildPurposeProfile(selectedPurposes);
  const toneOnTone = TONE_ON_TONE_VARIANTS.map((variant) => buildToneOnTonePalette(baseHsl, profile, variant));
  const toneInTone = TONE_IN_TONE_VARIANTS.map((variant) => buildToneInTonePalette(baseHsl, profile, variant));

  state.palettes = [...toneOnTone, ...toneInTone];
  if (!state.palettes.some((palette) => palette.id === state.activePaletteId)) {
    state.activePaletteId = state.palettes[0].id;
  }

  refs.heroPurposeSummary.textContent = selectedPurposes.length
    ? `용도: ${selectedPurposes.map((purpose) => purpose.label).join(" · ")}`
    : "용도: 보고용";

  renderPalettes();
  renderPreviews();
}

function renderPalettes() {
  const toneOnTone = state.palettes.filter((palette) => palette.family === "tone-on-tone");
  const toneInTone = state.palettes.filter((palette) => palette.family === "tone-in-tone");

  refs.toneOnToneList.innerHTML = toneOnTone.map(renderPaletteCard).join("");
  refs.toneInToneList.innerHTML = toneInTone.map(renderPaletteCard).join("");
}

function renderPaletteCard(palette) {
  const colorCells = palette.colors.map((hex) => {
    const textColor = getReadableTextColor(hex);
    const shadow = textColor.includes("255") ? "0 1px 2px rgba(0, 0, 0, 0.26)" : "0 1px 2px rgba(255, 255, 255, 0.22)";
    return `<div class="color-cell" style="background:${hex};color:${textColor};text-shadow:${shadow};">${hex}</div>`;
  }).join("");

  const checked = palette.id === state.activePaletteId ? "checked" : "";

  return `
    <article class="palette-card">
      <div class="palette-card__header">
        <label class="palette-selector">
          <input type="checkbox" data-palette-id="${palette.id}" ${checked}>
          <div>
            <strong>${palette.label}</strong>
            <span>${palette.short} · ${palette.note}</span>
          </div>
        </label>
        <span class="palette-card__badge">${palette.groupLabel}</span>
      </div>
      <div class="color-strip-wrap">
        <div class="color-strip">${colorCells}</div>
      </div>
    </article>
  `;
}

function renderPreviews() {
  const activePalette = getActivePalette();
  if (!activePalette) {
    return;
  }

  const selectedPurposes = getSelectedPurposes();
  const purposeContext = buildPurposeContext(selectedPurposes);
  const tokens = derivePreviewTokens(activePalette.colors);

  refs.activePaletteName.textContent = `선택 팔레트: ${activePalette.label}`;
  refs.activePaletteMeta.textContent = `${purposeContext.summary} · ${activePalette.note}`;
  refs.slidePreviewGrid.innerHTML = [
    renderCoverSlide(tokens, purposeContext),
    renderAgendaSlide(tokens, purposeContext),
    renderBodySlide(tokens, purposeContext),
    renderTableSlide(tokens, purposeContext),
    renderChartSlide(tokens, purposeContext),
    renderGraphSlide(tokens, purposeContext),
  ].join("");
}

function renderCoverSlide(tokens, context) {
  return `
    <article class="slide-card slide-card--cover" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">01 Cover</span>
      <div class="cover-shell">
        <div class="cover-main">
          <p class="cover-kicker">${context.primary.previewLabel}</p>
          <h3 class="cover-title">${context.primary.slides.coverTitle}</h3>
          <p class="cover-subtitle">${context.primary.slides.coverSubtitle}</p>
        </div>
        <aside class="cover-panel">
          <span class="cover-panel__eyebrow">Direction</span>
          <strong>${context.primary.previewTone}</strong>
          <p>${context.supportingNote}</p>
        </aside>
      </div>
      <div class="cover-band">
        <span>Premium slide system</span>
        <span>${context.blendTag}</span>
      </div>
    </article>
  `;
}

function renderAgendaSlide(tokens, context) {
  const agendaCaptions = ["Frame", "Signal", "Proof", "Move"];
  const agendaItems = context.primary.slides.agenda.map((item, index) => `
    <div class="agenda-item">
      <span class="agenda-item__number">${String(index + 1).padStart(2, "0")}</span>
      <div class="agenda-item__copy">
        <strong>${item}</strong>
        <span>${agendaCaptions[index] || "Focus"}</span>
      </div>
    </div>
  `).join("");

  return `
    <article class="slide-card slide-card--agenda" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">02 Contents</span>
      <div class="agenda-shell">
        <div class="slide-headline">
          <p class="section-overline">Sequence</p>
          <h3>Contents</h3>
          <p>${context.primary.previewTone}</p>
        </div>
        <div class="agenda-list">${agendaItems}</div>
      </div>
    </article>
  `;
}

function renderBodySlide(tokens, context) {
  const averageScore = Math.round(
    context.primary.slides.barValues.reduce((total, value) => total + value, 0) / context.primary.slides.barValues.length,
  );
  const bulletItems = context.primary.slides.bullets.map((item) => `
    <div class="body-item">${item}</div>
  `).join("");

  return `
    <article class="slide-card slide-card--content" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">03 Narrative</span>
      <div class="body-layout">
        <div class="body-copy">
          <div class="slide-headline">
            <p class="section-overline">Storyline</p>
            <h3>Key narrative</h3>
            <p>Whitespace, rhythm, and hierarchy stay tightly controlled.</p>
          </div>
          <div class="body-list">${bulletItems}</div>
        </div>
        <aside class="body-highlight">
          <span class="body-highlight__tag">${context.primary.slides.highlightTitle}</span>
          <h4>${context.primary.slides.highlightTitle}</h4>
          <p>${context.primary.slides.highlightCopy}</p>
          <div class="insight-metric">
            <strong>${averageScore}%</strong>
            <span>clarity index</span>
          </div>
        </aside>
      </div>
    </article>
  `;
}

function renderTableSlide(tokens, context) {
  const metricCards = [
    { label: "Rows", value: String(context.primary.slides.tableRows.length).padStart(2, "0") },
    { label: "Lead", value: context.primary.slides.tableRows[0][0] },
    { label: "Mode", value: context.primary.previewLabel.replace(" Mode", "") },
  ].map((item) => `
    <div class="metric-card">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    </div>
  `).join("");
  const headerRow = context.primary.slides.tableHeaders.map((header) => `<th>${header}</th>`).join("");
  const bodyRows = context.primary.slides.tableRows.map((row) => `
    <tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>
  `).join("");

  return `
    <article class="slide-card slide-card--table" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">04 Table</span>
      <div class="slide-headline">
        <p class="section-overline">Reference table</p>
        <h3>Structured snapshot</h3>
        <p>The table sits inside a lighter field with only one confident accent.</p>
      </div>
      <div class="metric-row">${metricCards}</div>
      <div class="table-shell">
        <table class="mini-table">
          <thead>
            <tr>${headerRow}</tr>
          </thead>
          <tbody>${bodyRows}</tbody>
        </table>
      </div>
    </article>
  `;
}

function renderChartSlide(tokens, context) {
  const metricCards = context.primary.slides.barValues.slice(0, 3).map((value, index) => `
    <div class="metric-card metric-card--soft">
      <span>${context.primary.slides.barLabels[index]}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
  const values = context.primary.slides.barValues;
  const max = Math.max(...values);
  const barColors = [tokens.accent, tokens.accentAlt, tokens.blush, tokens.mist];
  const bars = values.map((value, index) => {
    const height = 28 + (value / max) * 72;
    return `
      <div class="mini-bar">
        <div class="mini-bar__track">
          <span class="mini-bar__value">${value}</span>
          <span class="mini-bar__fill" style="height:${height}%;background:${barColors[index % barColors.length]};"></span>
        </div>
        <span class="mini-bar__label">${context.primary.slides.barLabels[index]}</span>
      </div>
    `;
  }).join("");

  return `
    <article class="slide-card slide-card--chart" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">05 Chart</span>
      <div class="dashboard-topline">
        <div class="slide-headline">
          <p class="section-overline">Dashboard view</p>
          <h3>${context.primary.slides.barTitle}</h3>
          <p>High-end slides let the chart breathe and keep the framing quiet.</p>
        </div>
        <span class="dashboard-flag">Live preview</span>
      </div>
      <div class="metric-row metric-row--compact">${metricCards}</div>
      <div class="dashboard-panel">
        <div class="dashboard-panel__header">
          <strong>Performance index</strong>
          <span>${context.primary.previewLabel}</span>
        </div>
        <div class="chart-layout">
          <div class="mini-bars">${bars}</div>
        </div>
      </div>
    </article>
  `;
}

function renderGraphSlide(tokens, context) {
  const values = context.primary.slides.graphValues;
  const points = createPolylinePoints(values, 420, 170, 16);
  const change = values[values.length - 1] - values[0];
  const circles = points.map((point) => `
    <circle cx="${point.x}" cy="${point.y}" r="5" fill="${tokens.paper}" stroke="${tokens.accent}" stroke-width="3"></circle>
  `).join("");
  const labels = context.primary.slides.graphLabels.map((label) => `<span>${label}</span>`).join("");
  const trendCards = [
    { label: "Delta", value: `${change > 0 ? "+" : ""}${change}` },
    { label: "Peak", value: `${Math.max(...values)}` },
    { label: "Mode", value: context.primary.previewLabel.replace(" Mode", "") },
  ].map((item) => `
    <div class="trend-card">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    </div>
  `).join("");

  return `
    <article class="slide-card slide-card--graph" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">06 Graph</span>
      <div class="graph-shell">
        <div class="graph-main">
          <div class="slide-headline">
            <p class="section-overline">Trend line</p>
            <h3>${context.primary.slides.graphTitle}</h3>
            <p>${context.primary.slides.footerNote}</p>
          </div>
          <div class="graph-card">
            <svg viewBox="0 0 420 170" aria-hidden="true" focusable="false">
              <line x1="16" y1="154" x2="404" y2="154" stroke="${tokens.line}" stroke-width="2"></line>
              <line x1="16" y1="16" x2="16" y2="154" stroke="${tokens.line}" stroke-width="2"></line>
              <polyline
                points="${points.map((point) => `${point.x},${point.y}`).join(" ")}"
                fill="none"
                stroke="${tokens.accent}"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></polyline>
              ${circles}
            </svg>
            <div class="graph-labels">${labels}</div>
          </div>
        </div>
        <aside class="trend-panel">
          <div class="trend-panel__copy">
            <span class="body-highlight__tag">Reading</span>
            <h4>Premium trend cue</h4>
            <p>Use one strong line, restrained labels, and a soft tinted field.</p>
          </div>
          <div class="trend-grid">${trendCards}</div>
        </aside>
      </div>
    </article>
  `;
}

function buildToneOnTonePalette(baseHsl, profile, variant) {
  const hueBase = wrapHue(baseHsl.h + profile.hueShift + variant.hueOffset);
  const satBase = clamp(baseHsl.s + profile.saturationShift + variant.saturationShift, 18, 86);
  const colors = variant.lightStops.map((lightness, index) => {
    const hue = wrapHue(hueBase + variant.hueJitter[index]);
    const saturation = clamp(
      satBase + variant.satCurve[index] - (profile.neutralBias + variant.neutralBias) * 22 + profile.contrast * (index < 3 ? 0.22 : 0.08),
      8,
      90,
    );
    const adjustedLightness = clamp(lightness + profile.lightShift, 4, 97);
    return hslToHex(hue, saturation, adjustedLightness);
  });

  return {
    id: variant.id,
    label: variant.label,
    short: variant.short,
    note: variant.note,
    groupLabel: variant.groupLabel,
    family: "tone-on-tone",
    colors,
  };
}

function buildToneInTonePalette(baseHsl, profile, variant) {
  const hueBase = wrapHue(baseHsl.h + profile.hueShift);
  const satBase = clamp(baseHsl.s + profile.saturationShift + variant.saturationShift - profile.neutralBias * 14, 16, 84);
  const colors = variant.lightStops.map((lightness, index) => {
    const hue = wrapHue(hueBase + variant.hueOffsets[index]);
    const saturation = clamp(
      satBase + (index % 2 === 0 ? 3 : -2) - Math.abs(index - 4.5) * 0.8 + profile.contrast * 0.08,
      10,
      88,
    );
    const adjustedLightness = clamp(lightness + profile.lightShift, 6, 98);
    return hslToHex(hue, saturation, adjustedLightness);
  });

  return {
    id: variant.id,
    label: variant.label,
    short: variant.short,
    note: variant.note,
    groupLabel: variant.groupLabel,
    family: "tone-in-tone",
    colors,
  };
}

function buildPurposeProfile(selectedPurposes) {
  const activePurposes = selectedPurposes.length ? selectedPurposes : [PURPOSES[0]];
  const total = activePurposes.length;

  return activePurposes.reduce((accumulator, purpose) => {
    accumulator.hueShift += purpose.profile.hueShift / total;
    accumulator.saturationShift += purpose.profile.saturationShift / total;
    accumulator.lightShift += purpose.profile.lightShift / total;
    accumulator.contrast += purpose.profile.contrast / total;
    accumulator.neutralBias += purpose.profile.neutralBias / total;
    return accumulator;
  }, {
    hueShift: 0,
    saturationShift: 0,
    lightShift: 0,
    contrast: 0,
    neutralBias: 0,
  });
}

function buildPurposeContext(selectedPurposes) {
  const activePurposes = selectedPurposes.length ? selectedPurposes : [PURPOSES[0]];
  const primary = activePurposes[0];
  const secondary = activePurposes.slice(1);
  const secondaryLabels = secondary.map((purpose) => purpose.previewLabel.replace(" Mode", "")).join(", ");

  return {
    primary,
    summary: activePurposes.map((purpose) => purpose.label).join(" · "),
    badge: secondary.length ? `${primary.previewLabel} / +${secondary.length}` : primary.previewLabel,
    supportingNote: secondary.length
      ? `${secondaryLabels} cues layered in`
      : primary.previewTone,
    blendTag: secondary.length ? `${secondary.length} support cues blended` : "Single-mode refinement",
  };
}

function derivePreviewTokens(colors) {
  const reference = {
    deep: "#880D1E",
    accent: "#DD2D4A",
    accentAlt: "#F26A8D",
    blush: "#F49CBB",
    mist: "#CBEEF3",
  };
  const sortedByLightness = [...colors].sort((left, right) => getRelativeLuminance(hexToRgb(left)) - getRelativeLuminance(hexToRgb(right)));
  const sortedBySaturation = [...colors].sort((left, right) => rgbToHsl(hexToRgb(right)).s - rgbToHsl(hexToRgb(left)).s);

  const paper = mixHex(sortedByLightness[sortedByLightness.length - 1], "#FFF9FB", 0.34);
  const surface = mixHex(sortedByLightness[sortedByLightness.length - 2], "#FFFFFF", 0.4);
  const ink = mixHex(sortedByLightness[0], reference.deep, 0.2);
  const accent = mixHex(sortedBySaturation[0], reference.accent, 0.38);
  const accentAlt = mixHex(sortedBySaturation[1] || sortedByLightness[4], reference.accentAlt, 0.42);
  const blush = mixHex(paper, reference.blush, 0.56);
  const mist = mixHex(paper, reference.mist, 0.68);
  const panel = mixHex(surface, blush, 0.28);
  const deep = mixHex(ink, reference.deep, 0.42);

  return {
    paper,
    surface,
    support: mist,
    surfaceStrong: blush,
    panel,
    blush,
    mist,
    deep,
    ink,
    inkSoft: mixHex(ink, paper, 0.48),
    line: mixHex(ink, paper, 0.74),
    accent,
    accentAlt,
    accentInk: getReadableTextColor(accent),
    coverBg: mixHex(deep, accent, 0.12),
    coverInk: getReadableTextColor(mixHex(deep, accent, 0.12)),
  };
}

function buildSlideVars(tokens) {
  return [
    `--slide-paper:${tokens.paper}`,
    `--slide-surface:${tokens.surface}`,
    `--slide-support:${tokens.support}`,
    `--slide-surface-strong:${tokens.surfaceStrong}`,
    `--slide-panel:${tokens.panel}`,
    `--slide-blush:${tokens.blush}`,
    `--slide-mist:${tokens.mist}`,
    `--slide-deep:${tokens.deep}`,
    `--slide-ink:${tokens.ink}`,
    `--slide-ink-soft:${tokens.inkSoft}`,
    `--slide-line:${tokens.line}`,
    `--slide-accent:${tokens.accent}`,
    `--slide-accent-alt:${tokens.accentAlt}`,
    `--slide-accent-ink:${tokens.accentInk}`,
    `--slide-cover-bg:${tokens.coverBg}`,
    `--slide-cover-ink:${tokens.coverInk}`,
  ].join(";");
}

function getSelectedPurposes() {
  return refs.purposeInputs
    .filter((input) => input.checked)
    .map((input) => PURPOSES.find((purpose) => purpose.id === input.value))
    .filter(Boolean);
}

function getActivePalette() {
  return state.palettes.find((palette) => palette.id === state.activePaletteId) || null;
}

function createPolylinePoints(values, width, height, padding) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = Math.max(max - min, 1);

  return values.map((value, index) => {
    const x = padding + ((width - padding * 2) / (values.length - 1)) * index;
    const normalized = (value - min) / range;
    const y = height - padding - normalized * (height - padding * 2);
    return { x: roundTo(x, 2), y: roundTo(y, 2) };
  });
}

function parseHex(value) {
  const cleaned = value.trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(cleaned)) {
    return null;
  }

  const normalized = cleaned.length === 3
    ? cleaned.split("").map((char) => char + char).join("")
    : cleaned;

  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
}

function rgbToHex(rgb) {
  return `#${[rgb.r, rgb.g, rgb.b].map((value) => clamp(value, 0, 255).toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}

function hexToRgb(hex) {
  return parseHex(hex);
}

function rgbToHsl(rgb) {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === r) {
      h = ((g - b) / delta) % 6;
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
  }

  h = Math.round(h * 60);
  if (h < 0) {
    h += 360;
  }

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return {
    h,
    s: roundTo(s * 100, 1),
    l: roundTo(l * 100, 1),
  };
}

function hslToHex(h, s, l) {
  const saturation = clamp(s, 0, 100) / 100;
  const lightness = clamp(l, 0, 100) / 100;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const hueSegment = wrapHue(h) / 60;
  const x = chroma * (1 - Math.abs((hueSegment % 2) - 1));

  let r1 = 0;
  let g1 = 0;
  let b1 = 0;

  if (hueSegment >= 0 && hueSegment < 1) {
    r1 = chroma;
    g1 = x;
  } else if (hueSegment < 2) {
    r1 = x;
    g1 = chroma;
  } else if (hueSegment < 3) {
    g1 = chroma;
    b1 = x;
  } else if (hueSegment < 4) {
    g1 = x;
    b1 = chroma;
  } else if (hueSegment < 5) {
    r1 = x;
    b1 = chroma;
  } else {
    r1 = chroma;
    b1 = x;
  }

  const m = lightness - chroma / 2;
  const rgb = {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255),
  };

  return rgbToHex(rgb);
}

function getRelativeLuminance(rgb) {
  const channels = [rgb.r, rgb.g, rgb.b].map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function getReadableTextColor(hex) {
  return getRelativeLuminance(hexToRgb(hex)) > 0.48
    ? "rgba(16, 24, 42, 0.92)"
    : "rgba(255, 255, 255, 0.94)";
}

function mixHex(leftHex, rightHex, weight) {
  const left = hexToRgb(leftHex);
  const right = hexToRgb(rightHex);
  const ratio = clamp(weight, 0, 1);

  return rgbToHex({
    r: Math.round(left.r + (right.r - left.r) * ratio),
    g: Math.round(left.g + (right.g - left.g) * ratio),
    b: Math.round(left.b + (right.b - left.b) * ratio),
  });
}

async function extractDominantColor(dataUrl) {
  const image = await loadImage(dataUrl);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const maxSide = 80;
  const scale = Math.min(1, maxSide / Math.max(image.width, image.height));

  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
  const buckets = new Map();
  let average = { r: 0, g: 0, b: 0, count: 0 };

  for (let index = 0; index < data.length; index += 4) {
    const alpha = data[index + 3];
    if (alpha < 128) {
      continue;
    }

    const rgb = {
      r: data[index],
      g: data[index + 1],
      b: data[index + 2],
    };

    const hsl = rgbToHsl(rgb);
    if (hsl.l < 5 || hsl.l > 95) {
      continue;
    }

    average.r += rgb.r;
    average.g += rgb.g;
    average.b += rgb.b;
    average.count += 1;

    const key = [
      Math.round(rgb.r / 24),
      Math.round(rgb.g / 24),
      Math.round(rgb.b / 24),
    ].join("-");

    const entry = buckets.get(key) || { r: 0, g: 0, b: 0, count: 0, weight: 0 };
    entry.r += rgb.r;
    entry.g += rgb.g;
    entry.b += rgb.b;
    entry.count += 1;
    entry.weight += 1 + hsl.s * 0.035 + (60 - Math.abs(hsl.l - 55)) * 0.02;
    buckets.set(key, entry);
  }

  if (buckets.size === 0) {
    if (average.count === 0) {
      return { ...state.baseColor };
    }

    return {
      r: Math.round(average.r / average.count),
      g: Math.round(average.g / average.count),
      b: Math.round(average.b / average.count),
    };
  }

  let winner = null;
  buckets.forEach((entry) => {
    if (!winner || entry.weight > winner.weight) {
      winner = entry;
    }
  });

  return {
    r: Math.round(winner.r / winner.count),
    g: Math.round(winner.g / winner.count),
    b: Math.round(winner.b / winner.count),
  };
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "readonly");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);

  if (!copied) {
    throw new Error("Copy command failed.");
  }
}

function clamp(value, min, max) {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
}

function wrapHue(value) {
  const normalized = value % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

function roundTo(value, digits) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}
