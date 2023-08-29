import { Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ScrollToTop from './components/UI/ScrollToTop'
import Pokemons from './screens/Pokemons'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/pokemons' element={<Pokemons />} />
      </Routes>
    </>
  )
}

export default App
