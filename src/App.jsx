import Header from "./Components/Header"
import Pokemon from "./Components/Pokemon"
import { useEffect, useState } from 'react'
function App() {

  
  const [pokemonArray, setPokemonArray] = useState([])

  let url = "https://pokeapi.co/api/v2/pokemon/"

  const createID = () => {

    const date = Date.now().toString(32)
    const random = Math.random().toString(32).substring(2)

    return date+random

  }
  const createType = (typeArray) => {

    if(typeArray.lenght < 2){
      return  `${typeArray[0].type.name}/${typeArray[1].type.name}`
    }
    else {
      return  `${typeArray[0].type.name}`
    }
  }
  
  
  useEffect(() => {

    const getPokemonArray = async () => {
        let pokemon = []
        for(let i = 1; i < 898; i++){
          const response = await fetch(url+i)
          const result = await response.json();
          pokemon = [...pokemon, result]
          
        }
        setPokemonArray([...pokemon])
    }
    getPokemonArray()

  },[])


  console.log(pokemonArray)
  return (
    <div className="container mt-20 mx-auto">
      
      <Header/>

      <div className="md:grid grid-cols-3 gap-4 mt-20">

        {
          
          pokemonArray.map((pokemon) => {

            return (
              <Pokemon 
          key = {createID()}
          name = {pokemon.name}
          type = {createType(pokemon.types)}
          weight = {pokemon.weight}
          height = {pokemon.height}
          number = {pokemon.id}
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
