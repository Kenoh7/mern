import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Display = (props) => {
    const {id} = useParams();
    const [people, setpeople] = useState({});
    const history = useHistory();

    const axiospeople = () => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((response) => {
            console.log(response.data)
            setpeople(response.data)
        })
        .catch((error) => {
            console.log(error);
            history.push('/error');
        });
    }

    useEffect(() => {
        axiospeople()
    },[]);

    return (
        <div>
            {/* <p>{console.log(people.name)}</p> */}
            <h1>{people.name}</h1>
            <p>Height: {people.height}cm</p>
            <p>Mass: {people.mass}kg</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color: {people.skin_color}</p>
        </div>
    );
};

export default Display;
