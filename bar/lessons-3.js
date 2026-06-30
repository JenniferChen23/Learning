/* Daily NY Bar — 課程資料 lessons-3.js（第 49–65 條，HIGH 核心補強）
   與 generator.js / lessons.js / lessons-2.js 共用 DAYS。 */
var DAYS = (typeof DAYS !== "undefined" && DAYS) ? DAYS : [];

DAYS.push(
  {
    subject: "Real Property", ruleTitle: "Covenants 與 Equitable Servitudes",
    priority: "HIGH", frequency: "tested 10 / 64",
    ruleStatement: "Real covenant 為隨地移轉之書面承諾，求償損害賠償須具 writing、intent、touch & concern、notice 與 privity；equitable servitude 求禁制令則不需 privity，但須 writing(或共同計畫)、intent、touch & concern、notice。",
    elements: ["求損害賠償(covenant)：須 horizontal+vertical privity。", "求禁制令(equitable servitude)：不需 privity，notice 即可。", "共同開發計畫(common scheme)＋通知可使限制相互拘束。"],
    mnemonic: { tag: "助記", text: "要錢＝covenant(需 privity)；要禁制令＝equitable servitude(需 notice 不需 privity)。" },
    why: "社區使用限制(如只准住宅)能否拘束後手買受人,是高頻爭點;救濟想要錢還是禁制令決定要件。",
    hypo: "某社區契約限制各戶僅供住宅使用。新買受人 B 之地契未載此限制，但社區明顯一致為住宅、且記錄中可查。B 欲開商店，鄰人聲請禁止。",
    iracModel: [
      { k: "Issue", v: "住宅限制可否以 equitable servitude 拘束 B。" },
      { k: "Rule", v: "Equitable servitude 求禁制令不需 privity，須 writing/common scheme、intent、touch & concern、notice。" },
      { k: "Application", v: "社區存有共同開發計畫且記錄可查，B 具 inquiry/record notice；限制涉土地使用(touch & concern)且意圖拘束後手。" },
      { k: "Conclusion", v: "限制以 equitable servitude 拘束 B，鄰人可獲禁制令。" }
    ],
    recallQ: "Real covenant 與 equitable servitude 的關鍵差別？",
    recallA: "Covenant 求損害賠償，須 writing、intent、touch & concern、notice 及 privity；equitable servitude 求禁制令，不需 privity，notice(或 common scheme)即可。"
  },
  {
    subject: "Torts", ruleTitle: "Defamation",
    priority: "HIGH", frequency: "tested 10 / 64",
    ruleStatement: "誹謗需 (1) 不實之事實性陳述、(2) of and concerning 原告、(3) 向第三人 publication、(4) 致名譽受損；涉公眾人物/事務須證明 actual malice，私人則至少過失。",
    elements: ["不實『事實』陳述(純意見不構成)。", "Publication 至第三人。", "公眾人物/公共事務→actual malice(明知不實或輕率不顧)；私人→過失。", "Libel 多推定損害；slander 部分須證 special damages。"],
    mnemonic: { tag: "助記", text: "不實事實＋指向原告＋公開＋損名譽；公眾人物要 actual malice。" },
    why: "第一修正案與侵權交會處,常考原告身分(公眾/私人)如何抬高過失門檻。",
    hypo: "報社報導某市長(公眾人物)貪污，事後證實不實。市長起訴誹謗。報社不知不實但未查證。",
    iracModel: [
      { k: "Issue", v: "市長之誹謗請求是否成立。" },
      { k: "Rule", v: "公眾人物須證明 actual malice：被告明知不實或輕率不顧真偽。" },
      { k: "Application", v: "市長為公眾人物，須證 actual malice；報社『未查證』屬過失，未必達輕率不顧真偽之程度。" },
      { k: "Conclusion", v: "除非能證 actual malice，否則請求不成立。" }
    ],
    recallQ: "誹謗的要件？公眾人物須額外證明什麼？",
    recallA: "不實事實性陳述、of and concerning 原告、向第三人 publication、致名譽受損；公眾人物/公共事務須證明 actual malice，私人至少過失。"
  },
  {
    subject: "Contracts", ruleTitle: "Conditions（條件）",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "條件為履行義務發生或消滅所繫之事件。Express condition 須嚴格滿足(strict compliance)；constructive condition 採實質履行(substantial performance)即可。條件可因拋棄、阻撓、estoppel 而免除。",
    elements: ["Express condition：須嚴格成就，否則義務不發生。", "Constructive(implied) condition：substantial performance 即觸發對待給付。", "免除：waiver、prevention(一方阻撓)、estoppel。"],
    mnemonic: { tag: "助記", text: "明示條件要『嚴格』；推定條件看『實質履行』；阻撓/拋棄可免。" },
    why: "付款常以『經建築師核發證明』等條件為前提,考嚴格條件是否成就、能否因對方阻撓而免除。",
    hypo: "合約約定『業主於建築師核發完工證明後付款』。建築師無正當理由拒發證明，業主據此拒付。",
    iracModel: [
      { k: "Issue", v: "未取得證明，業主可否拒付。" },
      { k: "Rule", v: "若一方(或其代理)不正當阻撓條件成就，該條件被免除(prevention/good faith)。" },
      { k: "Application", v: "建築師無正當理由拒發證明，業主不得藉自方阻撓而成就之條件未成立為由拒付(誠信義務)。" },
      { k: "Conclusion", v: "條件被免除，業主仍須付款。" }
    ],
    recallQ: "Express 與 constructive condition 的成就標準？如何免除？",
    recallA: "Express condition 須嚴格成就；constructive condition 採 substantial performance；條件可因 waiver、prevention(阻撓)、estoppel 而免除。"
  },
  {
    subject: "Civil Procedure", ruleTitle: "Summary Judgment",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "當無 genuine dispute of material fact、聲請人於法律上應勝訴時，法院應為 summary judgment(FRCP 56)。法院以對非聲請方有利之角度檢視證據。",
    elements: ["無真正之重要事實爭執。", "聲請人依法應勝訴。", "證據以對非聲請方最有利之方式評價；不可權衡可信度。"],
    mnemonic: { tag: "助記", text: "沒有重要事實爭執＋法律上該贏＝即判；事證偏向非聲請方。" },
    why: "考點常在『有沒有事實爭執到要送陪審團』,或一方僅憑臆測無證據能否擋下 SJ。",
    hypo: "被告聲請 summary judgment 並附證據證明關鍵事實；原告僅以未經佐證之臆測回應，未提出反證。",
    iracModel: [
      { k: "Issue", v: "是否應准被告之 summary judgment。" },
      { k: "Rule", v: "無 genuine dispute of material fact 且聲請人依法應勝訴時應准。" },
      { k: "Application", v: "被告提出證據，原告僅臆測未舉反證，未能create genuine dispute；故無重要事實爭執。" },
      { k: "Conclusion", v: "應准被告之 summary judgment。" }
    ],
    recallQ: "Summary judgment 的標準？",
    recallA: "無 genuine dispute of material fact 且聲請人於法律上應勝訴(FRCP 56)；證據以對非聲請方最有利之方式檢視，不權衡可信度。"
  },
  {
    subject: "Evidence", ruleTitle: "Authentication 與 Best Evidence Rule",
    priority: "HIGH", frequency: "tested 8 / 64",
    ruleStatement: "證物須 authentication(提出足使理性陪審員認定其為所主張之物之證據)方可採。Best evidence rule：欲證明書面/錄音/照片之內容時，原則上須提出原件(或可採之副本)，除非原件遺失非因惡意等例外。",
    elements: ["Authentication：證人辨識、特徵、鏈條等即可(門檻低)。", "Best evidence：證明『文件內容』時須原件/正當副本。", "例外：原件遺失/毀損(非惡意)、對造持有不提出等。"],
    mnemonic: { tag: "助記", text: "先 authenticate(這是不是它)；證『文件內容』要原件(best evidence)。" },
    why: "提出文件、照片、簡訊截圖時,常考有沒有先 authenticate、要不要原件。",
    hypo: "一方欲以證人口述證明一封合約信件的具體條款內容，但未提出該信件原件，原件仍在其持有中。",
    iracModel: [
      { k: "Issue", v: "可否以口述證明信件條款內容。" },
      { k: "Rule", v: "證明書面內容時，best evidence rule 原則上要求提出原件。" },
      { k: "Application", v: "欲證明信件之具體條款(內容)，原件仍可取得且在其持有，無遺失等例外，須提出原件。" },
      { k: "Conclusion", v: "口述不可採以證內容，應提出原件。" }
    ],
    recallQ: "Authentication 與 best evidence rule 各要求什麼？",
    recallA: "Authentication：須有足以認定證物為所主張之物之證據(門檻低)；best evidence rule：證明書面/錄音/照片內容時原則須提原件，除遺失等例外。"
  },
  {
    subject: "Constitutional Law", ruleTitle: "Takings（徵收）",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "政府為 public use 徵收私產須給 just compensation。實體占用或剝奪全部經濟價值之管制屬 per se taking；其餘管制以 Penn Central 因素衡量(經濟衝擊、對投資期待之干預、政府行為性質)。",
    elements: ["Physical occupation／剝奪全部經濟用益＝per se taking。", "其餘 regulatory taking 用 Penn Central 三因素。", "須 public use 且 just compensation(公平市價)。"],
    mnemonic: { tag: "助記", text: "實體占用或歸零→當然徵收；其餘→Penn Central 衡量。" },
    why: "土地管制何時構成需補償之徵收,是高頻交會題(財產+憲法)。",
    hypo: "某環保新規使一塊原可開發之土地完全不得有任何經濟利用，地主主張構成徵收。",
    iracModel: [
      { k: "Issue", v: "該管制是否構成需補償之徵收。" },
      { k: "Rule", v: "剝奪土地全部經濟價值之管制屬 per se regulatory taking(Lucas)。" },
      { k: "Application", v: "新規使該地完全無任何經濟利用，剝奪全部經濟價值，落入 Lucas 之 per se taking。" },
      { k: "Conclusion", v: "構成徵收，政府須給 just compensation。" }
    ],
    recallQ: "何時構成需補償的徵收？",
    recallA: "為 public use 之實體占用或剝奪全部經濟價值之管制屬 per se taking；其餘 regulatory taking 以 Penn Central 三因素衡量，徵收須給 just compensation。"
  },
  {
    subject: "Corporations", ruleTitle: "Shareholder Rights — 投票與查閱",
    priority: "MED", frequency: "tested 8 / 64",
    ruleStatement: "股東於股東會就董事選任及重大事項投票，得以 proxy 委託、或以 voting agreement/trust 安排；並有為正當目的(proper purpose)查閱公司帳冊紀錄之權。",
    elements: ["投票：record date 之股東，可 proxy(一般可撤回)。", "重大事項(合併/出售全部資產/解散/章程修正)須董事提案＋股東多數決。", "查閱權：須 proper purpose(與股東利益相關)。"],
    mnemonic: { tag: "助記", text: "股東選董＋重大事項投票(可 proxy)；查帳要正當目的。" },
    why: "股東能不能查公司帳、能不能用委託書,以及重大交易要不要股東會通過,是常見點。",
    hypo: "股東 S 為調查疑似管理層不當交易，書面要求查閱公司相關帳冊。公司以營業祕密為由全面拒絕。",
    iracModel: [
      { k: "Issue", v: "S 是否有權查閱帳冊。" },
      { k: "Rule", v: "股東為 proper purpose(與其股東利益相關，如調查不當行為)有查閱權。" },
      { k: "Application", v: "S 為調查疑似不當交易而查閱，屬與股東利益相關之正當目的；公司不得全面拒絕(惟可合理限制範圍)。" },
      { k: "Conclusion", v: "S 有查閱權，公司不得一概拒絕。" }
    ],
    recallQ: "股東查閱權的門檻？重大事項如何通過？",
    recallA: "查閱須為 proper purpose(與股東利益相關)；合併/出售全部資產/解散等重大事項須董事提案並經股東(多數)決，投票可以 proxy 委託。"
  },
  {
    subject: "Criminal Law", ruleTitle: "Accomplice Liability（共犯責任）",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "共犯(accomplice)以協助或鼓勵之意圖、實際協助或鼓勵主犯犯罪者，與主犯就所協助之罪及其可預見之衍生罪負同等責任。",
    elements: ["Actus：協助、鼓勵、教唆或便利。", "Mens：意圖促成該犯罪。", "範圍：所助之罪＋自然且可預見之後續罪行。", "有效脫離(withdrawal)須及時並消除助力或通報。"],
    mnemonic: { tag: "助記", text: "助或鼓勵＋意圖促成→與主犯同責(含可預見衍生罪)。" },
    why: "多人犯罪情節常考誰是共犯、責任範圍及能否有效脫離。",
    hypo: "A 為 B 把風並提供工具,助 B 行竊;行竊中 B 臨時持械傷人。檢方欲令 A 就傷害亦負責。",
    iracModel: [
      { k: "Issue", v: "A 是否就 B 之傷害負共犯責任。" },
      { k: "Rule", v: "共犯就所助之罪及其自然可預見之衍生罪負責。" },
      { k: "Application", v: "A 助竊(把風、供具)成立竊盜之共犯；傷害是否為竊盜過程自然可預見之結果為關鍵——若可預見則亦負責。" },
      { k: "Conclusion", v: "竊盜部分 A 為共犯；傷害視其是否可預見而定。" }
    ],
    recallQ: "共犯責任的要件與責任範圍？",
    recallA: "以促成犯罪之意圖協助或鼓勵主犯者為共犯，與主犯就所助之罪及自然可預見之衍生罪負同等責任；有效脫離須及時並消除助力。"
  },
  {
    subject: "Real Property", ruleTitle: "Landlord–Tenant — 義務與轉讓",
    priority: "MED", frequency: "tested 9 / 64",
    ruleStatement: "房東負交付占有與默示適居性(住宅)之義務、不得不法騷擾(quiet enjoyment)。承租人原則上得 assign 或 sublease(除非合約限制)；assignment 使受讓人與房東有 privity of estate，sublease 則否。",
    elements: ["住宅租賃含 implied warranty of habitability。", "Quiet enjoyment；constructive eviction(房東致無法使用且承租人遷出)。", "Assignment(全部讓與，受讓與房東 privity)vs sublease(部分/保留回復權)。"],
    mnemonic: { tag: "助記", text: "住宅有適居擔保；全部讓＝assignment(直接對房東)、部分＝sublease。" },
    why: "租約轉手後誰對誰負責、房屋不能住承租人能否解約,是常見爭點。",
    hypo: "住宅承租人 T 因房東長期拒修致暖氣全無、寒冬無法居住，遂遷出並主張免付其後租金。",
    iracModel: [
      { k: "Issue", v: "T 遷出後可否免付租金。" },
      { k: "Rule", v: "Implied warranty of habitability / constructive eviction：房東致房屋實質不可居且承租人於合理期間遷出者，可免責。" },
      { k: "Application", v: "暖氣全無、寒冬不可居，屬違反適居性/實質驅離；T 於合理期間遷出。" },
      { k: "Conclusion", v: "T 可主張免付其後租金。" }
    ],
    recallQ: "住宅房東的主要義務？assignment 與 sublease 差別？",
    recallA: "房東負交付占有、implied warranty of habitability(住宅)、quiet enjoyment；assignment 為全部讓與(受讓人與房東有 privity of estate)，sublease 為部分/保留回復權(無直接 privity)。"
  },
  {
    subject: "Torts", ruleTitle: "Intentional Torts — Battery/Assault/False Imprisonment/IIED",
    priority: "HIGH", frequency: "tested 10 / 64",
    ruleStatement: "Battery：故意造成有害或冒犯性接觸。Assault：故意使他人合理恐懼即將之有害/冒犯接觸。False imprisonment：故意以邊界拘束他人於一定範圍且其知悉或受害。IIED：以極端而無法容忍之行為故意或輕率造成嚴重精神痛苦。",
    elements: ["Battery：harmful/offensive contact＋intent。", "Assault：合理理解之即時恐懼(言語通常不足，須伴隨外觀)。", "False imprisonment：拘束於邊界內＋無合理脫離。", "IIED：extreme & outrageous＋嚴重精神損害。"],
    mnemonic: { tag: "助記", text: "Battery(接觸)、Assault(恐懼)、False imprisonment(拘束)、IIED(極端行為+重大精神損害)。" },
    why: "故意侵權常一題多罪,要逐一辨明接觸、恐懼、拘束、精神痛苦各自要件。",
    hypo: "D 朝 P 揮拳，P 及時閃避未被擊中，但受到驚嚇。",
    iracModel: [
      { k: "Issue", v: "D 成立何種故意侵權。" },
      { k: "Rule", v: "Assault＝故意致他人合理恐懼即將之有害/冒犯接觸，不以實際接觸為必要。" },
      { k: "Application", v: "D 揮拳使 P 合理預期即將被擊(有現時能力與外觀)，雖未接觸仍生恐懼。" },
      { k: "Conclusion", v: "成立 assault(未接觸故非 battery)。" }
    ],
    recallQ: "Battery、assault、false imprisonment、IIED 的核心？",
    recallA: "Battery＝故意有害/冒犯接觸；assault＝故意致合理恐懼即將接觸；false imprisonment＝故意將他人拘束於邊界內；IIED＝極端無法容忍行為致嚴重精神痛苦。"
  },
  {
    subject: "Contracts", ruleTitle: "Third-Party Beneficiary",
    priority: "MED", frequency: "tested 8 / 64",
    ruleStatement: "意圖受益之第三人(intended beneficiary)於其權利 vest 後得對 promisor 請求履行；偶然受益人(incidental)無請求權。",
    elements: ["Intended(契約意圖使其受益、常列名)vs incidental。", "Vesting：第三人知悉並信賴、起訴或同意後，當事人不得再變更。", "Promisor 得以對 promisee 之抗辯對抗第三人。"],
    mnemonic: { tag: "助記", text: "意圖受益人 vest 後可告 promisor；偶然受益人不行。" },
    why: "合約為第三人利益而訂時,該第三人能不能直接告、何時權利固定,是常見點。",
    hypo: "A 與 B 約定 B 向 A 之債權人 C 清償 A 之欠款。C 得知後信賴此安排。B 拒絕付款。",
    iracModel: [
      { k: "Issue", v: "C 可否直接向 B 請求。" },
      { k: "Rule", v: "意圖受益之第三人於權利 vest(知悉並信賴)後得對 promisor 請求。" },
      { k: "Application", v: "契約意圖使債權人 C 受償(creditor beneficiary)，C 已知悉並信賴，權利已 vest。" },
      { k: "Conclusion", v: "C 得直接向 B 請求清償。" }
    ],
    recallQ: "Intended 與 incidental beneficiary 的差別？權利何時固定？",
    recallA: "Intended beneficiary(契約意圖使其受益)於權利 vest(知悉並信賴/起訴/同意)後可對 promisor 請求；incidental beneficiary 無請求權。"
  },
  {
    subject: "Civil Procedure", ruleTitle: "Collateral Estoppel（爭點排除）",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "Issue preclusion：前案已實際爭執且必要判定之同一爭點，對該案之當事人(及受其拘束者)於後案中不得再爭。",
    elements: ["同一爭點，前案已 actually litigated 且 necessarily decided。", "對被排除方須為前案之當事人(due process)。", "Nonmutual offensive 之援用須公平。"],
    mnemonic: { tag: "助記", text: "同一爭點＋實際爭執且必要判定＋對被告為前案當事人 → 不得再爭。" },
    why: "考點在後案能否引用前案就某事實/法律爭點之認定來省去重新審理。",
    hypo: "前案陪審團已認定 D 在車禍中有過失。同一事故另一受害人 P2 於後案中欲援用該過失認定對抗 D。",
    iracModel: [
      { k: "Issue", v: "P2 可否援用前案之過失認定。" },
      { k: "Rule", v: "Offensive nonmutual collateral estoppel：同一爭點已實際爭執且必要判定，對曾為當事人之 D 得援用(若公平)。" },
      { k: "Application", v: "D 之過失於前案已實際爭執並為判決所必要；D 曾為當事人有充分應訴機會，援用尚屬公平。" },
      { k: "Conclusion", v: "P2 得援用該過失認定，D 不得再爭。" }
    ],
    recallQ: "Collateral estoppel(issue preclusion) 的要件？",
    recallA: "同一爭點於前案已 actually litigated 且 necessarily decided，對被排除方(須為前案當事人)於後案不得再爭；nonmutual offensive 援用須公平。"
  },
  {
    subject: "Wills", ruleTitle: "Will Revocation（遺囑撤回）",
    priority: "MED", frequency: "tested 8 / 64",
    ruleStatement: "遺囑得以 (1) 後立有效遺囑或 codicil、(2) 以撤回意圖實施之物理行為(撕毀、塗銷、焚燒)撤回。撤回後之 revival、dependent relative revocation 等另有規則。",
    elements: ["Subsequent instrument：明示撤回或牴觸部分取代。", "Physical act：須有撤回意圖＋實際毀損行為。", "DRR：基於錯誤假設而撤回，若真意不願失效則撤回無效。"],
    mnemonic: { tag: "助記", text: "撤回＝新遺囑 或 帶意圖的毀損行為；DRR 救『誤撤』。" },
    why: "遺囑被劃掉、撕掉、或立了新的,常考是否有效撤回、原遺囑能否回復。",
    hypo: "T 撕毀其舊遺囑，本意是要讓剛寫好的新遺囑生效，但新遺囑因見證瑕疵無效。",
    iracModel: [
      { k: "Issue", v: "舊遺囑是否仍有效。" },
      { k: "Rule", v: "Dependent relative revocation：撤回係基於『新遺囑有效』之錯誤假設，若 T 寧取舊遺囑而非無遺囑，撤回無效。" },
      { k: "Application", v: "T 撕舊遺囑之意係使新遺囑生效，新遺囑卻無效；依 DRR，T 顯較願維持舊遺囑而非 intestacy。" },
      { k: "Conclusion", v: "依 DRR，舊遺囑之撤回無效，舊遺囑仍有效。" }
    ],
    recallQ: "遺囑撤回的兩種方式？DRR 是什麼？",
    recallA: "以後立遺囑/codicil 或帶撤回意圖之物理行為(撕毀/塗銷/焚燒)撤回；DRR：基於錯誤假設(如新遺囑有效)而撤回，若違真意則撤回無效、原遺囑復效。"
  },
  {
    subject: "Family Law", ruleTitle: "Premarital Agreements（婚前協議）",
    priority: "MED", frequency: "tested 8 / 64",
    ruleStatement: "婚前協議原則上可執行，惟須 (1) 自願簽訂、(2) 簽訂時已為公平揭露(或已知/放棄揭露)、且 (3) 內容非顯失公平(unconscionable)。",
    elements: ["Voluntary：無脅迫/不當壓力(簽約時點、有無律師)。", "Full & fair disclosure 財產與債務(或合法放棄)。", "Not unconscionable(部分州於執行時點再審)。"],
    mnemonic: { tag: "助記", text: "自願＋充分揭露＋不顯失公平 → 可執行。" },
    why: "離婚時一方主張婚前協議無效,常考自願性、揭露與顯失公平三要件。",
    hypo: "婚禮前一晚，一方在無律師、未獲他方財產揭露下，被要求立即簽署對其極為不利之婚前協議。",
    iracModel: [
      { k: "Issue", v: "該婚前協議是否可執行。" },
      { k: "Rule", v: "婚前協議須自願、有公平揭露且非顯失公平。" },
      { k: "Application", v: "婚禮前一晚倉促、無律師、無財產揭露且條件極不利，欠缺自願性與揭露，並可能顯失公平。" },
      { k: "Conclusion", v: "協議很可能不可執行。" }
    ],
    recallQ: "婚前協議可執行的三要件？",
    recallA: "自願簽訂、簽訂時已為公平揭露(或合法放棄)、內容非顯失公平(unconscionable)。"
  },
  {
    subject: "Criminal Procedure", ruleTitle: "Exclusionary Rule 與毒樹果實",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "違反第四/五/六修正案取得之證據原則上排除，且其衍生證據(fruit of the poisonous tree)亦排除；惟有 independent source、inevitable discovery、attenuation、good faith 等例外。",
    elements: ["主證據違憲取得→排除。", "衍生證據→毒樹果實一併排除。", "例外：獨立來源、必然發現、稀釋(attenuation)、善意依賴(令狀/法令)。"],
    mnemonic: { tag: "助記", text: "違憲證據及其果實排除；獨立來源/必然發現/稀釋/善意可救。" },
    why: "非法搜索/訊問後又查到其他證據時,考衍生證據要不要一併排除及例外。",
    hypo: "警方非法搜索取得一把鑰匙，循鑰匙找到置物櫃內之毒品。被告聲請一併排除毒品。",
    iracModel: [
      { k: "Issue", v: "循非法搜索所得線索找到之毒品是否排除。" },
      { k: "Rule", v: "毒樹果實原則排除，除非獨立來源/必然發現/稀釋等例外。" },
      { k: "Application", v: "毒品係直接循非法取得之鑰匙發現，為毒樹果實；若無獨立來源或必然會被合法發現，則排除。" },
      { k: "Conclusion", v: "除有例外，否則毒品一併排除。" }
    ],
    recallQ: "Exclusionary rule 與毒樹果實的例外有哪些？",
    recallA: "違憲取得之證據及其衍生證據(fruit)原則排除；例外：independent source、inevitable discovery、attenuation、good faith。"
  },
  {
    subject: "Constitutional Law", ruleTitle: "State Action",
    priority: "MED", frequency: "tested 8 / 64",
    ruleStatement: "憲法權利(除第十三修正案外)原則上僅拘束政府行為。私人行為於 (a) 執行傳統上專屬政府之公共職能、或 (b) 與政府有重大牽連/共生關係時，可視為 state action。",
    elements: ["原則：只規範 government action。", "Public function：傳統專屬政府職能(如辦選舉、市鎮)。", "Entanglement：政府實質涉入/鼓勵/共生。"],
    mnemonic: { tag: "助記", text: "憲法管政府；私人例外＝公共職能 或 與政府深度牽連。" },
    why: "原告告私人侵害憲法權利時,先過 state action 這道門檻。",
    hypo: "一家私人公司經營之『公司鎮(company town)』禁止他人在其唯一商業街區散發傳單。被以第一修正案挑戰。",
    iracModel: [
      { k: "Issue", v: "私人公司鎮之限制是否受第一修正案拘束(有無 state action)。" },
      { k: "Rule", v: "私人若執行傳統上專屬政府之公共職能，構成 state action(Marsh v. Alabama)。" },
      { k: "Application", v: "公司鎮提供如市鎮般之公共功能與公共空間，執行傳統政府職能。" },
      { k: "Conclusion", v: "構成 state action，受第一修正案拘束。" }
    ],
    recallQ: "私人行為何時構成 state action？",
    recallA: "私人執行傳統上專屬政府之公共職能(public function)，或與政府有重大牽連/共生(entanglement)時，視為 state action。"
  },
  {
    subject: "Torts", ruleTitle: "Vicarious Liability — Respondeat Superior",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "雇主就受僱人於 scope of employment 內所為之侵權負代位責任；獨立承攬人之行為原則上雇用人不負責(除非非可委任之危險或表見代理等例外)。",
    elements: ["須為 employee(受控制)而非 independent contractor。", "行為於 scope of employment 內(職務類型、時地、為雇主目的)。", "Frolic 脫離、detour 仍在範圍；故意犯行多在範圍外(除非職務相關)。"],
    mnemonic: { tag: "助記", text: "受僱人＋職務範圍內＝雇主代位；frolic 脫離，detour 仍在。" },
    why: "員工開公司車肇事、外送途中繞道,常考雇主要不要負責(scope of employment)。",
    hypo: "送貨員於送貨路線上短暫繞去買咖啡途中肇事傷人。雇主主張不負責。",
    iracModel: [
      { k: "Issue", v: "雇主是否就該事故負代位責任。" },
      { k: "Rule", v: "受僱人於 scope of employment 內(含輕微 detour)之侵權，雇主負 respondeat superior。" },
      { k: "Application", v: "送貨員仍在送貨任務中、僅輕微繞道買咖啡屬 detour 而非重大 frolic，仍在職務範圍內。" },
      { k: "Conclusion", v: "雇主負代位責任。" }
    ],
    recallQ: "Respondeat superior 的成立要件？frolic 與 detour 差別？",
    recallA: "雇主就受僱人於 scope of employment 內之侵權負代位責任；重大偏離(frolic)脫離範圍，輕微偏離(detour)仍在範圍內；獨立承攬人原則不負責。"
  }
);
