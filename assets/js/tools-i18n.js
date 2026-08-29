/* ============================================================
   Rudaw Health — tool strings, four languages

   Every tool states what it does not do. These present published
   standard guidance, not personal medical advice.
   ============================================================ */

const TL = {

/* ---------------- کوردیی سۆرانی ---------------- */
ku: {
  toolsH: "ئامرازەکان",
  toolsD: "ئامرازی هەژمارکردن کە بە بابەتەکانمانەوە بەستراون. هەریەکەیان ژمارەکانی خۆی، سنوورەکانی خۆی، و ئەو خاڵە پیشان دەدات کە پێویستە بەکارهێنانی ڕابگریت و بچیتە لای پزیشک.",
  calc: "هەژمار بکە", clear: "سڕینەوە",
  resultH: "ئەنجام", limitsH: "ئەمە چی ناکات", relatedH: "بابەتە تەواوەکە بخوێنەوە",
  disclaimer: "ڕێنمایی گشتی، نەک ڕاوێژی پزیشکی تایبەت بە تۆ.",
  enterAll: "بەهایەک بنووسە بۆ بینینی ئەنجام.",
  outOfRange: "ئەم بەهایە لە دەرەوەی ئەو سنوورەیە کە ئەم ئامرازە دەیگرێتەوە.",
  t: {
    paracetamol: {
      name: "ئەندازەی پاراسیتامۆل بۆ منداڵ",
      blurb: "بە پێی کێش، نەک بە پێی تەمەن — ئەو هەڵەیەی ڕاستمان کردەوە.",
      desc: "ئەندازەی پاراسیتامۆل بۆ منداڵ بە پێی کێشی جەستە دیاری دەکرێت. دیاریکردنی بە پێی تەمەن باوترین هەڵەیە، و ئێمە خۆمان لە تەمموزی ٢٠٢٦دا ئەم هەڵەیەمان کرد و ڕاستمان کردەوە. کێشی منداڵەکە بنووسە بۆ بینینی ئەندازەی ستانداردی بڵاوکراوە.",
      fWeight: "کێشی منداڵ", unitKg: "کگم",
      rSingle: "ئەندازەی یەک جار",
      rSyrup120: "بە شەربەتی ١٢٠ ملگم/٥ مل",
      rSyrup250: "بە شەربەتی ٢٥٠ ملگم/٥ مل",
      rInterval: "هەر ٤ – ٦ کاتژمێر جارێک، زۆرترین ٤ جار لە ٢٤ کاتژمێردا",
      rMax: "زۆرترین بڕ لە ٢٤ کاتژمێردا",
      warnBaby: "منداڵی کەمتر لە ٣ مانگ: بەبێ ڕاوێژی پزیشک پاراسیتامۆلی مەدەرێ.",
      warnLabel: "هێزی نووسراو لەسەر بوتڵەکەت بپشکنە — لەوانەیە جیاواز بێت لە هەردووکیان.",
      warnDouble: "زۆرێک لە دەرمانی هەڵامەت و کۆکە پاراسیتامۆلیان تێدایە. دانی هەردووکیان بەیەکەوە هۆکاری ئەندازەی زیادەیە.",
      limits: [
        "پێت ناڵێت ئایا منداڵەکەت پێویستی بە پاراسیتامۆل هەیە یان نا",
        "جێگای ئەو ئەندازەیە ناگرێتەوە کە لەسەر بەرهەمەکەی خۆت نووسراوە",
        "منداڵی کەمتر لە ٣ مانگ و ئایبوپرۆفین ناگرێتەوە"
      ]
    },
    bp: {
      name: "پەستانی خوێنەکەت چی دەگەیەنێت",
      blurb: "یەک پێوان دەستنیشانکردن نییە — بەڵام هەندێک ژمارە واتای ئێستا بڕۆ.",
      desc: "پێوانێک بنووسە بۆ بینینی ئەوەی دەکەوێتە کام پۆل، بە پێی سنوورەکانی کۆمەڵەی ئەورووپی دڵ. ڕێنماییەکان کەمێک جیاوازن؛ سنوورە ئەمریکییەکان ژمارەی نزمتر بە پەستانی بەرز پۆلێن دەکەن.",
      fSys: "ژمارەی سەرەوە", fDia: "ژمارەی خوارەوە",
      cOpt: "باشترین", cNormal: "ئاسایی", cHigh: "ئاسایی بەرز",
      cG1: "پەستانی بەرز — پلەی یەک", cG2: "پەستانی بەرز — پلەی دوو",
      cG3: "پەستانی بەرز — توند", cCrisis: "پێوانی توند — ئێستا چارەسەر بخوازە",
      aOpt: "ساڵانە جارێک بیپێوە.", aNormal: "ساڵانە جارێک بیپێوە.",
      aHigh: "شایانی ئەوەیە چەند ڕۆژێک دووبارە بیپێویت و لەگەڵ پزیشک باسی بکەیت.",
      aG1: "بە پێوانی دووبارە دڵنیای بکەرەوە، پاشان بڕۆ بۆ لای پزیشک.",
      aG2: "بە زووترین کات بڕۆ بۆ لای پزیشک.",
      aCrisis: "ئەگەر لەگەڵیدا ئازاری سنگ، تەنگەنەفەسی، لاوازی لایەک، یان کێشەی قسەکردنت هەیە — ئێستا فریاگوزاری بانگ بکە. ئەگەرنا هەر ئەمڕۆ چارەسەر بخوازە.",
      limits: [
        "یەک پێوان پەستانی خوێنی بەرز دەستنیشان ناکات",
        "تەمەن، شەکرە، نەخۆشی گورچیلە و دووگیانی لەبەرچاو ناگرێت",
        "پێوەری ماڵەوە پێویستی بە بەراوردکردن هەیە لەگەڵ ئامێری کلینیک"
      ]
    },
    thal: {
      name: "تالاسیمیا: ئەنجامی پشکنین بۆ ژن و مێرد چی دەگەیەنێت",
      blurb: "ئەگەر هەردووکیان هەڵگر بن، هەر دووگیانییەک ئەگەری ١ لە ٤ی هەیە.",
      desc: "تالاسیمیا بۆماوەییە. هەڵگر هیچ نیشانەیەکی نییە. ئەمە پیشان دەدات ئەنجامی هەردوو لا بۆ هەر دووگیانییەک چی دەگەیەنێت — ئەمە هۆکاری بوونی پشکنینی پێش هاوسەرگیرییە.",
      fA: "لای یەکەم", fB: "لای دووەم",
      oCarrier: "هەڵگرە", oNot: "هەڵگر نییە", oUnknown: "پشکنینی نەکردووە",
      rAffected: "منداڵ بە توندی تووش دەبێت",
      rCarrier: "منداڵ هەڵگرە و تەندروستە",
      rClear: "منداڵ هیچیان نییە",
      rPerPreg: "بۆ هەر دووگیانییەک بە جیا",
      noteUnknown: "پێویستە هەردوو لا پشکنین بکەن پێش ئەوەی ئەمە هیچ واتایەکی هەبێت. پشکنینێکی سادەی خوێن لە چەند ڕۆژێکدا وەڵام دەداتەوە.",
      noteBoth: "ئەمە هەر ئەو حاڵەتەیە کە پشکنینی پێش هاوسەرگیری بۆ دۆزینەوەی دانراوە. ڕاوێژکارێکی بۆماوەیی دەتوانێت هەڵبژاردەکان ڕوون بکاتەوە — ئەم لاپەڕەیە ناتوانێت.",
      noteOne: "هیچ دووگیانییەک بە توندی تووش نابێت. لەوانەیە منداڵ هەڵگر بێت، کە بۆ بڕیارەکانی داهاتووی خۆی گرنگە.",
      limits: [
        "تەنها بۆماوەیی بێتا-تالاسیمیا دەگرێتەوە",
        "ناتوانێت ڕاپۆرتی تاقیگەی تایبەت بە تۆ لێکبداتەوە",
        "جێگای ڕاوێژی بۆماوەیی ناگرێتەوە"
      ]
    },
    ors: {
      name: "ئاوی چارەسەر بۆ منداڵی سکچوو",
      blurb: "مەترسییەکە ئاوبڕانەوەیە، نەک سکچوونەکە.",
      desc: "ئاوی خوێ و شەکری تایبەت (ORS) دوای هەر چوونە دەرەوەیەک ئەو چارەسەرەیە کە گرنگە. ئەمە ڕێنمایی ستانداردی ڕێکخراوی تەندروستی جیهانییە بۆ ماڵەوە.",
      fAge: "تەمەنی منداڵ",
      aUnder2: "کەمتر لە ٢ ساڵ", a2to10: "٢ بۆ ١٠ ساڵ", aOver10: "سەرووی ١٠ ساڵ",
      rAmount: "ORS دوای هەر چوونە دەرەوەیەکی شل",
      rOver10: "بەو ئەندازەیەی منداڵەکە دەیەوێت",
      warnRed: "ئێستا بڕۆ بۆ لای پزیشک ئەگەر: لە کاتی گریاندا فرمێسکی نییە، چاوی چووەتە ژوورەوە، بۆ ماوەی ٦ کاتژمێر پیسی نەکردووە، خوێن لە چوونە دەرەوەدایە، یان منداڵەکە سستە و بە ئاگا نایەتەوە.",
      warnNo: "بەخۆت دەرمانی ڕاگرتنی سکچوون یان ئانتی‌بایۆتیک مەدەرێ.",
      limits: [
        "جێگای هەڵسەنگاندنی ئاستی ئاوبڕانەوەی ئێستای منداڵەکە ناگرێتەوە",
        "ئاوبڕانەوەی توند ناگرێتەوە، کە پێویستی بە کلینیک هەیە",
        "هۆکارەکە دەستنیشان ناکات"
      ]
    },
    heat: {
      name: "مەترسی گەرما لە ئەمڕۆدا",
      blurb: "بۆ کرێکاری دەرەوە، ئەو ژمارەیەی گرنگە پلەی گەرمی نییە.",
      desc: "شێداری گۆڕانکاری لە مەترسی گەرمادا دەکات، چونکە ئارەقە ئیتر جەستە فێنک ناکاتەوە. ئەمە پلەی هەستپێکراو و واتاکەی بۆ کەسێک کە لە دەرەوە کاردەکات پیشان دەدات.",
      fTemp: "پلەی گەرمی", fHum: "شێداری",
      fRisk: "هەر یەکێک لەمانە",
      rHigherRisk: "کار لە دەرەوە، سەرووی ٦٥ ساڵ، دووگیانی، نەخۆشی دڵ یان گورچیلە، یان خواردنی دەرمانی پەستانی خوێن و میزبڕ",
      rFeels: "وەک ئەوە هەست پێدەکرێت",
      bCaution: "ئاگاداری", bExtreme: "ئاگاداری زۆر",
      bDanger: "مەترسی", bExtremeDanger: "مەترسی زۆر",
      aCaution: "بە بەردەوامی ئاو بخۆرەوە. لە سێبەردا پشوو بدە.",
      aExtreme: "لە ناوەڕاستی ڕۆژدا کاری قورس مەکە. پێش ئەوەی تینوو بیت ئاو بخۆرەوە.",
      aDanger: "بە بەردەوامبوونی چالاکی، ماندووبوونی گەرما چاوەڕوانکراوە. لە گەرمترین کاتەکاندا کاری دەرەوە ڕابگرە.",
      aExtremeDanger: "لێدانی گەرما مەترسییەکی ڕاستەقینەیە. لەم کاتانەدا پێویستە کاری دەرەوە ڕابگیرێت.",
      noteRisk: "لەگەڵ هەر یەکێک لەو هۆکارانەدا، پلەی سەرووی ئەمە بکە بە ڕێنمایی خۆت.",
      limits: [
        "پێوەرێکی گشتییە، نەک هەڵسەنگاندنی پزیشکی تایبەت بە تۆ",
        "خۆرەتاوی ڕاستەوخۆ، با و جلوبەرگ لەبەرچاو ناگرێت",
        "جێگای ڕاگرتن ناگرێتەوە کاتێک کەسێک هەست بە ناخۆشی دەکات"
      ]
    },
    bmi: {
      name: "BMI — و ئەوەی پێت ناڵێت",
      blurb: "ژمارەیەکی سەرەتاییە کە زۆر زیاد لێکدەدرێتەوە.",
      desc: "BMI ڕێژەیەکی سادەی کێشە بۆ باڵا. بۆ کۆمەڵگا بەسوودە و بۆ تاکەکەس لاوازە، و ئێمە پێمان باشترە سنوورەکانی پیشان بدەین وەک لەوەی بیانشارینەوە.",
      fWeight: "کێش", fHeight: "باڵا", unitCm: "سم",
      cUnder: "کێش کەم", cNormal: "مەودای تەندروست",
      cOver: "کێش زیاد", cObese: "قەڵەوی",
      note: "شوێنی چەوری لە ژمارەکە گرنگترە. پێوانی ناوقەد باشتر لە BMI مەترسی دڵ و شەکرە پێشبینی دەکات.",
      limits: [
        "ناتوانێت ماسولکە لە چەوری جیا بکاتەوە",
        "بۆ وەرزشوان، بەساڵاچوو، دووگیان و منداڵ متمانەپێکراو نییە",
        "سنوورەکانی لە کۆمەڵگای ئەورووپییەوە هاتوون و لەوانەیە بۆ کەسانی تر هەڵە پۆلێن بکەن",
        "هیچ لەسەر پەستانی خوێن، شەکر و کۆلێستڕۆڵت پێ ناڵێت"
      ]
    }
  }
},

/* ---------------- Kurmancî ---------------- */
kmr: {
  toolsH: "Amûr",
  toolsD: "Amûrên hesabkirinê yên bi mijarên me ve girêdayî. Her yek ji wan hesabê xwe, sînorên xwe, û wê xalê nîşan dide ku divê tu bikaranînê rawestînî û biçî cem bijîşkî.",
  calc: "Hesab bike", clear: "Paqij bike",
  resultH: "Encam", limitsH: "Ev çi nake", relatedH: "Mijara temam bixwîne",
  disclaimer: "Rênimayeke giştî ye, ne şêwireke bijîşkî ya kesane.",
  enterAll: "Nirxekê binivîse da ku encam xuya bibe.",
  outOfRange: "Ev nirx li derveyî wê sînorê ye ku ev amûr digire.",
  t: {
    paracetamol: {
      name: "Doza parasetamolê ji bo zarokan",
      blurb: "Li gorî giranî, ne li gorî temenî — ew çewtiya ku me rast kir.",
      desc: "Doza parasetamolê ji bo zarokan li gorî giraniya laş tê diyarkirin. Diyarkirina li gorî temenî çewtiya herî berbelav e, û me bi xwe di Tîrmeha 2026an de ew çewtî kir û rast kir. Giraniya zarokê binivîse da ku doza standard a weşandî xuya bibe.",
      fWeight: "Giraniya zarokê", unitKg: "kg",
      rSingle: "Dozeke yekane",
      rSyrup120: "Bi şerbeta 120 mg/5 ml",
      rSyrup250: "Bi şerbeta 250 mg/5 ml",
      rInterval: "Her 4 – 6 saetan carekê, herî zêde 4 caran di 24 saetan de",
      rMax: "Herî zêde di 24 saetan de",
      warnBaby: "Zarokên ji 3 mehan biçûktir: bêyî şêwira bijîşkî parasetamolê nedê.",
      warnLabel: "Hêza li ser şûşeya xwe binirxîne — dibe ku ji herduyan cuda be.",
      warnDouble: "Gelek dermanên serma û kuxînê jixwe parasetamol tê de heye. Dana herduyan bi hev re sedema doza zêde ye.",
      limits: [
        "Nabêje ka gelo zaroka te bi rastî pêdiviya wê bi parasetamolê heye",
        "Şûna doza li ser berhema te ya bi xwe nagire",
        "Zarokên ji 3 mehan biçûktir û îbuprofenê nagire"
      ]
    },
    bp: {
      name: "Pesta xwîna te çi tîne wateyê",
      blurb: "Pîvanek ne teşxîs e — lê hin hejmar tê wateya niha biçe.",
      desc: "Pîvanekê binivîse da ku xuya bibe dikeve kîjan polê, li gorî sînorên Civaka Ewropî ya Dil. Rênimayî hinekî cuda ne; sînorên Amerîkî hejmarên nizmtir wek pesta bilind bi nav dikin.",
      fSys: "Hejmara jorîn", fDia: "Hejmara jêrîn",
      cOpt: "Herî baş", cNormal: "Asayî", cHigh: "Asayî-bilind",
      cG1: "Pesta bilind — pileya yek", cG2: "Pesta bilind — pileya du",
      cG3: "Pesta bilind — dijwar", cCrisis: "Pîvaneke dijwar — niha lênêrînê bixwaze",
      aOpt: "Salê carekê bipîve.", aNormal: "Salê carekê bipîve.",
      aHigh: "Hêjayî ye ku çend rojan dubare bipîvî û bi bijîşkê xwe re biaxivî.",
      aG1: "Bi pîvanên dubare piştrast bike, paşê biçe cem bijîşkê xwe.",
      aG2: "Zû biçe cem bijîşkê xwe.",
      aCrisis: "Eger bi wê re êşa sînga, tengenefesî, lawaziya aliyekî, an zehmetiya axaftinê hebe — niha gazî awarteyê bike. Wekî din îro lênêrînê bixwaze.",
      limits: [
        "Pîvanek pesta xwînê ya bilind teşxîs nake",
        "Temen, şekir, nexweşiya gurçikê û ducaniyê nagire ber çav",
        "Pîvera malê pêdiviya wê bi berhevdana bi amûra klînîkê re heye"
      ]
    },
    thal: {
      name: "Talasemî: encama testê ji bo cotekê çi tîne wateyê",
      blurb: "Eger herdu hilgir bin, her ducanî îhtîmala 1 ji 4 dihewîne.",
      desc: "Talasemî kalikî ye. Hilgir ti nîşan tune. Ev nîşan dide ka encamên cotekê ji bo her ducaniyekê çi tînin wateyê — ev sedema hebûna testa berî zewacê ye.",
      fA: "Aliyê yekem", fB: "Aliyê duyem",
      oCarrier: "Hilgir e", oNot: "Ne hilgir e", oUnknown: "Nehatiye testkirin",
      rAffected: "Zarok bi giranî tûş dibe",
      rCarrier: "Zarok hilgir e û tendurist e",
      rClear: "Zarok ti ji wan tune",
      rPerPreg: "Ji bo her ducaniyekê bi serê xwe",
      noteUnknown: "Divê herdu alî bên testkirin berî ku ev tiştekî bîne wateyê. Testeke xwînê ya hêsan di nav çend rojan de bersivê dide.",
      noteBoth: "Ev bi rastî ew rewş e ku testa berî zewacê ji bo dîtina wê hatiye danîn. Şêwirmendekî kalikî dikare bijartinan rave bike — ev rûpel nikare.",
      noteOne: "Ti ducanî bi giranî tûş nabe. Dibe ku zarok hilgir bin, ku ji bo biryarên wan ên pêşerojê girîng e.",
      limits: [
        "Tenê kalikbûna beta-talasemiyê digire",
        "Nikare raporta laboratuwarê ya te ya kesane şîrove bike",
        "Şûna şêwirmendiya kalikî nagire"
      ]
    },
    ors: {
      name: "Ava vegerandinê ji bo zarokê bi zikêşî",
      blurb: "Xeter ziwabûn e, ne zikêşî.",
      desc: "Ava xwê û şekirê ya taybet (ORS) piştî her destaveke şil ew derman e ku girîng e. Ev rênimaya standard a Rêxistina Tenduristiyê ya Cîhanê ye ji bo malê.",
      fAge: "Temenê zarokê",
      aUnder2: "Ji 2 salî biçûktir", a2to10: "2 heta 10 salî", aOver10: "Ji 10 salî mezintir",
      rAmount: "ORS piştî her destaveke şil",
      rOver10: "Çiqas ku zarok dixwaze",
      warnRed: "Niha biçe cem bijîşkî eger: dema digirî hêstir tune, çav çûne hundir, 6 saetan mîz nekiriye, xwîn di destavê de heye, an zarok sist e û bi zehmetî hişyar dibe.",
      warnNo: "Bi serê xwe dermanên rawestandina zikêşiyê an antîbiyotîk nedê.",
      limits: [
        "Şûna nirxandina asta ziwabûna zarokê ya heyî nagire",
        "Ziwabûna giran nagire, ku pêdiviya wê bi klînîkê heye",
        "Sedemê teşxîs nake"
      ]
    },
    heat: {
      name: "Xetera germê ya îro",
      blurb: "Ji bo karkerên derve, hejmara girîng ne pileya germê ye.",
      desc: "Şilî diguherîne ka germ çiqas xeternak e, ji ber ku xwêdan êdî laş sar nake. Ev pileya hestpêkirî û wateya wê ji bo kesekî ku li derve dixebite nîşan dide.",
      fTemp: "Pileya germê", fHum: "Şilî",
      fRisk: "Yek ji van heye",
      rHigherRisk: "Kar li derve, ji 65 salî mezintir, ducanî, nexweşiya dil an gurçikê, an xwarina dermanê pesta xwînê û mîzkerê",
      rFeels: "Wek vê tê hîskirin",
      bCaution: "Hay jê hebe", bExtreme: "Hay jê hebe — zêde",
      bDanger: "Xeter", bExtremeDanger: "Xetera pir mezin",
      aCaution: "Bi berdewamî av vexwe. Di sî de bêhna xwe bide.",
      aExtreme: "Di navenda rojê de karê giran neke. Berî ku tî bibî av vexwe.",
      aDanger: "Bi domandina çalakiyê, westîna germê tê hêvîkirin. Di saetên herî germ de karê derve rawestîne.",
      aExtremeDanger: "Lêdana germê xetereke rastîn e. Di van saetan de divê karê derve rawestin.",
      noteRisk: "Bi her yek ji wan hokaran re, pileya jorî vê wek rênimaya xwe bigire.",
      limits: [
        "Pîverek giştî ye, ne nirxandineke bijîşkî ya kesane",
        "Tîroja rasterast, ba û cilan nagire ber çav",
        "Şûna rawestandinê nagire gava kesek xwe nebaş hîs dike"
      ]
    },
    bmi: {
      name: "BMI — û ya ku ew nabêje",
      blurb: "Hejmareke destpêkî ya hişk ku pir zêde tê şîrovekirin.",
      desc: "BMI rêjeyeke hişk a giraniyê bi bejnê re ye. Ji bo civakan kêrhatî ye û ji bo kesan lawaz e, û em tercîh dikin ku sînorên wê nîşan bidin ne ku wan veşêrin.",
      fWeight: "Giranî", fHeight: "Bejn", unitCm: "cm",
      cUnder: "Giraniya kêm", cNormal: "Navbera tendurist",
      cOver: "Giraniya zêde", cObese: "Qelewî",
      note: "Cihê rûnî ji hejmarê girîngtir e. Pîvana navê ji BMI baştir xetera dil û şekir pêşbîn dike.",
      limits: [
        "Nikare masûlkeyê ji rûnî cuda bike",
        "Ji bo werzişvan, kesên bi salên mezin, ducanî û zarokan nebawer e",
        "Sînorên wê ji civakên Ewropî hatine û dibe ku yên din şaş polîn bikin",
        "Li ser pesta xwînê, şekir û kolesterola te tiştekî nabêje"
      ]
    }
  }
},

/* ---------------- العربية ---------------- */
ar: {
  toolsH: "الأدوات",
  toolsD: "أدوات حسابية مرتبطة بموادنا. كل أداة تُظهر حسابها وحدودها والنقطة التي ينبغي عندها التوقف عن استخدامها ومراجعة الطبيب.",
  calc: "احسب", clear: "مسح",
  resultH: "النتيجة", limitsH: "ما لا تفعله هذه الأداة", relatedH: "اقرأ المادة كاملة",
  disclaimer: "إرشاد عام، وليس استشارة طبية شخصية.",
  enterAll: "أدخل قيمة لعرض النتيجة.",
  outOfRange: "هذه القيمة خارج النطاق الذي تغطيه هذه الأداة.",
  t: {
    paracetamol: {
      name: "جرعة الباراسيتامول للأطفال",
      blurb: "حسب الوزن لا حسب العمر — الخطأ الذي صححناه.",
      desc: "تُحسب جرعة الباراسيتامول للأطفال حسب وزن الجسم. والحساب حسب العمر هو أشيع خطأ، وهو خطأ ارتكبناه نحن وصححناه في تموز ٢٠٢٦. أدخل وزن الطفل لعرض الجرعة القياسية المنشورة.",
      fWeight: "وزن الطفل", unitKg: "كغم",
      rSingle: "الجرعة الواحدة",
      rSyrup120: "بشراب ١٢٠ ملغم/٥ مل",
      rSyrup250: "بشراب ٢٥٠ ملغم/٥ مل",
      rInterval: "كل ٤ – ٦ ساعات، بحد أقصى ٤ جرعات في ٢٤ ساعة",
      rMax: "الحد الأقصى في ٢٤ ساعة",
      warnBaby: "دون ثلاثة أشهر: لا تعطِ الباراسيتامول دون استشارة طبيب.",
      warnLabel: "تحقق من التركيز المكتوب على عبوتك — قد يختلف عن كليهما.",
      warnDouble: "كثير من أدوية الزكام والسعال يحتوي باراسيتامول أصلاً. إعطاء الاثنين معاً هو سبب الجرعات الزائدة.",
      limits: [
        "لا تخبرك إن كان طفلك يحتاج الباراسيتامول أصلاً",
        "لا تحل محل الجرعة المكتوبة على منتجك أنت",
        "لا تغطي الأطفال دون ثلاثة أشهر ولا الإيبوبروفين"
      ]
    },
    bp: {
      name: "ماذا تعني قراءة ضغط دمك",
      blurb: "قراءة واحدة ليست تشخيصاً — لكن بعض الأرقام تعني اذهب الآن.",
      desc: "أدخل قراءة لمعرفة الفئة التي تقع فيها، وفق عتبات الجمعية الأوروبية لأمراض القلب. الأدلة الإرشادية تختلف قليلاً؛ العتبات الأمريكية تصنّف أرقاماً أدنى على أنها ارتفاع ضغط.",
      fSys: "الرقم الأعلى", fDia: "الرقم الأدنى",
      cOpt: "مثالي", cNormal: "طبيعي", cHigh: "طبيعي مرتفع",
      cG1: "ارتفاع ضغط — الدرجة الأولى", cG2: "ارتفاع ضغط — الدرجة الثانية",
      cG3: "ارتفاع ضغط — شديد", cCrisis: "قراءة شديدة — اطلب الرعاية الآن",
      aOpt: "قِسه مرة في السنة.", aNormal: "قِسه مرة في السنة.",
      aHigh: "يستحق إعادة القياس على مدى أيام ومناقشته مع طبيبك.",
      aG1: "أكّده بقراءات متكررة، ثم راجع طبيبك.",
      aG2: "راجع طبيبك قريباً.",
      aCrisis: "إذا كان معه ألم في الصدر أو ضيق نفس أو ضعف في جانب واحد أو صعوبة في الكلام — اتصل بالطوارئ الآن. وإلا فاطلب الرعاية اليوم.",
      limits: [
        "قراءة واحدة لا تشخّص ارتفاع ضغط الدم",
        "لا تأخذ بالحسبان عمرك أو السكري أو مرض الكلى أو الحمل",
        "أجهزة المنزل تحتاج معايرة مقابل جهاز العيادة"
      ]
    },
    thal: {
      name: "الثلاسيميا: ماذا تعني نتيجة الفحص لزوجين",
      blurb: "إذا كان الطرفان حاملَين، ففي كل حمل احتمال ١ من ٤.",
      desc: "الثلاسيميا وراثية. وحامل الصفة بلا أعراض. هذا يوضح ما تعنيه نتيجتا الزوجين لكل حمل — وهو سبب وجود فحص ما قبل الزواج.",
      fA: "الطرف الأول", fB: "الطرف الثاني",
      oCarrier: "حامل للصفة", oNot: "غير حامل", oUnknown: "لم يُفحص",
      rAffected: "طفل مصاب بشدة",
      rCarrier: "طفل حامل للصفة وسليم",
      rClear: "طفل بلا أي منهما",
      rPerPreg: "لكل حمل على حدة",
      noteUnknown: "يجب فحص الطرفين قبل أن يعني هذا شيئاً. فحص دم بسيط يعطي الجواب خلال أيام.",
      noteBoth: "هذه بالضبط الحالة التي وُضع فحص ما قبل الزواج لاكتشافها. المستشار الوراثي يستطيع شرح الخيارات — وهذه الصفحة لا تستطيع.",
      noteOne: "لن يكون أي حمل مصاباً بشدة. قد يكون الأطفال حاملين للصفة، وهذا مهم لقراراتهم المستقبلية.",
      limits: [
        "يغطي وراثة بيتا-ثلاسيميا فقط",
        "لا يستطيع تفسير تقرير مختبرك الشخصي",
        "لا يحل محل الاستشارة الوراثية"
      ]
    },
    ors: {
      name: "محلول الإماهة لطفل مصاب بالإسهال",
      blurb: "الخطر هو الجفاف، لا الإسهال.",
      desc: "محلول معالجة الجفاف الفموي (ORS) بعد كل براز رخو هو العلاج الذي يهم. هذه هي الإرشادات المنزلية القياسية لمنظمة الصحة العالمية.",
      fAge: "عمر الطفل",
      aUnder2: "دون سنتين", a2to10: "من ٢ إلى ١٠ سنوات", aOver10: "فوق ١٠ سنوات",
      rAmount: "ORS بعد كل براز رخو",
      rOver10: "بقدر ما يريد الطفل",
      warnRed: "اذهب إلى الطبيب الآن إذا: لا دموع عند البكاء، عينان غائرتان، لا بول لست ساعات، دم في البراز، أو الطفل مرتخٍ ويصعب إيقاظه.",
      warnNo: "لا تعطِ أدوية موقفة للإسهال أو مضادات حيوية من تلقاء نفسك.",
      limits: [
        "لا يحل محل تقييم درجة الجفاف التي وصل إليها الطفل",
        "لا يغطي الجفاف الشديد الذي يحتاج عيادة",
        "لا يشخّص السبب"
      ]
    },
    heat: {
      name: "خطر الحر اليوم",
      blurb: "للعاملين في الخارج، الرقم المهم ليس درجة الحرارة.",
      desc: "الرطوبة تغيّر مدى خطورة الحر، لأن العرق يتوقف عن تبريدك. هذا يعطي الحرارة المحسوسة وما تعنيه لمن يعمل في الخارج.",
      fTemp: "درجة الحرارة", fHum: "الرطوبة",
      fRisk: "ينطبق أي مما يلي",
      rHigherRisk: "العمل في الخارج، فوق ٦٥ سنة، الحمل، مرض قلب أو كلى، أو تناول أدوية ضغط أو مدرات بول",
      rFeels: "تُحَسّ كأنها",
      bCaution: "حذر", bExtreme: "حذر شديد",
      bDanger: "خطر", bExtremeDanger: "خطر بالغ",
      aCaution: "اشرب بانتظام. خذ فترات راحة في الظل.",
      aExtreme: "تجنب العمل الشاق في منتصف النهار. اشرب قبل أن تشعر بالعطش.",
      aDanger: "الإجهاد الحراري متوقع مع استمرار النشاط. أوقف العمل الخارجي في أشد الساعات حراً.",
      aExtremeDanger: "ضربة الشمس خطر حقيقي. ينبغي إيقاف العمل الخارجي في هذه الساعات.",
      noteRisk: "مع وجود أي من تلك العوامل، اعتمد الفئة الأعلى من هذه دليلاً لك.",
      limits: [
        "هذا مؤشر عام، لا تقييم طبي شخصي",
        "لا يأخذ بالحسبان الشمس المباشرة أو الرياح أو الملابس",
        "لا يحل محل التوقف حين يشعر أحدهم بالتوعك"
      ]
    },
    bmi: {
      name: "مؤشر كتلة الجسم — وما لا يخبرك به",
      blurb: "رقم فرز تقريبي يُبالَغ في قراءته.",
      desc: "مؤشر كتلة الجسم نسبة خام بين الوزن والطول. مفيد على مستوى السكان وضعيف على مستوى الفرد، ونحن نفضّل أن نعرض حدوده بدل إخفائها.",
      fWeight: "الوزن", fHeight: "الطول", unitCm: "سم",
      cUnder: "نقص وزن", cNormal: "النطاق الصحي",
      cOver: "زيادة وزن", cObese: "سمنة",
      note: "مكان تراكم الدهون أهم من الرقم. قياس محيط الخصر يتنبأ بخطر القلب والسكري أفضل من مؤشر كتلة الجسم.",
      limits: [
        "لا يميز العضلات من الدهون",
        "غير موثوق للرياضيين وكبار السن والحوامل والأطفال",
        "عتباته مشتقة من سكان أوروبيين وقد تصنّف غيرهم خطأً",
        "لا يقول شيئاً عن ضغطك أو سكرك أو الكوليسترول لديك"
      ]
    }
  }
},

/* ---------------- English ---------------- */
en: {
  toolsH: "Tools",
  toolsD: "Calculators tied to our entries. Each one shows its working, its limits, and the point at which you should stop using it and see a doctor.",
  calc: "Calculate", clear: "Clear",
  resultH: "Result", limitsH: "What this does not do", relatedH: "Read the full entry",
  disclaimer: "General guidance, not personal medical advice.",
  enterAll: "Enter a value to see the result.",
  outOfRange: "That value is outside the range this tool covers.",
  t: {
    paracetamol: {
      name: "Children's paracetamol dose",
      blurb: "By weight, not by age — the mistake we corrected.",
      desc: "Paracetamol for children is dosed by body weight. Dosing by age is the commonest error, and one we made ourselves and corrected in July 2026. Enter the child's weight to see the standard published dose.",
      fWeight: "Child's weight", unitKg: "kg",
      rSingle: "Single dose",
      rSyrup120: "As 120 mg/5 mL syrup",
      rSyrup250: "As 250 mg/5 mL syrup",
      rInterval: "Every 4–6 hours, at most 4 doses in 24 hours",
      rMax: "Maximum in 24 hours",
      warnBaby: "Under 3 months old: do not give paracetamol without a doctor's advice.",
      warnLabel: "Check the strength printed on your own bottle — it may differ from both of these.",
      warnDouble: "Many cold and cough remedies already contain paracetamol. Giving both is how overdoses happen.",
      limits: [
        "It does not tell you whether your child needs paracetamol at all",
        "It does not replace the dosing on your own product's label",
        "It does not cover children under 3 months, or ibuprofen"
      ]
    },
    bp: {
      name: "What your blood pressure reading means",
      blurb: "One reading is not a diagnosis — but some numbers mean go now.",
      desc: "Enter a reading to see which category it falls in, using European Society of Cardiology thresholds. Guidelines differ slightly; the American thresholds label lower numbers as hypertension.",
      fSys: "Top number (systolic)", fDia: "Bottom number (diastolic)",
      cOpt: "Optimal", cNormal: "Normal", cHigh: "High-normal",
      cG1: "Grade 1 high blood pressure", cG2: "Grade 2 high blood pressure",
      cG3: "Grade 3 — severe", cCrisis: "Severe reading — seek care now",
      aOpt: "Keep measuring once a year.", aNormal: "Keep measuring once a year.",
      aHigh: "Worth repeating over a few days and discussing with your doctor.",
      aG1: "Confirm with repeat readings, then see your doctor.",
      aG2: "See your doctor soon.",
      aCrisis: "If you also have chest pain, breathlessness, weakness on one side, or trouble speaking — call emergency now. Otherwise seek medical care today.",
      limits: [
        "A single reading does not diagnose high blood pressure",
        "It does not account for your age, diabetes, kidney disease or pregnancy",
        "Home monitors need checking against a clinic device"
      ]
    },
    thal: {
      name: "Thalassaemia: what a couple's test results mean",
      blurb: "If both partners carry it, each pregnancy carries a 1-in-4 risk.",
      desc: "Thalassaemia is inherited. A carrier has no symptoms. This shows what a couple's results mean for each pregnancy — the reason pre-marital testing exists.",
      fA: "Partner 1", fB: "Partner 2",
      oCarrier: "Carrier", oNot: "Not a carrier", oUnknown: "Not tested",
      rAffected: "Child severely affected",
      rCarrier: "Child a carrier, healthy",
      rClear: "Child neither",
      rPerPreg: "For each pregnancy, independently",
      noteUnknown: "Both partners need testing before this means anything. A simple blood test gives the answer in a few days.",
      noteBoth: "This is exactly the situation pre-marital screening is designed to find. A genetic counsellor can explain the options — this page cannot.",
      noteOne: "No pregnancy will be severely affected. Children may be carriers, which matters for their own future decisions.",
      limits: [
        "It covers beta-thalassaemia inheritance only",
        "It cannot interpret your actual laboratory report",
        "It does not replace genetic counselling"
      ]
    },
    ors: {
      name: "Rehydration fluid for a child with diarrhoea",
      blurb: "The danger is dehydration, not the diarrhoea.",
      desc: "Oral rehydration solution (ORS) after each loose stool is the treatment that matters. This is the standard WHO home guidance.",
      fAge: "Child's age",
      aUnder2: "Under 2 years", a2to10: "2 to 10 years", aOver10: "Over 10 years",
      rAmount: "ORS after each loose stool",
      rOver10: "As much as the child wants",
      warnRed: "Go to a doctor now if: no tears when crying, sunken eyes, no urine for 6 hours, blood in the stool, or the child is floppy or hard to wake.",
      warnNo: "Do not give anti-diarrhoeal medicines or antibiotics on your own.",
      limits: [
        "It does not replace assessing how dehydrated a child already is",
        "It does not cover severe dehydration, which needs a clinic",
        "It does not diagnose the cause"
      ]
    },
    heat: {
      name: "Heat risk today",
      blurb: "For outdoor workers, the number that matters is not the temperature.",
      desc: "Humidity changes how dangerous heat is, because sweat stops cooling you. This gives the apparent temperature and what it means for someone working outdoors.",
      fTemp: "Temperature", fHum: "Humidity",
      fRisk: "Any of these apply",
      rHigherRisk: "Working outdoors, over 65, pregnant, heart or kidney disease, or taking blood-pressure or diuretic medicine",
      rFeels: "Feels like",
      bCaution: "Caution", bExtreme: "Extreme caution",
      bDanger: "Danger", bExtremeDanger: "Extreme danger",
      aCaution: "Drink regularly. Take breaks in shade.",
      aExtreme: "Avoid heavy work in the middle of the day. Drink before you feel thirsty.",
      aDanger: "Heat exhaustion likely with continued activity. Stop outdoor work in the hottest hours.",
      aExtremeDanger: "Heatstroke is a real risk. Outdoor work in these hours should stop.",
      noteRisk: "With any of those risk factors, treat the band above this one as your guide.",
      limits: [
        "It is a general index, not a personal medical assessment",
        "It does not account for direct sun, wind, or clothing",
        "It does not replace stopping when someone feels unwell"
      ]
    },
    bmi: {
      name: "BMI — and what it does not tell you",
      blurb: "A rough screening number that gets over-read.",
      desc: "BMI is a crude ratio of weight to height. It is useful across populations and weak for individuals, and we would rather show you its limits than hide them.",
      fWeight: "Weight", fHeight: "Height", unitCm: "cm",
      cUnder: "Underweight", cNormal: "Healthy range",
      cOver: "Overweight", cObese: "Obese",
      note: "Where fat sits matters more than the number. Waist measurement predicts heart and diabetes risk better than BMI does.",
      limits: [
        "It cannot tell muscle from fat",
        "It is unreliable for athletes, older people, pregnancy and children",
        "Its thresholds come from European populations and may misclassify others",
        "It says nothing about your blood pressure, sugar or cholesterol"
      ]
    }
  }
}
};
