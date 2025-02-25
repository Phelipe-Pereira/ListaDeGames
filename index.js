const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Servidor ativo!");
    
});

app.get('/', (req, res) =>{
    res.json(games);
})

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Majong", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90}
]

