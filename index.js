var express = require('express');
var cors = require('cors');
var app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
var request = require('request');
var options = {
    method: 'POST',
    url: 'https://api-uat.kushkipagos.com/card/v1/charges',
    headers: {
        'content-type': 'application/json',
        'Private-Merchant-Id': '4d87876acd2a4a909692329d7a049801'
    },
    body: {},
    json: true

}
app.post('/prueba', (req, res) => {
    options.body = req.body;
    request(options, function(error, response, body) {

        if (body.code) {
            res.status(400).send({
                'code': body.code,
                'message': body.message
            });
        } else {
            res.json(body);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});