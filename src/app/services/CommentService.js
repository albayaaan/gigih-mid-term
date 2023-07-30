const VideoRepository = require("../repositories/VideoRepository");
const CommentRepository = require("../repositories/CommentRepository");

async function getAllCommentsByVideoId(videoId) {
    const video = await VideoRepository.getVideoById(videoId);
    if (video.comments.length == 0) {
        return false;
    }
    const comments = [];
    for (let i = 0; i < video.comments.length; i++) {
        const comment = await CommentRepository.getCommentById(
            video.comments[i]
        );
        comments.push(comment);
    }
    return comments;
}

async function createComment(videoId, commentData) {
    const video = await VideoRepository.getVideoById(videoId);
    const comment = await CommentRepository.createComment(commentData);
    console.log(comment);
    return comment;
}

module.exports = {
    getAllCommentsByVideoId,
    createComment,
};
