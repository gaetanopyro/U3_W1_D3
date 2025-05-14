import fantasy from "../data/fantasy.json";
import { Component } from "react";
import { Button, Card, Col, Collapse, Container, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    console.log("FANTASY", fantasy);
    return (
      <Container fluid>
        <Row className="justify-content-center">
          {fantasy.map((book) => (
            <Col key={book.asin} className="text-center" xs={8} sm={6} md={4} lg={3} xxl={2}>
              <Card className="m-2">
                <Card.Img className="img-card" variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="primary">€ {book.price}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
