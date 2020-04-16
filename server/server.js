"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var express = require("express");
var app = express();
// app.use(express.json());
// app.use(express.urlencoded());
app.get('/', function (req, res) {
    res.send('main');
});
app.route('/getCoordinatesByAddress/:address').get(function (req, res) {
    var apiKey = '30425b04d9654bc89273eb01896127c2';
    var address = req.params.address;
    var query = address.split(' ').join('%20');
    var url = 'https://api.opencagedata.com/geocode/v1/json?q=' + query +
        '&key=' + apiKey +
        '&language=he&pretty=1';
    axios_1.default.get(url).then(function (res) {
        console.log('ok');
    }).catch(function (e) { return console.log('error: \n ' + e); });
    // axios({
    //     method: "GET",
    //     url: url,
    //     }).then(response => {
    //         console.log('ok')    
    //     }).catch(e => console.log('error:\n' + e));
    // res.send(url);
});
var port = process.env.PORT || 5432;
app.listen(port, function () {
    console.log('App is listening on port ' + port);
});
