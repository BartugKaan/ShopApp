import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { FaRegHeart } from 'react-icons/fa'
import Raiting from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
  const { id: productId } = useParams()
  const product = products.find((p) => p._id === productId)

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
              <Raiting
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
              <p className="pt-3">
                Price: <strong className="h4">${product.price}</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
          <ListGroup.Item md="text-center">
            <Row>
              <Col md={8}>
                <Button
                  className="btn-block me-2 w-100"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  {product.countInStock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </Col>
              <Col md={4}>
                <Button className="rounded-5">
                  <FaRegHeart />
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
