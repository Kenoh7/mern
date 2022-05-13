import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const DisplayPlanet = (props) => {
    const [planet, setplanet] = useState({});
    const {id} = useParams();
    const history = useHistory();

    const axiosplanet = () =>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then((response) => {
            setplanet(response.data)
        })
        .catch((error) => {
            console.log(error);
            history.push('/error');
        });
    }

    useEffect(() => {
        axiosplanet()
    },[]);

    return (
        <div>
            {/* <p>{console.log(planet)}</p> */}
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    );
};

export default DisplayPlanet