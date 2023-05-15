import Card from "react-bootstrap/Card";
import { Container, Col, Row, Image } from "react-bootstrap";

import AntManQuantum from "../assets/Trending/Ant-Man-Quantumania.jpg";
import GitaCintaDariSMA from "../assets/Trending/Gita-Cinta-Dari-SMA.jpg";
import JalanYangJauhJanganLupaPulang from "../assets/Trending/Jalan-yang-Jauh-Jangan-Lupa-Pulang.jpeg";
import WaktuMaghrib from "../assets/Trending/Waktu-Maghrib.jpg";
import SuperMario from "../assets/Trending/SUPER-MARIO.jpg";
import PeterpanandWendy from "../assets/Trending/Paterpan-and-Wendy.jpg";

function Trending() {
  return (
    <div>
      <Container >
        <br />
        <br />
        <Container className="text-center" id="Trending">
        <h2 className="text-white">Tranding Movies</h2>
        <br />
        </Container>
        <Row  className="justify-content-center align-items-center">
          <Col md={3} className=" movieImages">
            <Card className="bg-dark text-white movieImages">
              <Image src={AntManQuantum} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Card title</Card.Title>
              <Card.Text className="text-center ">This is a wider card with supporting</Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={3} className="movieImages">
            <Card className="bg-dark text-white movieImages">
              <Image src={GitaCintaDariSMA} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Card title</Card.Title>
              <Card.Text className="text-center ">This is a wider card with supporting</Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={3} className="movieImages">
            <Card className="bg-dark text-white movieImages">
              <Image src={JalanYangJauhJanganLupaPulang} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Card title</Card.Title>
              <Card.Text className="text-center ">This is a wider card with supporting</Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={3} className="movieImages">
            <Card className="bg-dark text-white movieImages">
              <Image src={WaktuMaghrib} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Card title</Card.Title>
              <Card.Text className="text-center ">This is a wider card with supporting</Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={3} className="movieImages">
            <Card className="bg-dark text-white movieImages">
              <Image src={PeterpanandWendy} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Card title</Card.Title>
              <Card.Text className="text-center ">This is a wider card with supporting</Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={3} className="movieImages">
            <Card className="bg-dark text-white movieImages">
              <Image src={SuperMario} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Card title</Card.Title>
              <Card.Text className="text-center ">This is a wider card with supporting</Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Trending;
