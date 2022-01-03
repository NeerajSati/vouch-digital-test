import React from "react";
import { Container, Row, Col, Image, Stack, Form, Button } from "react-bootstrap";
function Home() {
  return (
    <Container style={{
        margin: "0"}}>
      <Row >
        <Col xs={6} style={{
            alignSelf: "center", textAlign: "center"}}>
        <Stack gap={2} className="col-md-15 mx-auto">
        <h1 style={{color: "#023047", marginBottom: "0"}}><strong>Welcome Back!</strong></h1>
        <p style={{marginTop: "0"}}>PLEASE LOGIN TO CONTINUE!</p> 
        <Form.Control
            className="me-auto"
            placeholder="Email Address*"
            style={{
                width: "300px", margin:"auto"}}
          />
          <Form.Control
            className="me-auto"
            placeholder="Password*"
            style={{
                width: "300px", margin:"auto"}}
                type="password"
          />
          <Button style={{
              backgroundColor: "#023047",
              border: "none", width: "300px", margin:"auto", marginTop:"10px"
            }}>Login</Button>
        </Stack>
        </Col>
        <Col xs={6}>
          <Image
            src="https://cdn.pixabay.com/photo/2021/11/19/15/21/christmas-6809681_960_720.png"
            responsive
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
