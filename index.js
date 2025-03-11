const express = require('express');
const app = express();

app.use(express.json());

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Majong", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90}
];

const buscarGamesPorNome = (nomeGame) => {
    return games.filter(g => g.title.toLowerCase().includes(nomeGame.toLowerCase()));
};

app.get('/games', (req, res) =>{
    const nomeGame = req.query.busca;
    const resultado = nomeGame ? buscarGamesPorNome(nomeGame) : games;

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada."});
    }
});

app.get('/ufs/:idGame', (req, res) =>{
    const idGame = parseInt(req.params.idGame);
    let mensagemErro = '';
    let game; 

    if (!(isNaN(idGame))) {
        game = colecaoUf.find(g => g.game == idGame);

        if (!game) {
            mensagemErro = 'Game não encontrado.';
        }
    } else {
        mensagemErro = 'Requisição inválida.'
    }


    if (game) {
        res.json(game);
    } else {
        res.status(404).send({ "erro": mensagemErro});
    }

    
});


app.post("/novogame", (req, res)=> {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    let newGame = {title, studio, price};
    games.push(newGame)

    console.log(title);
    console.log(studio);
    console.log(price);
    
    res.send("Jogo salvo com sucesso!")
});

app.put('/novogame/:index', (req, res) =>{
    const { index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = { title, studio, price};
    return res.json(games);
});

app.delete('/:index', (req, res) =>{
    const { index } = req.params;
    games.splice(index, 1);

    return res.json({ message: "O jogo foi deletado."})
});

app.listen(3000, () => {
    console.log("Servidor ativo!");
    
});