import React from 'react';
import { Row, Col } from "react-bootstrap";
import ImageCardHome from "../ImageCardHome"
// pictures for home page
import pic1 from "../../assets/PortlandImages/port.jpg"
import pic2 from "../../assets/PortlandImages/beer.jpg"
import pic3 from "../../assets/PortlandImages/scene.jpg"
import pic4 from "../../assets/PortlandImages/streetfood.jpg"
import pic5 from "../../assets/PortlandImages/helicopter.jpg"


const Portland = () => (
  <React.Fragment>
    {/* first row begins */}
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
    {/* third row begins */}
    <Row>
      <ImageCardHome
        pic={pic1}
        title={"Best of Portland 2-Hour Walking Tour"}
        text={"Discover Portland the green and eco-friendly way. This award-winning 2-hour walk clarifies why Portland is regularly recognized as one of the best places to live. By the end of the walking tour, you'll most likely want to move here too."}
        rating={"4.5"}
        price ={"$23.99/ person"}
      />
      <ImageCardHome
        pic={pic2}
        title={"Small Group Craft Breweries Tour by Bike"}
        text={"Hop on a bike, join an expert local guide, and discover some of Portland’s best craft breweries. Ride through some of the city’s prettiest neighborhoods, stopping for beer samples along the way and learning about Portland’s craft beer scene."}
        rating={"5"}
        price ={"$76/ person"}
      />
      <ImageCardHome
        pic={pic3}
        title={"Columbia River Gorge Waterfalls Morning Tour"}
        text={"Drive the scenic Columbia River Highway on a 3.5-hour tour to some of the beautiful waterfalls, and visit sites such as the Portland Women’s Forum, Crown Point Vista House, Latourell Falls, Multnomah Falls and Horse Tail Falls."}
        rating={"4.3"}
        price ={"$65/person"}
      />
      <ImageCardHome
        pic={pic4}
        title={"2-Hour Street Food Walking Tour"}
        text={"Sample the goods of Portland’s food carts, tasting trucks, and hidden kitchens on a 2-hour walking tour to see where former 4-star chefs and other culinary entrepreneurs scoop up mighty morsels on an international scale, and enjoy your cuisine curbside."}
        rating={"4.8"}
        price ={"$59/person"}
      />
      <ImageCardHome
        pic={pic5}
        title={"Downtown Helicopter Tour"}
        text={"Soar high above Portland on this spectacular helicopter tour of Rose City. Take off from a rooftop helipad in the heart of Downtown Portland. See all the important sights during the 15-minute ride from Waterfront Park to the historical White Stag sign."}
        rating={"5"}
        price ={"$99/person"}
      />
    
    </Row>
  </React.Fragment>
)
export default Portland;