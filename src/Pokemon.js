import React, { Component } from 'react';

export default function Pokemon({pokemon}) {

    return (
            <div className='pokemon_container'>
                <span className='space_between'>
                    <p>num:{pokemon.number}</p>
                    <p>HP:{pokemon.health}</p>
                </span>
                <img className='pokemon_image' src={pokemon.url}/>
                <p>{pokemon.name}</p>
            </div>
        );

}