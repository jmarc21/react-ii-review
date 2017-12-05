import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonSelector from './PokemonSelector';
import Team from './Team';

class App extends Component {
  constructor(){
    super();

    this.state = {
      teamOne: [{ health: 100, "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png", "number": "460", "name": "Abomasnow" }],
      teamOneTitle: 'Team One',
      teamTwo: [{ health: 100, "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png", "number": "97", "name": "Hypno" }],
      teamTwoTitle: 'Team Two'
    };
    this.addToTeamOne = this.addToTeamOne.bind(this);
    this.addToTeamTwo = this.addToTeamTwo.bind(this);
  }

  addToTeamOne(pokemon){
    let tempPokemon = Object.assign({}, pokemon, {health: 100});
    let tempArr = this.state.teamOne.slice();
    tempArr.push(tempPokemon);
    this.setState({teamOne: tempArr});
  }

  addToTeamTwo(pokemon){
    let tempPokemon = Object.assign({}, pokemon, {health: 100});
    let tempArr = this.state.teamTwo.slice();
    tempArr.push(tempPokemon);
    this.setState({teamTwo: tempArr});
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to <br></br>Pokemon Stadium 3</h1>
        </header>
        <div className='centerPart'>
          <Team list={this.state.teamOne} title={this.state.teamOneTitle}/>
          <PokemonSelector addToTeamOne={this.addToTeamOne} addToTeamTwo={this.addToTeamTwo}/>
          <Team list={this.state.teamTwo} title={this.state.teamTwoTitle}/>
        </div>
      </div>
    );
  }
}

export default App;
