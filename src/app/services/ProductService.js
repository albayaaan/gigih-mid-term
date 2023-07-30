const VideoRepository = require("../repositories/VideoRepository");
const ProductRepository = require("../repositories/ProductRepository");

async function getAllProductsByVideoId(videoId) {
    const video = await VideoRepository.getVideoById(videoId);
    if (video.products.length == 0) {
        return false;
    }
    const products = [];
    for (let i = 0; i < video.products.length; i++) {
        const product = await ProductRepository.getProductById(
            video.products[i]
        );
        products.push(product);
    }
    return products;
}

module.exports = {
    getAllProductsByVideoId,
};
