const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');

const app = express();

app.use(bodyParser.json());


app.use(express.static(`${__dirname}/../react-client/dist`));



app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/*', function (req, res) {
    res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
    //res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.post('/*/lobby', function (req, res) {
    res.send('post lol')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
  });
