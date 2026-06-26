import sys, base64, json
from datetime import date

START = date(2026, 6, 26)
day_index = (date.today() - START).days % 7

DAYS = [
  {"day":1,"emoji":"🛫","topic":"在機場","topic_en":"At the Airport","encourage":"妳今天學了5個機場必備單字！下次出發前，大聲念出來練習看看喔！",
   "words":[
     {"en":"passport","ph":"/ˈpæspɔːrt/","zh":"護照","ex":"May I see your passport?"},
     {"en":"boarding pass","ph":"/ˈbɔːrdɪŋ pæs/","zh":"登機證","ex":"Here is your boarding pass."},
     {"en":"luggage","ph":"/ˈlʌɡɪdʒ/","zh":"行李","ex":"I only have one piece of luggage."},
     {"en":"customs","ph":"/ˈkʌstəmz/","zh":"海關","ex":"Please go through customs."},
     {"en":"terminal","ph":"/ˈtɜːrmɪnəl/","zh":"航廈","ex":"Which terminal is my gate in?"},
   ],
   "dialogue":[
     {"role":"staff","en":"Good morning! May I see your passport?","zh":"早安！請問可以看您的護照嗎？"},
     {"role":"mom","en":"Of course! Here you go.","zh":"當然！給您。"},
     {"role":"staff","en":"How many pieces of luggage do you have?","zh":"您有幾件行李？"},
     {"role":"mom","en":"Just one piece, please.","zh":"只有一件，謝謝。"},
     {"role":"staff","en":"Here is your boarding pass. Your gate is Gate 12.","zh":"這是您的登機證，您的登機門是12號。"},
     {"role":"mom","en":"Which terminal is Gate 12 in?","zh":"12號登機門在哪個航廈？"},
     {"role":"staff","en":"It is in Terminal A. Turn left and follow the signs!","zh":"在A航廈，左轉跟著指標走就到了！"},
     {"role":"mom","en":"Thank you so much!","zh":"非常感謝您！"},
   ],
   "quiz":[
     {"type":"mc","q":"1. 「護照」的英文是？","opts":["boarding pass","passport","luggage","customs"],"ans":"passport"},
     {"type":"mc","q":"2. May I see your passport? 是什麼意思？","opts":["請問您有幾件行李？","請問可以看您的護照嗎？","您的登機門在哪裡？","您需要通關嗎？"],"ans":"請問可以看您的護照嗎？"},
     {"type":"mc","q":"3. 「登機證」的英文是？","opts":["ticket","receipt","boarding pass","terminal"],"ans":"boarding pass"},
     {"type":"fill","q":"4. 填空：I only have one piece of ______.（一件行李）","ans":"luggage"},
     {"type":"fill","q":"5. 填空：Please go through ______.（請通過海關）","ans":"customs"},
   ]
  },
  {"day":2,"emoji":"🏨","topic":"在飯店","topic_en":"At the Hotel","encourage":"妳今天學了5個飯店必備單字！下次 check in 超有自信！",
   "words":[
     {"en":"reservation","ph":"/ˌrezərˈveɪʃən/","zh":"預約","ex":"I have a reservation."},
     {"en":"check in","ph":"/tʃek ɪn/","zh":"入住","ex":"I would like to check in, please."},
     {"en":"room","ph":"/ruːm/","zh":"房間","ex":"My room is on the third floor."},
     {"en":"key card","ph":"/kiː kɑːrd/","zh":"房卡","ex":"Here is your key card."},
     {"en":"breakfast","ph":"/ˈbrekfəst/","zh":"早餐","ex":"Is breakfast included?"},
   ],
   "dialogue":[
     {"role":"mom","en":"Hello, I have a reservation.","zh":"您好，我有預訂房間。"},
     {"role":"staff","en":"May I have your name, please?","zh":"請問您的姓名？"},
     {"role":"mom","en":"My name is Chen.","zh":"我叫陳。"},
     {"role":"staff","en":"Yes, room 305. Here is your key card.","zh":"是的，305號房，這是您的房卡。"},
     {"role":"mom","en":"Is breakfast included?","zh":"有包含早餐嗎？"},
     {"role":"staff","en":"Yes, breakfast is served from 7 to 10 AM.","zh":"有的，早餐時間是早上7點到10點。"},
   ],
   "quiz":[
     {"type":"mc","q":"1. 「預約」的英文是？","opts":["check in","reservation","key card","breakfast"],"ans":"reservation"},
     {"type":"mc","q":"2. Is breakfast included? 是什麼意思？","opts":["早餐在哪裡？","早餐幾點？","有包含早餐嗎？","早餐要多少錢？"],"ans":"有包含早餐嗎？"},
     {"type":"mc","q":"3. 「房卡」的英文是？","opts":["room key","door card","key card","card room"],"ans":"key card"},
     {"type":"fill","q":"4. 填空：I have a ______.（我有預訂）","ans":"reservation"},
     {"type":"fill","q":"5. 填空：I would like to check ______, please.（我要入住）","ans":"in"},
   ]
  },
  {"day":3,"emoji":"🍣","topic":"在餐廳","topic_en":"At the Restaurant","encourage":"妳今天學了5個餐廳必備單字！點餐不再緊張了！",
   "words":[
     {"en":"menu","ph":"/ˈmenjuː/","zh":"菜單","ex":"Could I see the menu, please?"},
     {"en":"order","ph":"/ˈɔːrdər/","zh":"點餐","ex":"Are you ready to order?"},
     {"en":"recommend","ph":"/ˌrekəˈmend/","zh":"推薦","ex":"What do you recommend?"},
     {"en":"bill","ph":"/bɪl/","zh":"帳單","ex":"Could I have the bill, please?"},
     {"en":"vegetarian","ph":"/ˌvedʒɪˈteriən/","zh":"素食","ex":"Do you have vegetarian options?"},
   ],
   "dialogue":[
     {"role":"staff","en":"Good evening! What can I get you?","zh":"晚安！請問您需要什麼？"},
     {"role":"mom","en":"Could I see the menu, please?","zh":"可以給我菜單嗎？"},
     {"role":"staff","en":"Of course, here you go.","zh":"當然，給您。"},
     {"role":"mom","en":"What do you recommend?","zh":"您有什麼推薦嗎？"},
     {"role":"staff","en":"The sushi set is very popular!","zh":"壽司套餐非常受歡迎！"},
     {"role":"mom","en":"I will have that. And could I have the bill, please?","zh":"我要那個。可以給我帳單嗎？"},
   ],
   "quiz":[
     {"type":"mc","q":"1. 「帳單」的英文是？","opts":["menu","order","bill","receipt"],"ans":"bill"},
     {"type":"mc","q":"2. What do you recommend? 是什麼意思？","opts":["你推薦什麼？","你要點什麼？","菜單在哪裡？","有素食嗎？"],"ans":"你推薦什麼？"},
     {"type":"mc","q":"3. 「菜單」的英文是？","opts":["menu","bill","order","recommend"],"ans":"menu"},
     {"type":"fill","q":"4. 填空：Could I have the ______?（帳單）","ans":"bill"},
     {"type":"fill","q":"5. 填空：Are you ready to ______?（點餐）","ans":"order"},
   ]
  },
  {"day":4,"emoji":"🗺️","topic":"問路","topic_en":"Asking for Directions","encourage":"妳今天學了5個問路必備詞！走到哪都不迷路！",
   "words":[
     {"en":"turn left","ph":"/tɜːrn left/","zh":"左轉","ex":"Turn left at the corner."},
     {"en":"turn right","ph":"/tɜːrn raɪt/","zh":"右轉","ex":"Turn right at the traffic light."},
     {"en":"straight ahead","ph":"/streɪt əˈhed/","zh":"直走","ex":"Go straight ahead for 5 minutes."},
     {"en":"station","ph":"/ˈsteɪʃən/","zh":"車站","ex":"The train station is nearby."},
     {"en":"nearby","ph":"/ˈnɪrbaɪ/","zh":"附近","ex":"Is there a convenience store nearby?"},
   ],
   "dialogue":[
     {"role":"mom","en":"Excuse me, where is the train station?","zh":"不好意思，請問火車站在哪裡？"},
     {"role":"staff","en":"It is nearby. Go straight ahead, then turn left.","zh":"就在附近，直走然後左轉。"},
     {"role":"mom","en":"How far is it?","zh":"有多遠？"},
     {"role":"staff","en":"About 5 minutes on foot.","zh":"走路大約5分鐘。"},
     {"role":"mom","en":"Thank you so much!","zh":"非常感謝！"},
     {"role":"staff","en":"You are welcome! Have a nice trip!","zh":"不客氣！旅途愉快！"},
   ],
   "quiz":[
     {"type":"mc","q":"1. 「左轉」的英文是？","opts":["turn right","straight ahead","turn left","nearby"],"ans":"turn left"},
     {"type":"mc","q":"2. Go straight ahead 是什麼意思？","opts":["右轉","左轉","直走","往回走"],"ans":"直走"},
     {"type":"mc","q":"3. 「車站」的英文是？","opts":["terminal","station","platform","stop"],"ans":"station"},
     {"type":"fill","q":"4. 填空：______ left at the corner.（在轉角左轉）","ans":"Turn"},
     {"type":"fill","q":"5. 填空：Is there a store ______?（附近）","ans":"nearby"},
   ]
  },
  {"day":5,"emoji":"🛍️","topic":"購物","topic_en":"Shopping","encourage":"妳今天學了5個購物必備單字！買東西超開心！",
   "words":[
     {"en":"price","ph":"/praɪs/","zh":"價格","ex":"What is the price of this?"},
     {"en":"discount","ph":"/ˈdɪskaʊnt/","zh":"折扣","ex":"Is there a discount?"},
     {"en":"size","ph":"/saɪz/","zh":"尺寸","ex":"Do you have this in a bigger size?"},
     {"en":"try on","ph":"/traɪ ɒn/","zh":"試穿","ex":"Can I try this on?"},
     {"en":"receipt","ph":"/rɪˈsiːt/","zh":"收據","ex":"Could I have a receipt, please?"},
   ],
   "dialogue":[
     {"role":"mom","en":"Excuse me, what is the price of this?","zh":"不好意思，這個多少錢？"},
     {"role":"staff","en":"It is 2000 yen.","zh":"2000円。"},
     {"role":"mom","en":"Is there a discount?","zh":"有折扣嗎？"},
     {"role":"staff","en":"Sorry, no discount today.","zh":"抱歉，今天沒有折扣。"},
     {"role":"mom","en":"Can I try this on?","zh":"我可以試穿嗎？"},
     {"role":"staff","en":"Of course! The fitting room is over there. Could I have a receipt, please?","zh":"當然！試衣間在那邊。"},
     {"role":"mom","en":"Could I have a receipt, please?","zh":"可以給我收據嗎？"},
   ],
   "quiz":[
     {"type":"mc","q":"1. 「折扣」的英文是？","opts":["price","receipt","discount","size"],"ans":"discount"},
     {"type":"mc","q":"2. Can I try this on? 是什麼意思？","opts":["這個多少錢？","我可以試穿嗎？","有折扣嗎？","可以給我收據嗎？"],"ans":"我可以試穿嗎？"},
     {"type":"mc","q":"3. 「收據」的英文是？","opts":["bill","receipt","ticket","voucher"],"ans":"receipt"},
     {"type":"fill","q":"4. 填空：What is the ______?（價格）","ans":"price"},
     {"type":"fill","q":"5. 填空：Do you have this in a bigger ______?（尺寸）","ans":"size"},
   ]
  },
  {"day":6,"emoji":"🔁","topic":"複習第1-2天","topic_en":"Review Days 1-2","encourage":"複習讓記憶更牢固！妳已經學了10個單字，超棒的！",
   "words":[
     {"en":"passport","ph":"/ˈpæspɔːrt/","zh":"護照（複習）","ex":"May I see your passport?"},
     {"en":"boarding pass","ph":"/ˈbɔːrdɪŋ pæs/","zh":"登機證（複習）","ex":"Here is your boarding pass."},
     {"en":"reservation","ph":"/ˌrezərˈveɪʃən/","zh":"預約（複習）","ex":"I have a reservation."},
     {"en":"key card","ph":"/kiː kɑːrd/","zh":"房卡（複習）","ex":"Here is your key card."},
     {"en":"breakfast","ph":"/ˈbrekfəst/","zh":"早餐（複習）","ex":"Is breakfast included?"},
   ],
   "dialogue":[
     {"role":"staff","en":"Good morning! May I see your passport?","zh":"早安！請問可以看您的護照嗎？"},
     {"role":"mom","en":"Of course! Here you go.","zh":"當然！給您。"},
     {"role":"staff","en":"Here is your boarding pass.","zh":"這是您的登機證。"},
     {"role":"mom","en":"Thank you. I also have a hotel reservation.","zh":"謝謝。我也有訂飯店。"},
     {"role":"staff","en":"Great! Here is your key card. Breakfast starts at 7 AM.","zh":"太好了！這是您的房卡。早餐從早上7點開始。"},
     {"role":"mom","en":"Perfect! Is breakfast included?","zh":"太棒了！有包含早餐嗎？"},
   ],
   "quiz":[
     {"type":"mc","q":"1. 「護照」的英文是？","opts":["boarding pass","passport","luggage","key card"],"ans":"passport"},
     {"type":"mc","q":"2. I have a reservation. 是什麼意思？","opts":["我想要check in","我有預訂","我的房間在哪？","我需要房卡"],"ans":"我有預訂"},
     {"type":"mc","q":"3. 「早餐」的英文是？","opts":["lunch","dinner","breakfast","meal"],"ans":"breakfast"},
     {"type":"fill","q":"4. 填空：Is ______ included?（早餐）","ans":"breakfast"},
     {"type":"fill","q":"5. 填空：Here is your ______ card.（房卡）","ans":"key"},
   ]
  },
  {"day":7,"emoji":"🚌","topic":"搭乘交通","topic_en":"Taking Transportation","encourage":"妳今天學了5個交通必備單字！搭車去任何地方都難不倒妳！",
   "words":[
     {"en":"ticket","ph":"/ˈtɪkɪt/","zh":"車票","ex":"One ticket to Kyoto, please."},
     {"en":"platform","ph":"/ˈplætfɔːrm/","zh":"月台","ex":"Which platform is it?"},
     {"en":"bus stop","ph":"/bʌs stɒp/","zh":"公車站","ex":"Where is the bus stop?"},
     {"en":"schedule","ph":"/ˈskedʒuːl/","zh":"時刻表","ex":"Can I see the schedule?"},
     {"en":"transfer","ph":"/ˈtrænsfɜːr/","zh":"轉車","ex":"Do I need to transfer?"},
   ],
   "dialogue":[
     {"role":"mom","en":"One ticket to Kyoto, please.","zh":"一張到京都的票，謝謝。"},
     {"role":"staff","en":"That will be 1200 yen.","zh":"一共1200円。"},
     {"role":"mom","en":"Which platform is it?","zh":"是哪個月台？"},
     {"role":"staff","en":"Platform 3.","zh":"3號月台。"},
     {"role":"mom","en":"Do I need to transfer?","zh":"我需要轉車嗎？"},
     {"role":"staff","en":"No, it is a direct train!","zh":"不用，是直達車！"},
   ],
   "quiz":[
     {"type":"mc","q":"1. 「月台」的英文是？","opts":["ticket","platform","schedule","transfer"],"ans":"platform"},
     {"type":"mc","q":"2. Do I need to transfer? 是什麼意思？","opts":["車票多少錢？","幾號月台？","我需要轉車嗎？","時刻表在哪？"],"ans":"我需要轉車嗎？"},
     {"type":"mc","q":"3. 「車票」的英文是？","opts":["ticket","receipt","card","pass"],"ans":"ticket"},
     {"type":"fill","q":"4. 填空：One ______ to Kyoto, please.（車票）","ans":"ticket"},
     {"type":"fill","q":"5. 填空：Which ______ is it?（月台）","ans":"platform"},
   ]
  },
]

d = DAYS[day_index]

CSS = """* { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', 'PingFang TC', sans-serif; background: linear-gradient(135deg, #e0f2fe 0%, #fce7f3 100%); min-height: 100vh; padding: 20px; }
  .container { max-width: 700px; margin: 0 auto; }
  .header { text-align: center; background: linear-gradient(135deg, #0ea5e9, #ec4899); color: white; padding: 24px; border-radius: 20px; margin-bottom: 24px; box-shadow: 0 8px 32px rgba(14,165,233,0.3); }
  .header h1 { font-size: 2em; margin-bottom: 6px; }
  .header p { font-size: 1.1em; opacity: 0.9; }
  .section { background: white; border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
  .section h2 { font-size: 1.2em; margin-bottom: 16px; color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; }
  .word-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }
  .word-card { background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border-radius: 12px; padding: 16px; border-left: 4px solid #0ea5e9; }
  .word-en { font-size: 1.3em; font-weight: bold; color: #0369a1; }
  .word-phonetic { color: #64748b; font-size: 0.85em; margin: 4px 0; }
  .word-zh { font-size: 1em; color: #374151; font-weight: 600; }
  .word-example { font-size: 0.85em; color: #6b7280; margin-top: 6px; font-style: italic; }
  .btn-row { display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap; }
  .speak-btn { background: #0ea5e9; color: white; border: none; border-radius: 8px; padding: 6px 12px; cursor: pointer; font-size: 0.85em; }
  .speak-btn.pink { background: #ec4899; }
  .dialogue-controls { display: flex; gap: 10px; margin-bottom: 16px; }
  .play-btn { background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; border-radius: 10px; padding: 10px 20px; cursor: pointer; font-size: 1em; }
  .reset-btn { background: #e5e7eb; color: #374151; border: none; border-radius: 10px; padding: 10px 20px; cursor: pointer; font-size: 1em; }
  .chat { display: flex; flex-direction: column; gap: 10px; }
  .bubble { max-width: 80%; padding: 12px 16px; border-radius: 16px; opacity: 0; transform: translateY(10px); transition: all 0.4s ease; }
  .bubble.visible { opacity: 1; transform: translateY(0); }
  .bubble.staff { background: #0ea5e9; color: white; align-self: flex-start; border-bottom-left-radius: 4px; }
  .bubble.mom { background: #fce7f3; color: #831843; align-self: flex-end; border-bottom-right-radius: 4px; }
  .bubble-label { font-size: 0.75em; opacity: 0.7; margin-bottom: 4px; }
  .bubble-en { font-weight: 600; }
  .bubble-zh { font-size: 0.85em; opacity: 0.8; margin-top: 4px; }
  .quiz-item { margin-bottom: 20px; }
  .quiz-q { font-weight: 600; color: #374151; margin-bottom: 10px; }
  .options { display: flex; flex-direction: column; gap: 8px; }
  .option-btn { background: #f3f4f6; border: 2px solid #e5e7eb; border-radius: 10px; padding: 10px 16px; cursor: pointer; text-align: left; font-size: 0.95em; width: 100%; }
  .option-btn.correct { background: #dcfce7; border-color: #16a34a; color: #166534; }
  .option-btn.wrong { background: #fee2e2; border-color: #dc2626; color: #991b1b; }
  .fill-blank { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .fill-blank input { border: 2px solid #e5e7eb; border-radius: 10px; padding: 10px 16px; font-size: 0.95em; width: 180px; outline: none; }
  .fill-blank input:focus { border-color: #0ea5e9; }
  .check-btn { background: #8b5cf6; color: white; border: none; border-radius: 8px; padding: 8px 16px; cursor: pointer; font-size: 0.9em; }
  .feedback { margin-top: 8px; font-weight: 600; font-size: 0.9em; }
  .feedback.ok { color: #16a34a; }
  .feedback.no { color: #dc2626; }
  .encourage { text-align: center; background: linear-gradient(135deg, #fdf4ff, #fce7f3); border-radius: 16px; padding: 24px; border: 2px solid #e879f9; }
  .encourage p { color: #7e22ce; font-size: 1.05em; line-height: 1.8; }
  .score-display { font-size: 1.4em; font-weight: bold; color: #7c3aed; margin-top: 10px; text-align: center; }"""

def word_cards(words):
    cards = ""
    for w in words:
        en_js = w['en'].replace("'", "\'")
        ex_js = w['ex'].replace("'", "\'")
        cards += f"""<div class="word-card">
  <div class="word-en">{w['en']}</div>
  <div class="word-phonetic">{w['ph']}</div>
  <div class="word-zh">{w['zh']}</div>
  <div class="word-example">"{w['ex']}"</div>
  <div class="btn-row">
    <button class="speak-btn" data-say="{w['en']}">🔊 聽發音</button>
    <button class="speak-btn pink" data-say="{w['ex']}">🔊 聽例句</button>
  </div>
</div>"""
    return cards

def quiz_js(quiz):
    return "const quizData=" + json.dumps(quiz, ensure_ascii=False) + ";"

dialogue_js = "const dialogue=" + json.dumps(d['dialogue'], ensure_ascii=False) + ";"

html = f"""<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{d['emoji']} 第{d['day']}天旅遊英文 — {d['topic']}</title>
<style>{CSS}</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>{d['emoji']} 第{d['day']}天旅遊英文</h1>
    <p>主題：{d['topic']} · {d['topic_en']}</p>
    <p style="font-size:0.9em;margin-top:8px;opacity:0.8;">媽媽加油！今天學會{d['topic']}必備英文 {d['emoji']}</p>
  </div>
  <div class="section">
    <h2>📚 今日單字（點按鈕聽發音）</h2>
    <div class="word-grid">{word_cards(d['words'])}</div>
  </div>
  <div class="section">
    <h2>🎭 對話練習</h2>
    <div class="dialogue-controls">
      <button class="play-btn" id="playBtn">▶ 播放對話</button>
      <button class="reset-btn" id="resetBtn">↩ 重置</button>
    </div>
    <div class="chat" id="chat"></div>
  </div>
  <div class="section">
    <h2>🎯 互動測驗</h2>
    <div id="quizContainer"></div>
    <div class="score-display" id="scoreDisplay"></div>
  </div>
  <div class="encourage"><p>🌸 媽媽，{d['encourage']}<br>每天進步一點點，旅遊說英文超有自信！💪</p></div>
</div>
<script>
const synth=window.speechSynthesis;
function speak(t){{synth.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='en-US';u.rate=0.85;synth.speak(u);}}
document.querySelectorAll('.speak-btn[data-say]').forEach(b=>b.addEventListener('click',()=>speak(b.dataset.say)));
{dialogue_js}
let timer=null;
function resetDialogue(){{clearTimeout(timer);synth.cancel();document.getElementById('chat').innerHTML='';}}
document.getElementById('resetBtn').addEventListener('click',resetDialogue);
document.getElementById('playBtn').addEventListener('click',()=>{{
  resetDialogue();
  const chat=document.getElementById('chat');
  dialogue.forEach((line,i)=>{{
    const b=document.createElement('div');b.className='bubble '+line.role;b.id='b'+i;
    const lbl=document.createElement('div');lbl.className='bubble-label';lbl.textContent=line.role==='staff'?'🗣️ 對話':'👩 媽媽';
    const en=document.createElement('div');en.className='bubble-en';en.textContent=line.en;
    const zh=document.createElement('div');zh.className='bubble-zh';zh.textContent=line.zh;
    b.appendChild(lbl);b.appendChild(en);b.appendChild(zh);chat.appendChild(b);
  }});
  function show(i){{if(i>=dialogue.length)return;const b=document.getElementById('b'+i);if(b)b.classList.add('visible');speak(dialogue[i].en);timer=setTimeout(()=>show(i+1),(dialogue[i].en.split(' ').length*400)+800);}}
  show(0);
}});
{quiz_js(d['quiz'])}
let correctCount=0;
const qc=document.getElementById('quizContainer');
quizData.forEach((q,qi)=>{{
  const div=document.createElement('div');div.className='quiz-item';
  const qDiv=document.createElement('div');qDiv.className='quiz-q';qDiv.textContent=q.q;div.appendChild(qDiv);
  if(q.type==='mc'){{
    const opts=document.createElement('div');opts.className='options';opts.id='opts_'+qi;
    q.opts.forEach(o=>{{
      const btn=document.createElement('button');btn.className='option-btn';btn.textContent=o;
      btn.addEventListener('click',()=>{{
        opts.querySelectorAll('.option-btn').forEach(b=>b.disabled=true);
        const fb=document.getElementById('fb_'+qi);
        if(o===q.ans){{btn.classList.add('correct');fb.textContent='✅ 正確！';fb.className='feedback ok';correctCount++;updateScore();}}
        else{{btn.classList.add('wrong');fb.textContent='❌ 答案是：'+q.ans;fb.className='feedback no';}}
      }});
      opts.appendChild(btn);
    }});
    div.appendChild(opts);
  }}else{{
    const row=document.createElement('div');row.className='fill-blank';
    const inp=document.createElement('input');inp.type='text';inp.placeholder='輸入答案...';inp.id='fill_'+qi;
    const ckBtn=document.createElement('button');ckBtn.className='check-btn';ckBtn.textContent='確認';
    function doCheck(){{const val=inp.value.trim().toLowerCase();const fb=document.getElementById('fb_'+qi);inp.disabled=true;ckBtn.disabled=true;if(val===q.ans.toLowerCase()){{fb.textContent='✅ 正確！';fb.className='feedback ok';inp.style.borderColor='#16a34a';correctCount++;updateScore();}}else{{fb.textContent='❌ 答案是：'+q.ans;fb.className='feedback no';inp.style.borderColor='#dc2626';}}}}
    inp.addEventListener('keydown',e=>{{if(e.key==='Enter')doCheck();}});
    ckBtn.addEventListener('click',doCheck);
    row.appendChild(inp);row.appendChild(ckBtn);div.appendChild(row);
  }}
  const fb=document.createElement('div');fb.className='feedback';fb.id='fb_'+qi;div.appendChild(fb);
  qc.appendChild(div);
}});
function updateScore(){{document.getElementById('scoreDisplay').textContent='目前得分：'+correctCount+' / '+quizData.length+' 題'+(correctCount===quizData.length?' 🎉 全對！太棒了！':'');}}
</script>
</body>
</html>"""

print(html)