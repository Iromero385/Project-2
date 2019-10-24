import React from 'react';
import { Row, Col } from "react-bootstrap";
import ImageCardHome from "../ImageCardHome"
// pictures for home page
import Image1 from "../../assets/SeattleImages/PM.jpg"
import Image2 from "../../assets/SeattleImages/mountain.jpg"
import Image3 from "../../assets/SeattleImages/hug.jpg"
import Image4 from "../../assets/SeattleImages/wine.jpg"
import Image5 from "../../assets/SeattleImages/choc.jpg"
import Image6 from "../../assets/SeattleImages/cook.jpg"
import Image7 from "../../assets/SeattleImages/donut.jpg"
import Image8 from "../../assets/SeattleImages/island.jpg"
import Image9 from "../../assets/SeattleImages/food.jpg"
import Image10 from "../../assets/SeattleImages/canni.jpg"

const Seattle = () => (
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
        pic={Image1}
        title={"Seattle: Pike Place Market Chef-Guided Food Tour"}
        text={"Embark on a culinary tasting adventure of Pike Place Market with a local chef guide. Stop at 10 different artisanal vendors; learning about local production and tasting your way through the flavors of the Northwest."}
        rating={"4.5"}
        price ={"$39.76-$59.59/ person"}
      />
      <ImageCardHome
        pic={Image2}
        title={"Seattle: Mount Rainier Park All-Inclusive Small Group Tour"}
        text={"Discover Mt. Rainier like never before on this day-long, guided walk or snowshoe adventure with a stop for lunch. Learn local secrets as you enjoy spectacular scenery and explore thrilling trails."}
        rating={"4.9"}
        price ={"$249/ person for 10hours All inclusive"}
      />
      <ImageCardHome
        pic={Image3}
        title={"From Seattle: Olympic National Park Small Group Tour"}
        text={"Explore the rugged and beautiful World Heritage Site, the Olympic National Park, with your small group in a comfortable van, an award-winning local guide, a beautiful lunch, local wine, snacks, and drinks."}
        rating={"4.8"}
        price ={"$ 263.15/person"}
      />
      <ImageCardHome
        pic={Image4}
        title={"Snoqualmie Falls & Woodinville Wine Tasting"}
        text={"Experience the essence of Washington's wild beauty and independent spirit on a memorable day trip to Snoqualmie Falls and the Woodinville Wine Country. Taste fine wines at 3 boutique wineries and follow trails on interpretative nature walks."}
        rating={"4.5"}
        price ={"$240/person"}
      />
      <ImageCardHome
        pic={Image5}
        title={"Half-Day Coffee, Chocolate, and Wine Tour"}
        text={"Experience an exclusive guided tour of Starbucks' flagship Roastery location where the best coffee in the world is served daily, visit Fran’s Chocolates production facility for a tour and tasting, and end your tour at Browne Family Vineyards."}
        rating={"4.3"}
        price ={"$99/person"}
      />
    </Row>
    {/* 4th row */}
    <Row>

      <ImageCardHome
        pic={Image6}
        title={"Cooking Class and Pike Place Market Tour"}
        text={"Get an introduction to fresh ingredients sourced from Pike Place. Create a multi-course meal before indulging in the fruits of your labor. End the experience with a brief market tour."}
        rating={"3.5"}
        price={"$127/person"}
      />
      <ImageCardHome
        pic={Image7}
        title={"Underground Donut Tour"}
        text={"Take a trip with Seattle's only donut tour. Making 4 stops at some of the city's best donut shops, you'll sample all the best donuts Seattle has to offer. You can enjoy samples at each location, and learn about the history of donuts in the Emerald City."}
        rating={"5"}
        price={"$30/person"}
      />
      <ImageCardHome
        pic={Image8}
        title={"Private San Juan Island Tour"}
        text={"Spend the day exploring San Juan Island, discovering this mysterious landscape with a naturalist guide. Ride a ferry to seek fantastic hikes, birding spots, and whale watching from shore. Transportation, a light breakfast, and lunch are included."}
        rating={"5"}
        price={"$787.91"}
      />
      <ImageCardHome
        pic={Image9}
        title={"The Ultimate Food Experience with Local Guide"}
        text={"Discover the famous spots and hidden gems of the Seattle food scene! With your local guide, you will discover why Seattle is known for Pacific Northwest cuisine and fresh produce. Indulge in local treats, like clam chowder, mac n' cheese and craft beer!"}
        rating={"4.7"}
        price={"$188.26/2 people"}
      />
      <ImageCardHome
        pic={Image10}
        title={"Cannabis Tour: Half-Day Herban Adventure"}
        text={"Explore behind the scenes of Seattle’s cannabis industry and culture on this 2.5-hour tour. Follow your guide down the rabbit hole of America’s fastest growing start-up industry."}
        rating={"3.5"}
        price={"$114.95"}
      />
    </Row>
  </React.Fragment>
)
export default Seattle;