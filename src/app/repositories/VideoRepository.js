const VideoModel = require("../models/VideoModel");

async function getAllVideos() {
    return VideoModel.find();
}

async function getVideoById(videoId) {
    return VideoModel.findById(videoId);
}

async function postComment(videoId, commentId) {
    try {
        return VideoModel.findByIdAndUpdate(
            { _id: videoId },
            { $push: { comments: commentId } }
        );
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllVideos,
    getVideoById,
    postComment,
};
