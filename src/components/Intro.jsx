import { Col, Container, Row,} from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center text-center">
        <Row>
          <Col>
            <div className="title">Rasakan Emosi dan Keajaiban di Setiap Layar,</div>
            <div className="title">Tanpa Biaya!</div>
            <div className="introButton mt-4 text-center">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
