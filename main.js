const PURPOSES = [
  {
    id: "report",
    label: "보고용",
    previewLabel: "Report Mode",
    previewTone: "Grounded editorial tone",
    tooltip: "묵직한 표현",
    profile: { hueShift: -18, saturationShift: -20, lightShift: -10, contrast: 28, neutralBias: 0.38 },
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
    profile: { hueShift: 24, saturationShift: 30, lightShift: 8, contrast: 34, neutralBias: -0.22 },
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
    profile: { hueShift: -36, saturationShift: -24, lightShift: 14, contrast: 12, neutralBias: 0.45 },
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
    profile: { hueShift: -60, saturationShift: 16, lightShift: -2, contrast: 36, neutralBias: 0.02 },
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
    profile: { hueShift: 10, saturationShift: -34, lightShift: 18, contrast: 8, neutralBias: 0.56 },
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

const COLOR_WHEEL_STEPS = 12;
const COLOR_WHEEL_UNIT = 360 / COLOR_WHEEL_STEPS;

const HARMONY_VARIANTS = [
  {
    id: "base-monochromatic",
    label: "기준색 01",
    short: "단색 배색",
    groupLabel: "기준색 중심",
    note: "기준색 단일 Hue에서 명도/채도 변화",
    family: "base-led",
    mode: "monochromatic",
    accentHueStep: 6,
  },
  {
    id: "base-analogous",
    label: "기준색 02",
    short: "유사색 배색",
    groupLabel: "기준색 중심",
    note: "기준색 인접 Hue(색상환 기준) 활용",
    family: "base-led",
    mode: "analogous",
    accentHueStep: 6,
  },
  {
    id: "contrast-complementary",
    label: "기준색 03",
    short: "보색 배색",
    groupLabel: "대비 중심",
    note: "기준색과 정반대 Hue를 함께 사용",
    family: "contrast-led",
    mode: "complementary",
    accentHueStep: 1,
  },
  {
    id: "contrast-split-complementary",
    label: "기준색 04",
    short: "분할보색 배색",
    groupLabel: "대비 중심",
    note: "보색 양옆 Hue로 대비를 완화",
    family: "contrast-led",
    mode: "split-complementary",
    accentHueStep: 11,
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
  refs.hexColorPicker = document.getElementById("hexColorPicker");
  refs.hexColorPickerLabel = document.getElementById("hexColorPickerLabel");
  refs.rInput = document.getElementById("rInput");
  refs.gInput = document.getElementById("gInput");
  refs.bInput = document.getElementById("bInput");
  refs.imageInput = document.getElementById("imageInput");
  refs.imagePreview = document.getElementById("imagePreview");
  refs.uploadStack = document.getElementById("uploadStack");
  refs.imageClearButton = document.getElementById("imageClearButton");
  refs.imageFeedback = document.getElementById("imageFeedback");
  refs.extractedSwatch = document.getElementById("extractedSwatch");
  refs.extractedColorCode = document.getElementById("extractedColorCode");
  refs.heroColorDot = document.getElementById("heroColorDot");
  refs.heroColorCode = document.getElementById("heroColorCode");
  refs.heroPurposeSummary = document.getElementById("heroPurposeSummary");
  refs.baseLedList = document.getElementById("baseLedList");
  refs.contrastLedList = document.getElementById("contrastLedList");
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
  refs.hexColorPicker.addEventListener("input", handleHexInput);
  if (refs.hexColorPickerLabel) {
    refs.hexColorPickerLabel.addEventListener("input", handleHexLabelInput);
    refs.hexColorPickerLabel.addEventListener("blur", () => {
      refs.hexColorPickerLabel.value = rgbToHex(state.baseColor);
      refs.hexColorPickerLabel.classList.remove("is-invalid");
    });
  }

  [refs.rInput, refs.gInput, refs.bInput].forEach((input) => {
    input.addEventListener("input", handleRgbInput);
    input.addEventListener("blur", () => {
      input.value = clamp(parseInt(input.value || "0", 10), 0, 255);
    });
  });

  refs.imageInput.addEventListener("change", handleImageUpload);
  if (refs.imageClearButton) {
    refs.imageClearButton.addEventListener("click", clearUploadedImage);
  }

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
      await copyPaletteImage(palette);
      refs.copyStatus.textContent = `${palette.label} 팔레트 이미지를 클립보드에 복사했습니다.`;
    } catch (error) {
      try {
        await copyText(palette.colors.join(", "));
        refs.copyStatus.textContent = "이미지 복사를 지원하지 않아 HEX 코드로 복사했습니다.";
      } catch (fallbackError) {
        refs.copyStatus.textContent = "클립보드 복사에 실패했습니다.";
        console.error(fallbackError);
      }
      console.error(error);
    }
  });
}

function handleHexInput(event) {
  const value = event.target.value.trim();
  const parsed = parseHex(value);
  const showInvalid = value.replace("#", "").length >= 3 && !parsed;
  refs.hexInput.classList.toggle("is-invalid", showInvalid);
  if (refs.hexColorPickerLabel) {
    refs.hexColorPickerLabel.classList.toggle("is-invalid", showInvalid);
  }

  if (!parsed) {
    return;
  }

  setBaseColor(parsed);
}

function handleHexLabelInput(event) {
  if (!refs.hexColorPickerLabel) {
    return;
  }

  const value = event.target.value.trim();
  const parsed = parseHex(value);
  const showInvalid = value.replace("#", "").length >= 3 && !parsed;
  refs.hexColorPickerLabel.classList.toggle("is-invalid", showInvalid);
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
    refs.uploadStack?.classList.add("has-image");
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

function clearUploadedImage() {
  if (refs.imageInput) {
    refs.imageInput.value = "";
  }
  if (refs.imagePreview) {
    refs.imagePreview.src = "";
    refs.imagePreview.hidden = true;
  }
  refs.uploadStack?.classList.remove("has-image");
  refs.imageFeedback.textContent = "이미지를 삭제했습니다. 새 이미지를 첨부해 주세요.";
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
  refs.hexColorPicker.value = hex;
  if (refs.hexColorPickerLabel) {
    refs.hexColorPickerLabel.value = hex;
  }
  refs.rInput.value = rgb.r;
  refs.gInput.value = rgb.g;
  refs.bInput.value = rgb.b;
  refs.heroColorDot.style.background = hex;
  refs.heroColorCode.textContent = hex;
  refs.extractedSwatch.style.background = state.lastExtractedHex;
  refs.extractedColorCode.textContent = state.lastExtractedHex;
}

function regenerateExperience() {
  const selectedPurposes = getSelectedPurposes();
  const baseHsl = rgbToHsl(state.baseColor);
  const profile = buildPurposeProfile(selectedPurposes);
  state.palettes = HARMONY_VARIANTS.map((variant) => buildHarmonyPalette(baseHsl, profile, variant));
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
  const baseLed = state.palettes.filter((palette) => palette.family === "base-led");
  const contrastLed = state.palettes.filter((palette) => palette.family === "contrast-led");

  refs.baseLedList.innerHTML = baseLed.map(renderPaletteCard).join("");
  refs.contrastLedList.innerHTML = contrastLed.map(renderPaletteCard).join("");
}

function renderPaletteCard(palette) {
  const colorCells = palette.swatches.map((swatch) => {
    const textColor = getReadableTextColor(swatch.hex);
    const shadow = textColor.includes("255") ? "0 1px 2px rgba(0, 0, 0, 0.26)" : "0 1px 2px rgba(255, 255, 255, 0.22)";
    const tag = swatch.isAccent ? '<span class="color-cell__tag">강조색</span>' : "";
    const accentClass = swatch.isAccent ? " color-cell--accent" : "";

    return `
      <div class="color-cell${accentClass}" style="background:${swatch.hex};color:${textColor};text-shadow:${shadow};">
        <div class="color-cell__copy">
          ${tag}
          <strong>${swatch.hex}</strong>
        </div>
      </div>
    `;
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
  const tokens = derivePreviewTokens(activePalette);

  refs.activePaletteName.textContent = `선택 팔레트: ${activePalette.label}`;
  refs.activePaletteMeta.textContent = `${purposeContext.summary} · ${activePalette.note}`;
  refs.slidePreviewGrid.innerHTML = [
    renderMainTemplateSlide(tokens, purposeContext),
    renderContentsTemplateSlide(tokens, purposeContext),
    renderBodyTemplateSlide(tokens, purposeContext),
    renderTableTemplateSlide(tokens, purposeContext),
    renderGraphTemplateSlide(tokens, purposeContext),
    renderIconTemplateSlide(tokens, purposeContext),
  ].join("");
}

function compactText(value, max = 22) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  if (text.length <= max) {
    return text;
  }
  return `${text.slice(0, Math.max(1, max - 1)).trim()}…`;
}

function compactItems(items, max = 22, limit = 3) {
  return (items || []).slice(0, limit).map((item) => compactText(item, max));
}

function renderMainTemplateSlide(tokens, context) {
  const donutValue = context.primary.slides.barValues[0] || 60;
  const shapePalette = [tokens.theme, tokens.secondary, tokens.tertiary, tokens.accentAlt, tokens.accent];
  const keyMetrics = [
    { label: "Target", value: `${context.primary.slides.barValues[1] || 0}%` },
    { label: "Current", value: `${context.primary.slides.barValues[2] || 0}%` },
    { label: "Delta", value: `${(context.primary.slides.barValues[2] || 0) - (context.primary.slides.barValues[1] || 0)}pt` },
  ];

  return `
    <article class="slide-card slide-card--ref" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">01 Main</span>
      <div class="ppt-ref-head">
        <h3>${compactText(context.primary.slides.coverTitle, 16)}</h3>
        <span class="ppt-ref-page">01</span>
      </div>
      <div class="ppt-frame">
        <div class="ppt-col ppt-col--main">
          <div class="ppt-ref-copy">
            <p class="ppt-ref-kicker">${compactText(context.primary.previewLabel, 12)}</p>
            <p>${compactText(context.primary.slides.coverSubtitle, 24)}</p>
            <p>${compactText(context.primary.previewTone, 18)}</p>
          </div>
          <div class="ppt-chip-row">
            ${keyMetrics.map((item, index) => `
              <div class="ppt-chip" style="--chip:${shapePalette[index % shapePalette.length]};">
                <span>${item.label}</span>
                <strong>${item.value}</strong>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="ppt-col ppt-col--side">
          <div class="ppt-ref-panel">
            <div class="ppt-donut" style="--value:${donutValue};--donut-main:${shapePalette[0]};--donut-soft:${mixHex(shapePalette[0], "#FFFFFF", 0.8)};">
              <span>${donutValue}%</span>
            </div>
            <div class="ppt-micro-bars">
              ${context.primary.slides.barValues.map((value, index) => `
                <span
                  style="--h:${Math.max(18, value)}%;--tone:${shapePalette[index % shapePalette.length]};"
                ></span>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
      <div class="ppt-ref-footer">
        <span>${compactText("Executive summary", 12)}</span>
        <strong>${compactText(context.blendTag, 18)}</strong>
      </div>
    </article>
  `;
}

function renderContentsTemplateSlide(tokens, context) {
  const agendaCaptions = ["Background", "Objective", "Execution", "Impact"];
  const items = compactItems(context.primary.slides.agenda, 12, 4).map((item, index) => `
    <div class="ppt-step">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div>
        <strong>${item}</strong>
        <small>${compactText(agendaCaptions[index] || "Detail", 8)}</small>
      </div>
    </div>
  `).join("");
  const timeline = context.primary.slides.graphLabels.map((label, index) => `
    <div class="ppt-timeline-item">
      <span>${compactText(label, 8)}</span>
      <strong>${context.primary.slides.graphValues[index] || "-"}</strong>
    </div>
  `).join("");

  return `
    <article class="slide-card slide-card--ref" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">02 Contents</span>
      <div class="ppt-ref-head">
        <h3>목차</h3>
        <span class="ppt-ref-page">02</span>
      </div>
      <div class="ppt-frame">
        <div class="ppt-col ppt-col--main">
          <div class="ppt-ref-copy">
            <p class="ppt-ref-kicker">${compactText(context.summary, 14)}</p>
            <p>${compactText("핵심 흐름 한눈에 확인", 14)}</p>
          </div>
          <div class="ppt-track">${items}</div>
        </div>
        <div class="ppt-col ppt-col--side">
          <div class="ppt-ref-panel">
            <p class="ppt-ref-kicker">${compactText("Timeline", 8)}</p>
            <div class="ppt-timeline">${timeline}</div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderBodyTemplateSlide(tokens, context) {
  const bulletItems = compactItems(context.primary.slides.bullets, 18, 2).map((item) => `<li>${item}</li>`).join("");
  const highlightScores = context.primary.slides.barLabels.map((label, index) => `
    <div class="ppt-mini-stat">
      <span>${compactText(label, 7)}</span>
      <strong>${context.primary.slides.barValues[index] || 0}%</strong>
    </div>
  `).join("");

  return `
    <article class="slide-card slide-card--ref" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">03 Body</span>
      <div class="ppt-ref-head">
        <h3>본문</h3>
        <span class="ppt-ref-page">03</span>
      </div>
      <div class="ppt-frame">
        <div class="ppt-col ppt-col--main">
          <div class="ppt-ref-copy">
            <p class="ppt-ref-kicker">${compactText(context.primary.slides.highlightTitle, 11)}</p>
            <ul class="ppt-bullets">${bulletItems}</ul>
          </div>
        </div>
        <div class="ppt-col ppt-col--side">
          <div class="ppt-ref-panel">
            <div class="ppt-stat-box">
              <strong>${Math.max(...context.primary.slides.graphValues)}</strong>
              <span>Peak value</span>
            </div>
            <p>${compactText(context.primary.slides.highlightCopy, 18)}</p>
            <div class="ppt-mini-stat-grid">${highlightScores}</div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderTableTemplateSlide(tokens, context) {
  const tablePalette = [tokens.theme, tokens.secondary, tokens.tertiary, tokens.accentAlt, tokens.accent];
  const headerRow = context.primary.slides.tableHeaders.map((header, index) => `
    <th style="--th:${tablePalette[index % tablePalette.length]};">${compactText(header, 8)}</th>
  `).join("");
  const bodyRows = context.primary.slides.tableRows.map((row, rowIndex) => `
    <tr>
      ${row.map((cell, cellIndex) => `
        <td style="--cell:${tablePalette[(rowIndex + cellIndex) % tablePalette.length]};">${compactText(cell, 10)}</td>
      `).join("")}
    </tr>
  `).join("");
  const summaryCards = context.primary.slides.tableRows.map((row, index) => `
    <div class="ppt-mini-stat" style="--chip:${tablePalette[index % tablePalette.length]};">
      <span>${compactText(row[0], 8)}</span>
      <strong>${compactText(row[2], 8)}</strong>
    </div>
  `).join("");

  return `
    <article class="slide-card slide-card--ref" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">04 Table</span>
      <div class="ppt-ref-head">
        <h3>표</h3>
        <span class="ppt-ref-page">04</span>
      </div>
      <div class="ppt-frame">
        <div class="ppt-col ppt-col--main">
          <div class="ppt-ref-copy">
            <p class="ppt-ref-kicker">${compactText(`${context.primary.slides.tableHeaders[0]} 기준`, 10)}</p>
            <p>${compactText("표와 요약 지표 동시 배치", 14)}</p>
          </div>
          <table class="ppt-table">
            <thead><tr>${headerRow}</tr></thead>
            <tbody>${bodyRows}</tbody>
          </table>
        </div>
        <div class="ppt-col ppt-col--side">
          <div class="ppt-ref-panel">
            <p class="ppt-ref-kicker">${compactText("Status summary", 10)}</p>
            <div class="ppt-mini-stat-grid">${summaryCards}</div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderGraphTemplateSlide(tokens, context) {
  const graphValues = context.primary.slides.graphValues;
  const linePoints = createPolylinePoints(graphValues, 360, 140, 14);
  const comparePoints = createPolylinePoints(context.primary.slides.barValues, 360, 140, 14);
  const graphPalette = [tokens.theme, tokens.secondary, tokens.tertiary, tokens.accentAlt, tokens.accent];
  const linePath = linePoints.map((point) => `${point.x},${point.y}`).join(" ");
  const comparePath = comparePoints.map((point) => `${point.x},${point.y}`).join(" ");
  const labels = context.primary.slides.graphLabels.map((label) => `<span>${compactText(label, 8)}</span>`).join("");
  const bars = context.primary.slides.barValues.map((value, index) => `
    <div class="ppt-bar-col">
      <span style="--h:${Math.max(12, value)}%;--bar:${graphPalette[index % graphPalette.length]};"></span>
      <strong>${compactText(context.primary.slides.barLabels[index] || `S${index + 1}`, 8)}</strong>
    </div>
  `).join("");
  const graphSummary = [
    { label: "Start", value: graphValues[0] || 0 },
    { label: "Peak", value: Math.max(...graphValues) || 0 },
    { label: "End", value: graphValues[graphValues.length - 1] || 0 },
  ].map((item, index) => `
    <div class="ppt-mini-stat" style="--chip:${graphPalette[index % graphPalette.length]};">
      <span>${compactText(item.label, 7)}</span>
      <strong>${item.value}</strong>
    </div>
  `).join("");

  return `
    <article class="slide-card slide-card--ref" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">05 Graph</span>
      <div class="ppt-ref-head">
        <h3>그래프</h3>
        <span class="ppt-ref-page">05</span>
      </div>
      <div class="ppt-frame">
        <div class="ppt-col ppt-col--main">
          <div class="ppt-ref-panel">
            <svg class="ppt-line-chart" viewBox="0 0 360 140" aria-hidden="true" focusable="false">
              <polyline points="${linePath}" fill="none" stroke="var(--ppt-accent)" stroke-width="3"></polyline>
              <polyline points="${comparePath}" fill="none" stroke="${tokens.accentAlt}" stroke-width="2.5" stroke-dasharray="4 4"></polyline>
              ${linePoints.map((point, index) => `
                <circle cx="${point.x}" cy="${point.y}" r="3.5" fill="${graphPalette[index % graphPalette.length]}"></circle>
              `).join("")}
            </svg>
            <div class="ppt-graph-labels">${labels}</div>
          </div>
          <div class="ppt-bar-grid">${bars}</div>
        </div>
        <div class="ppt-col ppt-col--side">
          <div class="ppt-ref-panel">
            <p class="ppt-ref-kicker">${compactText("Trend summary", 10)}</p>
            <div class="ppt-mini-stat-grid">${graphSummary}</div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderIconTemplateSlide(tokens, context) {
  const iconPalette = [tokens.theme, tokens.secondary, tokens.tertiary, tokens.accentAlt, tokens.accent];
  const iconItems = context.primary.slides.agenda.map((item, index) => ({
    label: item,
    value: context.primary.slides.barValues[index] ?? context.primary.slides.graphValues[index] ?? 50,
    color: iconPalette[index % iconPalette.length],
    desc: context.primary.slides.bullets[index % context.primary.slides.bullets.length],
  }));

  const iconRows = iconItems.map((item) => `
    <div class="ppt-icon-item">
      <div class="ppt-icon-dot" style="--dot:${item.color};">${item.value}</div>
      <strong>${compactText(item.label, 6)}</strong>
      <small>${compactText(item.desc, 12)}</small>
    </div>
  `).join("");

  return `
    <article class="slide-card slide-card--ref" style="${buildSlideVars(tokens)}">
      <span class="slide-card__label">06 Icons</span>
      <div class="ppt-ref-head">
        <h3>아이콘</h3>
        <span class="ppt-ref-page">06</span>
      </div>
      <div class="ppt-frame">
        <div class="ppt-col ppt-col--main">
          <div class="ppt-ref-copy">
            <p class="ppt-ref-kicker">${compactText(context.primary.slides.footerNote, 12)}</p>
            <p>${compactText("단계별 수치 카드 구성", 10)}</p>
          </div>
          <div class="ppt-icon-grid">${iconRows}</div>
        </div>
        <div class="ppt-col ppt-col--side">
          <div class="ppt-ref-panel">
            <p class="ppt-ref-kicker">${compactText("Execution note", 8)}</p>
            <ul class="ppt-bullets">
              ${compactItems(context.primary.slides.bullets, 14, 3).map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </article>
  `;
}
function buildHarmonyPalette(baseHsl, profile, variant) {
  const wheelBaseHue = snapToColorWheel(baseHsl.h + profile.hueShift);
  const saturation = clamp(baseHsl.s + profile.saturationShift * 0.85 - profile.neutralBias * 10, 16, 92);
  const lightness = clamp(baseHsl.l + profile.lightShift * 0.5 + profile.contrast * 0.06 - profile.neutralBias * 3, 12, 88);
  const coreColors = buildCoreColors(wheelBaseHue, saturation, lightness, variant.mode, profile.contrast);
  const accentHex = buildAccentColor({ ...baseHsl, l: lightness }, profile, variant);
  const swatches = buildPaletteSwatches(coreColors, accentHex);

  return {
    id: variant.id,
    label: variant.label,
    short: variant.short,
    note: variant.note,
    groupLabel: variant.groupLabel,
    family: variant.family,
    colors: swatches.map((swatch) => swatch.hex),
    swatches,
    accentHex,
  };
}

function buildCoreColors(baseHue, saturation, lightness, mode, contrast = 0) {
  const contrastFactor = clamp(contrast / 26, 0.45, 1.8);

  if (mode === "monochromatic") {
    const monoLightOffsets = [-24, -12, 0, 10, 22].map((offset) => offset * contrastFactor);
    const monoSatOffsets = [10, 6, 0, -6, -12].map((offset) => offset * contrastFactor);
    return monoLightOffsets.map((lightOffset, index) => {
      const sat = clamp(saturation + monoSatOffsets[index], 18, 92);
      const lit = clamp(lightness + lightOffset, 10, 94);
      return hslToHex(baseHue, sat, lit);
    });
  }

  if (mode === "analogous") {
    const offsets = [-2, -1, 0, 1, 2];
    return offsets.map((stepOffset, index) => {
      const hue = wheelHueFromBase(baseHue, stepOffset);
      const sat = clamp(saturation + (index === 2 ? 6 : 0) * contrastFactor, 22, 92);
      const lit = clamp(lightness + (index - 2) * 7 * contrastFactor, 12, 90);
      return hslToHex(hue, sat, lit);
    });
  }

  if (mode === "complementary") {
    const hueSteps = [0, 0, 6, 6, 0];
    const satOffsets = [8, 0, 10, -4, -10].map((offset) => offset * contrastFactor);
    const lightOffsets = [-16, 4, -8, 10, 24].map((offset) => offset * contrastFactor);
    return hueSteps.map((stepOffset, index) => {
      const hue = wheelHueFromBase(baseHue, stepOffset);
      return hslToHex(
        hue,
        clamp(saturation + satOffsets[index], 20, 94),
        clamp(lightness + lightOffsets[index], 10, 92),
      );
    });
  }

  const splitHueSteps = [0, 0, 5, 7, 0];
  const splitSatOffsets = [6, 0, 8, 8, -10].map((offset) => offset * contrastFactor);
  const splitLightOffsets = [-14, 4, -6, 10, 24].map((offset) => offset * contrastFactor);
  return splitHueSteps.map((stepOffset, index) => {
    const hue = wheelHueFromBase(baseHue, stepOffset);
    return hslToHex(
      hue,
      clamp(saturation + splitSatOffsets[index], 20, 94),
      clamp(lightness + splitLightOffsets[index], 10, 92),
    );
  });
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

function derivePreviewTokens(palette) {
  const swatches = palette.swatches || palette.colors.map((hex) => ({ hex, isAccent: false }));
  const accent = swatches.find((swatch) => swatch.isAccent)?.hex || swatches[swatches.length - 1].hex;
  const bodyColors = swatches.filter((swatch) => !swatch.isAccent).map((swatch) => swatch.hex);
  const sortedBySaturation = [...bodyColors].sort((left, right) => rgbToHsl(hexToRgb(right)).s - rgbToHsl(hexToRgb(left)).s);
  const accentAlt = sortedBySaturation[0] || bodyColors[0] || accent;
  const secondary = sortedBySaturation[1] || bodyColors[1] || accentAlt;
  const tertiary = sortedBySaturation[2] || bodyColors[2] || secondary;

  return {
    bg: "#FFFFFF",
    ink: "#111111",
    muted: "#666A73",
    line: "#E6E9F0",
    accent,
    accentAlt,
    secondary,
    tertiary,
    theme: secondary,
    themeSoft: mixHex(secondary, "#FFFFFF", 0.82),
    themeLight: mixHex(secondary, "#FFFFFF", 0.68),
    accentSoft: mixHex(accent, "#FFFFFF", 0.82),
    accentLight: mixHex(accent, "#FFFFFF", 0.68),
    accentAltSoft: mixHex(accentAlt, "#FFFFFF", 0.78),
  };
}

function buildSlideVars(tokens) {
  return [
    `--ppt-bg:${tokens.bg}`,
    `--ppt-ink:${tokens.ink}`,
    `--ppt-muted:${tokens.muted}`,
    `--ppt-line:${tokens.line}`,
    `--ppt-accent:${tokens.accent}`,
    `--ppt-theme:${tokens.theme}`,
    `--ppt-theme-soft:${tokens.themeSoft}`,
    `--ppt-theme-light:${tokens.themeLight}`,
    `--ppt-accent-soft:${tokens.accentSoft}`,
    `--ppt-accent-light:${tokens.accentLight}`,
    `--ppt-accent-alt:${tokens.accentAlt}`,
    `--ppt-accent-alt-soft:${tokens.accentAltSoft}`,
    `--ppt-secondary:${tokens.secondary}`,
    `--ppt-tertiary:${tokens.tertiary}`,
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

async function copyPaletteImage(palette) {
  if (!navigator.clipboard || typeof ClipboardItem === "undefined") {
    throw new Error("Image clipboard API is not supported.");
  }

  const swatches = palette.swatches || palette.colors.map((hex) => ({ hex, isAccent: false }));
  const canvas = document.createElement("canvas");
  const width = 960;
  const height = 180;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas context is unavailable.");
  }

  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, width, height);
  const stripX = 0;
  const stripY = 0;
  const stripW = width;
  const stripH = height;
  const cellW = stripW / swatches.length;

  swatches.forEach((swatch, index) => {
    const x = stripX + cellW * index;
    const isLast = index === swatches.length - 1;
    const w = isLast ? stripX + stripW - x : cellW;
    const hex = swatch.hex;
    ctx.fillStyle = hex;
    ctx.fillRect(x, stripY, w, stripH);

    const textColor = getReadableTextColor(hex).includes("255") ? "#FFFFFF" : "#10131C";
    ctx.fillStyle = textColor;
    ctx.font = "700 22px Space Grotesk, Pretendard, sans-serif";
    ctx.fillText(hex.toUpperCase(), x + 14, stripY + stripH - 20);
  });

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) {
    throw new Error("Unable to create image blob.");
  }

  await navigator.clipboard.write([
    new ClipboardItem({
      "image/png": blob,
    }),
  ]);
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

function createAreaPath(points, height, padding) {
  if (!points.length) {
    return "";
  }

  const baseY = height - padding;
  return [
    `M ${points[0].x} ${baseY}`,
    ...points.map((point) => `L ${point.x} ${point.y}`),
    `L ${points[points.length - 1].x} ${baseY}`,
    "Z",
  ].join(" ");
}

function snapToColorWheel(hue) {
  return wrapHue(Math.round(hue / COLOR_WHEEL_UNIT) * COLOR_WHEEL_UNIT);
}

function wheelHueFromBase(baseHue, stepOffset) {
  return wrapHue(baseHue + stepOffset * COLOR_WHEEL_UNIT);
}

function buildPaletteSwatches(coreColors, accentHex) {
  return [
    ...coreColors.map((hex) => ({ hex, isAccent: false })),
    { hex: accentHex, isAccent: true, label: "강조색" },
  ];
}

function buildAccentColor(baseHsl, profile, variant) {
  const wheelBaseHue = snapToColorWheel(baseHsl.h + profile.hueShift);
  const hue = wheelHueFromBase(wheelBaseHue, variant.accentHueStep ?? 6);
  const saturation = clamp(88 + profile.contrast * 0.14 - profile.neutralBias * 8, 78, 98);
  const lightness = clamp(baseHsl.l + (baseHsl.l > 56 ? -8 : 10), 32, 68);

  return hslToHex(hue, saturation, lightness);
}

function buildTableSummary(rows) {
  return rows.slice(0, 3).map((row, index) => {
    const target = parseMetricNumber(row[1]);
    const actual = parseMetricNumber(row[2]);
    const fill = target !== null && actual !== null && target > 0
      ? clamp((actual / Math.max(target, actual)) * 100, 24, 96)
      : clamp((actual || 48 + index * 12), 24, 96);

    return {
      label: row[0],
      value: `${Math.round(fill)}%`,
      fill: Math.round(fill),
      caption: String(row[3]),
    };
  });
}

function parseMetricNumber(value) {
  const match = String(value).match(/-?\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : null;
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

function getBinaryTextColor(hex) {
  return getRelativeLuminance(hexToRgb(hex)) > 0.48 ? "#111111" : "#FFFFFF";
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
