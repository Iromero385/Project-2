import React from 'react'
import {Card, Button, Col} from "react-bootstrap"
function ImageCardSeattle(props) {
    return ( 
    <Col className=" ">
        <Card>
        <Card.Img variant="top" src={props.pic} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <Card.Text>{props.rating}</Card.Text>
            <Card.Text>{props.price}</Card.Text>
            <Button variant="primary">Read More</Button>
        </Card.Body>
    </Card>
    </Col>
    
    )
}

export default ImageCardSeattle;