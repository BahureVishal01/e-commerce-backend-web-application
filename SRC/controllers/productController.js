const Product = require("../models/product");

function listProducts(req, res){
    let data = req.body;
    Product.listProducts(data, function(err, result){
        
        if(err){
            console.log(err);
            return res.status(500).send({
                message: "Not able to fetched the products",
                success: false
            })
        }
        return res.status(200).send({
            message: "successfully fetched  all Products details",
            success: true,
            products: result
        })

    })
}

function addProduct(req, res){
    let data = req.body;
    
    if(data.name && data.price && data.description && data.categoryId && data.vendorId){
    Product.addProduct(data, function(err, result){
    if(err){
        
        return res.status(500).send({
            message : "something went wrong, unable to add the product",
            success : false
        })
    }
    return res.status(200).send({
        message: "Successfully added a product",
        success: true
    }); 
});
}else{
    return res.status(401).send({
        message : "Incorrect Parameters sent for the request",
        success : false

    })
 }
}

module.exports = {listProducts, addProduct};