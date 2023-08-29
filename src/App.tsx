import { Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ScrollToTop from './components/UI/ScrollToTop'
import Pokemons from './screens/Pokemons'
import { useInitialStore } from './zustand-stores/InitialStore'

function App() {
  
  const background = useInitialStore(state => state.background)

  return (
    <div id='body' style={{background: background}}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/pokemons' element={<Pokemons />} />
      </Routes>
    </div>
  )
}

export default App
