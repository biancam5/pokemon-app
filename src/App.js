import React, { useState, useEffect } from 'react';
import Navbar from './components/NavbarComponent';
import PokemonList from './components/PokemonList';
import { getPokemon, getAllPokemon } from './services/pokemon'; 
import './App.css';
import Button from 'react-bootstrap/Button'; 
import { Container,Row,Col} from 'react-bootstrap';



function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }


  return (
    <Container >
  <Row>
    <Col>
      <Navbar />
    <div className="slider">
        {loading ? <h1 style={{ textAlign: 'start' }}><img src="pikachu.gif" alt="" className="gif"></img>Loading</h1> : (
          <>
    
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <PokemonList key={i} pokemon={pokemon} />
              })}
            </div>
            <hr/>
              <Button variant="secondary"size="lg" onClick={prev}>Prev</Button>
              <Button variant="primary"size="lg" onClick={next}>Next</Button>
          </>
        )}
      </div>
      </Col>
      </Row>
      </Container>
 
  );

}

export default App;
