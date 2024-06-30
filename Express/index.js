const express = require('express')
const app = express()

//---------------------GET---------------------

app.get('/', function (req, res) {
  res.send('Hello World')
  console.log(`done`);
})

app.get(`/yele`, (req, res)=>{
    res.send(`Ye le Bhai`);
    console.log(`done`);
})

app.listen(3000, ()=>{
    console.log(`Listening on port no 3000`);
})

app.get(`/data`, (req, res)=>{
    var data = {
        name: `xyz123`,
        age: 24,
        gender:`male`
    }
    res.send(data);
})

//-----------------------------------------