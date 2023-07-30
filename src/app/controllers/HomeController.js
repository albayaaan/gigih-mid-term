// src/controllers/videoController.js
const VideoService = require("../services/VideoService");
const ProductService = require("../services/ProductService");
const CommentService = require("../services/CommentService");

async function getAllVideosThumbnail(req, res) {
    try {
        const videos = await VideoService.getAllVideosThumbnail();
        res.json(videos);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

async function getAllProductsByVideoId(req, res) {
    try {
        const videoId = req.params.id;
        const products = await ProductService.getAllProductsByVideoId(videoId);
        if (!products) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

async function getAllCommentsByVideoId(req, res) {
    try {
        const videoId = req.params.id;
        const comments = await CommentService.getAllCommentsByVideoId(videoId);
        if (!comments) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

async function createComment(req, res) {
    try {
        const videoId = req.params.id;
        const commentData = req.body;
        const newComment = await CommentService.createComment(
            videoId,
            commentData
        );
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    getAllVideosThumbnail,
    getAllProductsByVideoId,
    getAllCommentsByVideoId,
    createComment,
};
