import Card from "react-bootstrap/Card";
import { Container, Col, Row, Image } from "react-bootstrap";

import ChlidrenWhoChaseLostVoices from "../assets/Anime/download.jpeg";
import DarekanoManazashi from "../assets/Anime/Dareka-no-Manazashi.jpg";
import GardeofWords from "../assets/Anime/Garde-of-Words.jpg";
import KiminoNaWa from "../assets/Anime/Kimi-no-Na-Wa.webp";
import Suzume from "../assets/Anime/Suzume.webp";
import WeatheringWithYou from "../assets/Anime/Weathering-With-You.jpg";

function Anime() {
  return (
    <div>
      <Container >
        <br />
        <br />
        <Container className="text-center ">
        <h2 className="text-white">Animations</h2>
        <br />
        </Container>
        <Row  className="justify-content-center align-items-center">
          <Col md={3} className=" movieImages" id="Animations">
            <Card className="bg-dark text-white movieImages">
              <Image src={ChlidrenWhoChaseLostVoices} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Children  Who Chase Lost Voices</Card.Title>
              <Card.Text className="text-center ">This is a wider card with </Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={3} className="movieImages">
            <Card className="bg-dark text-white movieImages">
              <Image src={DarekanoManazashi} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Dareka no Manazashi</Card.Title>
              <Card.Text className="text-center ">This is a wider card with supporting</Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={3} className="movieImages">
            <Card className="bg-dark text-white movieImages">
              <Image src={GardeofWords} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Garde of Words</Card.Title>
              <Card.Text className="text-center ">This is a wider card with supporting</Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={3} className="movieImages">
            <Card className="bg-dark text-white movieImages">
              <Image src={KiminoNaWa} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Kimi no Na Wa</Card.Title>
              <Card.Text className="text-center ">This is a wider card with supporting</Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={3} className="movieImages">
            <Card className="bg-dark text-white movieImages">
              <Image src={Suzume} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Suzume</Card.Title>
              <Card.Text className="text-center ">This is a wider card with supporting</Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={3} className="movieImages">
            <Card className="bg-dark text-white movieImages">
              <Image src={WeatheringWithYou} alt="Card image" className="image"/>
              <Card.Title className="text-center mt-3">Weathering With You</Card.Title>
              <Card.Text className="text-center ">This is a wider card with supporting</Card.Text>
              <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Anime;
