const express = require('express')
const contactRouter = express.Router()
const axios = require('axios')

contactRouter.get('', async(req,res)=>{
    // res.redirect('contact');
    res.render('contact');
})
module.exports = contactRouter