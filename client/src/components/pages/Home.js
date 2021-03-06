import React, { Component } from 'react';
import {Col, Row } from "react-bootstrap";
import ImageCardHome from "./../ImageCardHome";
import API from "../utils/API";
import images from "./../utils/ImageHelper"

class Home extends Component {

  state={
    SF:[],
    Seattle:[]
  }
  componentDidMount(){
    API.getCity("San+Francisco").then((res)=> {
      this.setState({SF:res.data})
    })
    API.getCity("Seattle").then((res)=>{
      this.setState({Seattle:res.data})
    })
  }
  render() {
    return (
      <React.Fragment>
    {/* first row begins */}
    <Row className="bg-dark mt-5">
      <Col md={12} className="bg-light">
        <h1>Explore San Francisco</h1>
      </Col>
    </Row>
    {/* second row begins */}
    <Row>
      <Col md={12}>
        <h3>Popular tourist attractions in city...</h3>
      </Col>
    </Row>
    {/* third row begins */}
    <Row>
      
      {/* render SF locations */}
      {this.state.SF.map((card, index)=>{
        return <ImageCardHome
        key={card.id}
        title={card.destination}
        text={card.facts}
        rating={card.rating}
        price ={card.cost}
        pics={images[card.urlImage]}
      />
      })}
    </Row>
    <Row className="bg-dark mt-5">
      <Col md={12} className="bg-light">
        <h1>Explore Seattle</h1>
      </Col>
    </Row>
    {/* second row begins */}
    <Row>
      <Col md={12}>
        <h3>Popular tourist attractions in city...</h3>
      </Col>
    </Row>
    <Row>
      
      {/* render Seattle locations */}
      {this.state.Seattle.map((card, index)=>{
        return <ImageCardHome
        key={card.id}
        title={card.destination}
        text={card.facts}
        rating={card.rating}
        price ={card.cost}
        pics={images[card.urlImage]}
      />
      })}
    </Row>
  </React.Fragment>
    );
  }
}

export default Home;


