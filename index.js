'use strict';

var express = require('express');
var exphbs = require('express-handlebars');
// var bodyParser = require('body-parser');
var https = require('https');
var os = require('os');
var path = require('path');
var pem = require('pem');
var app = express();
// app.use(bodyParser.json());


var port = 8100;

if (process.platform === 'win32') {
    // use custom config, otherwise fallbacks to /usr/local/ssl/openssl.cnf
    process.env.OPENSSL_CONF = path.join(__dirname, 'vendor', 'openssl', 'shared', 'openssl.cnf');
    // use bundled openssl executable
    pem.config({
        pathOpenSSL: path.join(__dirname, 'vendor', 'openssl', os.arch() === 'x64' ? 'x64' : 'ia32', 'openssl.exe')
    });
}

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');


app.use('/', express.static('static'));



app.get('/', function (req, res) {
    res.render('home');

});
app.get('/about', function (req, res) {
    res.render('about');

});

app.get('/view3', function (req, res) {
    res.render('view3');
})
app.get('/view4', function (req, res) {
    res.render('view4');
})
app.get('/view5', function (req, res) {
    res.render('view5');
})
app.get('/view6', function (req, res) {
    res.render('view6');
})
app.get('/offline', function (req, res) {
    res.render('offline');
})

app.listen(port,function(){
    console.log('app at port:- ' + port);
})


// pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
//     https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(port, function () {
//         console.log('app at port:- ' + port);
//     });
// });