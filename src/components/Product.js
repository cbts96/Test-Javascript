import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Product = ({ product }) => {
  
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image.src} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>

       
        {product.variants.map((item=>{
           return  <Card.Text key={item.id} as='h3'>${item.price}</Card.Text> 
        }))}
        
      </Card.Body>
    </Card>
  )
}

export default Product
