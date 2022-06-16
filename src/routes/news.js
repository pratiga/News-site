const express = require('express')
const newsRouter = express.Router()
 const axios = require('axios')

 newsRouter.get('/', async(req, res)=>{
     //res.render('partials/news')
     //res.send('this is text')
     
     try {
      var url = 'http://newsapi.org/v2/top-headlines?' +
      'country=in&' +
      'apiKey=36f3e29b704f41339af8439dc1228334';
      const news_get =await axios.get(url)
      console.log(news_get.data)
      
      res.render('partials/news',{articles:news_get.data.articles})
           } catch (err){
         
        if(err.response){
           //res.render('news', {articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
     }   else if(err.requiest){
                 //res.render('partials/news', { articles : null })
                 console.log(err.requiest)
             }else {
                 //res.render('news', {articles : null })
                 console.error('Error', err.message)
             }
            }
     
     
 })
 
 newsRouter.get('/:id', async(req,res)=> {
    let articleID = req.params.id
    
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
      'country=in&' +
      'apiKey=36f3e29b704f41339af8439dc1228334';
        const newsAPI = await axios.get(url)
        res.render('newsSingle', { article : newsAPI.data})
    } catch (err) {
        if(err.response){
            res.render('newsSingle', { article : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest){
            res.render('newsSingle', {article : null})
            console.log(err.requiest)
        } else {
            res.render('newsSingle',{ article : null })
            console.error('Error', err.message)
        }
    }
 })

module.exports = newsRouter