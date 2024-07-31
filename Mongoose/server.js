const express = require(`express`)
const app = express();

const db = require(`./db`);

const Person = require(`./models/Person`);
const Menu = require(`./models/Menu`);

const bodyParser = require(`body-parser`);
app.use(bodyParser.json());

app.get(`/`, (req, res)=>{
    //console.log("Done");
    res.send('Welcome to my hotel... How can I help you ?, we have list of menus')
})


//-------------------------------------PERSON----------------------------------------------------------
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

// GET route to get person
app.get(`/person`, async (req, res)=>{
    try{
        const data = await Person.find();
        console.log(`Data Fetched`);
        res.status(200).json(data);
    }
    catch(err){
        console.log(`error`);
        res.status(500).json({error: `Internal Server Error`});
    }
})


//----------------------------------------------------MENU----------------------------------------------

app.post(`/menu`, async (req, res)=>{

    try
    {
         const data = req.body;
         const newMenu = new Menu(data);
         const response = await newMenu.save();
         console.log("Menu Saved.");
         res.status(200).json(response);
    }
    catch(err)
    {
        console.log(`error`);
        res.status(500).json({error: `Internal Server Error`});
    }
});

app.get(`/menu`, async (req, res)=>{
    try
    {
        const data = await Menu.find();
        console.log("Data Fetched.");
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log("error");
        res.status(500).json({eror: `Internal Server Error`});
    }
})


app.listen(3500, ()=>{
    console.log("Listening to Port 3500");
})