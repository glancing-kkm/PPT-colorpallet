const PURPOSES = {
  report: {
    label: "보고서",
    description: "보고용 톤을 기준으로 안정적인 팔레트를 생성합니다.",
    copy: "에디토리얼 보고서와 정리형 발표에 맞는 차분한 대비 구조로 계산됩니다.",
    version: "v2.5 Editorial Report",
    hueShift: 0,
    accentShift: 36,
    saturationBias: -4,
    lightnessBias: -6,
    neutralBias: 0.78,
    contrastBias: 0.26,
  },
  proposal: {
    label: "제안서",
    description: "선명한 대비와 설득력 있는 하이라이트를 강화합니다.",
    copy: "피치 덱과 제안서에서 메시지가 먼저 보이도록 대비와 채도를 끌어올립니다.",
    version: "v2.5 Pitch Bright",
    hueShift: 10,
    accentShift: 22,
    saturationBias: 12,
    lightnessBias: 4,
    neutralBias: 0.72,
    contrastBias: 0.36,
  },
  planning: {
    label: "기획서",
    description: "차분하고 안정적인 실행 톤으로 구조를 정리합니다.",
    copy: "로드맵, 운영안, 실행 문서에 맞는 안정적인 명도 차와 온도를 유지합니다.",
    version: "v2.5 Planning Calm",
    hueShift: -18,
    accentShift: -28,
    saturationBias: -12,
    lightnessBias: 10,
    neutralBias: 0.84,
    contrastBias: 0.18,
  },
  analysis: {
    label: "분석",
    description: "데이터 가독성을 위한 선명도와 명확한 대비를 확보합니다.",
    copy: "리서치와 분석 자료에서 수치 구분이 또렷하도록 대비를 더 강하게 잡습니다.",
    version: "v2.5 Data Crisp",
    hueShift: -34,
    accentShift: -52,
    saturationBias: 6,
    lightnessBias: -4,
    neutralBias: 0.76,
    contrastBias: 0.42,
  },
  submission: {
    label: "제출용",
    description: "무난하고 보수적인 인상으로 공적인 문서 톤에 맞춥니다.",
    copy: "공식 제출물에서 과한 개성을 줄이고 단정한 인상을 유지하도록 정리됩니다.",
    version: "v2.5 Formal Neutral",
    hueShift: 4,
    accentShift: 12,
    saturationBias: -20,
    lightnessBias: 12,
    neutralBias: 0.88,
    contrastBias: 0.12,
  },
};

const VARIANTS = [
  { name: "editorial", hueNudge: 0, lightNudge: 0, saturationNudge: 0 },
  { name: "bright", hueNudge: 8, lightNudge: 6, saturationNudge: 8 },
  { name: "calm", hueNudge: -12, lightNudge: 8, saturationNudge: -10 },
  { name: "contrast", hueNudge: 18, lightNudge: -8, saturationNudge: 12 },
];

const refs = {};

const state = {
  baseHex: "#0052D0",
  purpose: "report",
  variantIndex: 0,
  locked: false,
  palette: null,
  copyTimer: null,
  toastTimer: null,
};

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("baseHexInput")) return;
  bindRefs();
  bindEvents();
  syncUI();
  refreshExperience(true);
});

function bindRefs() {
  refs.root = document.documentElement;
  refs.body = document.body;
  refs.baseHexInput = document.getElementById("baseHexInput");
  refs.anchorSwatch = document.getElementById("anchorSwatch");
  refs.uploadZone = document.getElementById("uploadZone");
  refs.imageInput = document.getElementById("imageInput");
  refs.uploadFeedback = document.getElementById("uploadFeedback");
  refs.purposeGrid = document.getElementById("purposeGrid");
  refs.purposeSummary = document.getElementById("purposeSummary");
  refs.paletteDescription = document.getElementById("paletteDescription");
  refs.generateButton = document.getElementById("generateButton");
  refs.newPaletteButton = document.getElementById("newPaletteButton");
  refs.lockPaletteButton = document.getElementById("lockPaletteButton");
  refs.refreshPaletteButton = document.getElementById("refreshPaletteButton");
  refs.lockIcon = document.getElementById("lockIcon");
  refs.sidebarVersion = document.getElementById("sidebarVersion");
  refs.paletteBands = Array.from(document.querySelectorAll(".palette-band"));
  refs.copyPaletteButton = document.getElementById("copyPaletteButton");
  refs.downloadThemeButton = document.getElementById("downloadThemeButton");
  refs.copyToast = document.getElementById("copyToast");
  refs.labelPrimary = document.getElementById("labelPrimary");
  refs.labelSecondary = document.getElementById("labelSecondary");
  refs.labelNeutral = document.getElementById("labelNeutral");
  refs.labelAccent = document.getElementById("labelAccent");
  refs.labelSupport = document.getElementById("labelSupport");
  refs.labelDark = document.getElementById("labelDark");
}

function bindEvents() {
  refs.baseHexInput.addEventListener("change", handleHexCommit);
  refs.baseHexInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") handleHexCommit();
  });

  refs.purposeGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".purpose-card");
    if (!card) return;
    setLocked(false);
    state.purpose = card.dataset.purpose;
    syncPurposeCards();
    refreshExperience(true);
  });

  refs.generateButton.addEventListener("click", () => {
    setLocked(false);
    rotateVariant();
    refreshExperience(true);
    setFeedback("팔레트 구성을 새 방향으로 재생성했습니다.");
  });

  refs.newPaletteButton.addEventListener("click", () => {
    setLocked(false);
    state.variantIndex = Math.floor(Math.random() * VARIANTS.length);
    state.baseHex = randomCuratedHex();
    refs.baseHexInput.value = state.baseHex;
    refreshExperience(true);
    setFeedback("새 팔레트 기준색을 생성했습니다.");
  });

  refs.refreshPaletteButton.addEventListener("click", () => {
    if (state.locked) {
      setFeedback("잠금 상태에서는 팔레트를 새로고침할 수 없습니다.");
      return;
    }
    rotateVariant();
    refreshExperience(true);
    setFeedback("추천 팔레트 변형을 다시 계산했습니다.");
  });

  refs.lockPaletteButton.addEventListener("click", () => {
    setLocked(!state.locked);
    setFeedback(state.locked ? "현재 팔레트를 잠갔습니다." : "팔레트 잠금을 해제했습니다.");
  });

  refs.copyPaletteButton.addEventListener("click", async () => {
    if (!state.palette) return;
    try {
      await copyPaletteImageToClipboard(state.palette);
      showCopyToast("팔레트 이미지를 클립보드에 복사했습니다.");
    } catch {
      const payload = [
        `Primary ${state.palette.primary}`,
        `Secondary ${state.palette.secondary}`,
        `Neutral ${state.palette.neutral}`,
        `Accent ${state.palette.accent}`,
        `Support ${state.palette.support}`,
        `Dark ${state.palette.dark}`,
      ].join("\n");
      await copyToClipboard(payload);
      showCopyToast("이미지 복사에 실패해 색상 텍스트로 복사했습니다.");
    }
  });

  refs.downloadThemeButton.addEventListener("click", async () => {
    if (!state.palette) return;
    const blob = buildThemeBlob(state.palette, PURPOSES[state.purpose].label);
    downloadBlob(blob, buildThemeFileName());
    showCopyToast(".thmx 테마 파일을 다운로드했습니다.");
  });

  for (const eventName of ["dragenter", "dragover"]) {
    refs.uploadZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      refs.uploadZone.classList.add("is-dragging");
    });
  }

  for (const eventName of ["dragleave", "drop"]) {
    refs.uploadZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      refs.uploadZone.classList.remove("is-dragging");
    });
  }

  refs.uploadZone.addEventListener("drop", async (event) => {
    const [file] = event.dataTransfer.files;
    if (file) await applyImageColor(file);
  });

  refs.imageInput.addEventListener("change", async (event) => {
    const [file] = event.target.files;
    if (file) await applyImageColor(file);
  });

  refs.paletteBands.forEach((band) => {
    band.addEventListener("click", async () => {
      const hex = band.dataset.hex;
      if (!hex) return;
      await copyToClipboard(hex);
      flashBand(band);
      setFeedback(`${hex} 색상 코드를 복사했습니다.`);
    });
  });
}

function handleHexCommit() {
  const normalized = normalizeHex(refs.baseHexInput.value);
  if (!normalized) {
    refs.baseHexInput.value = state.baseHex;
    setFeedback("HEX 형식은 #RRGGBB 로 입력해 주세요.");
    return;
  }
  setLocked(false);
  state.baseHex = normalized;
  refs.baseHexInput.value = normalized;
  refreshExperience(true);
  setFeedback("기준색을 직접 업데이트했습니다.");
}

function syncUI() {
  syncPurposeCards();
  setLocked(false);
}

function syncPurposeCards() {
  refs.purposeGrid.querySelectorAll(".purpose-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.purpose === state.purpose);
  });
}

function refreshExperience(force = false) {
  if (state.locked && !force) return;

  const palette = buildPalette(state.baseHex, PURPOSES[state.purpose], VARIANTS[state.variantIndex]);
  state.palette = palette;
  applyPalette(palette);
  updateText(palette);
}

function applyPalette(palette) {
  setCssVar("--primary", palette.primary);
  setCssVar("--primary-container", palette.secondary);
  setCssVar("--neutral", palette.neutral);
  setCssVar("--accent", palette.accent);
  setCssVar("--support", palette.support);
  setCssVar("--dark", palette.dark);

  refs.anchorSwatch.style.backgroundColor = palette.primary;
  refs.labelPrimary.textContent = palette.primary;
  refs.labelSecondary.textContent = palette.secondary;
  refs.labelNeutral.textContent = palette.neutral;
  refs.labelAccent.textContent = palette.accent;
  refs.labelSupport.textContent = palette.support;
  refs.labelDark.textContent = palette.dark;

  const values = {
    primary: palette.primary,
    secondary: palette.secondary,
    neutral: palette.neutral,
    accent: palette.accent,
    support: palette.support,
    dark: palette.dark,
  };

  refs.paletteBands.forEach((band) => {
    const role = band.dataset.role;
    const color = values[role];
    if (!color) return;
    band.style.backgroundColor = color;
    band.dataset.hex = color;
  });
}

function updateText(palette) {
  const purpose = PURPOSES[state.purpose];
  const variant = VARIANTS[state.variantIndex];
  refs.purposeSummary.textContent = purpose.description;
  refs.paletteDescription.textContent = `${purpose.copy} 현재 변형: ${variant.name}.`;
  refs.sidebarVersion.textContent = purpose.version;
  refs.generateButton.dataset.variant = variant.name;
  refs.baseHexInput.value = state.baseHex;

  refs.paletteBands.forEach((band) => {
    band.title = `${band.dataset.hex} 클릭 시 복사`;
  });

  refs.body.dataset.variant = variant.name;
  refs.body.dataset.primary = palette.primary;
}

function setCssVar(name, value) {
  refs.body.style.setProperty(name, value);
}

function setLocked(nextLocked) {
  state.locked = nextLocked;
  refs.lockPaletteButton.setAttribute("aria-pressed", String(nextLocked));
  refs.lockIcon.textContent = nextLocked ? "lock" : "lock_open";
  refs.lockPaletteButton.style.color = nextLocked ? "var(--primary)" : "";
}

function rotateVariant() {
  state.variantIndex = (state.variantIndex + 1) % VARIANTS.length;
}

function buildPalette(baseHex, purpose, variant) {
  const baseHsl = rgbToHslObject(hexToRgb(baseHex));
  const tunedPrimary = hslToHex({
    h: wrapHue(baseHsl.h + purpose.hueShift + variant.hueNudge * 0.35),
    s: clamp(baseHsl.s + purpose.saturationBias + variant.saturationNudge * 0.4, 28, 88),
    l: clamp(baseHsl.l + purpose.lightnessBias * 0.4 + variant.lightNudge * 0.2, 22, 62),
  });

  const primaryHsl = rgbToHslObject(hexToRgb(tunedPrimary));
  const contrastLift = 28 + purpose.contrastBias * 18 + variant.lightNudge * 0.4;
  const secondary = hslToHex({
    h: wrapHue(primaryHsl.h + variant.hueNudge * 0.6),
    s: clamp(primaryHsl.s * 0.52 + 8, 18, 68),
    l: clamp(primaryHsl.l + contrastLift, 62, 84),
  });

  const neutral = mixHex(tunedPrimary, "#F5F6F7", clamp(purpose.neutralBias + variant.lightNudge * 0.005, 0.66, 0.9));
  const accent = hslToHex({
    h: wrapHue(primaryHsl.h + purpose.accentShift + variant.hueNudge),
    s: clamp(primaryHsl.s + 6 + purpose.contrastBias * 20 + variant.saturationNudge * 0.6, 28, 88),
    l: clamp(44 + purpose.lightnessBias * 0.3 - variant.lightNudge * 0.25, 28, 62),
  });
  const support = hslToHex({
    h: wrapHue(primaryHsl.h - purpose.accentShift * 0.55 + variant.hueNudge * 0.35),
    s: clamp(primaryHsl.s * 0.72 + 4 + variant.saturationNudge * 0.3, 22, 84),
    l: clamp(primaryHsl.l + 8 + variant.lightNudge * 0.4, 34, 72),
  });
  const dark = hslToHex({
    h: wrapHue(primaryHsl.h + variant.hueNudge * 0.2),
    s: clamp(primaryHsl.s * 0.38, 10, 28),
    l: clamp(10 + purpose.contrastBias * 8, 8, 20),
  });

  return { primary: tunedPrimary, secondary, neutral, accent, support, dark };
}

async function applyImageColor(file) {
  try {
    const extracted = await readImageAverage(file);
    setLocked(false);
    state.baseHex = extracted;
    refs.baseHexInput.value = extracted;
    refreshExperience(true);
    setFeedback("이미지 평균색을 기준색으로 반영했습니다.");
  } catch {
    setFeedback("이미지에서 색을 읽지 못했습니다.");
  }
}

function normalizeHex(value) {
  let hex = String(value).trim().toUpperCase();
  if (!hex.startsWith("#")) hex = `#${hex}`;
  return /^#[0-9A-F]{6}$/.test(hex) ? hex : null;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function wrapHue(value) {
  const wrapped = value % 360;
  return wrapped < 0 ? wrapped + 360 : wrapped;
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}

function rgbToHslObject({ r, g, b }) {
  let red = r / 255;
  let green = g / 255;
  let blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const light = (max + min) / 2;
  const delta = max - min;
  let hue = 0;
  let sat = 0;

  if (delta !== 0) {
    sat = delta / (1 - Math.abs(2 * light - 1));
    if (max === red) hue = 60 * (((green - blue) / delta) % 6);
    else if (max === green) hue = 60 * ((blue - red) / delta + 2);
    else hue = 60 * ((red - green) / delta + 4);
  }

  if (hue < 0) hue += 360;
  return { h: hue, s: sat * 100, l: light * 100 };
}

function hslToHex({ h, s, l }) {
  const rgb = hslToRgb(h, s, l);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

function hslToRgb(h, s, l) {
  const sat = s / 100;
  const light = l / 100;
  const c = (1 - Math.abs(2 * light - 1)) * sat;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = light - c / 2;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (h < 60) [red, green, blue] = [c, x, 0];
  else if (h < 120) [red, green, blue] = [x, c, 0];
  else if (h < 180) [red, green, blue] = [0, c, x];
  else if (h < 240) [red, green, blue] = [0, x, c];
  else if (h < 300) [red, green, blue] = [x, 0, c];
  else [red, green, blue] = [c, 0, x];

  return {
    r: (red + m) * 255,
    g: (green + m) * 255,
    b: (blue + m) * 255,
  };
}

function mixHex(hexA, hexB, ratio) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  return rgbToHex(
    a.r * (1 - ratio) + b.r * ratio,
    a.g * (1 - ratio) + b.g * ratio,
    a.b * (1 - ratio) + b.b * ratio
  );
}

function randomCuratedHex() {
  const hue = Math.random() * 360;
  const saturation = 54 + Math.random() * 24;
  const lightness = 38 + Math.random() * 12;
  return hslToHex({ h: hue, s: saturation, l: lightness });
}

function readImageAverage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d", { willReadFrequently: true });
        const width = 36;
        const height = Math.max(1, Math.round((img.height / img.width) * width));
        canvas.width = width;
        canvas.height = height;
        context.drawImage(img, 0, 0, width, height);
        const { data } = context.getImageData(0, 0, width, height);
        let red = 0;
        let green = 0;
        let blue = 0;
        let count = 0;

        for (let index = 0; index < data.length; index += 4) {
          if (data[index + 3] < 120) continue;
          red += data[index];
          green += data[index + 1];
          blue += data[index + 2];
          count += 1;
        }

        if (!count) {
          reject(new Error("No visible pixels"));
          return;
        }

        resolve(rgbToHex(red / count, green / count, blue / count));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
}

function flashBand(band) {
  band.classList.add("is-copied");
  window.clearTimeout(state.copyTimer);
  state.copyTimer = window.setTimeout(() => {
    band.classList.remove("is-copied");
  }, 220);
}

function setFeedback(message) {
  refs.uploadFeedback.textContent = message;
}

function showCopyToast(message) {
  if (!refs.copyToast) return;
  refs.copyToast.textContent = message;
  refs.copyToast.classList.add("is-visible");
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    refs.copyToast.classList.remove("is-visible");
  }, 1800);
}

async function copyPaletteImageToClipboard(palette) {
  if (!navigator.clipboard || typeof ClipboardItem === "undefined") {
    throw new Error("Clipboard image unsupported");
  }

  const blob = await renderPaletteImageBlob(palette);
  await navigator.clipboard.write([
    new ClipboardItem({
      "image/png": blob,
    }),
  ]);
}

function renderPaletteImageBlob(palette) {
  const width = 1400;
  const height = 380;
  const padding = 28;
  const radius = 36;
  const labelHeight = 78;
  const colors = [
    { name: "Primary", hex: palette.primary, text: "#FFFFFF" },
    { name: "Secondary", hex: palette.secondary, text: "#FFFFFF" },
    { name: "Neutral", hex: palette.neutral, text: "#101214" },
    { name: "Accent", hex: palette.accent, text: "#FFFFFF" },
    { name: "Support", hex: palette.support, text: "#FFFFFF" },
    { name: "Dark", hex: palette.dark, text: "#FFFFFF" },
  ];

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#F5F6F7";
  ctx.fillRect(0, 0, width, height);

  drawRoundedRect(ctx, padding, padding, width - padding * 2, height - padding * 2, radius);
  ctx.save();
  ctx.clip();

  const bandWidth = (width - padding * 2) / colors.length;
  colors.forEach((color, index) => {
    const x = padding + bandWidth * index;
    ctx.fillStyle = color.hex;
    ctx.fillRect(x, padding, bandWidth + 1, height - padding * 2);

    const gradient = ctx.createLinearGradient(0, height - padding - labelHeight, 0, height - padding);
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(1, color.text === "#101214" ? "rgba(255,255,255,0.34)" : "rgba(0,0,0,0.32)");
    ctx.fillStyle = gradient;
    ctx.fillRect(x, height - padding - labelHeight, bandWidth + 1, labelHeight);

    ctx.fillStyle = color.text;
    ctx.textAlign = "left";
    ctx.font = "700 26px Inter, sans-serif";
    ctx.fillText(color.hex, x + 22, height - padding - 30);
    ctx.font = "500 18px Inter, sans-serif";
    ctx.globalAlpha = color.text === "#101214" ? 0.65 : 0.78;
    ctx.fillText(color.name, x + 22, height - padding - 8);
    ctx.globalAlpha = 1;
  });

  ctx.restore();

  ctx.strokeStyle = "rgba(12, 15, 16, 0.06)";
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, padding, padding, width - padding * 2, height - padding * 2, radius);
  ctx.stroke();

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Palette blob render failed"));
    }, "image/png");
  });
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function buildThemeFileName() {
  const purpose = PURPOSES[state.purpose].label.replace(/\s+/g, "-");
  return `chromatic-curator-${purpose.toLowerCase()}.thmx`;
}

function buildThemeBlob(palette, purposeLabel) {
  const themeXml = buildThemeXml(palette, purposeLabel);
  const files = [
    { name: "[Content_Types].xml", data: xmlBytes(buildContentTypesXml()) },
    { name: "_rels/.rels", data: xmlBytes(buildRootRelsXml()) },
    { name: "theme/theme/themeManager.xml", data: xmlBytes(buildThemeManagerXml()) },
    { name: "theme/theme/_rels/themeManager.xml.rels", data: xmlBytes(buildThemeManagerRelsXml()) },
    { name: "theme/theme/theme1.xml", data: xmlBytes(themeXml) },
  ];

  return new Blob([createStoredZip(files)], {
    type: "application/vnd.ms-officetheme",
  });
}

function buildContentTypesXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/theme/theme/themeManager.xml" ContentType="application/vnd.openxmlformats-officedocument.themeManager+xml"/>
  <Override PartName="/theme/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
</Types>`;
}

function buildRootRelsXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/themeManager" Target="theme/theme/themeManager.xml"/>
</Relationships>`;
}

function buildThemeManagerXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:themeManager xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"/>`;
}

function buildThemeManagerRelsXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme1.xml"/>
</Relationships>`;
}

function buildThemeXml(palette, purposeLabel) {
  const name = xmlEscape(`Chromatic Curator ${purposeLabel}`);
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="${name}">
  <a:themeElements>
    <a:clrScheme name="${name}">
      <a:dk1><a:srgbClr val="0C0F10"/></a:dk1>
      <a:lt1><a:srgbClr val="FFFFFF"/></a:lt1>
      <a:dk2><a:srgbClr val="${stripHash(palette.dark)}"/></a:dk2>
      <a:lt2><a:srgbClr val="${stripHash(palette.neutral)}"/></a:lt2>
      <a:accent1><a:srgbClr val="${stripHash(palette.primary)}"/></a:accent1>
      <a:accent2><a:srgbClr val="${stripHash(palette.secondary)}"/></a:accent2>
      <a:accent3><a:srgbClr val="${stripHash(palette.neutral)}"/></a:accent3>
      <a:accent4><a:srgbClr val="${stripHash(palette.accent)}"/></a:accent4>
      <a:accent5><a:srgbClr val="${stripHash(palette.support)}"/></a:accent5>
      <a:accent6><a:srgbClr val="${stripHash(palette.dark)}"/></a:accent6>
      <a:hlink><a:srgbClr val="${stripHash(palette.primary)}"/></a:hlink>
      <a:folHlink><a:srgbClr val="${stripHash(palette.accent)}"/></a:folHlink>
    </a:clrScheme>
    <a:fontScheme name="${name}">
      <a:majorFont>
        <a:latin typeface="Aptos Display"/>
        <a:ea typeface="Malgun Gothic"/>
        <a:cs typeface="Arial"/>
      </a:majorFont>
      <a:minorFont>
        <a:latin typeface="Aptos"/>
        <a:ea typeface="Malgun Gothic"/>
        <a:cs typeface="Arial"/>
      </a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="${name}">
      <a:fillStyleLst>
        <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>
            <a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>
          </a:gsLst>
          <a:lin ang="5400000" scaled="0"/>
        </a:gradFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:gs>
            <a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="55000"/><a:satMod val="130000"/></a:schemeClr></a:gs>
            <a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="25000"/><a:satMod val="120000"/></a:schemeClr></a:gs>
          </a:gsLst>
          <a:lin ang="5400000" scaled="0"/>
        </a:gradFill>
      </a:fillStyleLst>
      <a:lnStyleLst>
        <a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln>
        <a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln>
        <a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln>
      </a:lnStyleLst>
      <a:effectStyleLst>
        <a:effectStyle><a:effectLst/></a:effectStyle>
        <a:effectStyle><a:effectLst/></a:effectStyle>
        <a:effectStyle><a:effectLst/></a:effectStyle>
      </a:effectStyleLst>
      <a:bgFillStyleLst>
        <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
        <a:solidFill><a:schemeClr val="lt1"/></a:solidFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0"><a:schemeClr val="lt2"/></a:gs>
            <a:gs pos="100000"><a:schemeClr val="lt1"/></a:gs>
          </a:gsLst>
          <a:lin ang="5400000" scaled="0"/>
        </a:gradFill>
      </a:bgFillStyleLst>
    </a:fmtScheme>
  </a:themeElements>
  <a:objectDefaults/>
  <a:extraClrSchemeLst/>
</a:theme>`;
}

function xmlBytes(text) {
  return new TextEncoder().encode(text);
}

function stripHash(hex) {
  return hex.replace("#", "");
}

function xmlEscape(text) {
  return text.replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function createStoredZip(entries) {
  const localChunks = [];
  const centralChunks = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBytes = new TextEncoder().encode(entry.name);
    const data = entry.data;
    const crc = crc32(data);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, 0, true);
    localView.setUint16(8, 0, true);
    localView.setUint16(10, 0, true);
    localView.setUint16(12, 0, true);
    localView.setUint32(14, crc, true);
    localView.setUint32(18, data.length, true);
    localView.setUint32(22, data.length, true);
    localView.setUint16(26, nameBytes.length, true);
    localView.setUint16(28, 0, true);
    localHeader.set(nameBytes, 30);
    localChunks.push(localHeader, data);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, 0, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint16(12, 0, true);
    centralView.setUint16(14, 0, true);
    centralView.setUint32(16, crc, true);
    centralView.setUint32(20, data.length, true);
    centralView.setUint32(24, data.length, true);
    centralView.setUint16(28, nameBytes.length, true);
    centralView.setUint16(30, 0, true);
    centralView.setUint16(32, 0, true);
    centralView.setUint16(34, 0, true);
    centralView.setUint16(36, 0, true);
    centralView.setUint32(38, 0, true);
    centralView.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);
    centralChunks.push(centralHeader);

    offset += localHeader.length + data.length;
  }

  const centralSize = centralChunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const endRecord = new Uint8Array(22);
  const endView = new DataView(endRecord.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(4, 0, true);
  endView.setUint16(6, 0, true);
  endView.setUint16(8, entries.length, true);
  endView.setUint16(10, entries.length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, offset, true);
  endView.setUint16(20, 0, true);

  return new Blob([...localChunks, ...centralChunks, endRecord]);
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let index = 0; index < bytes.length; index += 1) {
    crc = CRC_TABLE[(crc ^ bytes[index]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}
