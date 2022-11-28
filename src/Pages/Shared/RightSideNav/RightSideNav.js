import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary" className="px-5">
          <FaGoogle /> Login with google
        </Button>
        <Button variant="outline-dark" className="mt-3 px-5">
          <FaGithub /> Login with github
        </Button>
      </ButtonGroup>

      <div className="mt-5">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="my-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp /> Whatsapp{" "}
          </ListGroup.Item>
          <ListGroup.Item className="my-2">
            <FaTwitter /> Twitter{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitch /> Twitch{" "}
          </ListGroup.Item>
          <ListGroup.Item className="my-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
