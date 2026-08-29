/* ============================================================
   Rudaw Health — tools

   Each tool presents published standard guidance, states its own
   limits, and routes to emergency where a value demands it. None
   of them gives personal medical advice, and each says so.
   ============================================================ */

const TOOLS = [
{
  id: 'paracetamol', icon: 'pill', related: ['RH-FEV-001', 'RH-PAR-001'],
  fields: [{ k: 'w', type: 'num', min: 3, max: 50, step: 0.5, label: 'fWeight', unit: 'unitKg', value: 14 }],
  /* 15 mg/kg per dose, max 4 doses and 60 mg/kg in 24h, capped at
     the adult ceiling of 1 g per dose and 4 g per day. */
  run(v, S) {
    const w = v.w;
    if (!(w >= 3 && w <= 50)) return null;
    const single = Math.min(Math.round(15 * w / 5) * 5, 1000);
    const daily = Math.min(Math.round(60 * w / 10) * 10, 4000);
    const ml = (mgPer5) => (single / mgPer5 * 5).toFixed(1);
    return {
      level: 'info',
      rows: [
        { label: S.rSingle, value: `${single} mg`, big: true },
        { label: S.rSyrup120, value: `${ml(120)} mL` },
        { label: S.rSyrup250, value: `${ml(250)} mL` },
        { label: S.rMax, value: `${daily} mg` }
      ],
      lead: S.rInterval,
      notes: [
        { level: 'alarm', text: S.warnBaby },
        { level: 'warn', text: S.warnLabel },
        { level: 'warn', text: S.warnDouble }
      ]
    };
  }
},
{
  id: 'bp', icon: 'heart', related: ['RH-HTN-001'],
  fields: [
    { k: 's', type: 'num', min: 70, max: 260, step: 1, label: 'fSys', unit: () => 'mmHg', value: 128 },
    { k: 'd', type: 'num', min: 40, max: 160, step: 1, label: 'fDia', unit: () => 'mmHg', value: 82 }
  ],
  /* ESC/ESH bands. A reading takes the higher of the two numbers'
     categories, which is how the guideline grades it. */
  run(v, S) {
    const s = v.s, d = v.d;
    if (!(s >= 70 && s <= 260 && d >= 40 && d <= 160) || d >= s) return null;
    const bandS = s < 120 ? 0 : s < 130 ? 1 : s < 140 ? 2 : s < 160 ? 3 : s < 180 ? 4 : 5;
    const bandD = d < 80 ? 0 : d < 85 ? 1 : d < 90 ? 2 : d < 100 ? 3 : d < 110 ? 4 : 5;
    const b = Math.max(bandS, bandD);
    const crisis = s >= 180 || d >= 120;
    const names = [S.cOpt, S.cNormal, S.cHigh, S.cG1, S.cG2, S.cG3];
    const acts = [S.aOpt, S.aNormal, S.aHigh, S.aG1, S.aG2, S.aCrisis];
    return {
      level: crisis ? 'alarm' : b >= 3 ? 'warn' : b >= 2 ? 'info' : 'ok',
      headline: crisis ? S.cCrisis : names[b],
      rows: [{ label: `${S.fSys} / ${S.fDia}`, value: `${s} / ${d} mmHg`, big: true }],
      lead: crisis ? S.aCrisis : acts[b],
      notes: []
    };
  }
},
{
  id: 'thal', icon: 'blood', related: ['RH-THA-001'],
  fields: [
    { k: 'a', type: 'sel', label: 'fA', opts: ['carrier', 'not', 'unknown'], value: 'carrier' },
    { k: 'b', type: 'sel', label: 'fB', opts: ['carrier', 'not', 'unknown'], value: 'carrier' }
  ],
  /* Autosomal recessive inheritance, per pregnancy. */
  run(v, S) {
    const a = v.a, b = v.b;
    if (a === 'unknown' || b === 'unknown') {
      return { level: 'info', rows: [], lead: S.noteUnknown, notes: [] };
    }
    const both = a === 'carrier' && b === 'carrier';
    const one = (a === 'carrier') !== (b === 'carrier');
    const pct = both ? [25, 50, 25] : one ? [0, 50, 50] : [0, 0, 100];
    return {
      level: both ? 'warn' : 'ok',
      rows: [
        { label: S.rAffected, value: `${pct[0]}%`, big: both },
        { label: S.rCarrier, value: `${pct[1]}%` },
        { label: S.rClear, value: `${pct[2]}%` }
      ],
      lead: S.rPerPreg,
      notes: [{ level: both ? 'alarm' : 'info', text: both ? S.noteBoth : one ? S.noteOne : S.noteOne }]
    };
  }
},
{
  id: 'ors', icon: 'child', related: ['RH-DIA-001'],
  fields: [{ k: 'a', type: 'sel', label: 'fAge', opts: ['aUnder2', 'a2to10', 'aOver10'], value: 'aUnder2' }],
  run(v, S) {
    const map = { aUnder2: '50 – 100 mL', a2to10: '100 – 200 mL', aOver10: null };
    const amt = map[v.a];
    return {
      level: 'info',
      rows: [{ label: S.rAmount, value: amt || S.rOver10, big: true }],
      notes: [
        { level: 'alarm', text: S.warnRed },
        { level: 'warn', text: S.warnNo }
      ]
    };
  }
},
{
  id: 'heat', icon: 'env', related: ['RH-HEA-001', 'RH-DUS-001'],
  fields: [
    { k: 't', type: 'num', min: 15, max: 55, step: 1, label: 'fTemp', unit: () => '°C', value: 44 },
    { k: 'h', type: 'num', min: 5, max: 100, step: 1, label: 'fHum', unit: () => '%', value: 25 },
    { k: 'r', type: 'check', label: 'fRisk', sub: 'rHigherRisk', value: false }
  ],
  /* Rothfusz heat index. It is defined in Fahrenheit and only
     meaningful above about 27°C, below which apparent equals actual. */
  run(v, S) {
    const c = v.t, R = v.h;
    if (!(c >= 15 && c <= 55 && R >= 5 && R <= 100)) return null;
    const T = c * 9 / 5 + 32;
    let hiF = T;
    if (T >= 80) {
      hiF = -42.379 + 2.04901523 * T + 10.14333127 * R - 0.22475541 * T * R
          - 0.00683783 * T * T - 0.05481717 * R * R + 0.00122874 * T * T * R
          + 0.00085282 * T * R * R - 0.00000199 * T * T * R * R;
    }
    const hiC = (hiF - 32) * 5 / 9;
    let b = hiC < 27 ? -1 : hiC < 32 ? 0 : hiC < 39 ? 1 : hiC < 51 ? 2 : 3;
    if (v.r && b < 3) b = Math.min(b + 1, 3);
    const bands = [S.bCaution, S.bExtreme, S.bDanger, S.bExtremeDanger];
    const acts = [S.aCaution, S.aExtreme, S.aDanger, S.aExtremeDanger];
    const i = Math.max(b, 0);
    return {
      level: b < 1 ? 'ok' : b === 1 ? 'info' : b === 2 ? 'warn' : 'alarm',
      headline: bands[i],
      rows: [{ label: S.rFeels, value: `${hiC.toFixed(0)} °C`, big: true }],
      lead: acts[i],
      notes: v.r ? [{ level: 'warn', text: S.noteRisk }] : []
    };
  }
},
{
  id: 'bmi', icon: 'meta', related: ['RH-T2D-001'],
  fields: [
    { k: 'w', type: 'num', min: 25, max: 250, step: 0.5, label: 'fWeight', unit: () => 'kg', value: 78 },
    { k: 'h', type: 'num', min: 100, max: 230, step: 1, label: 'fHeight', unit: 'unitCm', value: 172 }
  ],
  run(v, S) {
    const w = v.w, h = v.h / 100;
    if (!(w >= 25 && w <= 250 && v.h >= 100 && v.h <= 230)) return null;
    const bmi = w / (h * h);
    const b = bmi < 18.5 ? 0 : bmi < 25 ? 1 : bmi < 30 ? 2 : 3;
    return {
      level: b === 1 ? 'ok' : b === 0 ? 'info' : b === 2 ? 'info' : 'warn',
      headline: [S.cUnder, S.cNormal, S.cOver, S.cObese][b],
      rows: [{ label: 'BMI', value: bmi.toFixed(1), big: true }],
      lead: S.note,
      notes: []
    };
  }
}
];

const toolById = id => TOOLS.find(t => t.id === id);
const toolState = {};

function toolValues(t) {
  toolState[t.id] = toolState[t.id] || {};
  const st = toolState[t.id];
  t.fields.forEach(f => { if (st[f.k] === undefined) st[f.k] = f.value; });
  return st;
}

/* ---------- views -------------------------------------- */
function viewTools() {
  const S = TL[L];
  return `
  <div class="wrap">
    <header class="page-h">
      <h1>${esc(S.toolsH)}</h1>
      <p class="lede">${esc(S.toolsD)}</p>
    </header>
    <div class="cats tools-grid">
      ${TOOLS.map(t => `<a class="tool-card" href="#/tools/${t.id}">
        <span class="tool-ico">${ICON[t.icon] || ICON.shield}</span>
        <span>
          <b>${esc(S.t[t.id].name)}</b>
          <span>${esc(S.t[t.id].blurb)}</span>
        </span>
      </a>`).join('')}
    </div>
  </div>`;
}

function toolResultHTML(t) {
  const S = TL[L].t[t.id];
  const out = t.run(toolValues(t), S);
  if (!out) return `<div class="tool-res tool-res--none"><p>${esc(TL[L].outOfRange)}</p></div>`;
  return `
  <div class="tool-res tool-res--${out.level}">
    <div class="tool-res-h">${esc(TL[L].resultH)}</div>
    ${out.headline ? `<p class="tool-verdict">${esc(out.headline)}</p>` : ''}
    ${out.rows.length ? `<dl class="tool-rows">${out.rows.map(r => `
      <div class="tool-row${r.big ? ' is-big' : ''}"><dt>${esc(r.label)}</dt><dd>${esc(r.value)}</dd></div>`).join('')}</dl>` : ''}
    ${out.lead ? `<p class="tool-lead">${esc(out.lead)}</p>` : ''}
    ${out.notes.map(n => `<p class="tool-note tool-note--${n.level}">${esc(n.text)}</p>`).join('')}
  </div>`;
}

function viewTool(p) {
  const t = toolById(p.id);
  if (!t) return viewNotFound();
  const S = TL[L], TS = S.t[t.id];
  const v = toolValues(t);
  const rel = t.related.map(id => condById(id) || drugById(id)).filter(Boolean);

  const field = f => {
    const label = esc(TS[f.label]);
    if (f.type === 'check') {
      return `<label class="tool-check">
        <input type="checkbox" data-tool="${t.id}" data-key="${f.k}" ${v[f.k] ? 'checked' : ''}>
        <span><b>${label}</b><span>${esc(TS[f.sub])}</span></span></label>`;
    }
    if (f.type === 'sel') {
      const optKey = { carrier: 'oCarrier', not: 'oNot', unknown: 'oUnknown' };
      return `<div class="tool-field"><label for="tf-${f.k}">${label}</label>
        <select id="tf-${f.k}" data-tool="${t.id}" data-key="${f.k}">
          ${f.opts.map(o => `<option value="${o}" ${v[f.k] === o ? 'selected' : ''}>` +
            `${esc(TS[optKey[o] || o])}</option>`).join('')}
        </select></div>`;
    }
    const unit = typeof f.unit === 'function' ? f.unit() : TS[f.unit];
    return `<div class="tool-field"><label for="tf-${f.k}">${label}</label>
      <div class="tool-input">
        <input id="tf-${f.k}" type="number" inputmode="decimal" dir="ltr"
          min="${f.min}" max="${f.max}" step="${f.step}" value="${v[f.k]}"
          data-tool="${t.id}" data-key="${f.k}">
        <span class="tool-unit">${esc(unit)}</span>
      </div></div>`;
  };

  return `
  <div class="wrap">
    <nav class="crumbs" aria-label="breadcrumb"><a href="#/tools">${esc(S.toolsH)}</a></nav>
    <header class="art-head">
      <span class="art-mark">${ICON[t.icon] || ICON.shield}</span>
      <div class="kicker">${esc(S.toolsH)}</div>
      <h1>${esc(TS.name)}</h1>
      <p class="art-stand">${esc(TS.desc)}</p>
    </header>

    <div class="tool-grid">
      <div>
        <form class="tool-form" onsubmit="return false">
          ${t.fields.map(field).join('')}
        </form>
        <div id="tool-out">${toolResultHTML(t)}</div>
        <p class="tool-disc">${esc(S.disclaimer)}</p>
      </div>
      <div class="aside">
        <section class="rel">
          <h2>${esc(S.limitsH)}</h2>
          <ul class="tool-limits">${li(TS.limits)}</ul>
        </section>
        ${rel.length ? `<nav class="rel">
          <h2>${esc(S.relatedH)}</h2>
          ${rel.map(r => `<a href="#/${condById(r.id) ? 'c' : 'm'}/${r.id}">${esc(r[L].name)}</a>`).join('')}
        </nav>` : ''}
      </div>
    </div>
  </div>`;
}

/* Recompute in place so the field keeps focus while typing. */
document.addEventListener('input', e => {
  const el = e.target.closest('[data-tool]');
  if (!el) return;
  const t = toolById(el.dataset.tool);
  if (!t) return;
  const f = t.fields.find(x => x.k === el.dataset.key);
  toolState[t.id][el.dataset.key] =
    f.type === 'check' ? el.checked : f.type === 'sel' ? el.value : parseFloat(el.value);
  const out = document.getElementById('tool-out');
  if (out) out.innerHTML = toolResultHTML(t);
});
document.addEventListener('change', e => {
  if (e.target.closest('select[data-tool], input[type=checkbox][data-tool]')) {
    document.dispatchEvent(new Event('input'));
    const el = e.target.closest('[data-tool]');
    const t = toolById(el.dataset.tool);
    const f = t.fields.find(x => x.k === el.dataset.key);
    toolState[t.id][el.dataset.key] = f.type === 'check' ? el.checked : el.value;
    const out = document.getElementById('tool-out');
    if (out) out.innerHTML = toolResultHTML(t);
  }
});
