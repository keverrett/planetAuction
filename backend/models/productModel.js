import mongoose from 'mongoose'
import { string } from '../../frontend/node_modules/@types/prop-types'

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
        type: string,
        required: true
    },
    image: {
        type: string,
        required: true,
       
    },
    brand: {
        type: string,
        required: true
    },
    category: {
        type: Boolean,
        required: true,
        default: false
    },
    description: {
        type: string,
        required: true
    },
    rating: {
        type: string,
        required: true,
        default: 0
    },
    reviews: [reviewSchema],
    category: {
        type: string,
        required: true
    },
    numReviews: {
        type: Number,
        required: true, 
        default: 0
    },
    price: {
        type: string,
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

export default Product
