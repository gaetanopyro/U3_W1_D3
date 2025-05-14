import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Card className={`border-3 ${this.state.selected ? "border-warning" : ""}`}>
          <Card.Img className="img-card" variant="top" src={this.props.imageSrc} onClick={() => this.setState({ selected: !this.state.selected })} />
          <Card.Body>
            <Card.Text>{this.props.titleBook}</Card.Text>
            <Button variant="success">Compra ora</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default SingleBook;
