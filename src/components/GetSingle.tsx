import React, {useEffect, useState} from "react";
import axios from "axios";
import {Col, Container, Modal, Row, Tab, Tabs} from "react-bootstrap";
import styled from "styled-components";
import Card from "react-bootstrap/Card";



type singleProps = {
    json?: any;
    title?: string;
    item?: object;
    poster_path?: object;
    src?: string;
    category?: string;
    id?: any
    budget?: number
    overview?: string
    original_language?: string
    release_date?: string
    backdrop_path?: string
    revenue?: number
    runtime?: number
    vote_average?: number
    vote_count? : number
    person?: string
    credits? : any
    profile_path? : string
    name?: string



};



export const GetSingle = (props: singleProps) => {

    const [movie, setMovie] = useState<singleProps>({})
    const [cast, setCast] = useState<singleProps[]>([])

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}${props.id}?api_key=${process.env.REACT_APP_API_KEY}&&append_to_response=credits`
            )
            .then((response) => {
                setMovie(response.data);
                setCast(response.data.credits.cast)
            });
    }, [props.id]);



    return (

            <Tabs fill defaultActiveKey="info">

                <Tab eventKey="info" title="Info">
        <Modal.Body className="show-grid">
            <Container>
            <Row>
                <Col><Img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/></Col>
                <Col>
                    <StyledRow>Title: {movie.title}</StyledRow>
                    <StyledRow>Budget: ${movie.budget}</StyledRow>
                    <StyledRow>Revenue: ${movie.revenue}</StyledRow>
                    <StyledRow>Release Date: {movie.release_date}</StyledRow>
                    <StyledRow>Runtime: {movie.runtime} minutes</StyledRow>
                    <StyledRow>Rating: {movie.vote_average}</StyledRow>
                    <StyledRow>Votes: {movie.vote_count}</StyledRow>
                </Col>

            </Row>
                <OverviewRow>
            {movie.overview}
                </OverviewRow>
                <CastRow>Top Billed Cast</CastRow>
                <Row>
                    {cast.slice(0,5).map((person: singleProps) => (
                        <Card key={person.id}
                              style={{ width: "9rem", backgroundColor: "#131516" }}>
                            <Card.Img
                                variant="top"
                                src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                            />
                            <StyledCardTitle>{person.name}</StyledCardTitle>
                        </Card>))}
                </Row>
            </Container>
        </Modal.Body>
                </Tab>
                <Tab eventKey="images" title="Images"></Tab>
                <Tab eventKey="cast" title="Cast"></Tab>
                <Tab eventKey="other" title="Other"></Tab>
            </Tabs>

    )
}

const Img = styled.img`
width: 100%;
`
const StyledRow = styled(Row)`
    margin: 0.1rem;
    
    `
const CastRow = styled(Row)`
  margin-left: 0.1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
    
    `
const OverviewRow = styled(Row)`
    margin-left: 0.1rem;
    margin-top: 1rem;
    
    `
const StyledCardTitle = styled(Card.Title)`
margin-top: 0.5rem;
`