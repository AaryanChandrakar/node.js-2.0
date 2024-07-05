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

app.post(`/person`,(req, res)=>{

    // Asumming the the request body contains the person data
    const data = req.body;

    // Create new person document using  the mongoose model
    const newPerson = new Person(data);

    // Save the new peeson to the database
    newPerson.save((error, savedPerson) => {
        if(error) {
                console.log('Error saving person: ', error);
                res.start().res.json({error: 'Internal server error'})
            }
        else {
               console.log('Data saved successfullu');
               res.status(200).json(savedPerson)
           }
    })
})
app.listen(3500, ()=>{
    console.log("Listening to Port 3500");
})