/* ============================================================
   Daily NY Bar (UBE/MEE) — 引擎 v3（engine only）
   課程資料放在另一檔 bar/lessons.js（可再切成 lessons-2.js... 擴充到 100+）。
   排程流程：抓 generator.js + lessons.js，合併 eval 後呼叫 generateLesson(dayIndex)。
   間隔重複自動化：warm-up 由 1/3/7/16/35 序號前的課程自動產生。
   ============================================================ */

var DAYS = (typeof DAYS !== "undefined" && DAYS) ? DAYS : [];

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
  .meta-row{display:flex;gap:8px;align-items:center;margin-top:16px;flex-wrap:wrap}
  .tag{font-size:11px;font-weight:600;letter-spacing:.04em;padding:4px 10px;border-radius:999px;text-transform:uppercase}
  .tag.high{background:rgba(122,34,34,.1);color:var(--high)}
  .tag.med{background:rgba(176,138,74,.16);color:#7d5e22}
  .tag.low{background:rgba(110,123,106,.16);color:#3f4a3c}
  .tag.freq{background:var(--paper-2);color:var(--ink-soft);border:1px solid var(--line)}
  .rail{display:flex;gap:4px;margin-top:22px;flex-wrap:wrap}
  .rail .seg{flex:1 1 8px;min-width:5px;height:4px;border-radius:2px;background:var(--line)}
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
  @media(max-width:520px){.irac .leg{flex-direction:column;gap:2px}.irac .leg .k{min-width:auto}}
</style>
</head>
<body>
<div class="wrap">
  <header class="mast">
    <div class="eyebrow"><span>Daily Bar Review</span><span class="day" id="dayLabel"></span></div>
    <h1 id="ruleTitle"></h1>
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
var pr = DATA.priority.toLowerCase();
$("metaRow").innerHTML =
  '<span class="tag ' + pr + '">' + esc(DATA.priority) + ' priority</span>' +
  '<span class="tag freq">' + esc(DATA.frequency) + '</span>' +
  '<span class="tag freq">' + esc(DATA.subject) + '</span>';
var railHTML = "";
for (var i = 0; i < DATA.progress.total; i++) { railHTML += '<span class="seg ' + (i < DATA.progress.done ? 'done' : '') + '"></span>'; }
$("rail").innerHTML = railHTML;
$("railLabel").textContent = DATA.progress.label;
$("recallCard").innerHTML = DATA.recall.map(function(r){ return '<div class="recall-item"><div class="recall-when">' + esc(r.when) + '</div><div class="recall-q">' + esc(r.q) + '</div></div>'; }).join("");
$("recallAns").innerHTML = DATA.recall.map(function(r){ return '<div class="answer-block"><div class="answer-label">' + esc(r.when) + '</div><div class="answer-text">' + esc(r.answer) + '</div></div>'; }).join("");
$("ruleStatement").textContent = DATA.ruleStatement;
$("elements").innerHTML = DATA.elements.map(function(e){ return '<li>' + esc(e) + '</li>'; }).join("");
$("mnemonic").innerHTML = '<b>' + esc(DATA.mnemonic.tag) + '：</b>' + esc(DATA.mnemonic.text);
$("whyText").textContent = DATA.why;
$("hypoText").textContent = DATA.hypo;
$("hypoAns").innerHTML = '<div class="irac">' + DATA.iracModel.map(function(l){ return '<div class="leg"><span class="k">' + esc(l.k) + '</span><span class="v">' + esc(l.v) + '</span></div>'; }).join("") + '</div>';
$("footMeta").textContent = "Day " + DATA.day + " · " + DATA.subject + " · " + DATA.ruleTitle;
function wireGate(gateId){ var gate = $(gateId); var btn = gate.querySelector(".gate-btn"); btn.addEventListener("click", function(){ var open = gate.classList.toggle("open"); btn.setAttribute("aria-expanded", open ? "true" : "false"); btn.querySelector(".seal").nextSibling.textContent = open ? " 隱藏解答" : " 揭曉解答"; }); }
wireGate("recallGate");
wireGate("hypoGate");
</script>
</body>
</html>`;

const SPACED_OFFSETS = [
  { off: 1,  when: "昨天" },
  { off: 3,  when: "約 3 天前" },
  { off: 7,  when: "約 7 天前" },
  { off: 16, when: "約 16 天前" },
  { off: 35, when: "約 35 天前" }
];

function generateLesson(dayIndex) {
  var N = DAYS.length;
  if (N === 0) { throw new Error("DAYS 未載入：請先載入 lessons.js"); }
  var i = ((dayIndex % N) + N) % N;
  var d = DAYS[i];
  var dayNumber = dayIndex + 1;
  var date = new Date().toISOString().slice(0, 10);
  var recall = [];
  for (var k = 0; k < SPACED_OFFSETS.length; k++) {
    var so = SPACED_OFFSETS[k];
    var prevIndex = dayIndex - so.off;
    if (prevIndex < 0) continue;
    var pd = DAYS[((prevIndex % N) + N) % N];
    recall.push({ when: so.when, q: pd.recallQ, answer: pd.recallA });
  }
  if (recall.length === 0) {
    recall.push({ when: "暖身", q: "MEE 申論的標準寫作骨架 IRAC 四個字母各代表什麼？",
      answer: "Issue（爭點）、Rule（規則陳述）、Application（把事實套進規則）、Conclusion（結論）。給分重點在 Application。" });
  }
  var DATA = {
    day: dayNumber, date: date,
    subject: d.subject, ruleTitle: d.ruleTitle, priority: d.priority, frequency: d.frequency,
    ruleStatement: d.ruleStatement, elements: d.elements, mnemonic: d.mnemonic,
    why: d.why, hypo: d.hypo, iracModel: d.iracModel,
    recall: recall,
    progress: { done: i + 1, total: N, label: "課程進度 · 第 " + (i + 1) + " / " + N + " 條（" + d.subject + "）" }
  };
  return PAGE_TEMPLATE.replace("__DATA__", function () { return JSON.stringify(DATA); });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { get DAYS(){ return DAYS; }, generateLesson: generateLesson };
}
