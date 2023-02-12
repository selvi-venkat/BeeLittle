import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ProductsList = ({products,entity}) => {
    return (
        <div>
            {products.map(({title,price,status,size,imageSrc},index)=>{
            return (<Card key={index} border="light" className='list-types'
                         style={{margin:10 }}>
                    {entity === 'sale' ? <span className='sale-logo'>Sale</span> : ''}
                    <Card.Img className='img-bproducts' variant="top" src={imageSrc}/>
                    <Card.Body className='p-0'>
                        <Card.Title className='pt-2'>{title}</Card.Title>
                        {size.length > 0 ? <Form.Select size='lg' style={{paddingLefft:0}}>   
                            {size.map((values,index)=>{
                            return <option key={index} value={values}>{values}</option>
                            })}
                        </Form.Select> : <div/>}
                        <Card.Text className='pt-2 price-card'>Rs. {price}</Card.Text>
                        <Card.Text className='text-danger'>{status}</Card.Text>                                
                        <Button className='card-button' 
                            variant="danger" disabled={status !== '' ? true : false}>
                            ADD TO CART
                        </Button>                                                   
                    </Card.Body>
                </Card>  )                                        
            })} 
        </div>        
    )
}

export default ProductsList;