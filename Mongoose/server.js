const express = require(`express`)
const app = express();
const db = require(`./db`);
const Person = require(`./models/Person`)

app.get(`/`, (req, res)=>{
    //console.log("Done");
    res.send('Welcome to my hotel... How can I help you ?, we have list of menus')
})

app.listen(3500, ()=>{
    console.log("Listening to Port 3500");
})