const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Teego AI</title>
<style>
body{font-family:Arial;background:linear-gradient(135deg,#667eea,#764ba2);margin:0;min-height:100vh;color:white}
.container{max-width:400px;margin:0 auto;padding:20px}
.header{text-align:center;padding:30px 0}
.logo{font-size:60px}
h1{margin:10px 0;font-size:32px}
.chat{background:white;border-radius:20px;padding:20px;color:#333;min-height:400px;display:flex;flex-direction:column}
.messages{flex:1;overflow-y:auto;margin-bottom:15px}
.msg{padding:12px 15px;border-radius:18px;margin:8px 0;max-width:80%}
.bot{background:#f0f0f0}
.user{background:#667eea;color:white;margin-left:auto}
.input-area{display:flex;gap:10px}
input{flex:1;padding:12px;border-radius:25px;border:2px solid #eee}
button{background:#667eea;color:white;border:none;padding:12px 20px;border-radius:25px;font-weight:bold}
.footer{text-align:center;margin-top:20px;opacity:0.8;font-size:12px}
</style></head>
<body>
<div class="container">
<div class="header"><div class="logo">🤖</div><h1>Teego AI</h1><p>Your Assistant from Cape Verde 🇨🇻</p></div>
<div class="chat">
<div class="messages" id="msgs"><div class="msg bot">Olá! I'm Teego! 🇨🇻 How can I help you today?</div></div>
<div class="input-area"><input id="input" placeholder="Type a message..." onkeypress="if(event.key==='Enter')send()"><button onclick="send()">Send</button></div>
</div>
<div class="footer">teego-bot.onrender.com | Built in Santo Antão</div>
</div>
<script>
function send(){
  const inp=document.getElementById('input');const msgs=document.getElementById('msgs');
  if(!inp.value.trim())return;
  const u=document.createElement('div');u.className='msg user';u.textContent=inp.value;msgs.appendChild(u);
  const text=inp.value.toLowerCase();inp.value='';
  setTimeout(()=>{
    const b=document.createElement('div');b.className='msg bot';
    let reply="I'm Teego AI! I help with questions, business, translation and more!";
    if(text.includes('hello')||text.includes('ola')) reply="Olá! Bom dia! 😊 How are you?";
    else if(text.includes('cape verde')) reply="Cape Verde is beautiful! 🇨🇻 Built in Ribeira Grande!";
    else if(text.includes('help')) reply="I can help with business plans, writing, ideas, coding and more!";
    b.textContent=reply;msgs.appendChild(b);msgs.scrollTop=msgs.scrollHeight;
  },800);
  msgs.scrollTop=msgs.scrollHeight;
}
</script></body></html>`);
});
app.listen(PORT, () => console.log('Teego live'));
