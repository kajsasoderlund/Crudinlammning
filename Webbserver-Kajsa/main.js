const express = require("express");
const app = express();
const port = 3000; 

const players = [{
    name: "Stefan",
    jersey: 2,
    age: 51,
    id: 1,
},{
    name: "Foppa",
    jersey: 21,
    age: 51,
    id: 2,
}, {
    name: "Sudden",
    jersey: 12,
    age: 52,
    id: 3,
}];

app.get("/api/players/userId", (req, res) => {
    console.log(req.params.userId);
    let p = players.find(player => player.id == req.params.userId);
    if (p == undefined){
        res.status(404).send("not found");
    }
    res.json(p);
});

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
});