/* ============================================================
   Rudaw Health — application
   Hash router + views. No framework, no build step.
   ============================================================ */

/* ---------- icons -------------------------------------- */
const I = (d, w) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w || 1.6}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

const ICON = {
  search: I('<circle cx="11" cy="11" r="7"/><path d="m16.6 16.6 4 4"/>'),
  /* Points along the reading direction; flipped for RTL in the stylesheet. */
  chev:   I('<path d="m9.5 5.5 7 6.5-7 6.5"/>'),
  phone:  I('<path d="M6.6 3.6h3l1.5 4-2 1.4a12.4 12.4 0 0 0 5.9 5.9l1.4-2 4 1.5v3a1.6 1.6 0 0 1-1.8 1.6A16.6 16.6 0 0 1 5 5.4 1.6 1.6 0 0 1 6.6 3.6Z"/>'),
  alert:  I('<path d="M12 3.4 2.8 19.8h18.4L12 3.4Z"/><path d="M12 10v4"/><circle cx="12" cy="17.1" r=".95" fill="currentColor" stroke="none"/>'),
  shield: I('<path d="M12 3.2 5 6v5.4c0 4.2 2.9 7.7 7 8.9 4.1-1.2 7-4.7 7-8.9V6l-7-2.8Z"/><path d="m9.1 12.2 2.1 2.1 3.7-4"/>'),
  sig:    I('<path d="M4 17.6c2.6 0 3-8.4 5.3-8.4 1.7 0 1.2 6.2 3 6.2 1.5 0 1.8-4.2 3.3-4.2 1.2 0 1.3 2.6 2.6 2.6"/><path d="M4 20.4h16"/>'),
  scale:  I('<path d="M12 4.2v15.6M7 20h10"/><path d="M12 6.6 5 9m7-2.4L19 9"/><path d="M2.6 13.4a2.6 2.6 0 0 0 4.8 0L5 8.8Zm14 0a2.6 2.6 0 0 0 4.8 0L19 8.8Z"/>'),
  clock:  I('<circle cx="12" cy="12" r="8.4"/><path d="M12 7.4V12l3 1.8"/>'),
  chat:   I('<path d="M20 12.4a7.6 7.6 0 0 1-11.2 6.7L4 20.4l1.4-4.6A7.6 7.6 0 1 1 20 12.4Z"/>'),
  pill:   I('<rect x="2.6" y="8.6" width="18.8" height="6.8" rx="3.4" transform="rotate(-45 12 12)"/><path d="m9.2 9.2 5.6 5.6"/>'),

  /* body areas */
  heart:  I('<path d="M12 20.3C7.6 17.4 4.5 14.2 4.5 10.8A4 4 0 0 1 12 8.3a4 4 0 0 1 7.5 2.5c0 3.4-3.1 6.6-7.5 9.5Z"/>'),
  brain:  I('<path d="M12 5.4a2.7 2.7 0 0 0-4.7-.5A2.6 2.6 0 0 0 5 7.7a2.7 2.7 0 0 0-.5 4.2 2.7 2.7 0 0 0 1 4A2.6 2.6 0 0 0 9 18.7a2.6 2.6 0 0 0 3 .5Z"/><path d="M12 5.4a2.7 2.7 0 0 1 4.7-.5A2.6 2.6 0 0 1 19 7.7a2.7 2.7 0 0 1 .5 4.2 2.7 2.7 0 0 1-1 4A2.6 2.6 0 0 1 15 18.7a2.6 2.6 0 0 1-3 .5Z"/><path d="M12 5.4v13.8"/>'),
  meta:   I('<path d="M12 3.4s5.6 6.1 5.6 9.9A5.6 5.6 0 1 1 6.4 13.3C6.4 9.5 12 3.4 12 3.4Z"/><path d="M9.1 13.9h5.8"/>'),
  child:  I('<circle cx="12" cy="6.3" r="2.8"/><path d="M7.1 20.2v-3.6a4.9 4.9 0 0 1 9.8 0v3.6"/><path d="M9.7 20.2v-3.1M14.3 20.2v-3.1"/>'),
  lung:   I('<path d="M12 4.2v7.1"/><path d="M12 8.9c-1.7 0-2.5 1-3 2.4l-2 5.4a2.4 2.4 0 0 0 2.7 3.2c1.3-.2 2.3-1.4 2.3-2.7V8.9Z"/><path d="M12 8.9c1.7 0 2.5 1 3 2.4l2 5.4a2.4 2.4 0 0 1-2.7 3.2c-1.3-.2-2.3-1.4-2.3-2.7V8.9Z"/>'),
  gut:    I('<path d="M8.4 3.8v4.1c0 2.6 1.7 3.4 3.8 4.1 2.2.7 3.7 2 3.7 4.2a4.3 4.3 0 0 1-8.5.6"/><path d="M6.2 6.9h4.4"/>'),
  kidney: I('<path d="M13.8 4.1c-3.3 0-6 3.5-6 7.9s2.7 7.9 6 7.9c2.2 0 3.7-1.6 3.7-3.4 0-2.6-3.4-2.9-3.4-4.5s3.4-2 3.4-4.5c0-1.8-1.5-3.4-3.7-3.4Z"/>'),
  blood:  I('<path d="M12 3.2s6 6.5 6 10.5A6 6 0 0 1 6 13.7C6 9.7 12 3.2 12 3.2Z"/>'),
  bone:   I('<path d="M6.7 17.3a2.2 2.2 0 1 1 2.2-3.5l4.9-4.9a2.2 2.2 0 1 1 3.5-2.2 2.2 2.2 0 1 1-2.2 3.5l-4.9 4.9a2.2 2.2 0 1 1-3.5 2.2Z"/>'),
  mind:   I('<path d="M12 3.6a7.6 7.6 0 0 0-5.7 12.6v4l2.9-1.7A7.6 7.6 0 1 0 12 3.6Z"/><path d="M9.2 11.8h.02M12 11.8h.02M14.8 11.8h.02" stroke-width="2.2"/>'),
  women:  I('<circle cx="12" cy="8.4" r="4.6"/><path d="M12 13v7.4M9.2 17.6h5.6"/>'),
  skin:   I('<path d="M5.6 8.4a6.4 6.4 0 0 1 12.8 0c0 4-1.4 6.2-1.4 8.6a2.6 2.6 0 0 1-2.6 2.6H9.6A2.6 2.6 0 0 1 7 17c0-2.4-1.4-4.6-1.4-8.6Z"/><path d="M10 9.6h.02M14 11.4h.02M11.4 14.4h.02" stroke-width="2.1"/>'),
  env:    I('<circle cx="12" cy="9.2" r="3.3"/><path d="M12 3.1v1.5M5.6 9.2H4.1M19.9 9.2h-1.5M7.5 4.7 6.4 3.6M17.6 3.6l-1.1 1.1"/><path d="M4.2 16.9h9.2M7.4 20.1h11.4"/>')
};

const CAT_ICON = {
  heart: 'heart', brain: 'brain', meta: 'meta', child: 'child', lung: 'lung',
  gut: 'gut', kidney: 'kidney', blood: 'blood', bone: 'bone', mind: 'mind', env: 'env',
  women: 'women', skin: 'skin'
};

/* Alphabets for the A–Z index, one per language */
const ALPHA = {
  ku:  ['ئ','ا','ب','پ','ت','ج','چ','ح','خ','د','ر','ڕ','ز','ژ','س','ش','ع','غ','ف','ڤ','ق','ک','گ','ل','ڵ','م','ن','ه','و','ۆ','ی','ێ'],
  ar:  ['ا','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','ه','و','ي'],
  kmr: ['A','B','C','Ç','D','E','Ê','F','G','H','I','Î','J','K','L','M','N','O','P','Q','R','S','Ş','T','U','Û','V','W','X','Y','Z'],
  en:  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
};

/* The letter an entry files under. Arabic titles almost all begin with
   the definite article ال, which would pile every entry under ا, so it
   is stripped first — the way a printed Arabic index is ordered. The
   hamza carriers أ إ آ all fold to ا. */
function firstLetter(name, lang) {
  let s = String(name).trim();
  if (lang === 'ar') {
    if (s.startsWith('ال') && s.length > 2) s = s.slice(2);
    s = s.replace(/^[أإآٱ]/, 'ا');
  }
  return lang === 'kmr' || lang === 'en' ? s[0].toUpperCase() : s[0];
}

/* The masthead mark is an R inside a radiating burst. Drawn large and
   faint it gives the hero visual weight without stock photography,
   and it is the one graphic on the site that is already the brand's. */
function burstSVG(n = 48) {
  let out = '';
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const r1 = 118 + (i % 3) * 12;
    const r2 = r1 + 64 + (i % 5) * 19;
    out += `<line x1="${(Math.cos(a) * r1).toFixed(1)}" y1="${(Math.sin(a) * r1).toFixed(1)}"` +
           ` x2="${(Math.cos(a) * r2).toFixed(1)}" y2="${(Math.sin(a) * r2).toFixed(1)}"/>`;
  }
  return `<svg class="hero-burst" viewBox="-270 -270 540 540" fill="none" aria-hidden="true">${out}</svg>`;
}

const PULSE_D = "M0 34 H150 l14 -24 l11 38 l13 -34 l12 20 H420 l16 -28 l10 42 l14 -37 l11 23 H700 l15 -24 l11 37 l12 -33 l13 19 H980 l14 -22 l10 34 l13 -29 l11 18 H1200";
const PULSE = `<svg class="pulse" viewBox="0 0 1200 52" preserveAspectRatio="none" aria-hidden="true">
  <path class="pulse-base" d="${PULSE_D}" fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
  <path class="pulse-run"  d="${PULSE_D}" fill="none" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

/* Editorially selected front-page entries — region-specific,
   seasonal, and the screening story we keep returning to. */
const LEAD = 'RH-HEA-001';
const SECONDARY = ['RH-DUS-001', 'RH-THA-001', 'RH-T2D-001'];

/* Build stamp — rendered in the footer so the running version is
   identifiable at a glance. Bump on every deploy. */
const BUILD = '2026-08-29 · r15';

/* Every asset in index.html is loaded with ?v=<tag> to defeat the browser
   cache: Railway serves these files with a long max-age, so an unchanged
   filename keeps a stale copy alive in the reader's browser and a deploy
   goes out that nobody receives. That has already happened once. If the
   tag drifts from BUILD, say so rather than letting it fail silently. */
(function checkCacheTag() {
  const me = document.currentScript ||
    [].slice.call(document.scripts).filter(s => /app\.js/.test(s.src)).pop();
  const got = me ? (me.src.split('?v=')[1] || '(none)') : '(unknown)';
  const want = (BUILD.match(/r\d+$/) || ['(none)'])[0];
  if (got !== want) {
    console.warn('Rudaw Health — asset cache tag is "' + got + '" but BUILD is "' +
      want + '". Bump ?v= on every asset in index.html, or readers keep the old files.');
  }
})();

/* ---------- translations ------------------------------- */
/* The Sorani and English records are the source of truth; Kurmancî and
   Arabic are attached onto them by id so the base data is never edited. */
function attachTranslations(code, TR) {
  if (!TR) return;
  /* Categories added by a later data file carry their own translations
     inline, so only overwrite when this file actually has one. */
  CATS.forEach(c => {
    if (c.k === 'all') { c[code] = UI[code].allCats; return; }
    if (TR.cats[c.k]) c[code] = TR.cats[c.k];
  });
  Object.keys(TIER).forEach(n => { TIER[n][code] = TR.tier[n]; });
  TOPICS.forEach(t => { if (TR.topics[t.k]) t[code] = TR.topics[t.k]; });
  ASKED[code] = TR.asked;
  CONDITIONS.forEach(c => { if (TR.cond[c.id]) c[code] = TR.cond[c.id]; });
  DRUGS.forEach(d => { if (TR.drug[d.id]) d[code] = TR.drug[d.id]; });
  CLAIMS.forEach(v => { if (TR.claim[v.id]) v[code] = TR.claim[v.id]; });
  PLACES.forEach((p, i) => { if (TR.place[i]) p[code] = TR.place[i]; });
  CORRECTIONS.forEach(c => { if (TR.corr[c.id]) c[code] = TR.corr[c.id]; });
  ANSWERED.forEach((a, i) => {
    const t = TR.answered[i];
    if (t) { a[code] = { q: t.q, a: t.a }; a['seg_' + code] = t.seg; }
  });
}

/* Additional entries live in their own file with all four languages
   inline; merge them before anything reads the arrays. */
if (typeof EXTRA_CATS !== 'undefined') EXTRA_CATS.forEach(c => CATS.push(c));
if (typeof EXTRA_CONDITIONS !== 'undefined') EXTRA_CONDITIONS.forEach(c => CONDITIONS.push(c));
if (typeof EXTRA_DRUGS !== 'undefined') EXTRA_DRUGS.forEach(d => DRUGS.push(d));
if (typeof EXTRA2_CONDITIONS !== 'undefined') EXTRA2_CONDITIONS.forEach(c => CONDITIONS.push(c));
if (typeof EXTRA2_DRUGS !== 'undefined') EXTRA2_DRUGS.forEach(d => DRUGS.push(d));

/* Normalise the broadcast segment names the base data stores as
   `seg` / `segEn` into the same per-language shape as the rest. */
ANSWERED.forEach(a => { a.seg_ku = a.seg; a.seg_en = a.segEn; });
attachTranslations('kmr', typeof KMR !== 'undefined' ? KMR : null);
attachTranslations('ar', typeof AR !== 'undefined' ? AR : null);

/* ---------- state -------------------------------------- */
let L = 'ku';
let route = { name: 'home', params: {} };
let qSubmitted = null;
let qCount = 1247;

const T = k => UI[L][k];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const li = a => a.map(x => `<li>${esc(x)}</li>`).join('');
const catName = k => (CATS.find(c => c.k === k) || {})[L] || '';
const norm = s => String(s).toLowerCase();

/* ---------- lookups ------------------------------------ */
const condById = id => CONDITIONS.find(c => c.id === id);
const drugById = id => DRUGS.find(d => d.id === id);
const related = c => CONDITIONS.filter(x => x.cat === c.cat && x.id !== c.id).slice(0, 4);

/* Reviewers are grouped by person, not by by-line: one doctor
   signing off in two specialties is still one reviewer. */
function reviewers() {
  const m = new Map();
  [...CONDITIONS, ...DRUGS].forEach(x => {
    const [name, ...rest] = String(x.by).split(',');
    const person = name.trim();
    const spec = rest.join(',').trim();
    if (!m.has(person)) m.set(person, new Set());
    if (spec) m.get(person).add(spec);
  });
  return [...m].map(([name, specs]) => ({ name, specs: [...specs] }));
}

function searchAll(q) {
  const n = norm(q).trim();
  if (!n) return { conditions: [], drugs: [], claims: [] };
  const inC = c => [c[L].name, c[L].sum, c[L].what, ...c[L].sym].some(t => norm(t).includes(n));
  const inD = d => [d[L].name, d[L].sum, ...d[L].does, ...d[L].not].some(t => norm(t).includes(n));
  const inV = v => [v[L].claim, v[L].body].some(t => norm(t).includes(n));
  return {
    conditions: CONDITIONS.filter(inC),
    drugs: DRUGS.filter(inD),
    claims: CLAIMS.filter(inV)
  };
}

/* ---------- shared fragments --------------------------- */
function stamp(o) {
  return `<aside class="stamp">
    <div class="stamp-h">${ICON.shield}<span>${T('stampH')}</span></div>
    <div class="stamp-b">
      <div class="srow"><span class="slab">${T('sRev')}</span>
        <span class="sval data">${esc(o.rev)}</span></div>
      <div class="srow"><span class="slab">${T('sBy')}</span>
        <span class="sval">${esc(o.by)}</span></div>
      <div class="srow"><span class="slab">${T('sNext')}</span>
        <span class="sval data">${esc(o.next)}</span></div>
      <div class="srow"><span class="slab">${T('sId')}</span>
        <span class="sval data">${esc(o.id)}</span></div>
    </div>
    <div class="stamp-f">${ICON.sig}<span>${T('stampFoot')}</span></div>
  </aside>`;
}

function sectionHead(title, sub, moreHref, moreText) {
  return `<div class="rule-h">
    <div><h2>${esc(title)}</h2>${sub ? `<p class="lede" style="margin-top:6px;font-size:15.5px">${esc(sub)}</p>` : ''}</div>
    ${moreHref ? `<a class="more" href="${moreHref}">${esc(moreText)}</a>` : ''}
  </div>`;
}

function entryRow(href, title, sum, tier, rev) {
  return `<a class="entry" href="${href}">
    <span class="entry-main">
      <span class="entry-t">${esc(title)}</span>
      <span class="entry-s">${esc(sum)}</span>
    </span>
    <span class="entry-side">
      <span class="label data">${esc(rev)}</span>
    </span>
  </a>`;
}

function verdictCard(v) {
  const map = { true: ['v-true', 'vTrue'], false: ['v-false', 'vFalse'], part: ['v-part', 'vPart'], unk: ['v-unk', 'vUnk'] };
  const [cls, key] = map[v.v];
  return `<article class="vc">
    <div class="vc-top">
      <span class="vbadge ${cls}">${T(key)}</span>
      <h3 class="vc-claim">${esc(v[L].claim)}</h3>
    </div>
    <p class="vc-body">${esc(v[L].body)}</p>
    <div class="vc-foot"><span class="data">${esc(v.id)} · ${esc(v.rev)}</span></div>
  </article>`;
}

/* ---------- views -------------------------------------- */
function viewHome() {
  const lead = condById(LEAD);
  const secs = SECONDARY.map(condById).filter(Boolean);
  const asked = ASKED[L];
  const counts = {};
  CONDITIONS.forEach(c => { counts[c.cat] = (counts[c.cat] || 0) + 1; });
  const nReviewers = reviewers().length;

  return `
  <section class="hero">
    <div class="hero-photo" aria-hidden="true"></div>
    <div class="hero-tint" aria-hidden="true"></div>
    <div class="hero-bg">${burstSVG()}</div>
    ${PULSE}
    <div class="wrap">
      <div class="hero-lead">
        <div class="kicker">${esc(T('leadKicker'))}</div>
        <h1 class="lead-t"><a href="#/c/${lead.id}">${esc(lead[L].name)}</a></h1>
        <p class="lead-s">${esc(lead[L].sum)}</p>
        <div class="lead-m">
          <span class="meta">${esc(T('sRev'))} <b class="data">${esc(lead.rev)}</b></span>
          <span class="meta">${esc(lead.by)}</span>
        </div>

      </div>
    </div>
  </section>

  <section class="band band--tight">
    <div class="wrap">
    <div class="below-grid">
      <div>
        <div class="kicker">${esc(T('secKicker'))}</div>
        <div class="sec-list">
          ${secs.map((c, i) => `<a class="sec-item" href="#/c/${c.id}">
            <span class="sec-n">0${i + 2}</span>
            <span class="entry-main">
              <span class="sec-t">${esc(c[L].name)}</span>
              <span class="sec-d">${esc(c[L].sum)}</span>
            </span>
          </a>`).join('')}
        </div>
      </div>

      <aside class="rail">
        <div class="rail-h">${esc(T('askedH'))}<span>${esc(T('askedSub'))}</span></div>
        <ol class="rail-l">
          ${asked.map(x => `<li><button type="button" data-q="${esc(x)}">${esc(x)}</button></li>`).join('')}
        </ol>
        <div class="rail-f">${esc(T('askedFoot'))}</div>
      </aside>
    </div>
    </div>
  </section>

  <section class="band band--tint">
    <div class="wrap">
      ${sectionHead(T('catsH'), null, '#/conditions', T('catsMore'))}
      <div class="cats">
        ${CATS.filter(c => c.k !== 'all').map(c => `
          <a class="cat-tile" href="#/conditions?cat=${c.k}">
            ${ICON[CAT_ICON[c.k]] || ICON.heart}
            <b>${esc(c[L])}</b>
            <span class="cat-n" aria-label="${esc(T('countN')(counts[c.k] || 0))}">
              <i>${counts[c.k] || 0}</i>${ICON.chev}
            </span>
          </a>`).join('')}
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap">
      ${sectionHead(T('claimsH'), T('claimsSub'), '#/checks', T('claimsMore'))}
      <div class="grid grid--3">${CLAIMS.slice(0, 3).map(verdictCard).join('')}</div>
    </div>
  </section>

  <section class="band band--tint">
    <div class="wrap">
      ${sectionHead(T('bcastH'), T('bcastSub'), '#/ask', T('bcastMore'))}
      <div class="grid grid--2">
        ${ANSWERED.map(a => `<article class="bcast">
          <div class="bcast-m">
            <span class="seg">${esc(a['seg_' + L] || a.seg_en)}</span>
            <span class="label data">${esc(a.d)}</span>
          </div>
          <h3 class="bcast-q">${esc(a[L].q)}</h3>
          <p class="bcast-a">${esc(a[L].a)}</p>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="band band--deep">
    <div class="wrap">
      ${sectionHead(T('stdH'), null, '#/standards', T('stdMore'))}
      <div class="pillars">
        <div class="pillar"><h3>${ICON.sig}${esc(T('p1H'))}</h3><p>${T('p1B')}</p></div>
        <div class="pillar"><h3>${ICON.scale}${esc(T('p2H'))}</h3><p>${T('p2B')}</p></div>
        <div class="pillar"><h3>${ICON.clock}${esc(T('p3H'))}</h3><p>${T('p3B')}</p></div>
      </div>
      <div class="stat">
        <div class="stat-i"><b>${CONDITIONS.length + DRUGS.length + CLAIMS.length}</b><span>${esc(T('statEntries'))}</span></div>
        <div class="stat-i"><b>${nReviewers}</b><span>${esc(T('statReviewers'))}</span></div>
      </div>
    </div>
  </section>`;
}

function viewConditions(p) {
  const cat = p.cat || 'all';
  const letter = p.letter || '';
  let list = CONDITIONS;
  if (cat !== 'all') list = list.filter(c => c.cat === cat);
  if (letter) list = list.filter(c => firstLetter(c[L].name, L) === letter);

  const alpha = ALPHA[L] || ALPHA.en;
  const present = new Set(CONDITIONS
    .filter(c => cat === 'all' || c.cat === cat)
    .map(c => firstLetter(c[L].name, L)));

  return `
  <div class="wrap">
    <header class="page-h">
      <h1>${esc(T('hCond'))}</h1>
      <p class="lede">${esc(T('dCond'))}</p>
    </header>

    <div class="chips">
      ${CATS.map(c => `<button class="chip" type="button" aria-pressed="${c.k === cat}"
        data-nav="#/conditions?cat=${c.k}">${esc(c[L])}</button>`).join('')}
    </div>

    <div class="alpha">
      <button type="button" aria-pressed="${!letter}" data-nav="#/conditions?cat=${cat}">${esc(T('alphaAll'))}</button>
      ${alpha.map(a => {
        const has = present.has(a);
        return `<button type="button" ${has ? '' : 'disabled'} aria-pressed="${letter === a}"
          data-nav="#/conditions?cat=${cat}&letter=${encodeURIComponent(a)}">${a}</button>`;
      }).join('')}
    </div>

    <p class="count">${T('countN')(list.length)}</p>
    ${list.length
      ? `<div class="entries">${list.map(c =>
          entryRow(`#/c/${c.id}`, c[L].name, c[L].sum, c.tier, c.rev)).join('')}</div>`
      : `<div class="empty">${esc(T('noRes'))}</div>`}
  </div>`;
}

function viewCondition(p) {
  const c = condById(p.id);
  if (!c) return viewNotFound();
  const d = c[L];
  const rel = related(c);

  const sections = [
    { id: 'what', h: T('secWhat'), body: `<p>${esc(d.what)}</p>` },
    { id: 'sym', h: d.symLabel || T('secSym'), body: `<ul>${li(d.sym)}</ul>` },
    { id: 'do', h: T('secDo'), body: `<ul>${li(d.do)}</ul>` }
  ];

  return `
  <div class="wrap">
    <nav class="crumbs" aria-label="breadcrumb">
      <a href="#/conditions">${esc(T('backCond'))}</a>
      <span><a href="#/conditions?cat=${c.cat}">${esc(catName(c.cat))}</a></span>
    </nav>
    <header class="art-head">
      <span class="art-mark">${ICON[CAT_ICON[c.cat]] || ICON.shield}</span>
      <div class="kicker">${esc(catName(c.cat))}</div>
      <h1>${esc(d.name)}</h1>
      <p class="art-stand">${esc(d.sum)}</p>
    </header>

    <div class="art-grid">
      <article class="prose">
        ${sections.map(s => `<section id="s-${s.id}"><h2>${esc(s.h)}</h2>${s.body}</section>`).join('')}

        <section id="s-flags" class="flags">
          <h3 class="flags-h">${ICON.alert}<span>${esc(T('secFlag'))}</span></h3>
          <ul>${li(d.flags)}</ul>
          <p class="flags-f">${esc(T('flagsFoot'))}</p>
        </section>

        <section id="s-ask" class="ask-box">
          <h2>${esc(T('secAsk'))}</h2>
          <ul>${li(d.ask)}</ul>
        </section>
      </article>

      <div class="aside">
        ${stamp(c)}
        <nav class="toc">
          <h2>${esc(T('tocH'))}</h2>
          <ol>
            ${sections.map(s => `<li><a href="#s-${s.id}" data-toc>${esc(s.h)}</a></li>`).join('')}
            <li><a href="#s-flags" data-toc>${esc(T('secFlag'))}</a></li>
            <li><a href="#s-ask" data-toc>${esc(T('secAsk'))}</a></li>
          </ol>
        </nav>
        ${rel.length ? `<nav class="rel">
          <h2>${esc(T('relH'))}</h2>
          ${rel.map(r => `<a href="#/c/${r.id}">${esc(r[L].name)}</a>`).join('')}
        </nav>` : ''}
      </div>
    </div>
  </div>`;
}

function viewDrugs() {
  return `
  <div class="wrap">
    <header class="page-h">
      <h1>${esc(T('hDrug'))}</h1>
      <p class="lede">${esc(T('dDrug'))}</p>
    </header>
    <p class="count">${T('countN')(DRUGS.length)}</p>
    <div class="entries">
      ${DRUGS.map(d => entryRow(`#/m/${d.id}`, d[L].name, d[L].sum, d.tier, d.rev)).join('')}
    </div>
  </div>`;
}

function viewDrug(p) {
  const m = drugById(p.id);
  if (!m) return viewNotFound();
  const d = m[L];
  const sections = [
    { id: 'does', h: T('drugDoes'), body: `<ul>${li(d.does)}</ul>` },
    { id: 'not', h: T('drugNot'), body: `<ul>${li(d.not)}</ul>` }
  ];

  return `
  <div class="wrap">
    <nav class="crumbs" aria-label="breadcrumb"><a href="#/medicines">${esc(T('backDrug'))}</a></nav>
    <header class="art-head">
      <span class="art-mark">${ICON.pill}</span>
      <div class="kicker">${esc(T('hDrug'))}</div>
      <h1>${esc(d.name)}</h1>
      <p class="art-stand">${esc(d.sum)}</p>
    </header>
    <div class="art-grid">
      <article class="prose">
        ${sections.map(s => `<section id="s-${s.id}"><h2>${esc(s.h)}</h2>${s.body}</section>`).join('')}
        <section id="s-care" class="flags">
          <h3 class="flags-h">${ICON.alert}<span>${esc(T('drugCare'))}</span></h3>
          <ul>${li(d.care)}</ul>
        </section>
      </article>
      <div class="aside">
        ${stamp(m)}
        <nav class="toc">
          <h2>${esc(T('tocH'))}</h2>
          <ol>
            ${sections.map(s => `<li><a href="#s-${s.id}" data-toc>${esc(s.h)}</a></li>`).join('')}
            <li><a href="#s-care" data-toc>${esc(T('drugCare'))}</a></li>
          </ol>
        </nav>
      </div>
    </div>
  </div>`;
}

function viewClaims() {
  return `
  <div class="wrap">
    <header class="page-h">
      <h1>${esc(T('hClaim'))}</h1>
      <p class="lede">${esc(T('dClaim'))}</p>
    </header>
    <p class="count">${T('countN')(CLAIMS.length)}</p>
    <div class="grid grid--2">${CLAIMS.map(verdictCard).join('')}</div>
  </div>`;
}

function viewPlaces() {
  return `
  <div class="wrap">
    <header class="page-h">
      <h1>${esc(T('hPlace'))}</h1>
      <p class="lede">${esc(T('dPlace'))}</p>
    </header>
    <div class="grid grid--2">
      ${PLACES.map(p => `<article class="svc">
        <h2 class="svc-t">${esc(p[L].n)}</h2>
        <p class="svc-m">${esc(p[L].m)}</p>
        <p class="svc-n">${esc(p[L].note)}</p>
      </article>`).join('')}
    </div>
  </div>`;
}

function viewStandards() {
  const people = reviewers();
  return `
  <div class="wrap wrap--narrow">
    <header class="page-h">
      <h1>${esc(T('hStd'))}</h1>
      <p class="lede">${esc(T('dStd'))}</p>
    </header>

    <section style="margin-bottom:44px">
      <h2 style="font-size:21px;font-weight:800;margin-bottom:8px">${esc(T('stdWhoH'))}</h2>
      <p class="lede" style="margin-bottom:18px">${esc(T('stdWhoD'))}</p>
      <div class="entries">
        ${people.map(r => `<div class="entry" style="cursor:default">
          <span class="entry-main">
            <span class="entry-t" style="font-size:16.5px">${esc(r.name)}</span>
            <span class="entry-s">${esc(r.specs.join(' · '))}</span>
          </span>
        </div>`).join('')}
      </div>
    </section>

    <section style="margin-bottom:44px">
      <h2 style="font-size:21px;font-weight:800;margin-bottom:8px">${esc(T('stdLimitH'))}</h2>
      <div class="triage">
        <h3 class="yes">${esc(T('trH1'))}</h3>
        <ul>${li(T('trY'))}</ul>
      </div>
      <div class="triage">
        <h3 class="no">${esc(T('trH2'))}</h3>
        <ul>${li(T('trN'))}</ul>
      </div>
    </section>

  </div>`;
}

function viewAsk() {
  const body = qSubmitted
    ? `<div class="qok">
        <h2>${esc(T('qOkH'))}</h2>
        <p>${esc(T('qOkP1'))}</p>
        <p class="data">${esc(T('qRef'))}: <b>${esc(qSubmitted)}</b></p>
        <p>${esc(T('qOkP2'))}</p>
        <button class="btn btn--solid" type="button" id="q-again">${esc(T('qAgain'))}</button>
      </div>`
    : `<form class="qform" id="q-form" novalidate>
        <div class="qfield">
          <label class="qlabel" for="q-text">${esc(T('qLabel'))}</label>
          <p class="qhint">${esc(T('qHint'))}</p>
          <textarea id="q-text" name="q"></textarea>
        </div>
        <div class="qrow">
          <div class="qfield">
            <label class="qlabel" for="q-topic">${esc(T('qTopic'))}</label>
            <select id="q-topic">${TOPICS.map(t => `<option value="${t.k}">${esc(t[L])}</option>`).join('')}</select>
          </div>
          <div class="qfield">
            <label class="qlabel" for="q-city">${esc(T('qCity'))}</label>
            <input id="q-city" type="text">
          </div>
        </div>
        <div class="qfield">
          <label class="qlabel" for="q-name">${esc(T('qName'))}</label>
          <input id="q-name" type="text">
        </div>
        <label class="qcheck"><input type="checkbox" id="q-consent"><span>${esc(T('qConsent'))}</span></label>
        <button class="btn btn--solid" type="submit">${esc(T('qSend'))}</button>
        <p class="qerr" id="q-err" hidden>${esc(T('qErr'))}</p>
      </form>`;

  return `
  <div class="wrap">
    <header class="page-h">
      <h1>${esc(T('hAsk'))}</h1>
      <p class="lede">${esc(T('dAsk'))}</p>
    </header>
    <div class="ask-grid">
      <div>${body}</div>
      <div>
        <div class="triage">
          <h3 class="yes">${esc(T('trH1'))}</h3>
          <ul>${li(T('trY'))}</ul>
        </div>
        <div class="triage">
          <h3 class="no">${esc(T('trH2'))}</h3>
          <ul>${li(T('trN'))}</ul>
        </div>
        <div class="triage" style="border-color:#F0CCC7;background:var(--alarm-sm)">
          <h3 style="color:var(--alarm-d)">${esc(T('emH'))}</h3>
          <ul>${li(T('emergList'))}</ul>
        </div>
        <div class="wa">
          <h3>${ICON.chat}${esc(T('waH'))}</h3>
          <div class="wa-n">+964 750 811 00 01</div>
          <p>${esc(T('waS'))}</p>
        </div>
      </div>
    </div>
  </div>`;
}

function viewSearch(p) {
  const q = p.q || '';
  const r = searchAll(q);
  const total = r.conditions.length + r.drugs.length + r.claims.length;

  return `
  <div class="wrap">
    <header class="page-h">
      <h1>${esc(T('hSearch'))}</h1>
      <p class="lede">${esc(q)}</p>
    </header>
    <p class="count">${T('countN')(total)}</p>
    ${total === 0 ? `<div class="empty">${esc(T('noRes'))}</div>` : ''}
    ${r.conditions.length ? `<section style="margin-bottom:40px">
      ${sectionHead(T('hCond'))}
      <div class="entries">${r.conditions.map(c =>
        entryRow(`#/c/${c.id}`, c[L].name, c[L].sum, c.tier, c.rev)).join('')}</div>
    </section>` : ''}
    ${r.drugs.length ? `<section style="margin-bottom:40px">
      ${sectionHead(T('hDrug'))}
      <div class="entries">${r.drugs.map(d =>
        entryRow(`#/m/${d.id}`, d[L].name, d[L].sum, d.tier, d.rev)).join('')}</div>
    </section>` : ''}
    ${r.claims.length ? `<section>
      ${sectionHead(T('hClaim'))}
      <div class="grid grid--2">${r.claims.map(verdictCard).join('')}</div>
    </section>` : ''}
  </div>`;
}

function viewNotFound() {
  return `<div class="wrap"><div class="empty" style="margin-block:60px">${esc(T('noRes'))}</div></div>`;
}

/* ---------- chrome ------------------------------------- */
const NAV = [
  ['#/', 'navHome', 'home'],
  ['#/conditions', 'navCond', 'conditions'],
  ['#/medicines', 'navDrug', 'medicines'],
  ['#/tools', 'navTools', 'tools'],
  ['#/checks', 'navClaim', 'checks'],
  ['#/services', 'navPlace', 'services'],
  ['#/ask', 'navAsk', 'ask'],
  ['#/standards', 'navStd', 'standards']
];

function renderChrome() {
  document.getElementById('chrome').innerHTML = `
    <a class="skip" href="#main">${esc(T('skip'))}</a>

    <div class="util"><div class="wrap">
      <span class="util-em">${ICON.phone}<span>${esc(T('utilEmerg'))}</span><b>${esc(T('utilEmergNum'))}</b></span>
      <span class="util-sp"></span>
      <nav class="langs" aria-label="${esc(T('langLabel'))}">
        ${LANGS.map(c => `<button type="button" class="lang" data-lang="${c}"
          aria-pressed="${c === L}" lang="${UI[c].htmlLang}">${esc(UI[c].langShort)}</button>`).join('')}
      </nav>
    </div></div>

    <div class="notice"><div class="wrap">
      <b>${esc(T('noticeTag'))}</b>
      <span>${esc(T('noticeBody'))}${T('transNote') ? ' ' + esc(T('transNote')) : ''}</span>
    </div></div>

    <header class="mast"><div class="wrap">
      <a class="brand" href="#/">
        <img src="assets/img/rudaw-mark-teal.png" alt="Rudaw" width="42" height="42">
        <span>
          <span class="brand-t">${esc(T('brandName'))}</span>
          <span class="brand-s">${esc(T('brandSub'))}</span>
        </span>
      </a>
      <div class="searchbar">
        <label class="sr" for="q">${esc(T('searchLabel'))}</label>
        <input id="q" type="search" placeholder="${esc(T('searchPh'))}" autocomplete="off">
        ${ICON.search}
      </div>
      <a class="btn btn--solid" href="#/ask">${esc(T('navAsk'))}</a>
    </div></header>

    <nav class="nav" aria-label="${esc(T('navLabel'))}"><div class="wrap">
      ${NAV.map(([href, key, name]) =>
        `<a href="${href}" ${route.name === name ? 'aria-current="page"' : ''}>${esc(T(key))}</a>`).join('')}
    </div></nav>

    <div class="emerg"><div class="wrap">
      <span class="emerg-h">${ICON.alert}<span>${esc(T('emergH'))}</span></span>
      <ul class="emerg-l">${li(T('emergList'))}</ul>
    </div></div>`;

  document.getElementById('foot').innerHTML = `
    <div class="wrap">
      <div class="foot-top">
        <div class="foot-brand">
          <img src="assets/img/rudaw-mark.png" alt="" width="38" height="38">
          <span><b>${esc(T('footSlogan'))}</b><span>Rudaw Media Network</span></span>
        </div>
        <nav class="foot-nav">
          ${NAV.slice(1).map(([href, key]) => `<a href="${href}">${esc(T(key))}</a>`).join('')}
        </nav>
      </div>
      <div class="foot-c data">
        <span>+964 750 811 00 01</span><span>PORTAL@RUDAW.NET</span><span>WWW.RUDAW.NET</span>
        <span class="foot-build">BUILD ${BUILD}</span>
      </div>
      <p class="foot-note">${esc(T('footNote'))}</p>
    </div>`;
}


/* ---------- motion ------------------------------------- */
const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!REDUCED) document.documentElement.classList.add('motion');

let seer = null;
function setupMotion() {
  if (REDUCED) return;

  /* The travelling pulse has to know the real path length, or the
     dash cycle will not close and the loop will visibly jump. */
  const run = document.querySelector('.pulse-run');
  if (run && run.getTotalLength) {
    const len = run.getTotalLength();
    run.style.setProperty('--len', len.toFixed(1));
    run.style.setProperty('--seg', Math.max(70, len * 0.07).toFixed(1));
    run.style.setProperty('--gap', (len - Math.max(70, len * 0.07)).toFixed(1));
  }

  /* Reveal each block once, the first time it is seen.

     Intersection alone is not enough to be safe: a jump to an anchor,
     the End key, or a fast flick can carry an element past the viewport
     inside one frame, and it would then stay hidden for good. So the
     observer also reveals anything already scrolled past, and a scroll
     sweep backs it up. Content never staying hidden matters more than
     the animation. */
  if (seer) seer.disconnect();
  seer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting || e.boundingClientRect.top < 0) reveal(e.target);
    });
  }, { rootMargin: '0px 0px 6% 0px', threshold: 0.02 });

  const sel = '.rule-h, .cat-tile, .vc, .bcast, .svc, .corr, .sec-item, .pillar, .stat-i, .tool-card, .triage, .qform, .tiers, .entries';
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('rv');
    /* stagger only within a row, so a long list never crawls in */
    el.style.setProperty('--d', (i % 6) * 55 + 'ms');
    seer.observe(el);
  });

  document.querySelectorAll('.stat-i b').forEach(b => {
    const n = parseInt(b.textContent, 10);
    if (!isNaN(n)) { b.dataset.count = n; b.textContent = '0'; seer.observe(b); }
  });

  sweep();
}

function reveal(el) {
  if (el.classList.contains('seen')) return;
  el.classList.add('seen');
  if (seer) seer.unobserve(el);
  if (el.dataset.count) countUp(el);
}

/* Backstop: anything at or above the fold that the observer missed. */
let sweeping = false;
function sweep() {
  sweeping = false;
  const h = window.innerHeight;
  document.querySelectorAll('.rv:not(.seen), [data-count]:not(.seen)').forEach(el => {
    if (el.getBoundingClientRect().top < h) reveal(el);
  });
}
if (!REDUCED) {
  addEventListener('scroll', () => {
    if (sweeping) return;
    sweeping = true;
    requestAnimationFrame(sweep);
  }, { passive: true });
  addEventListener('resize', sweep, { passive: true });
}

function countUp(el) {
  const target = +el.dataset.count, dur = 900, t0 = performance.now();
  const step = now => {
    const p = Math.min(1, (now - t0) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- router ------------------------------------- */
function parseHash() {
  const h = location.hash.replace(/^#/, '') || '/';
  const [path, qs] = h.split('?');
  const params = Object.fromEntries(new URLSearchParams(qs || ''));
  const seg = path.split('/').filter(Boolean);

  if (!seg.length) return { name: 'home', params };
  const map = {
    conditions: 'conditions', medicines: 'medicines', checks: 'checks',
    services: 'services', ask: 'ask', standards: 'standards',
    search: 'search', tools: 'tools'
  };
  if (seg[0] === 'c' && seg[1]) return { name: 'condition', params: { ...params, id: seg[1] } };
  if (seg[0] === 'm' && seg[1]) return { name: 'medicine', params: { ...params, id: seg[1] } };
  if (seg[0] === 'tools' && seg[1]) return { name: 'tool', params: { ...params, id: seg[1] } };
  if (map[seg[0]]) return { name: map[seg[0]], params };
  return { name: 'notfound', params };
}

const VIEWS = {
  home: viewHome, conditions: viewConditions, condition: viewCondition,
  medicines: viewDrugs, medicine: viewDrug, checks: viewClaims,
  services: viewPlaces, ask: viewAsk, standards: viewStandards,
  search: viewSearch, notfound: viewNotFound,
  tools: viewTools, tool: viewTool
};

function render(keepScroll) {
  route = parseHash();
  renderChrome();
  const main = document.getElementById('main');
  main.className = 'view';
  main.innerHTML = (VIEWS[route.name] || viewNotFound)(route.params);

  const q = document.getElementById('q');
  if (q && route.name === 'search') q.value = route.params.q || '';

  if (!keepScroll) window.scrollTo({ top: 0, behavior: 'instant' });
  document.title = pageTitle();
  setupMotion();
}

function pageTitle() {
  const base = { ku: 'ڕووداو تەندروستی', ar: 'رووداو الصحة',
                 kmr: 'Rudaw Tenduristî', en: 'Rudaw Health' }[L];
  if (route.name === 'condition') { const c = condById(route.params.id); if (c) return `${c[L].name} — ${base}`; }
  if (route.name === 'medicine') { const m = drugById(route.params.id); if (m) return `${m[L].name} — ${base}`; }
  if (route.name === 'tool') { const t = toolById(route.params.id); if (t) return `${TL[L].t[t.id].name} — ${base}`; }
  if (route.name === 'tools') return `${TL[L].toolsH} — ${base}`;
  const k = { conditions: 'hCond', medicines: 'hDrug', checks: 'hClaim', services: 'hPlace',
              ask: 'hAsk', standards: 'hStd', search: 'hSearch' }[route.name];
  return k ? `${T(k)} — ${base}` : base;
}

function setLang(next) {
  L = next;
  document.body.dir = T('dir');
  document.documentElement.lang = T('htmlLang');
  try { localStorage.setItem('rh-lang', L); } catch (e) { /* storage may be blocked */ }
  render(true);
}

/* ---------- events ------------------------------------- */
document.addEventListener('click', e => {
  const lang = e.target.closest('[data-lang]');
  if (lang) { if (lang.dataset.lang !== L) setLang(lang.dataset.lang); return; }

  const nav = e.target.closest('[data-nav]');
  if (nav) { location.hash = nav.dataset.nav; return; }

  const chip = e.target.closest('[data-q]');
  if (chip) { location.hash = '#/search?q=' + encodeURIComponent(chip.dataset.q); return; }

  const again = e.target.closest('#q-again');
  if (again) { qSubmitted = null; render(true); return; }

  const toc = e.target.closest('[data-toc]');
  if (toc) {
    e.preventDefault();
    const el = document.querySelector(toc.getAttribute('href'));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

document.addEventListener('submit', e => {
  if (e.target.id !== 'q-form') return;
  e.preventDefault();
  const text = document.getElementById('q-text').value.trim();
  const err = document.getElementById('q-err');
  if (!text) { err.hidden = false; document.getElementById('q-text').focus(); return; }
  err.hidden = true;
  qSubmitted = 'RH-Q-' + String(++qCount).padStart(5, '0');
  render(true);
});

document.addEventListener('input', e => {
  if (e.target.id !== 'q') return;
  clearTimeout(window.__st);
  const v = e.target.value;
  window.__st = setTimeout(() => {
    if (!v.trim()) { if (route.name === 'search') location.hash = '#/'; return; }
    const next = '#/search?q=' + encodeURIComponent(v);
    if (location.hash !== next) {
      history.replaceState(null, '', next);
      render(true);
      const q = document.getElementById('q');
      if (q) { q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
    }
  }, 260);
});

window.addEventListener('hashchange', () => render());

/* ---------- boot --------------------------------------- */
try { L = localStorage.getItem('rh-lang') || 'ku'; } catch (e) { L = 'ku'; }
if (!LANGS.includes(L)) L = 'ku';
document.body.dir = T('dir');
document.documentElement.lang = T('htmlLang');
render();
