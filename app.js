
const express = require('express')
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = ('cors');
// const books = ('.public/books.json');


app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.use(morgan('tiny'));
app.use(cors());


app.listen(PORT,()=>
{
    console.log(`app start ...at http://loclahost:5555`);
})
