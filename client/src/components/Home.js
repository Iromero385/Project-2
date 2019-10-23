import React from 'react';
import { Jumbotron, Button} from 'react-bootstrap';
import './App.css';

export const Home =()=>(
  <div>
    <Jumbotron>
      <h1>Explore.io </h1>
      <h2>A simpler way for users to blog about their experiences during their travels.</h2>
      <p>
        This is a discussion blog for travelers to share their ratings, pictures 
        and reviews about any recently traveled destination.
      </p>
      <h5>"Travel opens your heart, broadens your mind, and fills your life with stories to tell ”<h6>– Paula Bendfeldt</h6> </h5>
      <br/>
    
        <Button variant="primary">Sign Up</Button>
       
        <Button variant="secondary">Login</Button>
      
    </Jumbotron>

  </div>
)

