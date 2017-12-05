import React, { Component } from 'react';
import arr from './assets';

export default class PokemonSelector extends Component{
    constructor(){
        super();
        this.state = {
            selectedPokemon: {}
        }
    }

    //make function to select a pokemon


    render(){
        var options = arr.map((e, i) => <option value={e}>{e.name}</option>)

        return (
            <div className='make_colume'>
                {/* Add on click listener */}
                <button className='small_margin'>Add To Team 1</button>
                <select className='small_margin'>
                    <option>Please Select</option>
                    {options}
                </select>
                {/* Add on click Listener */}
                <button className='small_margin'>Add To Team 2</button>
            </div>
        );
    }
}
