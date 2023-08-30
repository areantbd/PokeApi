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
      <div className="d-flex gap-5 pt-3 justify-content-center">
        <button className="btn btn-lg btn-outline-light" onClick={() => setSearchRoute(pokemonsSearch?.previous)} disabled={!pokemonsSearch.previous ? true : false}>Prev</button>
        <button className="btn btn-lg btn-outline-light" onClick={() => setSearchRoute(pokemonsSearch?.next)}  disabled={!pokemonsSearch.next ? true : false}>Next</button>
      </div>
      <div className="d-flex gap-3 flex-wrap justify-content-evenly mt-5 pb-2">
        {pokemonsList && pokemonsList.map((pokemon) => (
          <>
            <PokemonCard url={pokemon.url} name={pokemon.name} key={pokemon.name} />
            {/* <h5 key={pokemon.name}>{pokemon.name}</h5> */}
          </>
        ))}
      </div>
      <div className="d-flex gap-5 pb-3 justify-content-center">
        <button className="btn btn-lg btn-outline-light" onClick={() => setSearchRoute(pokemonsSearch?.previous)} disabled={!pokemonsSearch.previous ? true : false}>Prev</button>
        <button className="btn btn-lg btn-outline-light" onClick={() => setSearchRoute(pokemonsSearch?.next)}  disabled={!pokemonsSearch.next ? true : false}>Next</button>
      </div>
    </>
  )
}

export default Pokemons