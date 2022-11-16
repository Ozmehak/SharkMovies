import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import {MovieInfo} from "./MovieInfo";
import {Button, Modal} from "react-bootstrap";
import styled from "styled-components";

type listProps = {
  poster_path: string;
  title: string;
  item: object;
  category: string;
  id?: any;

};

export const GetLists = (props: listProps) => {
  const [listContent, setListContent] = useState<listProps[]>([]);
  const [show, setShow] = useState(false);
  const [movieId, setMovieId] = useState(undefined)

  const handleClose = () => setShow(false);
  const handleShow = (e: any) => {
    setShow(true);
    setMovieId(e.target.id)
  }






  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL_LISTS}${props.category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        setListContent(response.data.items);
      });
  }, [props.category]);

  return (
    <>
      {listContent.map((item) => (
        <StyledCard
          key={item.id}
                  >
          <StyledCardImage
            variant="top"
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          />
          <StyledCardBody>
            <Button style={{backgroundColor: "#131516" }} className="p-0 border-0" id={item.id} onClick={e => handleShow(e)}>{item.title}

            </Button>
          </StyledCardBody>
        </StyledCard>
      ))}
      <Modal show={show} onHide={handleClose} animation={false} size="lg" centered>

        <MovieInfo id={movieId}/>
      </Modal>
    </>
  );
};


const StyledCard = styled(Card) `

  
  background-color: #131516;
  
  @media (max-width: 769px) {
    display: flex;
    flex-direction: row;
    
  }
`

const StyledCardBody = styled(Card.Body) `

  
  background-color: #131516;
  
  @media (max-width: 769px) {
    margin: auto;
    
    
  }
`






const StyledCardImage = styled(Card.Img) `
  width: 12rem;
  height: 16rem;
  @media (max-width: 769px) {
    width: 33%;
    height: 33%;
    
  }
  
`

