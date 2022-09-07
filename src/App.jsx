import Header from "./Components/Header"
import Pokemon from "./Components/Pokemon"
import { useEffect, useState } from 'react'
function App() {

  
  const [pokemonArray, setPokemonArray] = useState([])
  const [pokemon, setPokemon] = useState([])


  let url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

  const createType = (typeArray) => {

    if(typeArray.lenght > 1){
      return `${typeArray[0].type.name}/${typeArray[1].type.name}`
    }
    else {
      return `${typeArray[0].type.name}`
    }

  }
  
  
  useEffect(() => {
    const getPokemonArray = async () => {

        const response = await fetch(url)
        const result = await response.json()
        setPokemonArray([...pokemonArray, ...result.results])
        pokemonArray.forEach( async (pokemon) => {
          const response2 = await fetch(pokemon.url)
          const result2 = await response2.json()
          setPokemon([...pokemon, result2])
        })
    }
    getPokemonArray();
  },[])


  
  
  console.log(pokemon)
  
  return (
    <div className="container mt-20 mx-auto">
      
      <Header/>

      <div className="md:grid grid-cols-3 gap-4 mt-20">

        {
          
          pokemonArray.map((pokemon) => {

            return (
              <Pokemon 
          key = {pokemon.url}
          name = {pokemon.name}
          type = {""}
          weight = {""}
          height = {""}
          number = {""}
          img = {""}
        />
            )
          })
        }

      </div>
      
    </div>
  )
}

export default App
