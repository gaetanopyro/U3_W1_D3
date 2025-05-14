import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = function (props) {
  console.log(props);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {props.books.map((book) => (
          <Col xs={8} sm={6} md={4} lg={3} xxl={2} key={book.asin}>
            <SingleBook key={book.asin} book={book} imageSrc={book.img} titleBook={book.title} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BookList;
