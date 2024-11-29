import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class Gallery extends Component {
  state = {
    film: [],
  };

  getFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=25cea59a&s=lupin")
      .then((resp) => resp.json())
      .then((film) => {
        if (film.Search) this.setState({ film: film.Search });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getFilm();
  }

  render() {
    return (
      <Row sm={2} md={3} lg={3} xl={6}>
        <Col>
          <Card>
            <Card.Img src={film.Poster} alt={film.title} />
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Gallery;
