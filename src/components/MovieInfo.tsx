import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {GetSingle} from "./GetSingle";





export const MovieInfo = (props: any) => {


    return (
        <>

                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                    <GetSingle id={props.id} />
                </Modal.Header>
                <Modal.Body>


                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>

        </>
    );
}
