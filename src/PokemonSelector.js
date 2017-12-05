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
    selectPokemon(num){
        let pokemon = arr.find(pokemon => pokemon.number == num)
        this.setState({
            selectedPokemon: pokemon
        })
    }

    render(){
        var options = arr.map((e, i) => <option value={e.number}>{e.name}</option>)

        return (
            <div className='make_colume'>
                {/* Add on click listener */}
                <button onClick={()=>this.props.addToTeamOne(this.state.selectedPokemon) } className='small_margin'>Add To Team 1</button>
                <select onChange={e => this.selectPokemon(e.target.value)}className='small_margin'>
                    <option>Please Select</option>
                    {options}
                </select>
                {/* Add on click Listener */}
                <button onClick={()=>this.props.addToTeamTwo(this.state.selectedPokemon)} className='small_margin'>Add To Team 2</button>
            </div>
        );
    }
}
