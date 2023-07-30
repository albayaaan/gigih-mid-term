const mongoose = require("mongoose");

[
    {
        _id: mongoose.Schema.Types.ObjectId,
        title: String,
        embedUrl: String,
        thumbnailUrl: String,
        products: [mongoose.Schema.Types.ObjectId],
        comments: [mongoose.Schema.Types.ObjectId],
    },

    {
        _id: mongoose.Schema.Types.ObjectId,
        title: String,
        price: Number,
        productUrl: String,
    },

    {
        _id: mongoose.Schema.Types.ObjectId,
        username: String,
        text: String,
        createdAt: Date,
    },
];
