import axios from "axios"
import { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  url: string,
  name: string
}


function PokemonCard({ url, name }: Props) {
  const [pokemon, setPokemon] = useState({
    image: "",
    type: "",
    experience: "",
    height: "",
    weight: 0,
    id: 0
  })

  useEffect(() => {
    axios.get(url)
      .then((data) => {
        setPokemon({
          image: data.data.sprites.front_default,
          type: data.data.types[0].type.name,
          experience: data.data.base_experience,
          height: data.data.height,
          weight: data.data.weight,
          id: data.data.id
        })
      })
      .catch(error => console.error(error))
  }, [ url ])

  console.log(pokemon)
  return (
    <Card sx={{ width: 345, background: "none" }} className="shadow">   
      <div className="d-flex">
        <Typography gutterBottom variant="h4" component="div" className="ms-auto me-3 pt-3">
          {pokemon.id}
        </Typography>
      </div>   
      <CardMedia
        sx={{ height: 200 }}
        image={pokemon.image}
        title={name}
      />
      <CardContent>
          <Typography gutterBottom variant="h4" component="div" className="text-center">
            {name.toUpperCase()}
          </Typography>
        <div className="d-flex justify-content-around">
          <Typography gutterBottom variant="h5" component="div">
            Type: {pokemon.type.toUpperCase()}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Exp: {pokemon.experience}
          </Typography>
        </div>
        <div className="d-flex justify-content-around">
          <Typography gutterBottom variant="h5" component="div">
            Height: {pokemon.height}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Weight: {pokemon.weight}
          </Typography>
        </div>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions hidden>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default PokemonCard