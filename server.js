const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Listening for a htp request that has get method
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Q.3
// Listening for a htp request that has get method
app.get('/datarep', (req, res) => {
    res.send('Wlecome to Data Rperesentation and Querying')
})


//Q.4
// Listening for a htp request that returns an argument from url path
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name)
})

//Q.5
// Adds a route point that will return json data
app.get('/api/books', (req, res) => {
    // hard coded variable containing json data
    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ]
    res.json({
        mybooks: books
    })
})

//Q.6
// Add a route to a file
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    
})

//Q.7
// Create a route to accept the name variable as a URL encoded GET variable
app.get('/name', (req, res) => {
    console.log(req.query.fname);
    res.send('Hello '+req.query.fname + ' '+req.query.lname);
})

//Q.8
// Add a route to accept the name variable as a body encoded POST variable
app.post('/name', (req, res)=>{
    console.log(req.body);
    res.send('Hello '+req.body.fname + ' '+req.body.lname);
})

// Listening for the url
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})