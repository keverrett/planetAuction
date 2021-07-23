import mongoose from 'mongoose'


const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },

}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true 
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
       
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: Boolean,
        required: true,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true,
        default: 0
    },
    reviews: [reviewSchema],
    category: {
        type: String,
        required: true
    },
    numReviews: {
        type: Number,
        required: true, 
        default: 0
    },
    price: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    timestamps: true
})

const User = mongoose.model('Product', productSchema)

export default productSchema
