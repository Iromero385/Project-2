import React from 'react';
import { Row, Col } from "react-bootstrap";
import ImageCardHome from "./../ImageCardHome"
// pictures for home page
import example1 from "../../assets/SfImages/houses.jpeg"
import example2 from "../../assets/SfImages/alcatrazz.jpg"
import example3 from "../../assets/SfImages/tour-yellow-cars.jpeg"
import example4 from "../../assets/SfImages/italy.jpeg"
import example5 from "../../assets/SfImages/bridgeImage.jpeg"
import example6 from "../../assets/SfImages/muirwoods.jpeg"
import example7 from "../../assets/SfImages/sailing.jpg"
import example8 from "../../assets/SfImages/bustour.jpg"
import example9 from "../../assets/SfImages/heli.jpg"
import example10 from "../../assets/SfImages/CAS.jpg"

const Home = () => (
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
      <ImageCardHome
        pic={example2}
        title={"Alcatraz"}
        text={"Alcatraz reveals stories of American incarceration, justice, and our common humanity. This small island was once a fort, a military prison, and a maximum security federal penitentiary. We invite you to explore Alcatraz's complex history and natural beauty during a day tour or during the special selected months for the creepy night tours."}
        rating={"4.5"}
        price ={"$39.76-$49.59/ person"}
      />
      <ImageCardHome
        pic={example1}
        title={"Full House"}
        text={"Take some amazing pictures in the actual location where the show 'Full House' was filmed. Rekindle the 90's sitcom show while having a picnic near the famous victorian houses."}
        rating={"4.9"}
        price ={"FREE"}
      />
      <ImageCardHome
        pic={example3}
        title={"Go-Cart city experience "}
        text={"Pass through the famous Golden Gate Park and explore San Francisco's most iconic sites on a GoCar. Visit the spots you can't get to on a bus and choose to customize your own map! It's totally up to you."}
        rating={"4.7"}
        price ={"$ 126.15/ group up to 2"}
      />
      <ImageCardHome
        pic={example4}
        title={"Broadway NightLife"}
        text={"The neon-lined stretch of Broadway through North Beach was historically the city's red-light district, home to strip clubs and other adult businesses, as well as many nightclubs and bars, and has been featured in several films and television shows"}
        rating={"4.5"}
        price ={"$Whatever you want to spend ;)"}
      />
      <ImageCardHome
        pic={example5}
        title={"Golden Gate Bay Cruise"}
        text={"Sail along San Francisco's breathtaking waterfront, under the majestic Golden Gate Bridge, and around notorious Alcatraz Island. Discover San Francisco's history via an award-winning audio commentary, available in 16 languages."}
        rating={"3.5"}
        price ={"$126.15 Per group up to 2"}
      />
    </Row>
    {/* 4th row */}
    <Row>

      <ImageCardHome
        pic={example6}
        title={"Muir Woods"}
        text={"Muir Woods, home to some of the oldest and most beautiful trees in the world; you will have over an hour to walk amongst the breathtaking redwoods before coming back to SF."}
        rating={"4.5"}
        price={"Free but may need to pay for additional parking reservation or bus fee"}
      />
       <ImageCardHome
        pic={example7}
        title={"San Francisco: Bay Sailing Tour with Drinks"}
        text={"For a relaxing afternoon on the water, hop aboard the Privateer traditional sailboat for a 90-minute cruise of the bay, complete with beer and wine. Get personal attention from a skilled crew as you enjoy stunning views of the bay!"}
        rating={"5"}
        price={"$49.96"}
      />
      <ImageCardHome
        pic={example8}
        title={"Hop-On Hop-Off: Classic, Premium or Deluxe"}
        text={"See the sights of San Francisco at your own pace from the top deck of a double decker, hop-on hop-off sightseeing bus. Choose from a Classic, Premium or Deluxe Ticket and marvel at monuments such as the Transamerica Pyramid and Golden Gate Bridge."}
        rating={"4.7"}
        price={"$55"}
      />
       <ImageCardHome
        pic={example9}
        title={" Scenic Helicopter Flight"}
        text={"Soar over San Francisco on an exhilarating 25-30 minute helicopter flight and get bird's eye views of Alcatraz, the Golden Gate Bridge, Angel Island and the coastline of California."}
        rating={"5"}
        price={"$265/person"}
      />
      <ImageCardHome
        pic={example10}
        title={"Skip The Line: California Academy of Sciences Entrance"}
        text={"Visit San Francisco’s California Academy of Sciences, the world’s only aquarium-planetarium-rainforest-living museum. The venue allows you to see African penguins, rocket through the galaxy, experience a coral reef, and much more, all in one place!"}
        rating={"3.5"}
        price={"$35.95"}
      />
    </Row>
  </React.Fragment>
)
export default Home;


