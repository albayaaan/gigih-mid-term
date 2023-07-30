const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    embedUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId }],
    comments: [{ type: mongoose.Schema.Types.ObjectId }],
});

const VideoModel = mongoose.model("Video", videoSchema);

module.exports = VideoModel;
