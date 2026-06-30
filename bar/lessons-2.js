/* Daily NY Bar — 課程資料 lessons-2.js（第 33–48 條，HIGH 核心補強）
   與 generator.js / lessons.js 共用 DAYS。 */
var DAYS = (typeof DAYS !== "undefined" && DAYS) ? DAYS : [];

DAYS.push(
  {
    subject: "Contracts", ruleTitle: "Parol Evidence Rule",
    priority: "HIGH", frequency: "tested 11 / 64",
    ruleStatement: "當書面契約為當事人最終、完整之合意(integration)時，parol evidence rule 排除以先前或同時之口頭/書面協議去『牴觸或補充』該書面條款。",
    elements: ["先判斷書面是否為 integration（部分或完全）。", "完全整合：不得補充亦不得牴觸；部分整合：可補充不矛盾之條款。", "例外：證明詐欺/脅迫/錯誤、條件成立、用語歧義之解釋、嗣後協議。"],
    mnemonic: { tag: "助記", text: "最終書面排除『之前/同時』的口頭補充或牴觸；但詐欺、歧義、嗣後協議不擋。" },
    why: "事實常給一份書面合約，加上『簽約前口頭講過別的』。要先判斷整合程度，再決定口頭證據能不能進。",
    hypo: "書面售屋合約載明售價與標的，未提家具。買方欲提出簽約前賣方口頭承諾『家具一併附送』。賣方主張 parol evidence rule 排除。",
    iracModel: [
      { k: "Issue", v: "口頭附送家具之約定可否採。" },
      { k: "Rule", v: "完全整合之書面排除先前口頭之牴觸/補充；部分整合可補充不矛盾條款。" },
      { k: "Application", v: "若書面僅就售價與標的、未含 merger 條款，可能僅部分整合；家具承諾屬補充而不矛盾之 collateral 約定，或可採；若書面含完全整合條款則排除。" },
      { k: "Conclusion", v: "取決於整合程度：部分整合可採，完全整合則排除。" }
    ],
    recallQ: "Parol evidence rule 排除什麼？主要例外？",
    recallA: "排除以先前或同時之口頭/書面去牴觸或補充最終書面之條款；例外含詐欺/脅迫、用語歧義之解釋、條件、嗣後協議。"
  },
  {
    subject: "Civil Procedure", ruleTitle: "Pleadings — 12(b)(6) 與修正(relation back)",
    priority: "HIGH", frequency: "tested 12 / 64",
    ruleStatement: "起訴狀須為 plausible 之請求；12(b)(6) 以『未陳述可獲救濟之請求』聲請駁回，法院視事實主張為真。修正後之請求若與原訴同一交易事件，得 relate back 至原起訴日(時效)。",
    elements: ["Twombly/Iqbal：須有 plausible 事實，非僅結論。", "12(b)(6)：假設事實為真仍無法律上請求即駁回。", "Relation back：同一 conduct/transaction → 回溯原起訴日。"],
    mnemonic: { tag: "助記", text: "Plausibility 過關；修正同一交易 → relate back 救時效。" },
    why: "考點常在『起訴狀夠不夠具體』與『時效過後追加被告/請求能否回溯』。",
    hypo: "P 在時效屆滿前對公司起訴，時效過後才發現應追加負責人 X，X 早知該訴且知若非誤指身分本應被列為被告。",
    iracModel: [
      { k: "Issue", v: "對 X 之追加可否 relate back 而未罹於時效。" },
      { k: "Rule", v: "修正若同一交易、且新被告於期限內已知該訴並知本應被列名(誤認)，可 relate back。" },
      { k: "Application", v: "X 早知該訴且知因誤指身分未被列名，符合 relation back 對新被告之要件。" },
      { k: "Conclusion", v: "追加 X 回溯原起訴日，未罹時效。" }
    ],
    recallQ: "12(b)(6) 的標準？修正何時 relate back？",
    recallA: "假設事實主張為真仍無可獲救濟之 plausible 請求即駁回；修正與原訴同一交易事件者回溯原起訴日（追加被告另須其及時知悉且知本應被列名）。"
  },
  {
    subject: "Evidence", ruleTitle: "Privileges — 律師-當事人與配偶",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "Attorney-client privilege 保護當事人與律師間為取得法律意見所為之機密溝通，由當事人持有、可拋棄。配偶有 (1) spousal testimonial privilege（刑案中拒絕作證，由證人配偶持有）與 (2) marital communications privilege（婚姻中之機密溝通，雙方持有）。",
    elements: ["律師-當事人：機密溝通、為法律意見、未對第三人揭露。", "例外：crime-fraud（為進行中/未來犯罪尋求協助）。", "配偶證言特權(刑案、婚姻存續中)vs 婚姻溝通特權(婚內機密溝通、離婚後仍存)。"],
    mnemonic: { tag: "助記", text: "律師特權看『機密＋為法律意見』，crime-fraud 破之；配偶分『拒絕作證』與『婚內溝通』兩種。" },
    why: "證據題常埋一段『被告對律師/配偶說的話』,要你判斷可否被迫揭露、誰能主張、有無例外。",
    hypo: "被告私下向律師坦承過去犯行細節以求辯護。檢方欲傳喚該律師作證該對話內容。",
    iracModel: [
      { k: "Issue", v: "律師可否被迫揭露該對話。" },
      { k: "Rule", v: "Attorney-client privilege 保護為法律意見所為之機密溝通，crime-fraud 例外限進行中/未來犯罪。" },
      { k: "Application", v: "被告為求辯護向律師機密陳述過去犯行，屬受保護溝通；非為遂行未來犯罪，crime-fraud 例外不適用。" },
      { k: "Conclusion", v: "受特權保護，律師不得被迫揭露。" }
    ],
    recallQ: "Attorney-client privilege 的要件與主要例外？",
    recallA: "為取得法律意見所為之機密溝通、未對第三人揭露、由當事人持有；例外為 crime-fraud（為進行中或未來犯罪尋求協助）。"
  },
  {
    subject: "Constitutional Law", ruleTitle: "Equal Protection — 審查基準",
    priority: "HIGH", frequency: "tested 13 / 64",
    ruleStatement: "政府差別待遇之合憲性依分類採不同審查：涉種族/國籍/外國人(州法)→strict scrutiny；性別/非婚生→intermediate；其餘(年齡/財富/一般經濟)→rational basis。",
    elements: ["Strict：為 compelling 利益且 narrowly tailored（政府舉證）。", "Intermediate：與 important 利益實質相關(exceedingly persuasive 之性別)。", "Rational basis：與 legitimate 利益合理相關（挑戰者舉證），幾乎都過。"],
    mnemonic: { tag: "助記", text: "種族/國籍＝嚴格；性別/非婚生＝中度；其他＝合理基礎。" },
    why: "看到政府『把人分類』給不同待遇,先定 suspect/quasi-suspect 分類,再套對應基準,結論幾乎由基準決定。",
    hypo: "某州法律僅允許男性擔任特定公職、排除女性。被挑戰違反 Equal Protection。",
    iracModel: [
      { k: "Issue", v: "性別分類之公職限制是否違憲。" },
      { k: "Rule", v: "性別分類採 intermediate scrutiny：須與 important 政府利益實質相關、有 exceedingly persuasive justification。" },
      { k: "Application", v: "全面排除女性係基於性別之刻板印象，政府難以提出 exceedingly persuasive 之正當理由，與重要利益不具實質關聯。" },
      { k: "Conclusion", v: "違反 Equal Protection。" }
    ],
    recallQ: "Equal Protection 三種審查基準各對應哪些分類？",
    recallA: "種族/國籍/外國人(州)→strict（compelling＋narrowly tailored）；性別/非婚生→intermediate（important＋實質相關）；其餘→rational basis（legitimate＋合理相關）。"
  },
  {
    subject: "Real Property", ruleTitle: "Easements（地役權）",
    priority: "HIGH", frequency: "tested 12 / 64",
    ruleStatement: "Easement 為使用他人土地之非占有性權利。成立方式：明示(express)、默示(implied，含既有使用 quasi-easement 與 necessity)、時效(prescription)、estoppel。Appurtenant 隨地移轉、in gross 屬人。",
    elements: ["建立：express／implied(prior use 或 necessity)／prescription／estoppel。", "Appurtenant（利於某地、隨 dominant 地移轉）vs in gross（屬個人）。", "終止：合意、合併(merger)、拋棄、時效逆用等。"],
    mnemonic: { tag: "助記", text: "建立四法：明示/默示/時效/estoppel；附隨隨地走，in gross 屬人。" },
    why: "常考通行權:賣方把一塊地分割出售後,買方主張對保留地有通行地役權(implied by prior use 或 necessity)。",
    hypo: "O 將一筆大地後段分割賣給 B，B 之地對外唯一通路須穿越 O 保留之前段；分割前 O 即長期由該路出入。B 主張通行地役權。",
    iracModel: [
      { k: "Issue", v: "B 對 O 保留地是否有通行地役權。" },
      { k: "Rule", v: "Implied easement by prior use：分割前既有、明顯且持續之使用，且對 dominant 地之合理使用屬必要。" },
      { k: "Application", v: "分割前 O 即長期經該路出入(既有、明顯、持續)，分割後該路為 B 唯一通路(合理必要)，符合默示地役權(亦可能成立 easement by necessity)。" },
      { k: "Conclusion", v: "B 取得通行地役權。" }
    ],
    recallQ: "Easement 的四種成立方式？appurtenant 與 in gross 差別？",
    recallA: "明示、默示(prior use 或 necessity)、時效、estoppel；appurtenant 利於特定土地並隨地移轉，in gross 屬於個人。"
  },
  {
    subject: "Torts", ruleTitle: "Causation — Actual 與 Proximate Cause",
    priority: "HIGH", frequency: "tested 12 / 64",
    ruleStatement: "過失之因果需 actual cause（but-for；多因時用 substantial factor）與 proximate cause（損害須為被告行為之可預見結果，非過度遙遠）。",
    elements: ["Actual cause：but-for 該行為損害不致發生；多重充分原因用 substantial factor。", "Proximate cause：可預見之損害與原告。", "Intervening cause：可預見之介入不切斷；不可預見之 superseding 切斷因果。"],
    mnemonic: { tag: "助記", text: "But-for(事實) + foreseeable(近因)；superseding 不可預見才切斷。" },
    why: "因果是過失爭點的常客,尤其有第三人或意外介入時,考 proximate cause 與 superseding cause。",
    hypo: "D 過失輕撞 P，救護車送醫途中遭酒駕者攔腰撞擊致 P 重傷。P 將全部傷害歸於 D。",
    iracModel: [
      { k: "Issue", v: "後續車禍之傷害是否仍可歸於 D。" },
      { k: "Rule", v: "可預見之介入不切斷因果；不可預見之 superseding cause 切斷。送醫途中之一般風險常被認可預見。" },
      { k: "Application", v: "受傷後送醫、途中再生事故屬常見可預見之風險範圍(多數見解)，未必構成 superseding；但若酒駕屬異常不可預見，可能切斷對該加重部分之近因。" },
      { k: "Conclusion", v: "原傷害歸 D；加重部分視該介入是否可預見而定。" }
    ],
    recallQ: "過失因果的兩層？什麼切斷近因？",
    recallA: "Actual cause(but-for；多因用 substantial factor)＋proximate cause(可預見之損害)；不可預見之 superseding intervening cause 切斷因果。"
  },
  {
    subject: "Corporations", ruleTitle: "Duty of Loyalty — 自我交易與篡奪商機",
    priority: "HIGH", frequency: "tested 11 / 64",
    ruleStatement: "董事/高管須忠實為公司。自我交易(self-dealing)除非經 (a) 無利害董事之多數核准、(b) 股東核准，或 (c) 證明對公司整體公平(entire fairness)，否則可撤銷。並不得篡奪屬於公司之商業機會。",
    elements: ["Self-dealing：須揭露＋無利害核准 或 entire fairness。", "Corporate opportunity：與公司業務相關、公司有期待利益之機會須先讓與公司。", "BJR 不保護違反忠實義務之行為。"],
    mnemonic: { tag: "助記", text: "自我交易→揭露＋無利害核准或公平；公司商機→先給公司。" },
    why: "董事與公司交易、或私下拿走公司本可取得的生意,是 loyalty 高頻爭點。",
    hypo: "董事 D 得知一塊公司正洽購、與其業務直接相關之土地，未告知董事會即以個人名義買下轉售獲利。",
    iracModel: [
      { k: "Issue", v: "D 是否違反 duty of loyalty(篡奪商機)。" },
      { k: "Rule", v: "與公司業務相關且公司有期待之機會，董事須先揭露並讓與公司，不得逕自取得。" },
      { k: "Application", v: "該地為公司正洽購、與業務直接相關之機會，D 未揭露即私下取得獲利，構成篡奪公司商機。" },
      { k: "Conclusion", v: "違反 duty of loyalty，須將利益歸入公司(constructive trust)。" }
    ],
    recallQ: "自我交易與篡奪公司商機如何處理？",
    recallA: "自我交易須揭露並經無利害董事/股東核准或證明 entire fairness；與公司業務相關且公司有期待之機會須先讓與公司，不得董事逕取。"
  },
  {
    subject: "Criminal Law", ruleTitle: "竊盜類犯罪 — Larceny / Embezzlement / False Pretenses",
    priority: "HIGH", frequency: "tested 10 / 64",
    ruleStatement: "Larceny：以永久剝奪之意圖，未經同意取走並移動他人占有之財物。Embezzlement：合法占有後之不法侵占。False pretenses：以不實事實陳述取得他人財物所有權。",
    elements: ["Larceny：trespassory taking & carrying away＋意圖永久剝奪(取走當下)。", "Embezzlement：先合法持有→其後侵占。", "False pretenses：取得所有權(非僅占有)且以不實陳述致交付。"],
    mnemonic: { tag: "助記", text: "Larceny＝偷走；Embezzlement＝先合法持有再侵占；False pretenses＝騙到所有權。" },
    why: "事實常設一個拿走財物的情節,要你精準辨別三罪,關鍵在『取得時是占有還是所有』『一開始是否合法持有』。",
    hypo: "收銀員 C 受託保管當日營收，下班時將櫃內現金佔為己有帶走。",
    iracModel: [
      { k: "Issue", v: "C 成立 larceny 或 embezzlement。" },
      { k: "Rule", v: "Embezzlement＝合法占有後之不法侵占；larceny 須取走時即為 trespassory。" },
      { k: "Application", v: "C 受託合法占有營收，事後起意侵占帶走，係合法持有後之不法處分，符合 embezzlement 而非 larceny。" },
      { k: "Conclusion", v: "成立 embezzlement。" }
    ],
    recallQ: "Larceny、embezzlement、false pretenses 的關鍵區別？",
    recallA: "Larceny＝未經同意 trespassory 取走他人占有之物＋永久剝奪意圖；embezzlement＝合法占有後侵占；false pretenses＝以不實陳述取得『所有權』。"
  },
  {
    subject: "Criminal Procedure", ruleTitle: "Miranda",
    priority: "HIGH", frequency: "tested 10 / 64",
    ruleStatement: "在 custodial interrogation 前，須告知 Miranda 權利(緘默權、所言可用於不利、律師權、無資力可指定)；未告知所得之陳述原則上不得作為主案證據。",
    elements: ["須同時 custody(自由受實質拘束)＋interrogation(明知可能引出不利陳述之訊問)。", "權利可有效拋棄(knowing & voluntary)。", "援用律師權後須停止訊問；未告知之陳述不得作主案實質證據(但可彈劾)。"],
    mnemonic: { tag: "助記", text: "Custody＋Interrogation 才觸發；告知後可拋棄；援用律師即停問。" },
    why: "刑訴常考被告自白能否使用——先判斷有無 custody+interrogation,再看告知與拋棄。",
    hypo: "警方於警局將嫌犯上銬偵訊,未告知 Miranda 即直接訊問,嫌犯做出不利陳述。檢方欲於主案使用。",
    iracModel: [
      { k: "Issue", v: "該未告知所得之陳述可否於主案使用。" },
      { k: "Rule", v: "Custodial interrogation 前未告知 Miranda，所得陳述不得作主案實質證據。" },
      { k: "Application", v: "嫌犯於警局上銬受訊問＝custody＋interrogation，未經告知即取得陳述。" },
      { k: "Conclusion", v: "該陳述不得作主案實質證據(惟得用於彈劾)。" }
    ],
    recallQ: "Miranda 何時觸發？未告知的後果？",
    recallA: "Custodial interrogation(拘束＋訊問)前須告知；未告知所得陳述不得作主案實質證據(但可用於彈劾)，權利可 knowing & voluntary 拋棄。"
  },
  {
    subject: "Trusts", ruleTitle: "Trustee Duties — 忠實與審慎投資",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "受託人負 duty of loyalty(專為受益人利益、禁自我交易)、duty of prudence(以審慎投資人標準管理、分散投資)、公平對待各受益人、告知與會計義務。",
    elements: ["Loyalty：禁 self-dealing，違反採 no further inquiry rule。", "Prudent investor：以整體投組合審慎、分散風險。", "Impartiality／報告／分別保管(no commingling)。"],
    mnemonic: { tag: "助記", text: "忠實(禁自我交易)＋審慎(分散投資)＋公平＋會計。" },
    why: "信託題常在成立後問受託人有沒有違反義務——自我交易、未分散、偏袒某受益人。",
    hypo: "受託人 T 將信託資金全數投入自己擔任董事之公司股票，事後股價大跌致信託受損。",
    iracModel: [
      { k: "Issue", v: "T 是否違反受託人義務。" },
      { k: "Rule", v: "受託人負 loyalty(禁自我交易)與 prudence(審慎、分散)之義務。" },
      { k: "Application", v: "投入自己任董事之公司＝self-dealing 違反 loyalty；全數押單一標的＝未分散違反 prudent investor rule。" },
      { k: "Conclusion", v: "雙重違反，T 須對信託損失負責。" }
    ],
    recallQ: "受託人的主要義務有哪些？",
    recallA: "Duty of loyalty(專為受益人、禁自我交易)、duty of prudence(審慎投資人標準、分散)、公平對待受益人、告知與會計、不得 commingle。"
  },
  {
    subject: "Family Law", ruleTitle: "Child Custody — Best Interests",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "子女監護以 best interests of the child 為最高原則，法院綜合各因素裁量；多數傾向使子女與雙親維持有意義關係。",
    elements: ["考量：子女需求與意願、各親照顧能力與關係、穩定性、健康、家暴紀錄等。", "非以父母性別為據；primary caretaker 為重要因素。", "修改監護須證明 substantial change in circumstances。"],
    mnemonic: { tag: "助記", text: "一切看 best interests；改判要有重大情事變更。" },
    why: "離婚題常接著問監護歸屬或日後改判,核心永遠是 best interests 與『有無重大變更』。",
    hypo: "離婚後母親獲主要監護。兩年後父親以自己已再婚、家庭較穩定為由聲請改判主要監護。",
    iracModel: [
      { k: "Issue", v: "父親可否變更為主要監護。" },
      { k: "Rule", v: "修改監護須 substantial change in circumstances 且符合 best interests。" },
      { k: "Application", v: "父親再婚、家庭更穩定本身通常不足以構成『重大變更』，除非現狀對子女不利；仍以子女最佳利益為斷。" },
      { k: "Conclusion", v: "若無對子女不利之重大變更，法院多半維持原監護。" }
    ],
    recallQ: "子女監護的判準？改判監護的門檻？",
    recallA: "以 best interests of the child 綜合裁量(需求、關係、穩定、家暴等)；改判須證明 substantial change in circumstances 且符合最佳利益。"
  },
  {
    subject: "Secured Transactions", ruleTitle: "優先順位與 PMSI 超優先",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "同一擔保品多重擔保權之優先,一般為『先 perfect 或先 file 者優先』;未 perfect 之擔保權劣後於已 perfect 者。PMSI 於符合時點要件時取得超優先。",
    elements: ["已 perfect 勝未 perfect；皆已 perfect 則 first to file or perfect。", "PMSI 設備：交付占有後 20 日內 perfect 即優先於先前 filed 之擔保權。", "PMSI 存貨：須於交付前 perfect 並通知先前擔保權人。"],
    mnemonic: { tag: "助記", text: "先 file/perfect 者勝；PMSI 在寬限期內 perfect 可超車。" },
    why: "Article 9 排序題的核心:多個債權人搶同一擔保品,PMSI 能不能超優先是常見關鍵。",
    hypo: "Bank 先就 D『現有及將來設備』登記在先。其後賣方 S 以賒銷賣給 D 一台新機器並保留擔保權，於交付後 10 日內登記。",
    iracModel: [
      { k: "Issue", v: "就該新機器，S 與 Bank 何者優先。" },
      { k: "Rule", v: "設備 PMSI 於交付後 20 日內 perfect 者，優先於先前 filed 之擔保權。" },
      { k: "Application", v: "S 之擔保權為 purchase-money(賒銷取得該機器之價金)，於交付後 10 日(在 20 日內)登記 perfect。" },
      { k: "Conclusion", v: "S 之 PMSI 就該機器超優先於 Bank。" }
    ],
    recallQ: "擔保權優先的一般規則？PMSI 設備如何超優先？",
    recallA: "一般為 first to file or perfect，已 perfect 勝未 perfect；設備 PMSI 於交付後 20 日內 perfect 即優先於先前已登記之擔保權。"
  },
  {
    subject: "Contracts", ruleTitle: "Anticipatory Repudiation",
    priority: "HIGH", frequency: "tested 10 / 64",
    ruleStatement: "一方於履行期前明確且確定地表示將不履行(anticipatory repudiation)，他方得立即視為違約起訴、或暫停己方履行並等待；亦得於對方未信賴撤回前 retract。",
    elements: ["須明確、確定之拒絕履行表示(非單純疑慮)。", "受害方可：立即訴、等到履行期、或暫停己方履行。", "不安時可依 UCC 要求 adequate assurance；未撤回前可 retract。"],
    mnemonic: { tag: "助記", text: "履行期前明確拒絕＝可立即起訴或等；未信賴前可撤回。" },
    why: "對方提前說『不做了』時,受害方能不能馬上告、要不要繼續準備,是常見爭點。",
    hypo: "建商於開工日前一個月明確通知業主『本工程我們不做了』。業主想立即另找廠商並求償。",
    iracModel: [
      { k: "Issue", v: "業主可否於履行期前即起訴並另尋廠商。" },
      { k: "Rule", v: "明確之 anticipatory repudiation 使受害方得立即視為違約、起訴並 mitigate。" },
      { k: "Application", v: "建商明確、確定地表示不履行，構成 anticipatory repudiation，業主得立即主張違約並另覓廠商以減損。" },
      { k: "Conclusion", v: "業主可立即起訴求償並另行發包。" }
    ],
    recallQ: "Anticipatory repudiation 的受害方有哪些選擇？",
    recallA: "對方履行期前明確確定拒絕履行時，受害方得立即視為違約起訴、或暫停己方履行等待；對方未被信賴前可 retract。"
  },
  {
    subject: "Civil Procedure", ruleTitle: "Res Judicata（請求權排除）",
    priority: "HIGH", frequency: "tested 10 / 64",
    ruleStatement: "Claim preclusion(res judicata)：就同一交易事件之同一當事人間，已有 final judgment on the merits 後，不得就本應於前案提出之請求再行起訴。",
    elements: ["同一當事人(或 privity)。", "前案為 final judgment on the merits。", "同一 claim/transaction(含本可提出之請求)。"],
    mnemonic: { tag: "助記", text: "同當事人＋確定實體判決＋同一交易 → 不准再告。" },
    why: "考點常在『第二次起訴會不會被前案擋掉』——尤其原告把同一事故拆成多次訴訟。",
    hypo: "P 因一場車禍先就車損起訴並獲確定判決，事後又另案就同一車禍之人身傷害起訴同一被告。",
    iracModel: [
      { k: "Issue", v: "第二案是否被 res judicata 排除。" },
      { k: "Rule", v: "同一當事人、前案確定實體判決後，同一交易事件之請求(含應一併提出者)不得再訴。" },
      { k: "Application", v: "兩案同一當事人、源於同一車禍(同一交易)，車損與人傷本應於前案一併請求；前案已確定實體判決。" },
      { k: "Conclusion", v: "第二案被 claim preclusion 排除。" }
    ],
    recallQ: "Claim preclusion(res judicata) 三要件？",
    recallA: "同一當事人(或 privity)、前案為 final judgment on the merits、同一 claim/transaction(含本應提出之請求)。"
  },
  {
    subject: "Evidence", ruleTitle: "Impeachment（彈劾證人）",
    priority: "HIGH", frequency: "tested 9 / 64",
    ruleStatement: "得以多種方法彈劾證人可信度：先前不一致陳述、偏見/利害、感知或記憶缺陷、品格不誠實(名譽/意見、特定不誠實行為、某些前科)、矛盾證據。",
    elements: ["Prior inconsistent statement：質疑一致性(若非傳聞例外，僅供彈劾)。", "Bias/interest：恆得彈劾。", "犯罪前科：涉不誠實者可採；其他重罪受 403/時間限制。"],
    mnemonic: { tag: "助記", text: "彈劾武器：前後矛盾、偏見、感知/記憶、不誠實品格、前科、矛盾事證。" },
    why: "交叉詰問場景常考『可以用什麼來打對方證人』、前科或前後不一致陳述能否提出。",
    hypo: "證人作證有利於原告。被告欲提出該證人三年前曾因詐欺被定罪以削弱其可信度。",
    iracModel: [
      { k: "Issue", v: "詐欺前科可否用於彈劾。" },
      { k: "Rule", v: "涉不誠實或虛偽陳述之犯罪(如詐欺)得用以彈劾證人可信度。" },
      { k: "Application", v: "詐欺屬 crimen falsi(不誠實犯罪)，在時間限制內可採以彈劾該證人之誠實性。" },
      { k: "Conclusion", v: "該前科可用於彈劾。" }
    ],
    recallQ: "彈劾證人有哪些方法？哪種前科最常可採？",
    recallA: "前後不一致陳述、偏見/利害、感知/記憶缺陷、不誠實品格、矛盾事證；涉不誠實(crimen falsi，如詐欺)之前科最易採以彈劾。"
  },
  {
    subject: "Constitutional Law", ruleTitle: "Free Speech — 內容管制 vs 中立管制",
    priority: "HIGH", frequency: "tested 12 / 64",
    ruleStatement: "政府對言論之 content-based 管制採 strict scrutiny；content-neutral 之時間地點方式管制採 intermediate（須服務重要利益、narrowly tailored 且留有充分替代管道）。不受保護或低價值言論(煽動、真實威脅、淫穢、誹謗等)另有規則。",
    elements: ["先分 content-based(看內容/觀點)或 content-neutral。", "Content-based→strict；neutral TPM→intermediate＋ample alternative channels。", "公共論壇之管制限制更嚴。"],
    mnemonic: { tag: "助記", text: "看內容＝嚴格；只管時間地點方式＝中度＋留替代管道。" },
    why: "第一修正案題的起手式:先判斷管制是針對內容還是中立,基準一定,結論大致底定。",
    hypo: "市政府條例禁止『在公園發表任何批評市政府的演說』，但允許其他主題演說。被挑戰違憲。",
    iracModel: [
      { k: "Issue", v: "該條例是否違反言論自由。" },
      { k: "Rule", v: "針對內容/觀點之管制採 strict scrutiny：須為 compelling 利益且 narrowly tailored。" },
      { k: "Application", v: "僅禁止『批評市府』之演說＝viewpoint/content-based，於公共論壇(公園)，政府難具 compelling 正當理由。" },
      { k: "Conclusion", v: "違憲。" }
    ],
    recallQ: "言論之內容管制與中立管制各採什麼審查？",
    recallA: "Content-based→strict scrutiny(compelling＋narrowly tailored)；content-neutral 之時間地點方式管制→intermediate(重要利益、narrowly tailored、留有充分替代管道)。"
  }
);
