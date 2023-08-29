import axios from "axios"
import { useEffect, useState } from "react"
import PokemonCard from "../components/PokemonCard"

interface Pokemon{
  results: Array<object>,
  next: string,
  previous: string,
  name: string,
  url: string
}

function Pokemons() {
  const [pokemonsSearch, setPokemonsSearch] = useState({next: "", previous: ""})
  const [pokemonsList, setPokemonsList] = useState<Array<Pokemon>>()
  const [searchROute, setSearchRoute] = useState('https://pokeapi.co/api/v2/pokemon/')

  useEffect(() => {
    axios.get(searchROute)
      .then((data) => {
        setPokemonsSearch({next: data.data.next, previous: data.data.previous})
        setPokemonsList(data.data.results)
      })
      
      .catch(err => console.log(err))
  
    return () => {
      setPokemonsList([])
    }
  }, [searchROute])
  
console.log(pokemonsList)
// console.log(pokemonsSearch.previous)

  return (
    <>
      Pokemons
      <button onClick={() => setSearchRoute(pokemonsSearch?.previous)} disabled={!pokemonsSearch.previous ? true : false}>Prev</button>
      <button onClick={() => setSearchRoute(pokemonsSearch?.next)}  disabled={!pokemonsSearch.next ? true : false}>Next</button>
      {pokemonsList && pokemonsList.map((pokemon) => (
        <>
          <PokemonCard url={pokemon.url} name={pokemon.name} />
          {/* <h5 key={pokemon.name}>{pokemon.name}</h5> */}
        </>
      ))}
    </>
  )
}

export default Pokemons