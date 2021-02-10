const express = require('express') ; 
const axios = require('axios') ; 
const bodyParser = require('body-parser')
const router = express.Router() ;
require('dotenv').config() ;
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

const key = process.env.KEY  ;
router.get('', async function(req , res){
    let url ='https://api.nytimes.com/svc/topstories/v2/' + 'home' + '.json?' + 'api-key=' + key
    let response = await axios.get(url) ;
    res.render('top_stories' , {articles:response.data , tag:'home'}) ;
})
router.post('',urlencodedParser , async function(req, res){
    console.log(req.body) ; 
    let type = req.body['search'] ; 
    let url = 'https://api.nytimes.com/svc/topstories/v2/' + type + '.json?' + 'api-key=' + key ; 
    //console.log(url) ; 
    let response = await axios.get(url) ;
    res.render('top_stories' , {articles:response.data, tag : type}) ;
})
module.exports = router ; 