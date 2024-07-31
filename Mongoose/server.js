const express = require(`express`)
const app = express();
const db = require(`./db`);
const Person = require(`./models/Person`)
const bodyParser = require(`body-parser`);
app.use(bodyParser.json());

app.get(`/`, (req, res)=>{
    //console.log("Done");
    res.send('Welcome to my hotel... How can I help you ?, we have list of menus')
})

// POST route to add a person
app.post(`/person`, async(req, res)=>{
   try{
             // Asumming the the request body contains the person data
             const data = req.body;

             // Create new person document using  the mongoose model
             const newPerson = new Person(data);

             // Save the new peeson to the database
             const response = await  newPerson.save();
             console.log(`data saved`);
             res.status(200).json(response);
       }
    catch(err)
    {
             console.log(err);
             res.status(500).json({error: `Internal Server Error`});
    }

})
app.listen(3500, ()=>{
    console.log("Listening to Port 3500");
})