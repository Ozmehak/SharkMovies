import {useEffect, useState} from "react";
import axios from "axios";



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




};



export const GetSingle = (props: singleProps) => {

    const [movie, setMovie] = useState<singleProps>({})

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}${props.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            )
            .then((response) => {
                setMovie(response.data);
            });
    }, [props.id]);



    return (

        <>
            <div>{movie.title}</div>
            <div>{movie.budget}</div>
            <div>{movie.original_language}</div>
            <div>{movie.overview}</div>
            <div>{movie.release_date}</div>

        </>

    )
}
