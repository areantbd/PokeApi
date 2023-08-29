import { Link } from "react-router-dom"

function HomeScreen() {
  return (
    <>
    HOme
    <Link to={'/pokemons'} className="btn btn-lg btn-danger" >view pokemons</Link>
    </>
  )
}

export default HomeScreen