const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST');

    const values = [
        req.body.feelings,
        req.body.support,
        req.body.understanding,
        req.body.comments
    ];

    const queryText = `
            INSERT INTO feedback ("feelings","support","understanding","comments")
        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, values)
        .then((result) => {
            console.log('POST SUCCESS');
            res.sendStatus(201);
        }).catch(err => {
            colsole.log('POST ERR', err);
            res.sendStatus(500);
        });
}); // end POST

module.exports = router;