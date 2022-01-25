import axios from 'axios';
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import PokemonCard from './components/PokemonCard'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: [],
    }
  }
  getPokeData = (url) => {
    axios.get(url)
      .then(res => {
        let data
        data = [...this.state.pokemons]
        data.push(res.data)
        this.setState({ pokemons: data });
      })
      .catch(err => {
        console.error(err);
      })
  }
  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(res => {
        res.data.results.map((el) => (
          // console.log(el)
          this.getPokeData(el.url)
        ))
      })
      .catch(err => {
        console.error(err);
      })
    console.log(this.state.pokemons)
  }
  render() {
    const { pokemons } = this.state;

    return (
      <>
        <Navbar />
        <div style={{ padding: 20 }}>
          {
            pokemons.map((poke, index) => (
              <PokemonCard pokemon={poke} key={index} />
            ))
          }
        </div>
      </>
    );
  }
}
export default App;
