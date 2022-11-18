import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import React, {useState} from "react";

export const Cards = () => {
    const [content, setContent] = useState([])
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
        </>
    )
}