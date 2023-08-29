import { Link } from "react-router-dom"
import { useInitialStore } from "../zustand-stores/InitialStore.jsx"

function HomeScreen() {
  const primary = useInitialStore(state => state.primary)
  const secondary = useInitialStore(state => state.secondary)
  const background = useInitialStore(state => state.background)
  const setCharmander = useInitialStore(state => state.charmander)
  const setSquirtle = useInitialStore(state => state.squirtle)
  const setBulbasaur = useInitialStore(state => state.bulbasaur)
  console.log(primary)
  console.log(secondary)
  console.log(background)
  return (
    <>
    HOme
    <Link to={'/pokemons'} className="btn btn-lg btn-secondary" >view pokemons</Link>
      <button onClick={() => setCharmander()} className="btn btn-danger">Charmander</button>
      <button onClick={() => setSquirtle()} className="btn btn-info">Squirtle</button>
      <button onClick={() => setBulbasaur()} className="btn btn-success">Bulbasaur</button>
    </>
  )
}

export default HomeScreen