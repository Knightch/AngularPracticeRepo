const express = require('express');
const cors = require('cors');
const app = express();
// import db file
const db = require("./app/models");

var corsoptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsoptions));
console.log("value 1st " + app.use(cors(corsoptions)));
// parse requests of content-type - application/json
app.use(express.json());
console.log("value 2nd " + app.use(express.json()));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
    entend: true
}));
// connect db
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("connected to the database!");
    })
    .catch(err => {
        console.log("cannot connect to the database!", err);
        process.exit();
    })

// simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to raju's world!"
    });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})