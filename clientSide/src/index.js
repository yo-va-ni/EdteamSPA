const express = require("express");
const path = require("path");



const app = express();


// Settings
app.set("PORT", process.env.PORT ||  8080);


// Middlewares
app.use(express.urlencoded({extended: false}));


// Routes
require("./routes/index");


// Static files
app.use(express.static(path.join(__dirname,"public")));


app.listen(app.get("PORT"), () => {
    console.log(`Listening at port ${app.get("PORT")}`);
});