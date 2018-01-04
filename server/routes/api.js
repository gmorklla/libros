const express = require('express');
const router = express.Router();
const books = require('google-books-search');

router.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type, responseType");
    next();
});

// AIzaSyDQSketMUlyXB0DYcZYyxwXI0OuwYZuAwI
var options = {
    key: "AIzaSyDQSketMUlyXB0DYcZYyxwXI0OuwYZuAwI",
    field: 'author',
    offset: 0,
    limit: 20,
    type: 'books',
    order: 'relevance',
    lang: 'es'
};

/* GET api listing. */
router.get('/', (req, res) => {
    if(req.query.book) {
        console.log(req.query.book, req.query.type);
        options.field = req.query.type;
        books.search(req.query.book, options, function(error, results, apiResponse) {
            if ( ! error ) {
                res.json(results);
            } else {
                console.log(error);
            }
        });
    } else {
        res.json({error: "No book parameter"});
    }
});

module.exports = router;