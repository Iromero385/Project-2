import React from 'react'
import {Row, Col} from "react-bootstrap"
import ImageCard from "./../ImageCard"

const About = () => (
    <React.Fragment>
        {/* first row begins */}
        <Row className="bg-dark mt-5">
            <Col md={12} className="bg-light">
                <h1>Our Mission</h1>
            </Col>
        </Row>
        {/* second row begins */}
        <Row>
            <Col md={12}>
                <h3>To be the first choice for clients...</h3>
            </Col>
        </Row> 
        {/* third row begins */}
        <Row>
            <Col sm={6} md={{span:4, offset:8}}>
                <ImageCard/>
            </Col>
        </Row>
    </React.Fragment>
)

export default About; 
