const VideoRepository = require("../repositories/VideoRepository");

async function getAllVideosThumbnail() {
    const videos = VideoRepository.getAllVideos();
    return (await videos).map((video) => {
        return { _id: video._id, thumbnailUrl: video.thumbnailUrl };
    });
}

module.exports = {
    getAllVideosThumbnail,
};
