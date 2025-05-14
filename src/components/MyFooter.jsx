import { Card, Col, Container, Row } from "react-bootstrap";

function MyFooter() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <Card className="text-center bg-primary">
            <Card.Body>
              <Card.Title className="text-white">&copy; 2025 Tester Web</Card.Title>
              <Card.Link className="text-white" href="#">
                Privacy Policy
              </Card.Link>
              <Card.Link className="text-white" href="#">
                0123 456789
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
