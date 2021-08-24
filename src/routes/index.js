const express = require('express')
const productRouter = express.Router()
const axios = require('axios')

productRouter.get('', async(req,res)=>{
    try{
        const headerAPI  = await axios.get(`http://localhost:5000/api/categories/`)  
        const productAPI  = await axios.get(`http://localhost:5000/api/products/top3`) 
        const top6product  = await axios.get(`http://localhost:5000/api/products/top6`)   
        // console.log(productAPI.data)
        res.render('index',{products_top3: productAPI.data ,header_category: headerAPI.data, products_top6: top6product.data })
    }catch(err){
        if(err.response){
            res.render('index',{products_top3: null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.requiest){
            res.render('index',{products_top3: null})
            console.log(err.requiest)
        }else{
            res.render('index',{products_top3: null})
            console.error('Error',err.message) 
        }
    };
   
})
productRouter.get('/id=:_id', async(req,res)=>{
    let _id = req.params._id
    try{
        const top6product  = await axios.get(`http://localhost:5000/api/products/top6`)   
        const headerAPI  = await axios.get(`http://localhost:5000/api/categories/`)  
        const productAPI  = await axios.get(`http://localhost:5000/api/products/${_id}`)  
        // console.log(productAPI.data)
        res.render('product_detail',{products: productAPI.data,header_category: headerAPI.data, products_top6: top6product.data })
    }catch(err){
        if(err.response){
            res.render('product_single',{products: null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.requiest){
            res.render('product_single',{products: null})
            console.log(err.requiest)
        }else{
            res.render('product_single',{products: null})
            console.error('Error',err.message) 
        }
    }
})


module.exports = productRouter
