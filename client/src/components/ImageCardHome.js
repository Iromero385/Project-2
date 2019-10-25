import React from 'react'
import {Card, Button, Col} from "react-bootstrap"

function ImageCardHome(props) {
    return ( 
    <Col md={4}>
        <Card>
            <Card.Img variant="top" src={props.pics} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Card.Text>Rating: {props.rating}</Card.Text>
                <Card.Text>${props.price}</Card.Text>
                <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
    </Col>
    
    
    )
}

export default ImageCardHome;