import { Cloudinary } from "@cloudinary/url-gen";
import styled from "styled-components";
import { fit } from "@cloudinary/url-gen/actions/resize";
import {
  Facebook,
  Instagram,
  SuitHeartFill,
  Twitter,
  Youtube
} from "react-bootstrap-icons";

export const Footer = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dvvauf785"
    }
  });

  const logoImage2 = cld.image("TMDb_af2p0i");
  const tmdbLogo = logoImage2.resize(fit().width(80).height(80)).toURL();

  return (
    <footer className="border-top border-light" style={{ marginTop: 125 }}>
      <div className="d-flex justify-content-evenly pt-3">
        <Instagram size="30" />
        <Facebook size="30" />
        <Twitter size="30" />
        <Youtube size="30" />
      </div>
      <div className="d-flex justify-content-evenly mt-5">
        <FooterLinks>
          <p>Contact</p>
          <p>About</p>
          <p>Help</p>
          <p>
            Sharks
            <SuitHeartFill />
          </p>
        </FooterLinks>
        <LogoContainer>
          <img alt="logo" src={tmdbLogo} style={{ alignSelf: "center", marginRight: "3rem" }} />
        </LogoContainer>
      </div>
      <Copyright>&copy; SharkMovies 2022</Copyright>
    </footer>
  );
};

const FooterLinks = styled.div`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 1400px) {
    margin: 0 7rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0 6rem;
    width: 20rem;
  }
`;

const LogoContainer = styled.div`
  
  @media (max-width: 700px) {
    margin-right: 3rem;
  }
  ;`

const Copyright = styled.p`
  margin-left: 2rem;
  @media (max-width: 700px) {
    margin-left: 2rem;
  }
`;
