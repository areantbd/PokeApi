import { Link } from "react-router-dom"
import { useInitialStore } from "../zustand-stores/InitialStore.jsx"

function HomeScreen() {
  
  const setCharmander = useInitialStore(state => state.charmander)
  const setSquirtle = useInitialStore(state => state.squirtle)
  const setBulbasaur = useInitialStore(state => state.bulbasaur)

  return (
    <>
    <h3 className="pt-3 text-center">Elige un pokemon</h3>
    <div className="d-flex justify-content-evenly flex-wrap">
      <div className="d-flex flex-column">
        <img className="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="" />
        <button onClick={() => setCharmander()} className="btn btn-danger">Charmander</button>
      </div>
      <div className="d-flex flex-column">
        <img className="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" />
        <button onClick={() => setSquirtle()} className="btn btn-info">Squirtle</button>
      </div>
      <div className="d-flex flex-column">
        <img className="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" />
        <button onClick={() => setBulbasaur()} className="btn btn-success">Bulbasaur</button>
      </div>
    </div>
    <h1 className="mt-5 text-center">Y ahora...</h1>
    <div className="d-flex mt-3">
      <Link to={'/pokemons'} className="btn btn-lg btn-outline-secondary mx-auto" >Avancemos</Link>
    </div>
    </>
  )
}

export default HomeScreen