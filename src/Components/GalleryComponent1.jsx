import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class GalleryComponent1 extends Component {
  state = {
    lupinFilms: [],
  };
  getLupin = () => {
    fetch("http://www.omdbapi.com/?apikey=25cea59a&s=lupin")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore di chiamata");
        }
      })
      .then((data) => {
        console.log("dovrebbe arrivare risultato di lupin", data);
        this.setState({ lupinFilms: data.Search.slice(0, 6) });
      })

      .catch((error) => {
        console.log("errore", error);
      });
  };
  componentDidMount() {
    this.getLupin();
  }
  render() {
    console.log("verifica risultato");
    return (
      <Row xs={1} sm={2} md={3} lg={6} xl={6} className="mt-5">
        {this.state.lupinFilms.map((film) => (
          <Col key={film.imdbID}>
            <Card style={{ width: "16rem" }}>
              <Card.Img className="img.fluid" src={film.Poster} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
export default GalleryComponent1;
