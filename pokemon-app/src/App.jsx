import React, {useEffect , useState} from 'react';
import PokemonThumbnail from './components/PokemonThumbnail';
import {Container , Grid , Button , Typography , TextField} from '@mui/material';
import './App.css';
import useDebounce from './components/hooks/useDebounce';


function App() {
  const [allPokemons , setAllPokemons] = useState([]);
  const [loadPoke , setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=5');
  const [searchKeyword , setSearchKeyword] = useState('');
  const [filteredPokemons , setFilteredPokemons] = useState([]);

  const debounceKeyword = useDebounce(searchKeyword , 500);

  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next)


    function createPokemonObject(result){
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json();
        setAllPokemons(currentList => [...currentList , data])
      });
    }
    createPokemonObject(data.results)
  }

  useEffect (() => {
    getAllPokemons()
  } , []);

  useEffect(() => {
    setFilteredPokemons(
      allPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(debounceKeyword.toLowerCase())
      )
    );
  } , [debounceKeyword , allPokemons]);


  console.log(debounceKeyword)

  return (
    <Container>
    <Typography variant="h2" align="center" gutterBottom>
      Pokémon Kingdom
    </Typography>
    <TextField
        label="Search Pokémon"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    <Grid container spacing={2}>
      {filteredPokemons.map((pokemon, index) => {
        const image = pokemon.sprites?.other?.['official-artwork']?.front_default || 
                      pokemon.sprites?.front_default || 
                      'placeholder_image_url'; 

        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <PokemonThumbnail
              id={pokemon.id}
              name={pokemon.name}
              image={image}
              type={pokemon.types[0]?.type?.name || 'Unknown'} // Fallback type
              height={pokemon.height}
              weight={pokemon.weight}
              stats={pokemon.stats}
            />
          </Grid>
        );
      })}
    </Grid>
    <Button
      variant="contained"
      color="primary"
      onClick={getAllPokemons}
      fullWidth
      style={{ marginTop: '20px' }}
    >
      Load More Pokémon
    </Button>
  </Container>
  );
}

export default App;
