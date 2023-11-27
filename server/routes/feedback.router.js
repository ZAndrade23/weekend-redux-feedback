const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET students
router.get('/', (req, res) => {
    console.log('hi');
    // Get all of the treats from the database
    const sqlText = `SELECT * FROM feedback`;
    pool.query(sqlText)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// POST students


module.exports = router;