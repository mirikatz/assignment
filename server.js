var fetch = require('node-fetch');
var express = require('express');
var app = express();
var port = 8080;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/script.js', (req, res) => {
    res.sendFile(`${__dirname}/script.js`)
})

app.get('/style.css', (req, res) => {
    res.sendFile(`${__dirname}/style.css`)
})



app.get('/data', function(req, res) {
    var promise = getObj()
    promise.then(obj => {
        res.send(obj)
    })
});
app.listen(port);
console.log('port: ' + port + 'is working!')



// .then(function(res) {
//     var obj = res.json();
//     obj.then(function(res) {
//         console.log(res);
//     })
// })
async function getObj() {
    return await fetch('https://my.zazim.org.il/petitions/featured.json')
        .then(res => res.json())

}