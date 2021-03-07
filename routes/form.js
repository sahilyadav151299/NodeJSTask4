const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {

    res.render('form', { pageTitle : 'User Form' });
});

router.post('/add', (req, res, next) => {

    let data = [];

    req.on('data', (chunk) =>{
        data.push(chunk);
    });

    req.on('end', () => {

        const parseData = Buffer.concat(data).toString();
        const username = parseData.split('=')[1] + '\n';

        fs.appendFile('username.txt', username, (err) => {
            res.status(302);
            return res.end();
        });
    });

    res.redirect('/');
});


module.exports = router;