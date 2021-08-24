const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
const port = 3000

//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/js',express.static(__dirname + 'public/is'))


//templating engine 
app.set('views','./src/views')
app.set('view engine','ejs') 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes
const productRouter = require ('./src/routes/index')
const contactRouter = require ('./src/routes/contact')
const aboutusRouter = require ('./src/routes/about_us')

app.use('/',productRouter)
app.use('/contact',contactRouter)
app.use('/about_us',aboutusRouter)


app.listen(port,()=>console.log(`Listening on port ${port}`))
