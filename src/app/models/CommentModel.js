const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const CommentModel = mongoose.model("Comment", commentSchema);

module.exports = CommentModel;
