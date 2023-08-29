
type Props = {
  url: string,
  name: string
}


function PokemonCard({ url, name }: Props) {
  return (
    <>
    <h2>
    {name}

    </h2>
    {url}
    </>
  )
}

export default PokemonCard