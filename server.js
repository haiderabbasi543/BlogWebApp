 const express = require('express')
 const mongoose=require('mongoose')
 const articleRouter=require ('./routes/articles')
 const methodOverride=require('method-override')
 const Article= require('./models/article')
 const { createIndexes } = require('./models/article')
 const app = express( )
const connectionString='mongodb+srv://haider:Zainawan786.@cluster0.9wlb1.mongodb.net/?retryWrites=true&w=majority'
 mongoose.connect(connectionString,{useNewUrlParser:true})

 app.set('view engine','ejs')
 app.use(express.urlencoded({extended:false}))
 app.use(methodOverride('_method'))
 

   
 app.get('/',async(req,res)=>{
     const articles= await Article.find().sort({createdAt:'desc'})
    res.render('articles/index',{articles:articles})
 })

 app.use('/articles',articleRouter)  
 app.listen(5000  )      
