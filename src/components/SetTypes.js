import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SetTypes = () => {
    return(
        <Row className='type-layer'>
            <Col sm={6}>
                <img src='images/banner1.webp' alt='Warm Set' style={{width:'100%'}}/>
            </Col>
            <Col sm={6}>
                <img src='images/banner2.webp' alt='Carry Nest' style={{width:'100%'}}/>
            </Col>
        </Row>
    )
}

export default SetTypes;