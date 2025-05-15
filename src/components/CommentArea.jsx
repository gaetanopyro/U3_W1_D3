import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComment = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZWU3NTFlYmU4MjAwMTUwOWYzMTciLCJpYXQiOjE3NDczMTYzNDEsImV4cCI6MTc0ODUyNTk0MX0.ldNO2Mw0dAsZd4AKjLuCRD17LtjgoLg0Lm92ECiwYb0",
        },
      });
      if (response.ok) {
        const comments = await response.json();
      } else {
        throw new Error("Errore di lettura");
      }
    } catch (error) {
      console.log(error);
    }
    this.fetchCooment();
  };
  render() {
    return (
      <>
        <p>COMMENTI</p>
        <ListGroup as="ol" numbered>
          <ListGroup.Item as="li">Qui appariranno i commenti per il libro</ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}
export default CommentArea;
