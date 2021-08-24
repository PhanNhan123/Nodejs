const express = require('express')
const aboutusRouter = express.Router()
const axios = require('axios')

aboutusRouter.get('', async(req,res)=>{
    // res.redirect('contact');
    res.render('about_us');
})
module.exports = aboutusRouter