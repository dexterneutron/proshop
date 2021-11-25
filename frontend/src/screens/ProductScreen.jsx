import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { Row, Col, Image, ListGroup, Button, Card  } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
    let id = useParams().id
    const product = products.find(
        product => product._id == id
    )
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
