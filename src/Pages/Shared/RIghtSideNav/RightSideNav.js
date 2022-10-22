import React, { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";




const RightSideNav = () => {

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)

    .then((result) => {
      const user = result.user;
      console.log(user)
      .catch(error => console.error(error))
    });
  };






  return (
    <div className="mt-5 mt-lg-0">
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} variant="outline-primary p-2">
          <FaGoogle /> Login With Google
        </Button>

        <Button variant="outline-dark p-2 mt-2">
          <FaGithub /> Login With Github
        </Button>
      </ButtonGroup>

      <div className="mt-3">
        <h5 className="ps-4">Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-3 shadow-sm">
            <FaFacebook /> Facebook
          </ListGroup.Item>

          <ListGroup.Item className="mb-3 shadow-sm">
            <FaTwitter /> Twitter
          </ListGroup.Item>

          <ListGroup.Item className="mb-3 shadow-sm">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>

          <ListGroup.Item className="mb-3 shadow-sm">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-3 shadow-sm">
            Vestibulum at eros
          </ListGroup.Item>
        </ListGroup>
      </div>
      <BrandCarousel />
    </div>
  );
};

export default RightSideNav;
