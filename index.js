const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;

app.use(cookieParser());
app.use(express.static('public'));

app.get('/cookie-test', function(req, res) {
    console.log(req.headers);
    console.log(req.cookies);
    res.cookie(Math.random().toString(36).slice(-8), Math.random().toString(36).slice(-8));
    res.send(req.cookies);
});

app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
});

app.listen(port, () => console.log(`app listening on port ${port}!`));