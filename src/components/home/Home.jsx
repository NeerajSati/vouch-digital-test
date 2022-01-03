import React, { useRef, useState } from "react";
import "./home.css";
import { Row, Col, Image, Stack, Form, Button, Modal } from "react-bootstrap";
import axios from "axios";

const baseURL = "https://reqres.in/api/login";
function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const userRef = useRef();
  const passwordRef = useRef();

  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(baseURL, {
        email: userRef.current.value,
        password: passwordRef.current.value,
      })
      .then(function (response) {
        setEmailError(false);
        setShow(true);
      })
      .catch(function (error) {
        setEmailError(true);
      });
  };

  return (
    <div
      className="home"
      style={{
        margin: "0",
        overflow: "hidden",
        width: "100%",
        maxWidth: "auto",
      }}
    >
      <Modal show={show} onHide={handleClose} style={{ color: "darkgreen" }}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, Login is succssfull! But the webpage is not implemented any
          further as of now.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="rowclass">
        <Col
          style={{
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          <Stack gap={2} className="col-md-15 mx-auto hidestk">
            <h1 style={{ color: "#023047", marginBottom: "0" }}>
              <strong>Welcome Back!</strong>
            </h1>
            <p style={{ marginTop: "0" }}>PLEASE LOGIN TO CONTINUE!</p>
            <Form.Control
              ref={userRef}
              className="me-auto"
              placeholder="Email Address*"
              style={{
                width: "300px",
                margin: "auto",
              }}
            />
            <Form.Control
              ref={passwordRef}
              className="me-auto"
              placeholder="Password*"
              style={{
                width: "300px",
                margin: "auto",
              }}
              type="password"
            />
            <Button
              onClick={handleSubmit}
              style={{
                backgroundColor: "#023047",
                border: "none",
                width: "300px",
                margin: "auto",
                marginTop: "10px",
              }}
            >
              Login
            </Button>
            <div className="passcheck">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Password" />
              </Form.Group>
              <Form.Text className="text-muted">Forgot Password?</Form.Text>
            </div>
            {emailError && (
              <Form.Text style={{ color: "red", fontSize: "15px" }}>
                Wrong Email/Password!
              </Form.Text>
            )}
          </Stack>
        </Col>
        <Col xs={6} className="bgimage">
          <Image src="https://cdn.pixabay.com/photo/2021/11/19/15/21/christmas-6809681_960_720.png" />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
