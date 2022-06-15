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
// //     try {
//          const newsAPI = await axios.get('http://newsapi.org/v2/top-headlines?' +
//          'country=in&' +
//          'apiKey=c6aa863b9af1464990d9f9651c17cfdd')
       

// //         res.render('news', {articles : newsAPI.data })
//               console.log(newsAPI.data)
//                 } catch (error) 
//         if(err.response){
//             res.render('news', {articles : null })
//             console.log(err.response.data)
//             console.log(err.response.status)
//             console.log(err.response.headers) 
//         } else if(err.requiest){
//             res.render('news', { articles : null })
//             console.log(err.requiest)
//         }else {
//             res.render('news', {articles : null })
//             console.error('Error', err.message)
//         }
//     }
    
    
// })

module.exports = newsRouter