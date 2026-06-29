/* ============================================================
   Daily NY Bar (UBE/MEE) — 內容生成器
   依 daily_bar_study_content_rules.md：
   - HIGH priority 優先、依考試頻率加權
   - 交錯 (interleave) 高密度科目，穿插輕科目
   - 每天一個概念完整收尾：規則→要件→助記→為何會考→Mini-hypo→IRAC
   - 間隔重複：每天回想題回訪 約1/3/7 天前的概念
   排程每天只需呼叫 generateLesson(dayIndex)；dayIndex 逐日遞進（不循環）。
   ============================================================ */

const DAYS = [
  /* ---------- Day 1 ｜ Civil Procedure ---------- */
  {
    subject: "Civil Procedure",
    ruleTitle: "Personal Jurisdiction — Minimum Contacts",
    priority: "HIGH",
    frequency: "tested 18 / 64",
    progress: { done: 1, total: 14, label: "高頻交錯課程 · 第 1 / 14 天" },
    ruleStatement: "法院對外州被告行使 personal jurisdiction，須 (1) 該州 long-arm statute 授權，且 (2) 合乎 Due Process — 被告與法院地州有 minimum contacts，使行使管轄不違反 traditional notions of fair play and substantial justice。",
    elements: [
      "Long-arm statute 授權該州法院行使管轄。",
      "Purposeful availment：被告刻意利用該州、享受其法律利益，可合理預見被訴於該州。",
      "Relatedness：specific jurisdiction 須訴因 arise out of / relate to 該接觸；general jurisdiction 須被告在該州 at home。",
      "Fairness：行使管轄須 reasonable（負擔、州利益、原告利益等因素）。"
    ],
    mnemonic: { tag: "助記", text: "P-A-R-R：Purposeful Availment → Relatedness → Reasonableness。" },
    why: "MEE 常見型態：外州被告經網站主動向法院地州行銷並出貨、或在該州簽約／單次事故後被起訴。爭點幾乎都在 purposeful availment 與 relatedness，要把事實逐一鉤到要件。",
    hypo: "D 公司設於 A 州，透過網站主動向 B 州消費者行銷並運送商品。B 州買家 P 因該商品在 B 州受傷，於 B 州法院起訴。D 主張與 B 州無接觸、B 州無管轄。",
    recall: [
      { when: "暖身", q: "MEE 申論的標準寫作骨架 IRAC 四個字母各代表什麼？", answer: "Issue（爭點）、Rule（規則陳述）、Application（把事實套進規則）、Conclusion（結論）。MEE 給分重點在 Application — 把每個要件鉤到事實。" }
    ],
    iracModel: [
      { k: "Issue", v: "B 州法院對外州被告 D 是否有 personal jurisdiction。" },
      { k: "Rule", v: "須 long-arm 授權且符合 Due Process：被告與該州有 minimum contacts（purposeful availment + relatedness）且行使管轄須合乎 fair play and substantial justice。" },
      { k: "Application", v: "D 主動向 B 州行銷並出貨，屬刻意利用 B 州市場的 purposeful availment，可合理預見在 B 州被訴；P 之傷害正源於該出貨商品，relatedness 成立（specific jurisdiction）。D 為公司、應訴負擔不過重，B 州對保護州民有利益，行使管轄屬合理。" },
      { k: "Conclusion", v: "B 州對 D 有 specific personal jurisdiction。" }
    ]
  },

  /* ---------- Day 2 ｜ Evidence ---------- */
  {
    subject: "Evidence",
    ruleTitle: "Hearsay — 定義與非傳聞",
    priority: "HIGH",
    frequency: "tested 16 / 64",
    progress: { done: 2, total: 14, label: "高頻交錯課程 · 第 2 / 14 天" },
    ruleStatement: "Hearsay 是「庭外所為的陳述，於庭上用以證明其所主張內容為真」，原則上不可採，除非屬定義上的非傳聞或落入某項例外。",
    elements: [
      "Out-of-court statement：庭外的口頭、書面或主張性動作。",
      "Offered to prove the truth of the matter asserted：用以證明陳述內容本身為真。",
      "若提出目的非為證明內容真實（effect on listener、notice、verbal act / legally operative words、彈劾），則『不是傳聞』，可採。"
    ],
    mnemonic: { tag: "助記", text: "庭外＋為證明內容為真＝傳聞；只要『不是為了內容是真的』就不是傳聞。" },
    why: "MEE 常把一段話放進事實裡，要你先判斷『提出目的是什麼』。同一句話為證明內容是傳聞、為證明聽者反應或當事人有無通知則非傳聞 — 先過定義門檻，再談例外。",
    hypo: "車禍訴訟中，W 作證說事故前路人 X 曾大喊『那台車的煞車壞了！』。一方欲以此證明煞車確實故障；他方則欲證明駕駛聽到後仍照開、具有 notice。",
    recall: [
      { when: "昨天", q: "外州被告要被法院地州行使 personal jurisdiction，Due Process 下的核心三步是什麼？", answer: "Purposeful availment（刻意利用該州）→ Relatedness（訴因與接觸相關，specific）或 at home（general）→ Reasonableness（fair play & substantial justice）。前提還要 long-arm statute 授權。" }
    ],
    iracModel: [
      { k: "Issue", v: "X 的庭外喊話是否為不可採之傳聞。" },
      { k: "Rule", v: "傳聞＝庭外陳述用以證明所主張內容為真；若提出目的非為內容真實則非傳聞。" },
      { k: "Application", v: "若用來證明『煞車確實壞了』，即為證明內容為真，屬傳聞、須有例外才可採；若僅用來證明駕駛『聽到後具有 notice／其後續行為不合理』，則非為證明內容真實，屬非傳聞，可採。" },
      { k: "Conclusion", v: "採否取決於提出目的：證明故障＝傳聞；證明 notice＝非傳聞可採。" }
    ]
  },

  /* ---------- Day 3 ｜ Contracts ---------- */
  {
    subject: "Contracts",
    ruleTitle: "適用法 (UCC vs 普通法) 與 Offer",
    priority: "HIGH",
    frequency: "tested 20 / 64",
    progress: { done: 3, total: 14, label: "高頻交錯課程 · 第 3 / 14 天" },
    ruleStatement: "貨物 (goods) 買賣適用 UCC Article 2，服務與土地適用普通法（混合契約看 predominant purpose）。Offer 為要約人作成、含足夠確定條款、向相對人傳達，使相對人合理相信『一旦承諾即成約』之意思表示。",
    elements: [
      "先判斷適用法：goods → UCC 2；services / land → common law。",
      "Offer：明確的締約意思（非招攬、非玩笑）。",
      "足夠確定的條款（普通法須含主要條款；UCC 容許開放條款只要有數量與成約意思）。",
      "向特定相對人傳達。"
    ],
    mnemonic: { tag: "助記", text: "先分 UCC／普通法，再看 Offer：意思＋確定條款＋傳達。" },
    why: "幾乎每題契約都要先一句點出適用法，因為救濟與規則（如 firm offer、追加條款、瑕疵擔保）全看 UCC 或普通法。接著常考某通訊是 offer 還是招攬／初步磋商。",
    hypo: "賣方寄給買方一封信：『本公司現有 1000 個小工具，每個 $5，如有意請回覆。』買方回信『我全要了』。賣方主張原信只是廣告招攬，雙方未成約。",
    recall: [
      { when: "昨天", q: "判斷一段庭外陳述是不是傳聞，第一個要問的關鍵問題是什麼？", answer: "提出該陳述的『目的』— 是否用以證明其所主張內容為真。若是，為傳聞；若為證明聽者反應、notice、verbal act 等則非傳聞。" },
      { when: "約 3 天前", q: "specific 與 general personal jurisdiction 的差別在哪？", answer: "Specific：訴因須 arise out of / relate to 被告在該州的接觸。General：被告於該州 at home（自然人 domicile；公司設立州或主營業地），可就任何訴因被訴。" }
    ],
    iracModel: [
      { k: "Issue", v: "賣方信件是否構成可被承諾的 offer。" },
      { k: "Rule", v: "貨物適用 UCC 2；offer 須含成約意思、足夠確定條款並向相對人傳達；單純廣告／報價通常為招攬。" },
      { k: "Application", v: "本件標的為小工具（goods），適用 UCC。信件雖載價格與數量，但用語『如有意請回覆』偏向招攬、未表明一經承諾即受拘束，且為對外一般性發出，較似 invitation to deal 而非確定 offer。" },
      { k: "Conclusion", v: "該信較可能為招攬而非 offer，買方回覆反為新的 offer，尚未成約。" }
    ]
  },

  /* ---------- Day 4 ｜ Constitutional Law ---------- */
  {
    subject: "Constitutional Law",
    ruleTitle: "Standing（當事人適格）",
    priority: "HIGH",
    frequency: "tested 12 / 64",
    progress: { done: 4, total: 14, label: "高頻交錯課程 · 第 4 / 14 天" },
    ruleStatement: "原告於聯邦法院須具 standing：(1) injury in fact（具體且特定、實際或迫切之損害）、(2) causation（損害可歸因於被告行為）、(3) redressability（有利判決可救濟該損害）。",
    elements: [
      "Injury in fact：concrete & particularized，actual or imminent（非臆測）。",
      "Causation：損害 fairly traceable 至被告之行為。",
      "Redressability：法院判決能實際救濟。"
    ],
    mnemonic: { tag: "助記", text: "I-C-R：Injury → Causation → Redressability。" },
    why: "Con Law 題常先設一個程序門檻：誰能告？納稅人、第三人代位、未來才會發生的損害，都在考 injury in fact 與 redressability。先過 standing 再談實體違憲。",
    hypo: "某環保團體控告聯邦機關核發的開發許可違法。團體承認尚無任何成員實際使用該地，但主張『將來可能去』並關心環境。被告以無 standing 抗辯。",
    recall: [
      { when: "昨天", q: "拿到一題契約，第一句通常要先確定什麼？為什麼重要？", answer: "先確定適用法 — 貨物買賣適用 UCC Article 2，服務／土地適用普通法。因為 firm offer、追加條款、瑕疵擔保、救濟等規則全依適用法不同。" },
      { when: "約 3 天前", q: "同一句庭外陳述，什麼情況下『不是傳聞』而可採？", answer: "當提出目的非為證明其內容為真時，例如證明 effect on listener、notice、verbal act（具法律效力之言詞）或用於彈劾。" }
    ],
    iracModel: [
      { k: "Issue", v: "環保團體就開發許可是否具 standing。" },
      { k: "Rule", v: "Standing 須 injury in fact（concrete、particularized、actual/imminent）、causation、redressability；組織得代成員提告，惟成員本身須有 standing。" },
      { k: "Application", v: "團體自承無成員實際使用該地，『將來可能去』屬臆測、非 actual or imminent 之具體損害，欠缺 injury in fact；對環境的一般關切不足以特定化損害。" },
      { k: "Conclusion", v: "團體欠缺 standing，法院應駁回。" }
    ]
  },

  /* ---------- Day 5 ｜ Real Property ---------- */
  {
    subject: "Real Property",
    ruleTitle: "Recording Acts（登記法）",
    priority: "HIGH",
    frequency: "tested 15 / 64",
    progress: { done: 5, total: 14, label: "高頻交錯課程 · 第 5 / 14 天" },
    ruleStatement: "普通法『先到先得』可被登記法修正。Notice 法：後手之善意有償買受人 (BFP) 即優先於未登記之前手。Race-Notice 法：後手須為 BFP『且先完成登記』方優先。",
    elements: [
      "判斷法域型態：Race / Notice / Race-Notice（看制定法用語：『without notice』＝Notice 要素；『first recorded』＝Race 要素）。",
      "BFP 要件：支付有價對價，且取得時無 actual / constructive(record) / inquiry notice。",
      "Race-Notice 另需『搶先登記』。"
    ],
    mnemonic: { tag: "助記", text: "Notice 看『有沒有知道』；Race-Notice 還要『先登記』。" },
    why: "典型 MEE：O 把同一筆地先賣 A（未登記）、再賣 B。誰勝取決於法域型態與 B 是否為無通知之 BFP、有無搶先登記。務必先引制定法判斷型態，再套 BFP。",
    hypo: "O 將某地售予 A，A 未登記。其後 O 又將同地售予 B，B 不知 A 的存在並支付對價。A 隨後登記，B 之後才登記。該州法律規定：未登記之文件對『後手善意有償且先登記之買受人』無效。",
    recall: [
      { when: "昨天", q: "聯邦法院 standing 的三要件？", answer: "Injury in fact（具體、特定、實際或迫切）、Causation（損害可歸因於被告）、Redressability（判決能救濟）。" },
      { when: "約 3 天前", q: "貨物與服務的混合契約，如何決定適用 UCC 還是普通法？", answer: "看 predominant purpose（主要目的）— 若交易主要為貨物則整體適用 UCC，若主要為服務則適用普通法。" }
    ],
    iracModel: [
      { k: "Issue", v: "A 與 B 何者對該地有優先權。" },
      { k: "Rule", v: "制定法以『善意有償且先登記』為要件，屬 Race-Notice 法：後手須為無通知之 BFP 且搶先登記方優先。" },
      { k: "Application", v: "B 受讓時不知 A 存在、且支付對價，為善意有償買受人；惟 A 在 B 之前已登記，B 受讓並登記時 A 之文件已在登記簿上，B 取得 constructive notice，亦未『先於 A 登記』，不符 Race-Notice 之搶先登記要件。" },
      { k: "Conclusion", v: "A 優先，B 不受保護。" }
    ]
  },

  /* ---------- Day 6 ｜ Corporations ---------- */
  {
    subject: "Corporations",
    ruleTitle: "Piercing the Corporate Veil（揭穿公司面紗）",
    priority: "HIGH",
    frequency: "tested 14 / 64",
    progress: { done: 6, total: 14, label: "高頻交錯課程 · 第 6 / 14 天" },
    ruleStatement: "股東原則上不為公司債務負責；但當股東濫用公司形式致生不公時，法院得揭穿公司面紗，令股東就公司債務負個人責任。",
    elements: [
      "Alter ego：股東與公司之財產／事務不分、未守公司形式（commingling、不開會、不留紀錄）。",
      "Undercapitalization：設立時資本明顯不足以支應可預見負債。",
      "Fraud / injustice：用公司形式行詐欺或規避義務，致須揭穿以達公平。"
    ],
    mnemonic: { tag: "助記", text: "Alter ego／資本不足／詐欺 ＋『不揭穿就不公平』。" },
    why: "MEE 愛考小型／單一股東公司：股東把公司帳當私帳用、資本極少、又對債權人造成損害。爭點是能否突破有限責任向股東個人求償；侵權之債權人較契約之債權人更易成功。",
    hypo: "S 為某單一股東公司唯一股東，公司僅有 $500 資本，S 經常以公司帳戶支付私人開銷、從不開董事會。公司一台堆高機撞傷路人 P，公司無力賠償，P 欲向 S 個人求償。",
    recall: [
      { when: "昨天", q: "Notice 法與 Race-Notice 法保護後手買受人的差別？", answer: "Notice 法：後手只要是無通知之善意有償買受人 (BFP) 即優先。Race-Notice 法：後手須為 BFP『且先完成登記』方優先。" },
      { when: "約 3 天前", q: "聯邦法院 standing 中，『將來可能受影響』通常卡在哪個要件？", answer: "Injury in fact — 損害須 actual or imminent，臆測性／將來或許發生之損害不夠具體特定。" }
    ],
    iracModel: [
      { k: "Issue", v: "P 能否揭穿公司面紗，向股東 S 個人求償。" },
      { k: "Rule", v: "股東濫用公司形式致不公時得揭穿面紗；常見理由為 alter ego、資本不足、詐欺，侵權債權人尤易成立。" },
      { k: "Application", v: "S 混用公司與私人資金、不守公司形式（不開會），屬 alter ego；$500 資本對可預見之營運風險明顯不足，為 undercapitalization；P 為非自願之侵權受害人，若不揭穿將承擔 S 濫用形式之不公。" },
      { k: "Conclusion", v: "法院很可能揭穿面紗，S 須就 P 之損害負個人責任。" }
    ]
  },

  /* ---------- Day 7 ｜ Torts ---------- */
  {
    subject: "Torts",
    ruleTitle: "Negligence — Duty 與 Standard of Care",
    priority: "HIGH",
    frequency: "tested 13 / 64",
    progress: { done: 7, total: 14, label: "高頻交錯課程 · 第 7 / 14 天" },
    ruleStatement: "過失責任需 duty、breach、causation（actual + proximate）、damages。被告對 foreseeable plaintiff 負以 reasonable person 為標準之注意義務。",
    elements: [
      "Duty：對可預見之原告負注意義務（Cardozo：限 foreseeable zone of danger；Andrews：對所有人）。",
      "Standard：客觀 reasonable person；專業人士依該領域合理執業者標準。",
      "Breach：未達該標準（可用 B < PL 或 res ipsa 推認）。",
      "Causation + Damages：實際與近因因果，並有實際損害。"
    ],
    mnemonic: { tag: "助記", text: "Duty-Breach-Causation-Damages；義務看『可預見原告』、標準看『合理之人』。" },
    why: "過失是侵權主幹，MEE 常聚焦『有無 duty』與『標準為何』：對非可預見原告（Palsgraf 型）、對救助者、對專業人士，標準各異。先界定 duty 與 standard，breach 才有比較基準。",
    hypo: "D 在月台粗心推擠乘客上車，撞落對方手中包裹，包裹內未標示之煙火爆炸，震波震倒遠處的 P 致傷。P 訴 D 過失。",
    recall: [
      { when: "昨天", q: "揭穿公司面紗最常見的三個理由是什麼？", answer: "Alter ego（公司與股東不分、未守形式）、Undercapitalization（資本明顯不足）、Fraud／injustice（以公司形式行詐欺或致不公）。" },
      { when: "約 3 天前", q: "Race-Notice 法域中，後手 BFP 還欠什麼就無法優先？", answer: "搶先登記 — 後手須在前手之前完成登記。若前手先登記，後手即取得 constructive notice 且未搶先，無法優先。" }
    ],
    iracModel: [
      { k: "Issue", v: "D 對遠處的 P 是否負過失責任（有無 duty）。" },
      { k: "Rule", v: "依 Cardozo 多數見解，被告僅對位於可預見危險範圍內之 foreseeable plaintiff 負注意義務。" },
      { k: "Application", v: "D 的粗心係針對近處乘客與包裹，遠處的 P 不在可預見的危險範圍內，包裹內藏煙火、爆炸震倒 P 之連鎖非可合理預見；依 Cardozo，D 對 P 不負 duty。（Andrews 少數見解則認對所有人負義務，再以 proximate cause 篩選。）" },
      { k: "Conclusion", v: "依多數見解 D 對 P 無 duty，過失不成立。" }
    ]
  },

  /* ---------- Day 8 ｜ Civil Procedure ---------- */
  {
    subject: "Civil Procedure",
    ruleTitle: "Diversity Subject-Matter Jurisdiction",
    priority: "HIGH",
    frequency: "tested 17 / 64",
    progress: { done: 8, total: 14, label: "高頻交錯課程 · 第 8 / 14 天" },
    ruleStatement: "聯邦法院之 diversity 管轄需 (1) complete diversity（每一原告與每一被告州籍互異）且 (2) amount in controversy 逾 $75,000（不含利息與費用）。",
    elements: [
      "Complete diversity：訴訟兩造無任一原被告同州籍（提訴時點認定）。",
      "Citizenship：自然人＝domicile（居所＋久住意思）；公司＝設立州 + 主營業地 (PPB, nerve center)。",
      "Amount in controversy：善意主張逾 $75,000；單一原告對單一被告之請求可 aggregate。"
    ],
    mnemonic: { tag: "助記", text: "完全分籍 ＋ 逾 $75,000；公司＝設立州＋總部。" },
    why: "聯邦管轄是 Civ Pro 高頻主幹。MEE 常給跨州當事人、公司雙重州籍、或多被告，要你判斷有無 complete diversity 及金額門檻，並區分與 federal question 之差異。",
    hypo: "P 設籍紐約，控告 D1（設籍紐澤西）與 D2 公司（於德拉瓦設立、總部在紐約）。P 請求賠償 $200,000。各方主張聯邦法院有無 diversity 管轄。",
    recall: [
      { when: "昨天", q: "過失中的 duty，依 Cardozo 多數見解對誰才存在？", answer: "僅對位於可預見危險範圍 (foreseeable zone of danger) 內之 foreseeable plaintiff 負注意義務；Andrews 少數見解則對所有人負義務，再以 proximate cause 篩選。" },
      { when: "約 7 天前", q: "外州被告之 personal jurisdiction，purposeful availment 的核心意涵？", answer: "被告刻意利用法院地州、享受其法律利益（如主動行銷、出貨、設點），以致可合理預見在該州被訴 — 而非偶然或單方接觸。" }
    ],
    iracModel: [
      { k: "Issue", v: "聯邦法院對本案有無 diversity subject-matter jurisdiction。" },
      { k: "Rule", v: "需 complete diversity 且 amount in controversy 逾 $75,000；公司州籍為設立州與主營業地。" },
      { k: "Application", v: "D2 公司之主營業地（總部）在紐約，故 D2 為紐約州籍，與設籍紐約之 P 同籍，破壞 complete diversity；金額雖逾 $75,000，仍因分籍不完全而不符。" },
      { k: "Conclusion", v: "欠缺 complete diversity，聯邦法院無 diversity 管轄。" }
    ]
  },

  /* ---------- Day 9 ｜ Evidence ---------- */
  {
    subject: "Evidence",
    ruleTitle: "Character Evidence 與 MIMIC（404(b)）",
    priority: "HIGH",
    frequency: "tested 11 / 64",
    progress: { done: 9, total: 14, label: "高頻交錯課程 · 第 9 / 14 天" },
    ruleStatement: "原則上不得以一個人的品格證明其『於此次依該品格行事』(propensity)。但他案行為 (other acts) 可為『非品格目的』而採：Motive、Intent、absence of Mistake、Identity、Common plan（MIMIC）。",
    elements: [
      "禁止 propensity：不得用前科／他行為證明『這次也這樣做』。",
      "MIMIC 例外：用於證明動機、意圖、無錯誤／意外、同一性、共同計畫等爭點。",
      "仍受 Rule 403 平衡（證明力 vs 不當偏見）與通知程序限制。"
    ],
    mnemonic: { tag: "助記", text: "MIMIC：不是證明『他是壞人』，而是動機／意圖／無誤／同一性／計畫。" },
    why: "刑案 MEE 常丟出被告的前科或先前類似行為，要你辨明那是被禁止的 propensity，還是可採的 MIMIC 目的。關鍵是『提出目的』而非行為本身。",
    hypo: "被告 D 被控以特殊的撬鎖手法入室竊盜。檢方欲提出 D 三個月前以『完全相同的少見手法』犯下另一竊案之證據，用以證明本案就是 D 所為。",
    recall: [
      { when: "昨天", q: "聯邦 diversity 管轄的兩個要件？公司的州籍如何認定？", answer: "Complete diversity（兩造州籍完全互異）＋ amount in controversy 逾 $75,000。公司州籍＝設立州 + 主營業地（總部 nerve center）。" },
      { when: "約 7 天前", q: "判斷一段庭外陳述是否為傳聞，先問什麼？", answer: "先問提出目的是否為證明所主張內容為真；若是則為傳聞，若為證明聽者反應、notice、verbal act 等則非傳聞。" }
    ],
    iracModel: [
      { k: "Issue", v: "D 前一竊案之證據可否採用。" },
      { k: "Rule", v: "不得以他行為證明 propensity，但可為 MIMIC 之非品格目的（此處為 identity）而採，仍受 403 平衡。" },
      { k: "Application", v: "檢方非欲證明『D 是慣竊故這次也偷』，而係以兩案『少見且相同之手法』作為 signature，證明本案行為人之 identity 即為 D，屬 MIMIC 之 identity 目的；手法獨特使證明力高，403 下不當偏見不致明顯逾越。" },
      { k: "Conclusion", v: "該證據可採，作為證明同一性 (identity) 之用，而非品格傾向。" }
    ]
  },

  /* ---------- Day 10 ｜ Contracts ---------- */
  {
    subject: "Contracts",
    ruleTitle: "Consideration 與 Promissory Estoppel",
    priority: "HIGH",
    frequency: "tested 19 / 64",
    progress: { done: 10, total: 14, label: "高頻交錯課程 · 第 10 / 14 天" },
    ruleStatement: "可執行之承諾原則上需 consideration — 即 bargained-for legal detriment（雙方互為交換）。欠缺對價時，promissory estoppel 可使承諾可執行：承諾人可合理預見受諾人之信賴、受諾人確有信賴並受損、不執行將生不公。",
    elements: [
      "Consideration：bargained-for exchange，且一方須有 legal detriment（過去之對價、道德義務不算）。",
      "無對價時轉 promissory estoppel：(1) 承諾、(2) 承諾人可合理預期引起信賴、(3) 受諾人實際且合理信賴、(4) 須執行始能避免不公。",
      "救濟可限於信賴利益 (reliance)。"
    ],
    mnemonic: { tag: "助記", text: "對價＝交換；沒對價→看信賴 (promissory estoppel)。" },
    why: "MEE 常見『沒有對價的承諾』：贈與承諾、慈善捐贈、僱主退休金口頭承諾。先確認有無 consideration，沒有就轉 promissory estoppel，並討論救濟可能限於信賴損害。",
    hypo: "僱主向即將退休的員工 P 口頭承諾『退休後每月給你 $2,000 終身』，未要求 P 任何回報。P 因此放棄另一份工作並退休。一年後僱主停付，P 起訴。",
    recall: [
      { when: "昨天", q: "刑案中前科／他行為何時可採？用什麼框架記？", answer: "不得用於 propensity，但可為非品格目的：MIMIC — Motive、Intent、absence of Mistake、Identity、Common plan，仍受 403 平衡。" },
      { when: "約 7 天前", q: "拿到契約題第一步要先確定什麼？", answer: "適用法 — 貨物 (goods) 適用 UCC Article 2，服務／土地適用普通法；混合契約看 predominant purpose。" }
    ],
    iracModel: [
      { k: "Issue", v: "僱主之退休金承諾在欠缺對價下是否可執行。" },
      { k: "Rule", v: "承諾原則需 consideration；無對價時得依 promissory estoppel，以合理且有損之信賴使承諾可執行。" },
      { k: "Application", v: "僱主未要求 P 任何回報，承諾屬無對價之贈與承諾；惟僱主可合理預見 P 會因此信賴，P 確實放棄他職並退休、屬實際且合理之信賴並受損，若不執行將生不公。" },
      { k: "Conclusion", v: "依 promissory estoppel，承諾可執行（救濟可能限於 P 之信賴損害）。" }
    ]
  },

  /* ---------- Day 11 ｜ Secured Transactions ---------- */
  {
    subject: "Secured Transactions",
    ruleTitle: "Attachment 與 Perfection",
    priority: "HIGH",
    frequency: "tested 10 / 64",
    progress: { done: 11, total: 14, label: "高頻交錯課程 · 第 11 / 14 天" },
    ruleStatement: "擔保權 attach（對債務人生效）需：(1) value given、(2) debtor 對 collateral 有 rights、(3) authenticated security agreement（或債權人占有／控制擔保品）。Perfection（取得對第三人之優先地位）通常以 filing financing statement 或占有／控制達成。",
    elements: [
      "Attachment 三要件：Value、Rights、Agreement（VRA）。",
      "Perfection：多以登記 financing statement；某些擔保品以 possession（如金錢）或 control（如存款帳戶）。",
      "PMSI 於存貨／消費品有特別優先與寬限規則。"
    ],
    mnemonic: { tag: "助記", text: "Attach＝V-R-A（Value-Rights-Agreement）；Perfect 多半靠 filing。" },
    why: "Article 9 題的骨架幾乎都是『先 attach、再 perfect、再排序 priority』。先把三要件鉤到事實確認擔保權成立，再談對其他債權人的優先順位。",
    hypo: "Bank 借款 $50,000 給 D 公司，D 簽署一份載明以其『現有及將來設備』為擔保的書面協議。Bank 撥款後隨即向州務卿登記 financing statement。其後另一債權人 C 對同一設備主張權利。",
    recall: [
      { when: "昨天", q: "沒有對價的承諾，靠什麼理論仍可能可執行？要件為何？", answer: "Promissory estoppel：承諾＋承諾人可合理預見信賴＋受諾人實際且合理信賴並受損＋須執行始能避免不公；救濟可限於信賴利益。" },
      { when: "約 7 天前", q: "揭穿公司面紗時，為何侵權債權人比契約債權人更易成功？", answer: "契約債權人通常可事先自願評估並要求擔保／個人保證，侵權受害人則是非自願承受風險，法院較願為其揭穿以達公平。" }
    ],
    iracModel: [
      { k: "Issue", v: "Bank 對 D 設備之擔保權是否已 attach 並 perfect。" },
      { k: "Rule", v: "Attachment 需 value、debtor rights、authenticated security agreement；perfection 通常以 filing 達成，決定對其他債權人之優先。" },
      { k: "Application", v: "Bank 撥款（value）、D 對其設備有 rights、且有載明擔保品之簽署協議（agreement），三要件齊備、擔保權已 attach；Bank 復已登記 financing statement，已 perfect，對嗣後之 C 取得優先地位。" },
      { k: "Conclusion", v: "Bank 之擔保權已 attach 並 perfect，優先於 C。" }
    ]
  },

  /* ---------- Day 12 ｜ Trusts ---------- */
  {
    subject: "Trusts",
    ruleTitle: "Creation of a Valid Express Trust",
    priority: "HIGH",
    frequency: "tested 12 / 64",
    progress: { done: 12, total: 14, label: "高頻交錯課程 · 第 12 / 14 天" },
    ruleStatement: "有效之明示信託需：(1) settlor 有設立信託之意思、(2) 確定之信託財產 (res)、(3) 確定之 beneficiary、(4) trustee、(5) 合法目的；且 settlor 須有處分能力。",
    elements: [
      "Intent：明確的現時設立信託意思（非單純希望／道德勸諭）。",
      "Trust res：確定且可辨識之財產。",
      "Ascertainable beneficiary：可確定之受益人（慈善信託除外）。",
      "Trustee：須有受託人，惟法院不致因缺受託人而使信託失效（可指派）。",
      "Lawful purpose。"
    ],
    mnemonic: { tag: "助記", text: "Intent-Res-Beneficiary-Trustee-Purpose。" },
    why: "Trusts 題常先問『信託有無有效成立』。常見爭點是 precatory language（僅期望）是否構成 intent、有無確定 res 與可確定受益人。先過成立要件再談受託人義務或撤銷。",
    hypo: "T 在文件中寫道：『我將這 $100,000 交給我的兄弟 B，希望他能照顧好我女兒 D。』B 收下款項。其後就此款是 B 個人所有還是為 D 設立之信託發生爭執。",
    recall: [
      { when: "昨天", q: "Article 9 擔保權 attachment 的三要件？", answer: "Value given、Debtor 對 collateral 有 rights、Authenticated security agreement（或債權人占有／控制）。即 V-R-A。" },
      { when: "約 7 天前", q: "過失中，breach 可用哪些方式推認？", answer: "可用成本效益分析 B < PL（負擔小於損害機率乘損害額），或在事故通常不會無過失即發生、工具受被告控制時以 res ipsa loquitur 推認。" }
    ],
    iracModel: [
      { k: "Issue", v: "T 之文字是否成立以 D 為受益人之有效信託。" },
      { k: "Rule", v: "明示信託需 intent、確定 res、可確定 beneficiary、trustee 與合法目的；precatory language（僅表期望）通常不足以構成設立意思。" },
      { k: "Application", v: "$100,000 為確定之 res，D 為可確定受益人，B 可為受託人；惟『希望他照顧好女兒』屬 precatory 之期望語句，未必表現現時設立信託、課 B 受託義務之明確 intent，須綜合其他事證判斷。" },
      { k: "Conclusion", v: "若僅有此期望語句而無其他設立意思之事證，信託恐不成立，款項歸 B；intent 為本題關鍵。" }
    ]
  },

  /* ---------- Day 13 ｜ Family Law ---------- */
  {
    subject: "Family Law",
    ruleTitle: "Equitable Distribution of Marital Property",
    priority: "HIGH",
    frequency: "tested 11 / 64",
    progress: { done: 13, total: 14, label: "高頻交錯課程 · 第 13 / 14 天" },
    ruleStatement: "離婚時，marital property（婚姻存續期間取得之財產）依 equitable（公平、未必均等）原則分配；separate property（婚前取得、或婚後以繼承／贈與取得者）原則上歸各自所有、不予分配。",
    elements: [
      "先分類：marital vs separate property。",
      "Separate：婚前財產、婚後之繼承或第三人贈與；但增值若因配偶努力可能轉為部分 marital。",
      "Equitable factors：婚姻長短、各自經濟貢獻（含家務）、未來需求、健康年齡等 — equitable 不等於均分。"
    ],
    mnemonic: { tag: "助記", text: "婚內取得＝可分；婚前／繼承／贈與＝各自。公平≠均分。" },
    why: "離婚財產題的標準流程：先就每項資產分類 marital 或 separate，再以 equitable factors 分配 marital 部分。常見陷阱是『婚後以繼承取得』之財產、或 separate 財產因婚內努力而增值。",
    hypo: "夫妻離婚。爭點資產包括：妻婚前已持有之房屋、夫於婚姻中受領之父親遺產，以及兩人婚後共同存下的退休帳戶。各方主張如何分配。",
    recall: [
      { when: "昨天", q: "有效明示信託的五項要件？", answer: "設立意思 (intent)、確定信託財產 (res)、可確定受益人 (ascertainable beneficiary)、受託人 (trustee)、合法目的 (lawful purpose)。" },
      { when: "約 7 天前", q: "聯邦 diversity 管轄為何要求『complete』diversity？同州籍會怎樣？", answer: "需每一原告與每一被告州籍互異；只要有任一原被告同州籍即破壞 complete diversity，聯邦法院無 diversity 管轄。" }
    ],
    iracModel: [
      { k: "Issue", v: "三項資產各應如何分類與分配。" },
      { k: "Rule", v: "Marital property（婚內取得）依 equitable 原則分配；婚前財產與婚後繼承／贈與屬 separate，原則各自保有。" },
      { k: "Application", v: "妻婚前之房屋為 separate property、原則歸妻（婚內若有共同還貸或增值或生部分 marital 權益）；夫之遺產為婚後『繼承』取得，屬 separate、歸夫；婚後共同存下之退休帳戶為 marital property，依婚姻長短與雙方貢獻等 equitable factors 公平分配。" },
      { k: "Conclusion", v: "房屋歸妻、遺產歸夫，退休帳戶作為 marital property 由法院依公平因素分配。" }
    ]
  },

  /* ---------- Day 14 ｜ Agency ---------- */
  {
    subject: "Agency",
    ruleTitle: "Apparent Authority",
    priority: "HIGH",
    frequency: "tested 9 / 64",
    progress: { done: 14, total: 14, label: "高頻交錯課程 · 第 14 / 14 天（完成一輪）" },
    ruleStatement: "Apparent authority 於第三人基於本人 (principal) 的言行、合理相信代理人 (agent) 有權限代理時成立，即使代理人實際上並無 actual authority。",
    elements: [
      "本人有可歸責、指向第三人的 manifestation（言行）。",
      "第三人因此產生 reliance（信賴）。",
      "第三人之信賴須 reasonable（合理）。"
    ],
    mnemonic: { tag: "助記", text: "Manifestation → Reliance → Reasonable（本人放話、第三人信、信得合理）。" },
    why: "MEE 觸發型態：本人曾把某人介紹為『我的採購經理』、或讓他長期使用公司頭銜／名片／辦公室，事後該人簽下超出實際授權的合約。爭點幾乎都在『第三人的信賴是否合理』。",
    hypo: "P 公司在多份新聞稿中稱 A 為『採購總監』，A 也長期以此頭銜對外議約。某日 A 未經 P 內部核准，與供應商 T 簽下一紙大額採購單。P 主張 A 無權、拒絕付款。",
    recall: [
      { when: "昨天", q: "離婚財產分配，第一步要先做什麼？", answer: "先把每項資產分類為 marital（婚內取得）或 separate（婚前、婚後繼承／贈與）；marital 才依 equitable 原則分配。" },
      { when: "約 7 天前", q: "Article 9 中 perfection 的主要方式有哪些？", answer: "最常見為登記 financing statement；某些擔保品以 possession（如金錢）或 control（如存款帳戶、投資財產）達成。" }
    ],
    iracModel: [
      { k: "Issue", v: "P 是否因 apparent authority 而受 A 與 T 所簽採購單之拘束。" },
      { k: "Rule", v: "Apparent authority 於第三人基於本人之言行、合理相信代理人有權限時成立，縱欠缺 actual authority。" },
      { k: "Application", v: "P 在多份新聞稿中對外稱 A 為『採購總監』，為可歸責於本人、指向第三人之 manifestation；T 因該頭銜及 A 長期議約之事實而信賴 A 有締約權，且就採購總監而言簽採購單屬職務常態，T 之信賴屬合理；P 內部未核准僅屬 actual authority 之欠缺，不影響 apparent authority。" },
      { k: "Conclusion", v: "Apparent authority 成立，P 受該採購單拘束。" }
    ]
  }
];

/* ============================================================
   頁面模板（沿用 index.html 版型；render 改用字串串接以避免反引號衝突）。
   只有 const DATA = __DATA__; 一處為動態注入。
   ============================================================ */
const PAGE_TEMPLATE = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Daily Bar Review</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --paper:#F6F2E9;--paper-2:#EFE9DA;--ink:#23201C;--ink-soft:#5A5345;
    --oxblood:#7A2222;--oxblood-soft:#9E3B3B;--brass:#B08A4A;--line:#D8CFBC;
    --high:#7A2222;--med:#B08A4A;--low:#6E7B6A;
    --shadow:0 1px 0 rgba(35,32,28,.04),0 12px 32px -18px rgba(35,32,28,.45);--r:14px;
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  @media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{animation:none!important;transition:none!important}}
  body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased;background-image:radial-gradient(circle at 1px 1px,rgba(35,32,28,.035) 1px,transparent 0);background-size:22px 22px;}
  .wrap{max-width:720px;margin:0 auto;padding:0 22px 96px}
  header.mast{padding:44px 0 22px;border-bottom:1.5px solid var(--ink)}
  .eyebrow{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--oxblood);font-weight:600;display:flex;justify-content:space-between;align-items:baseline}
  .eyebrow .day{color:var(--ink-soft)}
  .mast h1{font-family:Fraunces,serif;font-weight:600;font-size:clamp(30px,6vw,46px);line-height:1.04;margin:14px 0 6px;letter-spacing:-.01em}
  .mast .sub{font-size:14px;color:var(--ink-soft)}
  .meta-row{display:flex;gap:8px;align-items:center;margin-top:16px;flex-wrap:wrap}
  .tag{font-size:11px;font-weight:600;letter-spacing:.04em;padding:4px 10px;border-radius:999px;text-transform:uppercase}
  .tag.high{background:rgba(122,34,34,.1);color:var(--high)}
  .tag.med{background:rgba(176,138,74,.16);color:#7d5e22}
  .tag.low{background:rgba(110,123,106,.16);color:#3f4a3c}
  .tag.freq{background:var(--paper-2);color:var(--ink-soft);border:1px solid var(--line)}
  .rail{display:flex;gap:6px;margin-top:22px}
  .rail .seg{flex:1;height:4px;border-radius:2px;background:var(--line)}
  .rail .seg.done{background:var(--oxblood)}
  .rail-label{font-size:11px;color:var(--ink-soft);margin-top:8px;letter-spacing:.04em}
  section{margin-top:40px;scroll-margin-top:20px}
  .sec-head{display:flex;align-items:baseline;gap:12px;margin-bottom:14px}
  .sec-num{font-family:Fraunces,serif;font-style:italic;font-size:22px;color:var(--brass)}
  .sec-title{font-family:Fraunces,serif;font-weight:600;font-size:21px;letter-spacing:-.01em}
  .sec-note{font-size:13px;color:var(--ink-soft);margin:-6px 0 14px}
  .card{background:#FCFAF4;border:1px solid var(--line);border-radius:var(--r);padding:22px 22px;box-shadow:var(--shadow)}
  .rule-statement{font-family:Fraunces,serif;font-size:18px;line-height:1.5}
  .elements{margin:16px 0 0;padding:0;counter-reset:el;list-style:none}
  .elements li{position:relative;padding:8px 0 8px 38px;border-top:1px solid var(--line)}
  .elements li:first-child{border-top:none}
  .elements li::before{counter-increment:el;content:counter(el);position:absolute;left:0;top:8px;width:24px;height:24px;border-radius:50%;background:var(--oxblood);color:#fff;font-size:12px;font-weight:600;display:flex;align-items:center;justify-content:center}
  .mnemonic{margin-top:16px;padding:12px 14px;background:var(--paper-2);border-left:3px solid var(--brass);border-radius:0 8px 8px 0;font-size:14px}
  .mnemonic b{font-weight:600;color:var(--oxblood)}
  .recall-item{padding:14px 0;border-top:1px solid var(--line)}
  .recall-item:first-child{border-top:none;padding-top:2px}
  .recall-q{font-size:15px;font-weight:500}
  .recall-when{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--brass);font-weight:600;margin-bottom:4px}
  .gate{margin-top:18px;border:1.5px dashed var(--brass);border-radius:var(--r);overflow:hidden;background:repeating-linear-gradient(135deg,var(--paper-2),var(--paper-2) 10px,#EAE2D0 10px,#EAE2D0 20px)}
  .gate-btn{width:100%;border:none;background:transparent;cursor:pointer;padding:18px;font-family:Inter;font-size:14px;font-weight:600;letter-spacing:.04em;color:var(--oxblood);display:flex;align-items:center;justify-content:center;gap:10px;transition:background .2s}
  .gate-btn:hover{background:rgba(122,34,34,.05)}
  .gate-btn:focus-visible{outline:2px solid var(--oxblood);outline-offset:-4px}
  .seal{width:26px;height:26px;border-radius:50%;background:var(--oxblood);color:#fff;display:flex;align-items:center;justify-content:center;font-family:Fraunces,serif;font-size:13px;font-weight:600}
  .gate-body{display:none;padding:0 20px 20px;background:#FCFAF4;animation:unseal .4s ease}
  .gate.open .gate-body{display:block}
  .gate.open{border-style:solid;border-color:var(--line);background:#FCFAF4}
  .gate.open .gate-btn{border-bottom:1px solid var(--line);color:var(--ink-soft)}
  @keyframes unseal{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
  .answer-block{padding-top:16px}
  .answer-block + .answer-block{border-top:1px solid var(--line);margin-top:16px}
  .answer-label{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--brass);font-weight:600;margin-bottom:6px}
  .answer-text{font-size:14px}
  .irac{margin-top:10px}
  .irac .leg{display:flex;gap:12px;padding:10px 0;border-top:1px solid var(--line)}
  .irac .leg:first-child{border-top:none}
  .irac .leg .k{font-family:Fraunces,serif;font-weight:600;color:var(--oxblood);min-width:88px;font-size:14px}
  .irac .leg .v{font-size:14px}
  .hypo{font-size:15px;line-height:1.65}
  .write-prompt{margin-top:14px;font-size:13px;color:var(--ink-soft);display:flex;gap:8px;align-items:center}
  .write-prompt::before{content:"✎";color:var(--brass);font-size:16px}
  footer{margin-top:56px;padding-top:22px;border-top:1.5px solid var(--ink);font-size:12px;color:var(--ink-soft);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px}
  footer a{color:var(--oxblood);text-decoration:none}
  footer a:hover{text-decoration:underline}
  @media(max-width:520px){.irac .leg{flex-direction:column;gap:2px}.irac .leg .k{min-width:auto}}
</style>
</head>
<body>
<div class="wrap">
  <header class="mast">
    <div class="eyebrow"><span>Daily Bar Review</span><span class="day" id="dayLabel"></span></div>
    <h1 id="ruleTitle"></h1>
    <div class="sub" id="subjectLine"></div>
    <div class="meta-row" id="metaRow"></div>
    <div class="rail" id="rail"></div>
    <div class="rail-label" id="railLabel"></div>
  </header>
  <section id="recall">
    <div class="sec-head"><span class="sec-num">i</span><span class="sec-title">Warm-up 回想</span></div>
    <p class="sec-note">先別往下看 — 把答案寫出來，再揭曉。</p>
    <div class="card" id="recallCard"></div>
    <div class="gate" id="recallGate">
      <button class="gate-btn" aria-expanded="false" aria-controls="recallAns"><span class="seal">&sect;</span> 揭曉回想題解答</button>
      <div class="gate-body" id="recallAns"></div>
    </div>
  </section>
  <section id="rule">
    <div class="sec-head"><span class="sec-num">ii</span><span class="sec-title">今日規則</span></div>
    <div class="card">
      <div class="rule-statement" id="ruleStatement"></div>
      <ol class="elements" id="elements"></ol>
      <div class="mnemonic" id="mnemonic"></div>
    </div>
  </section>
  <section id="why">
    <div class="sec-head"><span class="sec-num">iii</span><span class="sec-title">為何會考</span></div>
    <div class="card"><div class="answer-text" id="whyText"></div></div>
  </section>
  <section id="hypo">
    <div class="sec-head"><span class="sec-num">iv</span><span class="sec-title">Mini-hypo</span></div>
    <div class="card">
      <div class="hypo" id="hypoText"></div>
      <div class="write-prompt">用 3–4 句寫出你的 IRAC 套用，再揭曉示範寫法。</div>
    </div>
    <div class="gate" id="hypoGate">
      <button class="gate-btn" aria-expanded="false" aria-controls="hypoAns"><span class="seal">&sect;</span> 揭曉示範 IRAC 解答</button>
      <div class="gate-body" id="hypoAns"></div>
    </div>
  </section>
  <footer>
    <span id="footMeta"></span>
    <span>非法律意見 · 僅供 UBE/MEE 自學</span>
  </footer>
</div>
<script>
const DATA = __DATA__;
var $ = function(id){ return document.getElementById(id); };
var esc = function(s){ return String(s).replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}); };

$("dayLabel").textContent = "Day " + DATA.day + " · " + DATA.date;
$("ruleTitle").textContent = DATA.ruleTitle;
$("subjectLine").textContent = DATA.subject + " — 主動回想 · 間隔重複 · 即學即寫";

var pr = DATA.priority.toLowerCase();
$("metaRow").innerHTML =
  '<span class="tag ' + pr + '">' + esc(DATA.priority) + ' priority</span>' +
  '<span class="tag freq">' + esc(DATA.frequency) + '</span>' +
  '<span class="tag freq">' + esc(DATA.subject) + '</span>';

var railHTML = "";
for (var i = 0; i < DATA.progress.total; i++) {
  railHTML += '<span class="seg ' + (i < DATA.progress.done ? 'done' : '') + '"></span>';
}
$("rail").innerHTML = railHTML;
$("railLabel").textContent = DATA.progress.label;

$("recallCard").innerHTML = DATA.recall.map(function(r){
  return '<div class="recall-item"><div class="recall-when">' + esc(r.when) + '</div><div class="recall-q">' + esc(r.q) + '</div></div>';
}).join("");

$("recallAns").innerHTML = DATA.recall.map(function(r){
  return '<div class="answer-block"><div class="answer-label">' + esc(r.when) + '</div><div class="answer-text">' + esc(r.answer) + '</div></div>';
}).join("");

$("ruleStatement").textContent = DATA.ruleStatement;
$("elements").innerHTML = DATA.elements.map(function(e){ return '<li>' + esc(e) + '</li>'; }).join("");
$("mnemonic").innerHTML = '<b>' + esc(DATA.mnemonic.tag) + '：</b>' + esc(DATA.mnemonic.text);

$("whyText").textContent = DATA.why;

$("hypoText").textContent = DATA.hypo;
$("hypoAns").innerHTML = '<div class="irac">' + DATA.iracModel.map(function(l){
  return '<div class="leg"><span class="k">' + esc(l.k) + '</span><span class="v">' + esc(l.v) + '</span></div>';
}).join("") + '</div>';

$("footMeta").textContent = "Day " + DATA.day + " · " + DATA.subject + " · " + DATA.ruleTitle;

function wireGate(gateId){
  var gate = $(gateId);
  var btn = gate.querySelector(".gate-btn");
  btn.addEventListener("click", function(){
    var open = gate.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.querySelector(".seal").nextSibling.textContent = open ? " 隱藏解答" : " 揭曉解答";
  });
}
wireGate("recallGate");
wireGate("hypoGate");
</script>
</body>
</html>`;

/* ============================================================
   generateLesson(dayIndex)：回傳當天完整 HTML 字串。
   dayIndex 從 0 起算、逐日遞進；超過課程長度則回頭循環複習。
   ============================================================ */
function generateLesson(dayIndex) {
  var total = DAYS.length;
  var i = ((dayIndex % total) + total) % total;
  var d = DAYS[i];
  var dayNumber = dayIndex + 1;
  var date = new Date().toISOString().slice(0, 10);
  var DATA = Object.assign({ day: dayNumber, date: date }, d);
  return PAGE_TEMPLATE.replace("__DATA__", function () { return JSON.stringify(DATA); });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { DAYS: DAYS, generateLesson: generateLesson };
}
