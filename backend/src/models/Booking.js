const mongoose = require('mongoose')

const BookinkSchema = new mongoose.Schema({
    data: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    },
})

module.exports = mongoose.model('Booking', BookinkSchema)