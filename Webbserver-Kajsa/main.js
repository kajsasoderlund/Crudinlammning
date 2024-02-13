const express = require('express');
const cors = require('cors'); //tillåt anrop från vem som helst
const app = express();
const port = 3000; 

app.use(cors());


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

app.get("/api/players", (req, res) => {
    res.json(players);
});

app.get("/api/players/:userId", (req, res) => {
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

app.delete('/api/players/userId',(req,res)=>{
});

app.put('/api/players/userId',(req,res)=>{
    //updatera
});




app.post('/api/players',(req,res)=>{
    // ta det som finnas i body skapa nytt objekt och lägg in i arrayen
    // returnera 201 Created
});