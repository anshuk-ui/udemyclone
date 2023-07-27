import React  from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {Container ,Card, Col,Row, Button} from 'react-bootstrap';  
import img1 from '../ui/img1.png';  
import python from '../ui/python.png';
import dsa from '../ui/dsa.png';
function Content() {  
  return (  
    <div className="App">  
   <Container className='p-4'> 
   <Row>
  <Col md="4">  
  <Card>  
  <Card.Img variant="top" src={img1} />  
  <Card.Body>  
    <Card.Title>React The Complete Guide </Card.Title>  
    <Card.Text>  
      Dive in and Learn React.js from Scratch! Learn React Hooks. Hooks ,Redux ,React Router,Next js.
    </Card.Text>  
    <Button variant="primary">Learn more More</Button>  
  </Card.Body>  
</Card>  
</Col>  
    <Col md="4">  
  <Card>  
  <Card.Img variant="top" src={python} />  
  <Card.Body>  
    <Card.Title>100 Days of Code: The Complete Python</Card.Title>  
    <Card.Text>  
     Master Python by building 100 projects in 100 days. Learn data science,automation,build websites, games and apps!  
    </Card.Text>  
    <Button variant="primary">Learn More</Button>  
  </Card.Body>  
</Card>  
    </Col>  
    <Col md="4">  
  <Card>  
  <Card.Img variant="top" src={dsa} />  
  <Card.Body>  
    <Card.Title>Data Structure and Algorithm</Card.Title>  
    <Card.Text>  
    Learn, Analyse and Implement Data Structure using C and C++. Learn Recursion and Sorting.
    </Card.Text>  
    <Button variant="primary">Learn More</Button>  
  </Card.Body>  
</Card>  
    </Col>  
    </Row>
</Container>  
    </div>  
  );  
}  
export default Content;  