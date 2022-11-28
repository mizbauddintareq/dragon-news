import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="2">
            <h3>Left side</h3>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <h3>Right side</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
