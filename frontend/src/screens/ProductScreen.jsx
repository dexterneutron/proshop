import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router'
import { Row, Col, Image, ListGroup, Button, Form  } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { listProductDetails } from '../redux/actions/productActions'

import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = () => {
    const [id] = useState(useParams().id)
    const navigate = useNavigate()
    const[qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetail = useSelector( state => state.productDetail )
    const {product, loading, error} = productDetail
    useEffect(
        ()=>{
            dispatch(listProductDetails(id))
        }, [dispatch])
    
    const addToCartHandler = ()=>{
        navigate(`/cart/${id}?qty=${qty}`)
    }
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Back</Link>
            {
                loading ? 
                    <Loader />
                    : error
                        ? <Message variant="danger" > {error} </Message>
                    :
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
                            {
                                product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control
                                                    xs='auto'
                                                    className='my-1'
                                                    as="select"
                                                    value={qty}
                                                    onChange={e=>setQty(e.target.value)}
                                                >
                                                {
                                                    [...Array(product.countInStock).keys()].map(
                                                            num=>
                                                            <option key={ num+1 } value={ num+1 }>
                                                            { num+1 }
                                                            </option>
                                                    )
                                                }
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )

                            }

                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <Button 
                                type='button' 
                                className='btn-block' 
                                disabled={product.countInStock === 0} 
                                onClick={addToCartHandler}>
                                    Add to card
                                </Button>
                            </ListGroup.Item>
                        </Col>
                    </Row>
            }
        </div>
    )
}

export default ProductScreen
