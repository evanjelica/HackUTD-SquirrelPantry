import React, {Container} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'

function About(){
    return(
        <div>
            <Jumbotron>
  <h1>Welcome to the Squirrel Pantry</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
        </div>

    );
}

export default About;