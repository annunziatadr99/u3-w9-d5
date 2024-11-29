import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Grid } from "react-bootstrap-icons";
const Title = () => (
  <Container fluid className="d-flex justify-content-between " bg="dark">
    <Row>
      <Col className="d-flex">
        <h1 className="me-4 fs-2">TV Shows</h1>

        <Dropdown className="border border-1 border-secondary rounded 6">
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Comedy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Science Fiction</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Horror</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Adventure</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> Animation</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> Fantasy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button variant="dark" className="border border-1 border-secondary">
          <List />
        </Button>
        <Button variant="dark" className="border border-1 border-secondary">
          <Grid />
        </Button>
      </Col>
    </Row>
  </Container>
);
export default Title;
