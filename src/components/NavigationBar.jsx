import { Navbar, Container, Nav, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
    const navigation = useNavigate ()

    const toFilmPremium = () => {
      navigation("/FilmPremium")
    }  


  return (
    <div>
      <Navbar className="mb-5" variant="dark">
        <Container>
          <Navbar.Brand href="/">CherryFilm</Navbar.Brand>
          <Nav>
            <Nav.Link href="#Trending">Tranding</Nav.Link>
            <Nav.Link href="#Animations">Animations</Nav.Link>
            <Nav.Link onClick={toFilmPremium}>Premium</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
