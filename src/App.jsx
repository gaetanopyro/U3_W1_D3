import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mynav from "./components/Mynav";
import MyFooter from "./components/MyFooter.JSX";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import BookList from "./components/Booklist";
import scifi from "./data/scifi.json";
import CommentArea from "./components/CommentArea";

function App() {
  return (
    <>
      <Mynav />

      <BookList books={scifi} />
      {/* <SingleBook imageSrc="https://images-na.ssl-images-amazon.com/images/I/91eGxsWGH7L.jpg" titleBook="Silver Silence (Psy-Changeling Trinity)" /> */}
      {/* <CommentArea /> */}
      <MyFooter />
    </>
  );
}

export default App;
