/**
 * Campus Operations – Ring Transit Optimization (MVP)
 * Not: Bu dosyadaki tüm veriler eğitim amaçlı simülasyon (Demo Data) verileridir.
 */

const STORAGE_KEY = "team_duo_ring_mvp_state_v1";
const STEP_MINUTES = 2;

const INITIAL_STOPS = [
  {
    id: "durak-a",
    stopName: "Durak A",
    ringCode: "Ring-101 (Demo)",
    etaMinutes: 6,
    baseEta: 10,
    capacity: 40,
    passengers: 14, // %35 -> Müsait
    passengerDelta: 4
  },
  {
    id: "durak-b",
    stopName: "Durak B",
    ringCode: "Ring-102 (Demo)",
    etaMinutes: 2,
    baseEta: 8,
    capacity: 40,
    passengers: 30, // %75 -> Yoğun
    passengerDelta: 3
  },
  {
    id: "durak-c",
    stopName: "Durak C",
    ringCode: "Ring-103 (Demo)",
    etaMinutes: 10,
    baseEta: 12,
    capacity: 40,
    passengers: 38, // %95 -> Dolu
    passengerDelta: -5
  }
];

function cloneInitialState() {
  return {
    step: 0,
    stops: INITIAL_STOPS.map((stop) => ({ ...stop }))
  };
}

/**
 * Yolcu sayısı ve kapasiteye göre tutarlı doluluk durumu hesaplar.
 */
function getOccupancyInfo(passengers, capacity) {
  const safePassengers = Math.max(0, Math.min(passengers, capacity));
  const ratio = safePassengers / capacity;

  if (ratio < 0.5) {
    return { label: "Müsait", className: "status-available", percent: Math.round(ratio * 100) };
  }
  if (ratio <= 0.85) {
    return { label: "Yoğun", className: "status-busy", percent: Math.round(ratio * 100) };
  }
  return { label: "Dolu", className: "status-full", percent: Math.round(ratio * 100) };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return cloneInitialState();

    const parsed = JSON.parse(saved);
    if (typeof parsed.step === "number" && Array.isArray(parsed.stops) && parsed.stops.length > 0) {
      return parsed;
    }
  } catch (error) {
    console.warn("LocalStorage okunamadı, varsayılan simülasyon verisi kullanılıyor.", error);
  }
  return cloneInitialState();
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("LocalStorage kaydı yapılamadı.", error);
  }
}

/**
 * Simülasyonu 1 adım ilerletir. ETA hiçbir zaman negatif olmaz.
 */
function advanceSimulation(state) {
  state.step += 1;

  state.stops = state.stops.map((stop) => {
    let nextEta;
    let nextPassengers;

    if (stop.etaMinutes === 0) {
      // Duraktaki ring ayrıldı; sıradaki örnek ring döngüsü başlar
      nextEta = stop.baseEta;
      nextPassengers = Math.max(8, Math.min(stop.capacity, 14 + ((state.step * 5) % 24)));
    } else {
      nextEta = Math.max(0, stop.etaMinutes - STEP_MINUTES);

      if (nextEta === 0) {
        // Araç durağa ulaştı: yolcu iniş/biniş simülasyonu
        nextPassengers = Math.max(6, Math.min(stop.capacity, stop.passengers - 10));
      } else {
        // Araç yolda: kademeli yolcu değişimi
        const updated = stop.passengers + stop.passengerDelta;
        nextPassengers = Math.max(4, Math.min(stop.capacity, updated));
      }
    }

    return {
      ...stop,
      etaMinutes: nextEta,
      passengers: nextPassengers
    };
  });

  saveState(state);
  render(state);
}

function resetSimulation() {
  localStorage.removeItem(STORAGE_KEY);
  const freshState = cloneInitialState();
  render(freshState);
  return freshState;
}

function formatEtaText(etaMinutes) {
  if (etaMinutes <= 0) {
    return "0 dk (Durakta)";
  }
  return `${etaMinutes} dk`;
}

function render(state) {
  const stepEl = document.getElementById("step-count");
  const gridEl = document.getElementById("stops-grid");

  stepEl.textContent = String(state.step);
  gridEl.innerHTML = "";

  state.stops.forEach((stop) => {
    const occupancy = getOccupancyInfo(stop.passengers, stop.capacity);

    const card = document.createElement("article");
    card.className = "stop-card";
    card.setAttribute("aria-label", `${stop.stopName} bilgileri`);

    card.innerHTML = `
      <div class="stop-card-top">
        <h3 class="stop-name">${stop.stopName}</h3>
        <span class="ring-code">${stop.ringCode}</span>
      </div>

      <div class="metric-row">
        <span class="metric-label">Tahmini Varış (ETA)</span>
        <span class="eta-value">${formatEtaText(stop.etaMinutes)}</span>
      </div>

      <div class="metric-row">
        <span class="metric-label">Araç Doluluk Durumu</span>
        <span class="occupancy-badge ${occupancy.className}">${occupancy.label}</span>
      </div>

      <div class="sim-meta">
        Simulated Data: ${stop.passengers} / ${stop.capacity} örnek yolcu (%${occupancy.percent})
      </div>
    `;

    gridEl.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let currentState = loadState();
  render(currentState);

  const advanceBtn = document.getElementById("btn-advance");
  const resetBtn = document.getElementById("btn-reset");

  advanceBtn.addEventListener("click", () => {
    advanceSimulation(currentState);
  });

  resetBtn.addEventListener("click", () => {
    currentState = resetSimulation();
  });
});
