/* ============================================================
   Rudaw Health — Kurmancî content (Latin script)
   Attached onto the base records by id in app.js.
   Pending review by a native speaker before publication.
   ============================================================ */

const KMR = {

cats: {
  heart: "Dil û xwînberî", brain: "Mêjî û demar",
  meta: "Gurçikên hundirîn û metabolîzm", child: "Zarok", lung: "Pişik û bêhndan",
  gut: "Sîstema hersandinê", kidney: "Gurçik û rêyên mîzê", blood: "Xwîn",
  bone: "Hestî û gêrik", mind: "Tenduristiya derûnî", env: "Jîngeh û demsal"
},

tier: {
  5: "Rênimaya navneteweyî", 4: "Nirxandina sîstematîk", 3: "Ceribandineke mezin",
  2: "Lêkolîna çavdêriyê", 1: "Ramana pisporî"
},

topics: { gen: "Giştî", drug: "Derman", child: "Zarok", claim: "Îdîayeke min bihîstî", cond: "Nexweşiyek" },

asked: ["Pesta xwînê ya bilind","Taya zarokan","Antîbiyotîk","Kortîzon","Talasemî","Lêdana germê"],

cond: {
"RH-HTN-001": {
  name: "Pesta xwînê ya bilind",
  sum: "Piraniya caran ti nîşanan nade — loma divê bê pîvandin.",
  what: "Pesta xwînê hêza xwînê ye li ser dîwarên damarên xwînê. Gava bi salan bilind bimîne, hêdî hêdî zirarê dide dil, mêjî, gurçik û çavan. Piraniya mirovan bi tu tiştî nahesin.",
  sym: ["Piraniya caran ti nîşan tune","Carinan serêşa sibehê zû","Sergêjî an zingîna guhan","Westiyaneke ne asayî"],
  flags: ["Serêşeke ji nişka ve û pir dijwar","Zehmetî di dîtin an axaftinê de","Êşa sînga an tengenefesî","Lawazî li aliyekî laş"],
  do: ["Pesta xwe bipîve — ne tenê gava xwe nebaş hîs dikî","Xwê kêm bike: nan, penîr, tirşik û xwarina amade çavkaniyên herî mezin in","Her roj bimeşe","Cixare û nergîleyê rawestîne","Dermanê xwe berdewam bixwe, tevî gava xwe baş hîs dikî"],
  ask: ["Hejmara min çi ye û armanca min çi ye?","Ma divê gurçikên min bên kontrolkirin?","Vî dermanî çi bandorên alîgir hene?"]
},
"RH-MI-001": {
  name: "Krîza dil",
  sum: "Êşa sînga ku naçe — li bendê nemîne, gazî awarteyê bike.",
  what: "Krîza dil dema çêdibe ku damarek a ku dil dixwedîne tê girtin û beşek ji masûlkeya dil xwîna xwe winda dike. Çiqas zûtir bê dermankirin, ewqas kêmtir zirar dimîne.",
  sym: ["Pest an giranî li navenda sîngê","Êşa ku belav dibe bo mil, milik, stû an çene","Xwêdana sar","Tengenefesî","Vereşîn — nemaze li jinan û kesên şekirî"],
  flags: ["Êşa sînga ku ji 15 xulekan zêdetir dom dike","Êşa sînga bi xwêdana sar an tengenefesî re","Hesteke ji nişka ve ya mirinê bi pesta sîngê re","Ji xwe çûn"],
  do: ["Gazî awarteyê bike — eger pêkan be bi xwe ajotinê neke","Rûne û bêdeng bimîne","Aspîrînê tenê bixwe eger berê bijîşkekî ji te re gotibe","Dema destpêka êşê tomar bike"],
  ask: ["Kîjan damar hatibû girtin?","Kîjan derman ji min re hertimî hewce ne?","Kengî dikarim vegerim ser kar û çalakiyê?"]
},
"RH-STR-001": {
  name: "Felca mêjî",
  sum: "Her xulek girîng e. Yekser biçe.",
  what: "Felca mêjî dema çêdibe ku xwîn êdî nagihîje beşek ji mêjî. Şaneyên mêjî bi xulekan dimirin. Dermankirineke bibandor heye, lê tenê di saetên pêşî de kar dike.",
  sym: ["Lawazî an bêhestî li rû, mil an ling — pir caran li aliyekî","Axaftina tevlihev an fêmnekirina yên din","Zehmetî di dîtinê de","Windakirina hevsengiyê"],
  flags: ["Aliyekî rû dadikeve","Milek nayê bilindkirin","Axaftin tevlihev dibe","Yek ji van — yekser gazî awarteyê bike"],
  do: ["Li bendê nemîne ku derbas bibe — nîşan dikarin werin û herin","Ti xwarin an vexwarinê nede","Dema destpêka nîşanan tomar bike — bijîşk pêdiviya wê pê heye"],
  ask: ["Kîjan cûreyê felcê bû?","Ez çi bikim ku ya din çênebe?","Ma pêdiviya min bi dermankirina fîzîkî heye?"]
},
"RH-MIG-001": {
  name: "Mîgren",
  sum: "Serêşeke demarî ya rastîn e — ne lawazî ne jî kêmsebir.",
  what: "Mîgren serêşeke lêdanî ye, pir caran li aliyekî serî, ku bi ronahî û dengî xerabtir dibe. Sedema wê guherînên çalakiya demar û damarên mêjî ne, ne tenê stres.",
  sym: ["Êşa lêdanî li aliyekî serî","Nerehetî ji ronahî û dengî","Vereşîn an dilbulî","Carinan nîşanên dîtinê beriya êşê"],
  flags: ["Serêşa herî dijwar a jiyana te, ku ji nişka ve dest pê dike","Serêş bi ta û hişkbûna stû re","Serêş bi lawazî an axaftina tevlihev re","Serêşeke nû piştî 50 saliyê"],
  do: ["Rojnivîskeke serêşê binivîse — kengî, çiqas dom kir, çi berê wê hat","Xewa birêkûpêk û demên xwarinê yên birêkûpêk pir alîkar in","Di dema êrîşê de li odeyeke tarî û bêdeng bêhna xwe bide","Dermanên êşkuj pir û berdewam nexwe — zêdegavî bi xwe serêşê çêdike"],
  ask: ["Ma ev mîgren e an cûreyeke din a serêşê?","Ma dermanê pêşîgirtinê li min tê?","Çend rojan di mehê de dikarim êşkujan bi ewlehî bixwim?"]
},
"RH-T2D-001": {
  name: "Şekirê cûreya duyem",
  sum: "Dikare bê birêvebirin. Dermanekî lezgîn tune.",
  what: "Di şekirê cûreya duyem de laş êdî baş bersiva însulînê nade, loma şekirê xwînê bilind dibe. Bi salan zirarê dide damarên xwînê yên biçûk — çav, gurçik, demar.",
  sym: ["Tîbûneke zêde","Gelek caran mîzkirin, nemaze bi şev","Westiyan","Dîtina tarî","Birînên ku hêdî qenc dibin"],
  flags: ["Xwêdana sar bi lerz û tevlihevî re — dibe ku şekir pir nizm be","Tengenefesî bi bêhna fêkiyî re","Birîneke pê ku qenc nabe an rengê wê guheriye"],
  do: ["Her roj lingên xwe kontrol bike","Her sal çavên xwe bide kontrolkirin","Pîvana birinc û nan kêm bike — mezinahiya pîvanê ji cûreyê girîngtir e","Çayê bê şekir vexwe: ev guherîna herî mezin a xwarina rojane ya li vir e"],
  ask: ["HbA1c ya min çend e?","Kengî divê çavên min bên kontrolkirin?","Eger dozekê ji bîr bikim ez çi bikim?"]
},
"RH-THY-001": {
  name: "Kêmxebata tîroyîdê",
  sum: "Westiyaneke dirêj bê sedemeke diyar — testeke xwînê ya hêsan heye.",
  what: "Gurçika tîroyîdê hormonekê derdixe ku leza xebata laş saz dike. Gava kêm derkeve, her tişt hêdî dibe — enerjî, dil, rovî, ramîn.",
  sym: ["Westiyaneke berdewam","Hestkirina sermê","Çermê hişk û weşîna porî","Qebizî","Ramîna hêdî û jibîrkirin"],
  flags: ["Werimîna rû û ziman bi bêhndaneke pir hêdî re","Nebza pir hêdî bi lawaziyeke dijwar re","Tevlihevî an zehmetiya hatina hişê xwe"],
  do: ["Testa TSH bixwaze — testeke xwînê ya hêsan e","Dermanê li ser zikê vala û di heman demê de her roj bixwe","Hesin û kalsiyûmê bi dermanê tîroyîdê re nexwe","Gava xwe baş hîs dikî dermanê bi serê xwe rawestîne"],
  ask: ["Asta TSH ya min çend e?","Kengî divê ez ji nû ve bêm testkirin?","Ma ev bandorê li ducaniyê dike?"]
},
"RH-FEV-001": {
  name: "Taya zarokan",
  sum: "Ta ne nexweşî ye — nîşan e. Rewşa zarokê ji hejmarê girîngtir e.",
  what: "Ta bersiveke asayî ye ji bo enfeksiyonê. Piraniya tayên zarokan ji vîrusan tên û bi xwe derbas dibin. Germahî bi tenê nabêje ka çiqas cidî ye.",
  sym: ["Germahiya jor 38 pileyî","Çermê sor","Nexwestina xwarinê","Xewînî an aciziyê"],
  flags: ["Her taya li zarokekî ji 3 mehan biçûktir","Çermê zer, an lekeyeke ku bi pestandinê nayê jêbirin","Zehmetî di bêhndanê de","Nehiştina ava di zik de, an mîza pir kêm","Sistî an zehmetiya hatina hişê xwe"],
  do: ["Ava zêde bide — ev ya herî girîng e","Doza parasetamolê li gorî giranî bike, ne li gorî temenî","Bi ava sar an alkolê sar neke","Cilên sivik lê bike"],
  ask: ["Giraniya zaroka min çend e û doza rast çi ye?","Kengî divê ez vegerim?","Ma pêdiviya vê bi antîbiyotîkê heye — çima?"]
},
"RH-DIA-001": {
  name: "Zikêşiya zarokan",
  sum: "Xeter ziwabûn e, ne zikêşî bi xwe.",
  what: "Piraniya zikêşiyan ji vîrusekê an xwarineke pîs tên û di nav rojek du rojan de rûdinin. Ya ku zarokê dixe xeterê windakirina av û xwêyan e — ne hejmara çûnên destavê.",
  sym: ["Destavên şil û pir caran","Êşa zik","Taya sivik","Vereşîn"],
  flags: ["Bêhêstirî dema digirî","Çavên çûyî hundir, an tepika serî ya çûyî hundir li pitikan","Mîza pir kêm an tune bo 6 saetan","Xwîn di destavê de","Sistî an bersiv nedan"],
  do: ["Ava xwê û şekirê ya taybet (ORS) bide — ev dermanê bingehîn e","Şîrdanê berdewam bike","Xwarina asayî berdewam bike gava zarok dixwaze","Bi serê xwe antîbiyotîk an dermanên rawestandina zikêşiyê nede"],
  ask: ["Çiqas ORS û ez çawa bidim?","Kengî divê ez vegerim?","Ma destav pêdiviya wê bi testê heye?"]
},
"RH-AST-001": {
  name: "Rebo",
  sum: "Du cûre pifdank hene — yek jê rojane ye, tevî di rojên baş de.",
  what: "Di reboyê de rêyên hewayê werimî û hestiyar in, loma teng dibin. Werimîn di rojên baş de jî berdewam e — loma pifdankeke rojane ya pêşîgir hewce ye.",
  sym: ["Tengenefesî","Kuxîn bi şev an di dema werzişê de","Fîkeya sîngê","Tengiya sîngê"],
  flags: ["Nekarîna temamkirina hevokekê bi bêhnekê","Lêv an neynûkên şîn","Pifdanka lezgîn di 20 xulekan de kar nekir","Sîngeke bêdeng bi tengenefesiyeke dijwar re"],
  do: ["Pifdanka rojane ya pêşîgir berdewam bi kar bîne, tevî gava xwe baş hîs dikî","Awayê bikaranîna pifdankê nîşanî bijîşkê xwe bide — piraniya mirovan şaş bi kar tînin","Ji dûmana cixare, nergîle û şewitandina çopê dûr bisekine","Di demsala tozê de pencereyan bigire"],
  ask: ["Kîjan pifdanka min pêşîgir e û kîjan ji bo êrîşan e?","Ma awayê bikaranîna min a pifdankê rast e?","Ma plana min a nivîskî heye?"]
},
"RH-URI-001": {
  name: "Serma û grîp",
  sum: "Ev vîrus in. Antîbiyotîk ti ji wan dernaxe.",
  what: "Serma û grîp herdu jî vîrusî ne. Grîp pir zûtir dest pê dike û pir xerabtir tê hîskirin. Herdu bi xwe rûdinin, lê grîp ji bo hin kesan xeternak e.",
  sym: ["Êşa qirikê û herikîna poz","Kuxîn","Ta û êşa laş — bêtir bi grîpê re","Westiyan"],
  flags: ["Tengenefesî an bêhndana bilez","Taya ku piştî başbûnê vedigere","Êşa sînga dema bêhna xwe distînî","Taya ku ji 5 rojan zêdetir dom dike"],
  do: ["Av û bêhndan — bi rastî ev derman e","Parasetamol ji bo ta û êşan","Antîbiyotîk nexwaze — kar nakin û zirara wan heye","Destên xwe bişo da ku nedî yên din"],
  ask: ["Ma ev vîrusî ye an bakterî — tu çawa dizanî?","Kengî divê ez vegerim?","Ma derziya grîpê li min tê?"]
},
"RH-GRD-001": {
  name: "Şewata sîngê û vegera asîdê",
  sum: "Berbelav e û pir caran tê dermankirin — lê derman kêm caran hemû bersiv e.",
  what: "Gava asîda mîdeyê vedigere borîya xwarinê tu şewatê li sîngê hîs dikî. Pir caran bi dema xwarinê, mezinahiya pîvanê û giraniyê ve girêdayî ye.",
  sym: ["Şewat li sîngê, nemaze piştî xwarinê an dema razayî","Tama tirş di dev de","Kuxîna hişk a şevê","Êş li navenda sîngê"],
  flags: ["Zehmetî di daqurtandinê de an asêbûna xwarinê","Vereşandina xwînê, an destava reş a qîrî","Windakirina giraniyê ya bê ravekirin","Şewateke nû ku piştî 50 saliyê dest pê dike"],
  do: ["3 saetan beriya razanê tiştekî nexwe — guherîna herî bibandor","Serê nivînan bilindtir bike","Xwarina bi rûn, ya pir tûj û qehweya giran kêm bike","Cixarekêşana dirêj vegera asîdê xerabtir dike"],
  ask: ["Ma pêdiviya min bi endoskopiyê heye?","Çiqas dem divê ez vî dermanî bixwim?","Ma divê ez ji bo H. pylori bêm testkirin?"]
},
"RH-FPO-001": {
  name: "Jehrîbûna xwarinê",
  sum: "Di germa havînê de zêde dibe — hiştina xwarinê li derveyî sarincê sedema sereke ye.",
  what: "Xwarina ku bi saetan di germê de dimîne bakterî tê de zêde dibin. Piraniya rewşan di nav rojek du rojan de rûdinin, lê ziwabûn xetera rastîn e.",
  sym: ["Vereşîn û dilbulî","Zikêşî","Êşa girêdayî ya zik","Taya sivik"],
  flags: ["Nekarîna hiştina ti avê di zik de ji 6 saetan zêdetir","Xwîn di destavê de","Taya bilind bi lerz re","Nîşanên ziwabûnê: mîza pir kêm, sergêjî dema rabûnê","Pirsgirêkên dîtinê an lawazî — yekser biçe"],
  do: ["Avê hêdî hêdî û bi kêmî vexwe","ORS ji ava sade bi tenê çêtir e","Gava tu dikarî xwarineke sivik bixwe","Xwarina mayî ya ku di germê de maye bavêje — eger guman hebe, nexwe"],
  ask: ["Ma pêdiviya min bi testa destavê heye?","Kengî dikarim vegerim ser xwarina asayî?","Ma divê yên din ên malê bên kontrolkirin?"]
},
"RH-UTI-001": {
  name: "Enfeksiyona rêyên mîzê",
  sum: "Li jinan berbelavtir e. Êşa pişta bi ta re tiştekî cidîtir tîne wateyê.",
  what: "Bakterî dikevin nav rêyên mîzê û enfeksiyonê çêdikin. Bi gelemperî di mîzdankê de dimîne, lê dikare hilkişe gurçikê ku pir cidîtir e.",
  sym: ["Şewat dema mîzkirinê","Pêdiviya gelek caran a mîzkirinê","Mîza tarî an bi bêhneke bihêz","Êş li zikê jêrîn"],
  flags: ["Êş li pişt an kêlekê bi ta û lerz re","Vereşîn bi ta re","Xwîn di mîzê de","Her nîşanek di dema ducaniyê de","Tevlihevî li kesekî bi salên mezin"],
  do: ["Ava zêde vexwe","Mîza xwe negire","Kursa antîbiyotîkê temam bike eger hatibe nivîsandin","Dermanê mayî yê kesekî din bi kar neyîne"],
  ask: ["Ma testa mîzê beriya destpêkirina antîbiyotîkê hat kirin?","Çima ev li min dubare dibe?","Kengî vegerim eger baş nebûm?"]
},
"RH-KST-001": {
  name: "Kevirên gurçikê",
  sum: "Di hewaya germ de zêde dibin — kêm vexwarina avê sedema sereke ye.",
  what: "Kevir çêdibin gava mîz gelek çir dibe. Li herêmên germ berbelavtir in, ji ber ku mirov pir xwêdanê didin û kêm vedixwin.",
  sym: ["Êşeke dijwar û lêdanî li kêlek an pişt","Êşa ku belav dibe bo zikê jêrîn","Xwîn di mîzê de","Vereşîn bi êşê re"],
  flags: ["Êş bi ta û lerz re — dibe ku enfeksiyon hebe","Nekarîna mîzkirinê bi ti awayî","Vereşîna berdewam ku nahêle derman bê xwarin","Êşa ku ti êşkujî lê nake"],
  do: ["Ava zêde vexwe — gava herî girîng a pêşîgirtinê","Di havînê de bêtir vexwe, nemaze eger li derve dixebitî","Xwê kêm bike","Eger kevir derket, wê ji bo analîzê hilîne"],
  ask: ["Kevir ji çi çêbûye?","Ez çawa pêşî li ya bê bigirim?","Ma pêdiviya min bi neştergerî an şikandina kevir heye?"]
},
"RH-ANA-001": {
  name: "Kêmxwîniya kêmasiya hesin",
  sum: "Sedema herî berbelav a westiyanê li jinan — lê li paş wê hertim pirsek heye: çima?",
  what: "Hesin ji bo çêkirina şaneyên sor ên xwînê yên ku oksîjenê hildigirin hewce ye. Gava hesin kêm dibe, laş oksîjena pêdivî nastîne.",
  sym: ["Westiyan û kêmeneriyê","Çermê zer","Tengenefesî di dema hewldanê de","Sergêjî","Weşîna porî û şikestina neynûkan"],
  flags: ["Tengenefesî di dema bêhndanê de","Êşa sînga an lêdana bilez a dil","Destava reş a qîrî an xwîn di destavê de","Xwînrijandineke pir zêde ya mehane ku cilan şil dike"],
  do: ["Hebên hesin bi vîtamîna C an ava porteqalê re bixwe — hilmijîna wê baştir dike","Bi çay an şîr re nexwe — hilmijînê asteng dikin","Çend mehan li bendê be heta ast baş bibe","Hesin tenê bi şêwira bijîşkî bixwe — hesinê zêde zirardar e"],
  ask: ["Çima hesinê min kêm e — sedem çi ye?","Çiqas dem divê hebên bixwim?","Ma pêdiviya min bi lêkolîna rovî heye?"]
},
"RH-THA-001": {
  name: "Talasemî û hilgiriya wê",
  sum: "Berî zewacê tê zanîn — testeke xwînê ya hêsan e.",
  what: "Talasemî nexweşiyeke xwînê ya kalikî ye. Kesek dikare hilgir be bêyî ku ti nîşan hebin. Gava herdu dê û bav hilgir bin, di her ducaniyê de îhtîmal heye ku zarok bi giranî tûşî wê bibe.",
  sym: ["Hilgir: pir caran ti nîşan tune","Cûreya giran: zerbûn û westiyaneke berbiçav di sala yekem de","Mezinbûna qels a zarokê","Mezinbûna dedikê"],
  flags: ["Zerbûneke berbiçav bi tengenefesî re","Ta li zarokekî ku dedikê wî hatiye derxistin","Zerbûna çav an çerm"],
  do: ["Divê herdu alî berî zewacê bên testkirin — nemaze gava xizmayetî hebe","Eger tu hilgir bî, ev ne nexweşî ye — lê agahiyeke girîng e ji bo biryarên pêşerojê","Ji bo kêmxwîniyê bi serê xwe hebên hesin nexwe — dibe ku sedem li vir cuda be"],
  ask: ["Ma ez hilgir im?","Eger em herdu hilgir bin, bijartinên me çi ne?","Em li ku dikarin bên testkirin?"]
},
"RH-LBP-001": {
  name: "Êşa pişta jêrîn",
  sum: "Di piraniya rewşan de, tevger ji bêhndaneke dirêj çêtir e.",
  what: "Piraniya êşên pişt ji masûlke û lîgamentan tên, ne ji tiştekî xeternak. Di nav çend hefteyan de rûdine — û çalakmayîn wê zûtir dike.",
  sym: ["Êş li pişta jêrîn","Girjbûna masûlkeyan","Êşa ku bi tevgerê di rojên pêşî de xerabtir dibe"],
  flags: ["Lawazî an bêhestî di lingan de","Windakirina kontrola mîz an destavê","Bêhestî li navbera hêjîran","Êşa pişta bi ta an windakirina giraniya bê ravekirin re","Êş piştî ketinekê an qezayekê"],
  do: ["Bilive — bêhndana dirêj a nivînan wê xerabtir dike","Çalakiyên xwe yên rojane di nav sînorên xwe de bidomîne","Dema tiştên giran hildigirî ji çokan xwar bibe","Bihêzkirina masûlkeyên navê baştirîn pêşîgirtin e"],
  ask: ["Ma pêdiviya min bi wêne heye — çima, an çima na?","Kîjan werzîş li min tên?","Kengî divê ez fikar bibim?"]
},
"RH-DEP-001": {
  name: "Depresyon",
  sum: "Nexweşiyeke tê dermankirin — ne lawaziya vîna ne jî kêmbawerî.",
  what: "Depresyon ji xemgîniyeke derbasbûyî zêdetir e. Bandorê li xew, enerjî, xwarin û şiyana ramanê dike, û dikare hefte an mehan bidome. Dermankirineke bibandor heye — axaftin, piştgirî, û di hin rewşan de derman.",
  sym: ["Kêfa nizm an bêhestî bo demeke dirêj","Windakirina eleqeya bi tiştên ku berê xweş dihatin","Xewa tevlihev — pir an kêm","Westiyaneke berdewam","Zehmetî di hûrbûn û biryardanê de"],
  flags: ["Ramanên zirardana xwe — îro bi kesekî re biaxive","Nekarîna birêvebirina karên rojane yên bingehîn","Nexwarin û nevexwarin bo çend rojan","Bihîstin an dîtina tiştên ku tune ne"],
  do: ["Bi kesekî ku pê bawer î re biaxive — destpêkirin gava herî girîng e","Ji bijîşkê xwe bipirse; ne hewce ye rasterast biçî cem pisporekî","Xewa birêkûpêk û derketina rojane ji malê herdu jî alîkar in","Di xerabtirîn qonaxê de biryarên mezin nede"],
  ask: ["Ma ev depresyon e?","Ji bilî dermanî çi bijartinên dermankirinê hene?","Çiqas dem divê derbas bibe heta ez cudahiyê hîs bikim?"]
},
"RH-HEA-001": {
  name: "Westîna germê û lêdana germê",
  sum: "Xetereke rastîn di havînên me de — nemaze ji bo karkerên derve û kesên bi salên mezin.",
  what: "Gava laş nikaribe germa xwe derxe, germahiya wê ya navîn bilind dibe. Qonaxa siviktir (westîna germê) tê dermankirin. Qonaxa giran (lêdana germê) jiyanê dixe xeterê.",
  sym: ["Xwêdaneke giran, sergêjî, lawazî","Serêş û vereşîn","Girjbûna masûlkeyan","Lêdana bilez a dil"],
  flags: ["Çermê hişk û rawestîna xwêdanê, bi çermê germ re","Tevlihevî, axaftina bêwate, an ji xwe çûn","Kirpandin","Germahiyeke laş a pir bilind — yekser gazî awarteyê bike"],
  do: ["Kesê yekser bibe bin sî an odeyeke sar","Cilên wî sist bike û çermê bi ava sar şil bike","Eger bi hiş be, avê bidê","Di saetên herî germ ên rojê de karê giran neke"],
  ask: ["Ma dermanên min xetera min di germê de zêde dikin?","Çiqas av divê vexwim dema li derve dixebitim?","Kî li mala min di xetera herî mezin de ye?"]
},
"RH-DUS-001": {
  name: "Bahoza tozê û bêhndan",
  sum: "Ji bo piraniya mirovan aciziyek e. Ji bo kesên bi rebo û bi salên mezin cidî ye.",
  what: "Di dema bahoza tozê de, perçeyên hûr digihîjin kûrahiya pişikan û werimînê çêdikin. Ev dikare êrîşên reboyê bide destpêkirin û nexweşiyên dil û pişikê yên heyî xerabtir bike.",
  sym: ["Êşa qirik û pozê","Kuxîna hişk","Tengiya sîngê","Çavên sor û avdayî"],
  flags: ["Tengenefesiyeke dijwar an fîke","Êşa sînga","Nekarîna axaftinê bi bêhnekê","Lêvên şîn"],
  do: ["Pencere û deriyan bigire","Derketinên nepêwîst kêm bike, nemaze ji bo zarok û kesên bi salên mezin","Maskeyeke guncaw bi kar bîne — maskeya cilê ya asayî perçeyên hûr nagire","Eger rebo bi te re hebe, pifdankên xwe li ber destê xwe bihêle"],
  ask: ["Ma divê dermanê reboyê di demsala tozê de zêde bikim?","Kîjan maske bi rastî kêrhatî ye?","Kîjan nîşan tê wateya ku divê ez vegerim?"]
}
},

drug: {
"RH-ABX-001": {
  name: "Antîbiyotîk",
  sum: "Li dijî vîrusan ti tiştî nakin.",
  does: ["Bakteriyan dikujin an zêdebûna wan rawestînin","Di hin enfeksiyonên sîng, mîz û çerm de jiyanê xilas dikin"],
  not: ["Serma, grîp an piraniya êşên qirikê dernaxin — ev vîrusî ne","Gava sedem vîrus be tayê zûtir daynaxin"],
  care: ["Kursê tam wek hatiye nivîsandin temam bike","Ya mayî ji bo cara din nehêle","Zêdegavî wan bêbandor dike — ji bo te û ji bo hemû kesên dora te"]
},
"RH-PAR-001": {
  name: "Parasetamol",
  sum: "Êşkuja herî ewle — bi şertê ku doz bê rêzgirtin.",
  does: ["Tayê datîne","Êşa sivik û navîn kêm dike","Pir caran bijartina herî ewle ji bo zarok û di ducaniyê de"],
  not: ["Werimînê wek îbuprofenê kêm nake","Nexweşiyê bi xwe dernaxe — tenê nîşanan kêm dike"],
  care: ["Dozên zêde zirarê didin kezebê — ev xetereke rastîn e, ne teorîk","Navê maddeyê bixwîne: gelek dermanên serma û kuxînê parasetamol tê de heye, loma tu du caran distînî bêyî ku bizanî","Ji bo zarokan, doz li gorî giranî bike, ne li gorî temenî"]
},
"RH-NSA-001": {
  name: "Îbuprofen û êşkujên wek wî",
  sum: "Ji bo werimînê bibandor e — lê ne ji bo her kesî ye.",
  does: ["Êş û werimînê kêm dike","Ji bo êşa gêrik, masûlke û ya mehane kêrhatî ye","Tayê datîne"],
  not: ["Ji bo kesên bi birîna mîdeyê ne guncaw e","Şûna dermankirina nexweşiya dirêjdem nagire"],
  care: ["Bi xwarinê re bixwe — li ser zikê vala zirarê dide","Eger nexweşiya gurçik, dil an pesta bilind bi te re hebe, berî bikaranînê bipirse","Di sêyemîn sê mehiya ducaniyê de bi kar neyîne","Bêyî şêwirê bi xwînzelalkeran re nexwe"]
},
"RH-COR-001": {
  name: "Kortîzon",
  sum: "Dermanekî bihêz e ku li vir pir bi serê xwe tê bikaranîn — û zirarên wî kom dibin.",
  does: ["Werimîna dijwar kêm dike","Di hin nexweşiyan de pêwîst e û jiyanê xilas dike","Hesteke bilez a başbûnê dide"],
  not: ["Ne êşkujekî asayî ye","Sedema nexweşiyê dernaxe — tenê werimînê vedişêre"],
  care: ["Pirsgirêka bingehîn ew e ku bilez kar dike, loma mirov car bi car vedigerin","Bikaranîna dirêj: şekirê xwînê bilind, pesta bilind, hestiyên lawaz, werimîn","Piştî bikaranîna dirêj tu carî ji nişka ve nesekinîne — divê hêdî hêdî bê kêmkirin","Kremên kortîzonê yên bihêz bêyî rênimayî li rû bi kar neyîne"]
},
"RH-PPI-001": {
  name: "Omeprazol û yên wek wî",
  sum: "Ji bo demeke diyarkirî tê nivîsandin — ne bo salan.",
  does: ["Asîda mîdeyê kêm dike","Birîna mîdeyê qenc dike","Ji bo vegera asîdê bibandor e"],
  not: ["Her cûre êşa zik dernaxe","Xwarina bi rûn an demên dereng ên xwarinê rast nake — ew beş ya te ye"],
  care: ["Bikaranîna bi salan bêyî nirxandin berbelav e û pir caran ne hewce ye","Dikare hilmijîna B12, magnezyûm û kalsiyûmê kêm bike","30 xulekan berî xwarinê bixwe — gelek kes piştî xwarinê dixwin û bandora wê kêm dibe","Piştî çend mehan ji bijîşkê xwe bipirse: ma hîn hewce ye?"]
},
"RH-VTD-001": {
  name: "Vîtamîna D",
  sum: "Ji bo kesên bi kêmasiyê kêrhatî ye. Ne dermanek e ji bo her kesî.",
  does: ["Alîkariya laş dike ku kalsiyûmê hilmije","Kêmasî bi rastî li vir berbelav e, nemaze di nav jinan de"],
  not: ["Eger asta te asayî be westiyana giştî dernaxe","Wek ku hin firoşyar dibêjin li hember vîrusan naparêze"],
  care: ["Dozên pir bilind bo demeke dirêj zirardar in","Berî destpêkirinê asta xwe bide kontrolkirin","Derziyên mehane yên mezin hertim ne pêwîst in"]
},
"RH-IRN-001": {
  name: "Hebên hesin",
  sum: "Tenê gava testekê nîşan da ku hesinê te kêm e bi kar bîne.",
  does: ["Kêmxwîniya kêmasiya hesin derman dikin","Di ducaniyê de pir caran hewce ne"],
  not: ["Eger hesinê te asayî be westiyanê dernaxin","Sedema kêmasiyê ranakin — divê ew sedem bê dîtin"],
  care: ["Bi çay an şîr re nexwe — hilmijînê kêm dikin","Bi ava porteqalê re baştir tê hilmijandin","Destavê reş dikin — ev asayî ye","Ji bo zarokan pir xeternak in eger bi şaşî bên daqurtandin — ji ber destê wan dûr bixe"]
},
"RH-CGH-001": {
  name: "Şerbeta kuxînê ya zarokan",
  sum: "Feyda wê kêm e û ji bo zarokên biçûk xetereke rastîn heye.",
  does: ["Carinan rehetiyeke kurt dide","Şerbeta sade qirikê nerm dike"],
  not: ["Dema nexweşiyê kurt nake","Kuxîna vîrusî dernaxe — kuxîn bi xwe ew parastin e ku rêya hewayê paqij dike"],
  care: ["Ji bo zarokên ji 6 salî biçûktir bêyî şêwira bijîşkî nayê pêşniyarkirin","Gelek ji van şerbetan parasetamol an antîhîstamîn tê de heye — dozdayîna dubare çêdibe","Hingiv ji bo zarokên ji salekê mezintir çêtir e — lê tu carî ji bo yên ji salekê biçûktir","Berî ku bidî wê pêkhateyan bixwîne"]
},
"RH-WGT-001": {
  name: "Berhemên gihayî yên zeafbûnê",
  sum: "«Xwezayî» wateya «ewle» nade. Hinek ji wan maddeyên neragihandî tê de hene.",
  does: ["Piraniya wan ti bandoreke îsbatkirî tune","Hinek tenê ava laş kêm dikin — ne rûnî"],
  not: ["Windakirina rûnî ya berdewam çênakin","Şûna guherîna xwarin û tevgerê nagirin"],
  care: ["Li çend welatan berhemên wek wan hatine dîtin ku dermanên eczayî yên neragihandî tê de hebûn","Eger berhemek soza encamên pir bilez bide, ew bi xwe hişyarî ye","Dikarin bi dermanên dil, pesta xwînê û antîdepresanan re tevlihev bibin","Berî kirînê navê berhemê ji saziya kontrola dermanan bipirse"]
}
},

claim: {
"RH-CL-021": { claim: "Antîbiyotîk sermayê derman dikin", body: "Serma vîrusî ye û antîbiyotîk tenê li ser bakteriyan kar dikin. Bikaranîna wan li vir ti feydeyê nade, bandorên alîgir hene, û bakteriyên bergirî zêde dikin." },
"RH-CL-014": { claim: "Darçîn şekir derman dike", body: "Lêkolîn bandoreke biçûk û nesabît li ser şekirê xwînê nîşan didin, pir kêmtir ji ya ku derman pêk tîne. Kesê ku dermanê xwe bi darçînê biguherîne xwe dixe xeterê." },
"RH-CL-019": { claim: "Şekirê qehweyî ji yê spî ji bo şekiriyan çêtir e", body: "Herdu bi heman awayî şekirê xwînê bilind dikin. Cudahî di reng û tamê de ye, ne di bandora li ser şekirê xwînê de. Pîvan girîng e, ne cûre." },
"RH-CL-023": { claim: "Kortîzon baş e ji ber ku bilez kar dike", body: "Lez bi xwe ew e ku wî xeternak dike: mirov car bi car vedigerin. Bikaranîna dirêj a bêçavdêrî şekirê xwînê bilind, hestiyên lawaz û pesta bilind çêdike." },
"RH-CL-016": { claim: "Hewaya sar sermayê çêdike", body: "Serma ji vîrusan tê, ne ji hewaya sar. Di zivistanê de zêde dibe ji ber ku mirov li odeyên girtî kom dibin, ne ji ber germahiyê." },
"RH-CL-018": { claim: "Bêhndana tam baştirîn derman e ji bo êşa pişt", body: "Belge berevajî nîşan dide. Bêhndana dirêj a nivînan başbûnê dereng dixe. Tevgera nerm û domandina çalakiya rojane te zûtir baş dikin." },
"RH-CL-011": { claim: "Meşîn pesta xwînê datîne", body: "Meşîna birêkûpêk bi eşkereyî pesta xwînê datîne. Bandor nerm e lê rastîn e, û bi dermanî re kar dike ne li şûna wî." },
"RH-CL-020": { claim: "Testa berî zewacê dikare talasemiyê tespît bike", body: "Testeke xwînê ya hêsan hilgirên talasemiyê diyar dike. Gava herdu alî hilgir bin îhtîmala zarokekî tûşbûyî heye — û zanîna pêşwext biryareke agahdar pêkan dike." },
"RH-CL-009": { claim: "Hingiv ji bo kuxînê baş e", body: "Li zarokên ji salekê mezintir, hingiv bi rastî kuxîna şevê kêm dike — belge maqûl e. Lê sedemê dernaxe, û tu carî nabe ji zarokên ji salekê biçûktir re bê dayîn." },
"RH-CL-022": { claim: "Tîroja rojê çavkaniya vîtamîna D ye", body: "Rast e ku çerm ji tîroja rojê vîtamîna D çêdike. Lê kêmasî li herêma me hîn pir berbelav e — ji ber cil, jiyana hundir, û dûrketina ji rojê di germa havînê ya dijwar de. Herwiha rûbirûbûna zêde ya rojê bi xwe xetera penceşêra çerm bilind dike." },
"RH-CL-017": { claim: "Pêdiviyên kolajenê çerm nû dikin", body: "Lêkolînên biçûk encamên nakok didin, û piraniya wan ji aliyê hilberîneran ve hatine fînansekirin. Em hîn nizanin. Me biryar neda ji ber ku belge têrê nake — ne ji ber ku belge neyînî ye." },
"RH-CL-024": { claim: "Bahozên tozê yên salane rêjeya reboyê li herêma me zêde dikin", body: "Girêdan maqûl e û lêkolîna navneteweyî bandora perçeyên hûr piştgirî dike. Lê daneyên herêmî yên dirêjdem têrê nakin ku em vê bi baweriyê ji bo herêma xwe bibêjin. Em vê daneyê dixwazin." }
},

place: [
{ n: "Awarte — felca mêjî û dil", m: "24 saet · Awarte, felc, birîn", note: "Ji bo gumana felca mêjî an krîza dil rasterast were vir. Li bendê randevûyê nemîne." },
{ n: "Navenda talasemî û testa berî zewacê", m: "Şemî – Çarşem · 09:00 – 14:00", note: "Testa hilgiriya talasemiyê. Encam di nav çend rojan de." },
{ n: "Navenda testa memikê", m: "Şemî – Çarşem · 09:00 – 14:00", note: "Ji bo jinên jor 40 salî pêdiviya şandinê tune." },
{ n: "Navenda şekir", m: "Şemî – Pêncşem · 08:00 – 13:00", note: "Kontrola pê û çav li heman cihî. HbA1c bê randevû." },
{ n: "Navenda dîyalîza gurçikê", m: "6 rojên hefteyê · nobetên sibehê û êvarê", note: "Pêdiviya şandina pisporê gurçikê heye." },
{ n: "Navenda derzîlêdana zarokan", m: "Şemî – Pêncşem · 08:00 – 12:00", note: "Karta derzîlêdana zaroka xwe bi xwe re bîne." },
{ n: "Banka xwînê", m: "24 saet · bexşîn û daxwaz", note: "Divê bexşer di navbera 18 û 60 salî de be û şerta giraniyê bicîh bîne." },
{ n: "Navenda tenduristiya derûnî", m: "Şemî – Çarşem · 09:00 – 15:00", note: "Dikare rasterast bê serdankirin, bêyî şandin." }
],

corr: {
"RH-CR-006": { was: "Di mijara kortîzonê de me nivîsî ku «dikare çend hefteyan bê bikaranîn».", now: "Dem li gorî rewşê diguhere û divê ji aliyê bijîşkî ve bê diyarkirin. Hevok hat rakirin, ji ber ku dikaribû wek rênimayeke giştî bê xwendin." },
"RH-CR-005": { was: "Di mijara taya zarokan de me got doza parasetamolê li gorî temenî tê diyarkirin.", now: "Doz li gorî giraniya zarokê tê diyarkirin. Mijar hat rastkirin û xal di beşa «Tu çi dikarî bikî» de hat zelalkirin." },
"RH-CR-004": { was: "Me hejmarek ji bo rêjeya kêmasiya vîtamîna D li herêmê bi kar anî bêyî ku çavkanî bê navandin.", now: "Çavkanî nehat piştrastkirin, loma hejmar hat rakirin. Niha em tenê dibêjin «berbelav e» heta daneyeke pêbawer bi dest bixin." },
"RH-CR-003": { was: "Me li ser îdîayeke tenduristiyê biryara «şaş» da.", now: "Belge ji bo biryareke teqez têr nedikir. Bo «hîn nayê zanîn» hat guhertin, bi sedema wê ya weşandî." }
},

answered: [
{ seg: "Du xulek, yek pirs",
  q: "Bavê min ji bo êşa gêrikan kortîzonê dixwe û niha şekirê wî bilind bûye. Ma ew bi hev ve girêdayî ne?",
  a: "Erê. Kortîzon şekirê xwînê bilind dike, nemaze bi bikaranîna dirêj. Ev nayê wê wateyê ku yekser bê rawestandin — rawestandina ji nişka ve xeternak e. Divê bijîşkê wî bê agahdarkirin." },
{ seg: "Rast an Şaş?",
  q: "Li Facebookê dibêjin ava lîmona germ li ser zikê vala rûnî dihelîne. Ma ev rast e?",
  a: "Na. Ti vexwarin rûnî nahelîne. Ava lîmonê zirardar nîne, lê îdîa bingeheke zanistî tune." },
{ seg: "Li ser tezgeha dermanxaneyê",
  q: "Zaroka min 4 salî ye û ez her şev şerbeta kuxînê didimê. Ma ev di rê de ye?",
  a: "Ji bo zarokên ji 6 salî biçûktir bêyî şêwira bijîşkî nayê pêşniyarkirin. Gelek ji van şerbetan parasetamol tê de heye, loma dibe ku zarok dozeke dubare bistîne bêyî ku tu bizanî." },
{ seg: "Du xulek, yek pirs",
  q: "Bijîşk dibêje pesta xwîna min bilind e lê ez bi tiştekî nahisim. Ma pêdiviya min bi dermanî heye?",
  a: "Erê. Pesta xwînê ya bilind pir caran ti nîşanan nade — zirar bêdeng e û bi salan kom dibe. Xwe baş hîskirin nayê wê wateyê ku ew di bin kontrolê de ye." }
]
};
