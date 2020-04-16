import axios from 'axios';
import express = require('express');
import e = require('express');
const app: express.Application = express();

// app.use(express.json());
// app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.send('main');
});

app.route('/getCoordinatesByAddress/:address').get(function (req, res){
    const apiKey : String = '30425b04d9654bc89273eb01896127c2';
    const address : String = req.params.address; 
    let query : String = address.split(' ').join('%20');

    let url : string  = 'https://api.opencagedata.com/geocode/v1/json?q=' + query + 
    '&key=' + apiKey + 
    '&language=he&pretty=1';
    
    axios.get(url).then(res => {
        console.log('ok');
    }).catch(e => console.log('error: \n ' + e));

    // axios({
    //     method: "GET",
    //     url: url,
    //     }).then(response => {
    //         console.log('ok')    
    //     }).catch(e => console.log('error:\n' + e));
    // res.send(url);
})

const port = process.env.PORT || 5432;

app.listen(port, function () {
console.log('App is listening on port ' + port);
});