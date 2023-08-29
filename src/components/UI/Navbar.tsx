/* eslint-disable @typescript-eslint/no-explicit-any */
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Container from '@mui/material/Container';

function ResponsiveAppBar() {

  return (
    <AppBar position="static" className='bg-dark'>
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
              color: 'inherit',
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
              color: 'inherit',
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
