const CommentModel = require("../models/CommentModel");

async function createComment(commentData) {
    return CommentModel.create(commentData);
}

async function getCommentById(commentId) {
    return CommentModel.findById(commentId);
}

async function getAllComments() {
    return CommentModel.find();
}

module.exports = {
    createComment,
    getCommentById,
    getAllComments,
};
