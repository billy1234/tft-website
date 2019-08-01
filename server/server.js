const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();

const dataLayer = require('./data.js')
const tft = require('./tft.js')

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});


app.get('/createLobby', function (req, res) {
    if (!req.query.players || !req.ip){ 
        res.sendStatus(400);
        return;
    }
    dataLayer.createLobby(req.query.players,req.ip)
        .then((key) => res.redirect('/lobby/'+key))
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        })
});

app.get('/lobby/:id', function (req, res) {
    if (!req.params.id) res.sendStatus(404)

    dataLayer.lobbyExists(req.params.id)
        .then( (status) => {
            res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
        })
        .catch((err) =>  {
            console.log(err);
            res.sendStatus(400);
        })
});

app.get('/champByCost', function (req, res) {
    console.log("hit champ by cost")
    const players = req.query.players;
    const seed = req.query.seed;
    if(!seed || !players) {
        console.log(req.query)
        res.sendStatus(400);
        return;
    }
    res.json({data:tft.getByCost(players,seed)})
    console.log('data sent');


});

app.get('/lobby/:id/data', function (req, res) {
    if (!req.params.id || !dataLayer.lobbyExists(req.params.id)) {
        res.sendStatus(404);
        return;
    }
    dataLayer.getLobby(id)
    .then((lobby) => res.json({
            lobby:lobby.clientJson(req.params.id),
            admin:(req.ip == lobby.hostIp)
        })
    )
    .catch((err) =>  {
        console.log(err);
        res.sendStatus(400);
    })
})

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
});
