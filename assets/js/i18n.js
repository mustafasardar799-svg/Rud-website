/* ============================================================
   Rudaw Health — interface strings (ku = Sorani, en = English)
   Kurdish is the primary language; English is the parallel set.
   ============================================================ */

const UI = {
ku: {
  /* ---- chrome ---- */
  htmlLang: "ckb", dir: "rtl", langBtn: "English",
  brandName: "تەندروستی", brandSub: "پێش هەموو شتێک",
  utilEmerg: "فریاگوزاری", utilEmergNum: "١٢٢",
  noticeTag: "نموونەی پیشاندان",
  noticeBody: "ناوەڕۆکی پزیشکی لێرەدا نموونەیە و پێویستی بە پێداچوونەوەی کلینیکی هەیە پێش بڵاوکردنەوە.",
  skip: "بازدان بۆ ناوەڕۆکی سەرەکی",
  searchPh: "نەخۆشی، دەرمان، یان نیشانەیەک بنووسە…",
  searchLabel: "گەڕان لە بابەتەکاندا",

  /* ---- navigation ---- */
  navHome: "سەرەتا", navCond: "نەخۆشییەکان", navDrug: "دەرمانەکان",
  navClaim: "ڕاست یان هەڵە", navPlace: "بۆ کوێ بچم",
  navAsk: "پرسیارێک بنێرە", navStd: "پێوەرەکانمان", navCorr: "هەڵەکانمان",
  navLabel: "ڕێنیشاندەری سەرەکی",

  /* ---- emergency band ---- */
  emergH: "ئێستا بڕۆ بۆ فریاگوزاری ئەگەر:",
  emergList: [
    "ئازاری سنگ یان تەنگەنەفەسی",
    "شۆڕبوونەوەی ڕوو، لاوازی لایەک، یان تێکچوونی قسەکردن",
    "خوێنبەربوونی زۆر",
    "تای منداڵێکی کەمتر لە ٣ مانگ",
    "سستی و بەئاگا نەهاتنەوە"
  ],

  /* ---- front page ---- */
  leadKicker: "بابەتی ئەم هەفتەیە",
  secKicker: "هەروەها لەم وەرزەدا",
  askedH: "زۆرترین پرسیاری ئەم هەفتەیە",
  askedSub: "لە پرسیارەکانی بینەرانەوە — ئەمانە ئاراستەی بابەتەکانمان دیاری دەکەن.",
  askedFoot: "پرسیارەکەت لێرە نییە؟ بینێرە — هەموو پرسیارێک دەخوێنرێتەوە.",
  catsH: "بەپێی بەشەکانی جەستە",
  catsMore: "هەموو نەخۆشییەکان",
  claimsH: "دوایین بڕیارەکانمان",
  claimsSub: "بانگەشەی بڵاوبووەوە لە ناوچەکەماندا، بە چوار بڕیار — و «نازانرێت» یەکێکیانە.",
  claimsMore: "هەموو بڕیارەکان",
  bcastH: "لە پەخشەوە",
  bcastSub: "پرسیاری بینەران کە بوونەتە بابەتی پەخش، لێرەش بڵاو دەکرێنەوە.",
  bcastMore: "پرسیارێک بنێرە",
  drugsH: "دەرمانەکان",
  drugsMore: "هەموو دەرمانەکان",

  /* ---- standards band ---- */
  stdH: "چۆن ئەم بابەتانە دروست دەکەین",
  stdMore: "پێوەرەکانمان بە درێژی",
  p1H: "دوو واژوو", p1B: "هیچ بابەتێک بڵاو ناکرێتەوە بەبێ دوو واژوو: <b>بەرپرسی ناوەڕۆک</b> و <b>پێداچوونەوەری پزیشکی</b>. ناوی پێداچوونەوەر لەسەر هەر بابەتێک دیارە.",
  p2H: "ئاستی بەڵگە", p2B: "هەر بابەتێک ئاستی بەڵگەی خۆی پیشان دەدات، لە <b>بۆچوونی پسپۆڕ</b>ەوە تا <b>ڕێنمایی نێودەوڵەتی</b>. کاتێک بەڵگە لاواز بێت، دەیڵێین.",
  p3H: "ڕێکەوتی پێداچوونەوە", p3B: "هەر بابەتێک ڕێکەوتی دوایین پێداچوونەوە و ڕێکەوتی پێداچوونەوەی داهاتووی هەیە. بابەتی کۆن بەبێ ئاماژە نامێنێتەوە.",
  statEntries: "بابەتی پێداچوونەوەکراو",
  statReviewers: "پێداچوونەوەری پزیشکی",
  statCorr: "هەڵەی ڕاستکراوە",

  /* ---- index pages ---- */
  hCond: "نەخۆشییەکان",
  dCond: "پێڕستی نەخۆشییە باوەکان. هەر یەکێکیان هەمان پێکهاتەی هەیە: ئەوە چییە، نیشانەکان، کەی ئێستا بڕۆ، چی دەکەیت، چی لە پزیشک بپرسیت.",
  hDrug: "دەرمانەکان",
  dDrug: "دەرمان و پێداویستی خۆراکی بە ڕاستگۆیی. چی دەکات، چی ناکات، لەگەڵ چی تێکەڵ نابێت.",
  hClaim: "ڕاست یان هەڵە",
  dClaim: "بڕیارمان لەسەر ئەو بانگەشانەی لە ناوچەکەماندا بڵاو دەبنەوە. چوار بڕیار هەیە — و «نازانرێت» یەکێکیانە.",
  hPlace: "بۆ کوێ بچم",
  dPlace: "کام دەزگا چ خزمەتگوزارییەک پێشکەش دەکات، لە چ کاتێکدا.",
  hCorr: "هەڵەکانمان",
  dCorr: "هەر هەڵەیەک کە کردوومانە و چۆن ڕاستمان کردەوە. بە ڕێکەوت، بۆ هەمیشە.",
  hSearch: "ئەنجامی گەڕان",
  allCats: "هەمووی",
  alphaAll: "هەموو پیتەکان",
  countN: n => `${n} بابەت`,
  noRes: "هیچ ئەنجامێک نەدۆزرایەوە. وشەیەکی تر تاقی بکەرەوە، یان پرسیارەکەت بۆ ئێمە بنێرە.",

  /* ---- article ---- */
  secWhat: "ئەمە چییە", secSym: "نیشانەکان", secDo: "چی دەتوانیت بکەیت",
  secFlag: "ئێستا بڕۆ بۆ فریاگوزاری", secAsk: "لە پزیشکەکەت بپرسە",
  drugDoes: "چی دەکات", drugNot: "چی ناکات", drugCare: "ئاگاداری",
  flagsFoot: "لەم حاڵەتانەدا پرسیار مەنێرە و چاوەڕێ مەکە — ڕاستەوخۆ بڕۆ.",
  tocH: "لەم لاپەڕەیەدا",
  relH: "بابەتی پەیوەندیدار",
  backCond: "هەموو نەخۆشییەکان", backDrug: "هەموو دەرمانەکان",

  /* ---- review stamp ---- */
  stampH: "تۆماری پێداچوونەوە",
  sEv: "ئاستی بەڵگە", sRev: "دوایین پێداچوونەوە", sBy: "پێداچوونەوەری پزیشکی",
  sNext: "پێداچوونەوەی داهاتوو", sId: "ژمارەی بابەت",
  stampFoot: "ئەم بابەتە دوو واژووی وەرگرتووە: بەرپرسی ناوەڕۆک و پێداچوونەوەری پزیشکی.",

  /* ---- verdicts ---- */
  vTrue: "ڕاست", vFalse: "هەڵە", vPart: "بەشێکی ڕاستە", vUnk: "نازانرێت",

  /* ---- ask ---- */
  hAsk: "پرسیارێک بنێرە",
  dAsk: "ئەم بەشە ئاراستەی ناوەڕۆکی ئێمە دیاری دەکات. ئەوەی ئێوە دەیپرسن، ئەوەیە کە دەیکەینە بابەت.",
  qLabel: "پرسیارەکەت", qHint: "بە زمانی خۆت بینووسە. پێویست ناکات وشەی پزیشکی بەکاربێنیت.",
  qTopic: "بابەت", qCity: "شار (ئارەزوومەندانە)", qName: "ناو (ئارەزوومەندانە)",
  qConsent: "ڕازیم پرسیارەکەم لە پەخشدا بخوێنرێتەوە، بەبێ ناوم.",
  qSend: "بینێرە", qErr: "تکایە پرسیارەکەت بنووسە.",
  qOkH: "پرسیارەکەت گەیشت",
  qOkP1: "پرسیارەکەت چووە ناو پێڕستی ئەم هەفتەیەوە. بەرپرسی ناوەڕۆک هەموو پرسیارێک دەخوێنێتەوە.",
  qOkP2: "ئێمە بە تایبەتی وەڵامی تاکەکەسی نادەینەوە و دەستنیشانکردنی نەخۆشی ناکەین. ئەگەر پرسیارەکەت باو بێت، دەبێتە بابەتێکی پەخش و لێرەش بڵاو دەکرێتەوە.",
  qRef: "ژمارەی پرسیار", qAgain: "پرسیارێکی تر بنێرە",
  trH1: "چی دەتوانین وەڵام بدەینەوە",
  trY: ["ئەم دەرمانە چی دەکات و چی ناکات","ئایا ئەم بانگەشەیە ڕاستە","کەی پێویستە بچمە لای پزیشک","ئەم پشکنینە چی پیشان دەدات","چۆن ڕێگری لەم نەخۆشییە بکەم"],
  trH2: "چی ناتوانین وەڵام بدەینەوە",
  trN: ["ئایا من ئەم نەخۆشیم هەیە — ناتوانین دەستنیشانی بکەین","چ دەرمانێک بخۆم و چەند — ئەمە کاری پزیشکی خۆتە","خوێندنەوەی ئەنجامی پشکنینی تایبەت بە تۆ","بڕیاری گۆڕینی دەرمانەکانت"],
  emH: "ئەگەر ئەمانەت هەیە، پرسیار مەنێرە — ئێستا بڕۆ",
  waH: "لە واتسئاپ", waS: "دەنگ یان نووسین. لە کوردی، عەرەبی یان ئینگلیزی. زۆر بینەر پرسیارەکەیان بە دەنگ دەنێرن — ئەمە ئاساییە.",
  hAns: "پرسیارە وەڵامدراوەکان",
  ansOn: "لە پەخشدا وەڵام درایەوە",

  /* ---- standards page ---- */
  hStd: "پێوەرەکانمان",
  dStd: "ئەم بەشە ڕوون دەکاتەوە کە بابەتەکانمان چۆن دروست دەکرێن، کێ پێداچوونەوەیان بۆ دەکات، و کەی هەڵە ڕاست دەکەینەوە.",
  stdTiersH: "ئاستەکانی بەڵگە",
  stdTiersD: "هەر بابەتێک بەپێی بەهێزترین بەڵگەی بەردەست پۆلێن دەکرێت. ئەمە لەسەر هەر بابەتێک بە ڕوونی دیارە.",
  stdWhoH: "کێ پێداچوونەوە دەکات",
  stdWhoD: "هەر بابەتێک لەلایەن پسپۆڕێکی ئەو بوارەوە پێداچوونەوەی بۆ دەکرێت. ناوەکەیان بڵاو دەکرێتەوە — ئەمە بەرپرسیارێتییە، نەک ڕازاندنەوە.",
  stdCorrH: "سیاسەتی ڕاستکردنەوە",
  stdCorrD: "کاتێک هەڵە دەکەین، ڕاستی دەکەینەوە و بە ڕێکەوت بڵاوی دەکەینەوە. هەڵەکان ناسڕدرێنەوە.",
  stdLimitH: "سنوورەکانمان",

  /* ---- footer ---- */
  footSlogan: "تەندروستی پێش هەموو شتێک",
  footNote: "ئەم ماڵپەڕە جێگای ڕاوێژی پزیشکی نییە. لە حاڵەتی فریاگوزاریدا پەیوەندی بە ١٢٢ بکە. هەموو بابەتێک دوو واژووی پێویستە پێش بڵاوکردنەوە — بەرپرسی ناوەڕۆک و پێداچوونەوەری پزیشکی."
},

en: {
  /* ---- chrome ---- */
  htmlLang: "en", dir: "ltr", langBtn: "کوردی",
  brandName: "Health", brandSub: "Before everything else",
  utilEmerg: "Emergency", utilEmergNum: "122",
  noticeTag: "PROTOTYPE",
  noticeBody: "Medical content here is sample text and requires clinical review before publication.",
  skip: "Skip to main content",
  searchPh: "Type a condition, medicine or symptom…",
  searchLabel: "Search entries",

  /* ---- navigation ---- */
  navHome: "Home", navCond: "Conditions", navDrug: "Medicines",
  navClaim: "True or False", navPlace: "Where to go",
  navAsk: "Ask a question", navStd: "Our standards", navCorr: "Corrections",
  navLabel: "Main navigation",

  /* ---- emergency band ---- */
  emergH: "Go to emergency now if:",
  emergList: [
    "Chest pain or breathlessness",
    "A drooping face, one-sided weakness, or slurred speech",
    "Heavy bleeding",
    "Fever in a baby under 3 months",
    "Floppiness or difficulty waking"
  ],

  /* ---- front page ---- */
  leadKicker: "This week's entry",
  secKicker: "Also this season",
  askedH: "Most asked this week",
  askedSub: "From viewers' questions — these set our editorial agenda.",
  askedFoot: "Your question not here? Send it — every question is read.",
  catsH: "Browse by body area",
  catsMore: "All conditions",
  claimsH: "Our latest verdicts",
  claimsSub: "Claims circulating in the region, with four verdicts — and \"not yet known\" is one of them.",
  claimsMore: "All verdicts",
  bcastH: "From the broadcast",
  bcastSub: "Viewers' questions that became broadcast items, published here too.",
  bcastMore: "Ask a question",
  drugsH: "Medicines",
  drugsMore: "All medicines",

  /* ---- standards band ---- */
  stdH: "How these entries are made",
  stdMore: "Our standards in full",
  p1H: "Two signatures", p1B: "No entry is published without two signatures: the <b>content producer</b> and the <b>medical reviewer</b>. The reviewer is named on every entry.",
  p2H: "Evidence level", p2B: "Every entry shows the strength of its evidence, from <b>expert opinion</b> to <b>international guideline</b>. Where the evidence is weak, we say so.",
  p3H: "Review dates", p3B: "Every entry carries the date it was last reviewed and the date it is next due. Nothing goes stale without being marked.",
  statEntries: "reviewed entries",
  statReviewers: "medical reviewers",
  statCorr: "published corrections",

  /* ---- index pages ---- */
  hCond: "Conditions",
  dCond: "Common conditions, every one on the same template: what it is, symptoms, when to go now, what you can do, what to ask your doctor.",
  hDrug: "Medicines",
  dDrug: "Medicines and supplements, honestly. What it does, what it does not do, what it interacts with.",
  hClaim: "True or False",
  dClaim: "Our verdict on claims circulating in the region. Four verdicts — and \"not yet known\" is one of them.",
  hPlace: "Where to go",
  dPlace: "Which facility provides which service, and when.",
  hCorr: "Our corrections",
  dCorr: "Every mistake we have made and how we fixed it. Dated, permanent.",
  hSearch: "Search results",
  allCats: "All",
  alphaAll: "All letters",
  countN: n => `${n} ${n === 1 ? "entry" : "entries"}`,
  noRes: "No results. Try another word, or send us your question.",

  /* ---- article ---- */
  secWhat: "What it is", secSym: "Symptoms", secDo: "What you can do",
  secFlag: "Go to emergency now", secAsk: "Ask your doctor",
  drugDoes: "What it does", drugNot: "What it does not do", drugCare: "Take care",
  flagsFoot: "In these situations do not send a question and do not wait — go immediately.",
  tocH: "On this page",
  relH: "Related entries",
  backCond: "All conditions", backDrug: "All medicines",

  /* ---- review stamp ---- */
  stampH: "Review record",
  sEv: "Evidence level", sRev: "Last reviewed", sBy: "Medical reviewer",
  sNext: "Next review due", sId: "Entry ID",
  stampFoot: "This entry carries two signatures: the content producer and the medical reviewer.",

  /* ---- verdicts ---- */
  vTrue: "TRUE", vFalse: "FALSE", vPart: "PARTLY TRUE", vUnk: "NOT YET KNOWN",

  /* ---- ask ---- */
  hAsk: "Ask a question",
  dAsk: "This section sets our editorial agenda. What you ask is what we make.",
  qLabel: "Your question", qHint: "Write it in your own words. You do not need to use medical terms.",
  qTopic: "Topic", qCity: "City (optional)", qName: "Name (optional)",
  qConsent: "I agree my question may be read on air, without my name.",
  qSend: "Send", qErr: "Please write your question.",
  qOkH: "Your question has arrived",
  qOkP1: "Your question has gone into this week's list. The content producer reads every question.",
  qOkP2: "We do not give individual answers and we do not diagnose. If your question is a common one, it becomes a broadcast item and is published here too.",
  qRef: "Question reference", qAgain: "Send another question",
  trH1: "What we can answer",
  trY: ["What this medicine does and does not do","Whether a claim going around is true","When you should see a doctor","What this test actually shows","How to prevent this condition"],
  trH2: "What we cannot answer",
  trN: ["Whether you have a condition — we cannot diagnose","Which medicine to take and how much — that is for your own doctor","Reading your personal test results","Deciding to change your medication"],
  emH: "If you have any of these, do not send a question — go now",
  waH: "On WhatsApp", waS: "Voice or text. In Kurdish, Arabic or English. Many viewers send their question as a voice note — that is fine.",
  hAns: "Questions we have answered",
  ansOn: "Answered on air",

  /* ---- standards page ---- */
  hStd: "Our standards",
  dStd: "This section explains how our entries are made, who reviews them, and when we correct a mistake.",
  stdTiersH: "Levels of evidence",
  stdTiersD: "Every entry is graded by the strongest evidence available to it. This is shown openly on the entry itself.",
  stdWhoH: "Who reviews",
  stdWhoD: "Every entry is reviewed by a specialist in that field. Their name is published — this is accountability, not decoration.",
  stdCorrH: "Corrections policy",
  stdCorrD: "When we get something wrong, we fix it and publish the correction with its date. Corrections are not deleted.",
  stdLimitH: "Our limits",

  /* ---- footer ---- */
  footSlogan: "Health before everything else",
  footNote: "This site is not a substitute for medical advice. In an emergency call 122. Every entry requires two signatures before publication — the content producer and the medical reviewer."
}
};
