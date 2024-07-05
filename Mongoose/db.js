const mongoose = require(`mongoose`);

//define mongodb connection url
const mongoURL = `mongodb://localhost:27017/hotels`  //Replace your databse name with "/hotels"

//Setup mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get the default connection 
//mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;


// define event listeners for database connection 
db.on('connected', ()=>{
    console.log("Connected to MongoDB Server.")
});

db.on(`error`, (err)=>{
    console.log(`MongoDB Connection Error: `, err)
});

db.on(`disconnected`, ()=>{
    console.log(`MongoDB Disconnected.`)
});

// export the data base connection 
module.exports=db;