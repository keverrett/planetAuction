import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from  '../products'


const ProductSceen = ({match}) => {
    const product = products.find((p) => p.id === match.params.id)

    return (
        <div>
            
        </div>
    )
}

export default ProductSceen
