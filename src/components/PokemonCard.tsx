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
    type2: "",
    experience: "",
    height: "",
    weight: 0,
    id: 0
  })

  useEffect(() => {
    axios.get(url)
      .then((data) => {
        console.log(data.data)
        setPokemon({
          image: data.data.sprites.front_default,
          type: data.data.types[0].type.name,
          type2: data.data.types[1]?.type.name,
          experience: data.data.base_experience,
          height: data.data.height,
          weight: data.data.weight,
          id: data.data.id
        })
      })
      .catch(error => console.error(error))
  }, [ url ])

  // console.log(pokemon)
  return (
    <Card sx={{ width: 345, background: "none" }} className="shadow border border-2 border-secondary rounded-3">   
      <div className="d-flex">
        <Typography gutterBottom  component="div" className="ms-auto me-3 mt-3 bg-light rounded-5 px-2 text-danger shadow border border-3 border-dark">
          <b>
            {pokemon.id}
          </b>
        </Typography>
        {/* <h4 className="ms-auto me-3 pt-3">{pokemon.id}</h4> */}
      </div>   
      <CardMedia className="bg-dark bg-opacity-10"
        sx={{ height: 300 }}
        image={pokemon.image}
        title={name}
      />
      <CardContent>
          <Typography gutterBottom variant="h4" component="div" className="text-center fw-bolder text-decoration-underline">
            {name.toUpperCase()}
          </Typography>
        <div className="d-flex justify-content-around">
          <Typography gutterBottom variant="h5" component="div" className="d-flex flex-column align-items-center">
            Type: 
            <div className="d-flex gap-2">
              <span className="badge  rounded-pill bg-info">{pokemon.type.toUpperCase()}</span> 
              <span className="badge rounded-pill bg-info">{pokemon.type2?.toUpperCase()}</span>
            </div>
          </Typography>
          <Typography gutterBottom variant="h5" component="div" className="d-flex flex-column align-items-center">
            Exp: <b className="badge bg-success rounded-pill px-4">{pokemon.experience}</b>
          </Typography>
        </div>
        <div className="d-flex justify-content-around">
          <Typography gutterBottom variant="h5" component="div" className="d-flex flex-column align-items-center">
            Height: <b className="badge bg-danger rounded-pill px-4">{pokemon.height}</b>
          </Typography>
          <Typography gutterBottom variant="h5" component="div" className="d-flex flex-column align-items-center">
            Weight: <b className="badge bg-warning rounded-pill px-4">{pokemon.weight}</b>
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