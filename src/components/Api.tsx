import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import {Button, Modal} from "react-bootstrap";
import {GetSingle} from "./GetSingle";
type apiProps = {
  json?: any;
  title?: string;
  item?: object;
  poster_path?: object;
  src?: string;
  category: string;
  id?: any

};

export const Api = (props: apiProps) => {
  const [content, setContent] = useState<apiProps[]>([]);

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
        `${process.env.REACT_APP_API_URL}${props.category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        setContent(response.data.results);
      });
  }, [props.category]);

  return (
    <>
      {content.map((item) => (
        <Card key={item.id}
          style={{ width: "10rem", backgroundColor: "#131516" }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
          />

          <Card.Body>
            <Button style={{backgroundColor: "#131516" }} className="p-0 border-0" id={item.id} onClick={e => handleShow(e)}>{item.title}</Button>
          </Card.Body>
        </Card>
      ))}
      <Modal show={show} onHide={handleClose} animation={false} size="lg" centered>
        <GetSingle id={movieId} />
        {/*<MovieInfo id={movieId}/>*/}
      </Modal>
    </>
  );
};
