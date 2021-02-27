import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const Welcome = (props) => {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Welcome to the Squirrel Pantry</h1>
            <p className="lead">In February 2021, Texas experienced a sudden snow storms that affected ___ Texas residents.</p>
          </Container>
        </Jumbotron>
      </div>
    );
  };

export default Welcome;