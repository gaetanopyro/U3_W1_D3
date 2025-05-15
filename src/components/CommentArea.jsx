import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    Comment: [],
    isLoading: true,
    hasError: false,
  };

  fetchComment = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZWU3NTFlYmU4MjAwMTUwOWYzMTciLCJpYXQiOjE3NDczMTYzNDEsImV4cCI6MTc0ODUyNTk0MX0.ldNO2Mw0dAsZd4AKjLuCRD17LtjgoLg0Lm92ECiwYb0",
        },
      });
      if (response.ok) {
        const Comment = await response.json();
        this.setState({ Comment }, () => {
          // console.log(Comment);
          this.state.Comment.map((Comment) => console.log(Comment));
        });
      } else {
        throw new Error("Errore nella libreria");
      }
    } catch (error) {
      console.log(error);
      this.setState({ hasError: true, isLoading: false });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchComment();
  }
  render() {
    return (
      <>
        <p>COMMENTI</p>
        <ListGroup as="ol" numbered>
          <ListGroup.Item as="li">id=</ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}
export default CommentArea;
