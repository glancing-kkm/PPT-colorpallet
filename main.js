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
  refs.labelPrimary = document.getElementById("labelPrimary");
  refs.labelSecondary = document.getElementById("labelSecondary");
  refs.labelNeutral = document.getElementById("labelNeutral");
  refs.labelAccent = document.getElementById("labelAccent");
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
  setCssVar("--dark", palette.dark);

  refs.anchorSwatch.style.backgroundColor = palette.primary;
  refs.labelPrimary.textContent = palette.primary;
  refs.labelSecondary.textContent = palette.secondary;
  refs.labelNeutral.textContent = palette.neutral;
  refs.labelAccent.textContent = palette.accent;
  refs.labelDark.textContent = palette.dark;

  const values = {
    primary: palette.primary,
    secondary: palette.secondary,
    neutral: palette.neutral,
    accent: palette.accent,
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
  const dark = hslToHex({
    h: wrapHue(primaryHsl.h + variant.hueNudge * 0.2),
    s: clamp(primaryHsl.s * 0.38, 10, 28),
    l: clamp(10 + purpose.contrastBias * 8, 8, 20),
  });

  return { primary: tunedPrimary, secondary, neutral, accent, dark };
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
