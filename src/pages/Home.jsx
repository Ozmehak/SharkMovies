import {ImageCarousel} from "../components/ImageCarousel";
import MovieSection from "../components/MovieSection";
import {useEffect, useState} from "react";
import styled from "styled-components";
import Login from "../components/Login";


export const Home = () => {
    const setLocalEnough = () => {
        localStorage.setItem("enough", "yes")
        setDisplay(false)
    }

    const [display, setDisplay] = useState(false);
    const [consent, setConsent] = useState(false)


    useEffect(() => {
        if(localStorage.getItem('enough') === "yes") {
            setDisplay(false)
        }

        else if (consent !== true) {
            setDisplay(true);
        }
        else {
            setDisplay(false)
        }

    }, [consent]);

    return (
        <>
            {consent === true && localStorage.getItem('enough') !== "yes" &&<Login />}

    {display && (
        <CookieDiv>
            <CookieMessage>
                Allow the use of cookies from SharkMovies in this browser?
                <CookieMsgSmall>
              We collect cookies to deliver a better user experience!
                    Logging in will not be possible if you decline.
                    We all prefer real cookies but it is what it is. Enjoy!
            </CookieMsgSmall>
            </CookieMessage>
            <DeclineBtn onClick={(e) => setDisplay(false)}>Decline</DeclineBtn>
            <AcceptBtn onClick={(c) => setConsent(true)}>Allow cookies</AcceptBtn>
            <EnoughBtn onClick={setLocalEnough}>Enough with this shit</EnoughBtn>
        </CookieDiv>
    )}
    <ImageCarousel />
    <MovieSection />

        </>
    )
}

const AcceptBtn = styled.button`
  background-color: #131516;
  color: darkgrey;
  :hover {
    font-weight: bold;
    
  }
`;
const EnoughBtn = styled.button`
  background-color: #131516;
  margin-left: 25px;
  color: darkgrey;
  :hover {
    font-weight: bold;
    
  }
`;
const CookieMsgSmall = styled.p`
  font-size: 15px;
  margin: 15px 25px 0;
`;

const CookieDiv = styled.div`
  border: 1px solid grey;
  margin: 50px 10% 0;
  padding-bottom: 20px;
  position: absolute;
  text-align: center;
  width: 80%;
  z-index: 1;
  background-color: #131516;
  color: darkgrey;

  @media (min-width: 769px) {
    margin-left: 30%;
    width: 40%;
  }
`;

const CookieMessage = styled.h3`
  margin-bottom: 20px;
  padding: 5px 10px 0 10px;
`;

const DeclineBtn = styled.button`
  margin-right: 25px;
  background-color: #131516;
  color: darkgrey;
  

  :hover {
    font-weight: bold;
  }
`;
