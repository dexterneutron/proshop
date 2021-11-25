import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { Row, Col, Image, ListGroup, Button  } from 'react-bootstrap'
import axios from 'axios'

import Rating from '../components/Rating'

const ProductScreen = () => {
    const [product, setProduct] = useState([])
    const [id, setId] = useState(useParams().id)

    useEffect(
        ()=>{
            const fetchProduct = async ()=>{
                let url = `/api/products/${id}`
                const { data } = await axios.get(url)
                setProduct(data)
            }
            fetchProduct()
        }, [])
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} ratings`} color={"#f8e825"}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price</Col>
                            <Col><strong> {product.price}</strong></Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Status</Col>
                            <Col>{product.countInStock  >0 ? 'In stock' :'Out of stock'}</Col>
                        </Row>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <Button type='button' className='btn-block' disabled={product.countInStock === 0}>Add to card</Button>
                    </ListGroup.Item>
                </Col>

                
            </Row>
        </div>
    )
}

export default ProductScreen
