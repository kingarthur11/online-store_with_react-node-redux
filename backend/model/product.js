const mongoose = require('mongoose');
const Schema = mongoose.Schema

User = mongoose.model(
    "user", Schema( {
        name: {
            type: String,
            required: true,
        }, 
        description: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        countInStock: {
            type: Number,
            required: true,
        },
    },
    {timestamps: true}
    )
);
module.exports = User;
