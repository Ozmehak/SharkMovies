import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button, Modal } from "react-bootstrap";
import { GetSingle } from "./GetSingle";

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
  const [movieId, setMovieId] = useState(undefined)

  const handleShow = (e: any) => {
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
    </>
  );
};
