const mongoose = require('mongoose')

// process.env file comes inside this to connect 
mongoose.connect(process.env.CONNECTION_STRING).then(
    result => {
        console.log("Mongodb Atlas connected with pfServer");
    }
).catch(err => {
    console.log("Connection failed!!");
    console.log(err);
})