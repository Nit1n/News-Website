const express = require('express') ;
const axios = require('axios') ;  
let newsRouter = express.Router() ; 
require('dotenv').config() ;

let key = process.env.KEY ; 
newsRouter.get('' , async function(req , res){
    const response = await axios.get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key='+ key)  ; 
     
    res.render('news' , {articles : response.data})  ; 
})
module.exports = newsRouter ;   