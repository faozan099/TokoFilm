import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center text-center">
        <Row>
          <Col>
            <div className="title">Rasakan Emosi dan Keajaiban di Setiap Layar,</div>
            <div className="title">Tanpa Biaya!</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark">Lihat Sekarang</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
