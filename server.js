const bodyParser = require('body-parser')
const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/datarep',(req,res)=>{
    res.send('Welcome to data rep!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//req = request // res = response
app.get('/hello/:name',(req,res)=>{
    console.log(req.params.name);
    res.send('Hello '+req.params.name);
})

app.get('/api/books', (req,res)=>{
    const books = state = {
        //book api hard code
        books:[
            {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
            },
            {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
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
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }
            ]
    }

    res.json({
        myBooks:books

    })
})

app.get('/test',(req,res)=>{
    //links to html page
    res.sendFile(__dirname+'/index.html');
})

app.get('/name',(req,res)=>{
    console.log(req.query.fname);
    //fname amd lname from URL
    res.send('Hello '+ req.query.fname + ' '+ req.query.lname)
})

//;isten for post from / test
app.post('/name',(req,res)=>{
    console.log(req.body);
    res.send('Hello from Post ' + req.body.fname + ' ' + req.body.lname)
})