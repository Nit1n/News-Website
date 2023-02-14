const express = require('express') ; 
let app = express() ; 

//static files
app.use(express.static('public')) ; 
app.use('/css' , express.static(__dirname + '/public/css')); 
app.use('/images' , express.static(__dirname + '/public/images')) ; 
app.use('/js' , express.static(__dirname + '/public/js')) ; 

//templating engine 
app.set('views' , './src/views') ; 
app.set('view engine' , 'ejs') ; 

//Routes 
const port = process.env.PORT || 8000 ; 

const newsRouter =require('./src/routes/news');
const topStoriesRouter = require('./src/routes/top_Stories')  ; 
app.use('/' , newsRouter) ; 
app.use('/topstories' , topStoriesRouter ) ; 
app.listen(port, ()=>{console.log('Listening on port' + port)}) ; 