const ProductModel = require("../models/ProductModel");

async function getProductById(productId) {
    return ProductModel.findById(productId);
}

async function getAllProducts() {
    return ProductModel.find();
}

module.exports = {
    getProductById,
    getAllProducts,
};
