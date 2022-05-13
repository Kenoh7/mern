import React, { useState } from 'react';
import axios from 'axios';

const Display = (props) => {
    const [pokemon, setpokemon] = useState([])
    const axiospokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            // .then(response => console.log(response.data.results))
            .then(response => setpokemon(response.data.results))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <button className="button" onClick={axiospokemon}>Fetch Pokemon</button>
            <div>
                {
                    pokemon.map((n, idx) => {
                        return (
                            <ul key={idx} className="list">
                                <li>{n.name}</li>
                            </ul>
                        )
                    }
                    )}
            </div>
        </div>
    )
}

export default Display