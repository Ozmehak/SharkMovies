import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import {MovieInfo} from "./MovieInfo";
import {Button, Modal} from "react-bootstrap";

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
        <Card
          key={item.id}
          style={{ width: 350, height: 350, backgroundColor: "#131516" }}
        >
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          />
          <Card.Body>
            <Button variant="dark" id={item.id} onClick={e => handleShow(e)}>{item.title}</Button>
          </Card.Body>
        </Card>
      ))}
      <Modal show={show} onHide={handleClose} animation={false} size="lg" centered>

        <MovieInfo id={movieId}/>
      </Modal>
    </>
  );
};
