import { Alert, Col, Container, Row } from "react-bootstrap";

const Welcome = function () {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10} md={4} className="text-center ">
            <Alert className="bg-danger text-dark">Effettuare il login prima di acquistare!!!</Alert>
            <p className="fs-2 text-dark">Welcome Home Page</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Welcome;
