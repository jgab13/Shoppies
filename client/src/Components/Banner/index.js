import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css'; 


function Banner() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Congratulations, you have nominated 5 movies!</Alert.Heading>
        Click remove and nominate a new movie to your top 5.
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Banner;