const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Teego AI</title>
      <style>
        body{font-family:Arial;background:#0f0f0f;color:white;text-align:center;padding:50px}
        input{padding:12px;width:80%;max-width:400px;border-radius:10px;border:none;margin-top:20px}
        button{padding:12px 20px;background:#6c5ce7;color:white;border:none;border-radius:10px;margin-top:10px;cursor:pointer}
        #chat{margin-top:30px;text-align:left;max-width:600px;margin-left:auto;margin-right:auto;background:#1e1e1e;padding:20px;border-radius:15px}
      </style>
    </head>
    <body>
      <h1>🤖 Teego AI</h1>
      <p>Your AI assistant is live!</p>
      <div id="chat">Hi! I'm Teego. How can I help you today?</div>
      <input id="msg" placeholder="Type a message..." />
      <br>
      <button onclick="send()">Send</button>
      <script>
        function send(){
          let m=document.getElementById('msg').value;
          let c=document.getElementById('chat');
          if(!m) return;
          c.innerHTML+='<p><b>You:</b> '+m+'</p><p><b>Teego:</b> I received: '+m+' - Full AI coming soon! 🚀</p>';
          document.getElementById('msg').value='';
        }
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log('Teego AI running on port '+PORT);
});
