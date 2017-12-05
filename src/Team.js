import React, { Component } from 'react';
import Pokemon from './Pokemon'

export default function Team({title, list}) {
    let pokemonArr = list.map((pokemon, index) =>{
        return <Pokemon pokemon={pokemon}/>
    });

    return (
            <div>
                <h2>{title}</h2>
                {pokemonArr}
            </div>
        )

}