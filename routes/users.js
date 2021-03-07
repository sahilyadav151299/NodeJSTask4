const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/users', (req, res, next) => {

    fs.access('./username.txt', fs.constants.F_OK, (err) => {
        if(err){
            res.render('form', {pageTitle : 'User Form'});
        }
        else{
            const users = [];
        
            fs.readFile('username.txt', (err, data) => {
                        
            users.push(...data.toString().split('\n'));
            users.pop();
            
            res.render('users', { pageTitle : 'User Info', usernames : users });   
            });
        }   
    });
});

module.exports = router;