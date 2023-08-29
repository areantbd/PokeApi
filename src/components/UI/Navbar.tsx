/* eslint-disable @typescript-eslint/no-explicit-any */
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Container from '@mui/material/Container';
import { useInitialStore } from '../../zustand-stores/InitialStore';

function ResponsiveAppBar() {
  
  const primary = useInitialStore(state => state.primary)
  const secondary = useInitialStore(state => state.secondary)

  return (
    <AppBar position="static" sx={{background: primary || "black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className='d-flex justify-content-center'>
          <CatchingPokemonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'red' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: secondary || "white",
              textDecoration: 'none',
            }}
          >
            PokeApi
          </Typography>

          <CatchingPokemonIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'red' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: secondary || "white",
              textDecoration: 'none',
            }}
          >
            PokeApi
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
