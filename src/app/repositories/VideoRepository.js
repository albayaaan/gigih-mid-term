const VideoModel = require("../models/VideoModel");

async function getAllVideos() {
    return VideoModel.find();
}

async function getVideoById(videoId) {
    return VideoModel.findById(videoId);
}

module.exports = {
    getAllVideos,
    getVideoById,
};
