
const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
})
app.post("/", (req, res) => {
    res.send("Thank you");


});

app.listen(3000, () => {
    console.log("server is running");
})

const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
})
app.post("/", (req, res) => {
    res.send("Thank you");


});

app.listen(3000, () => {
    console.log("server is running");
})
