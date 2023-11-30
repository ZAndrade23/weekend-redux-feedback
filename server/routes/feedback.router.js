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
router.post('/', (req, res) => {
    const newReview =(req.body);
    const sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                     VALUES($1, $2, $3, $4)`;
    const queryValues = [
       newReview.feelings ,
       newReview.understanding,
       newReview.support,
       newReview.comments

    ];
    pool.query(sqlText, queryValues)
    .then(() =>  {res.sendStatus(201);} )
    .catch((err) => {
      console.log('Error completing SELECT review query', err);
      res.sendStatus(500);
    });
});
    


module.exports = router;