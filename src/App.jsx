import Header from "./Components/Header"
import Pokemon from "./Components/Pokemon"
import Card from "./Components/Card"
import { useEffect, useState } from 'react'
import Pagination from "./Components/Pagination"
function App() {

  
  const [pokemonArray, setPokemonArray] = useState([])
  const [urlArray, setUrlArray] = useState([])
  const [counter, setCounter] = useState(0)
  const [card, setCard] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const [pokemonNumber, setPokemonNumber] = useState(0)

  let url = `https://pokeapi.co/api/v2/pokemon?limit=21&offset=${counter}`



  useEffect(() => {

    const getUrl = async () => {
      const response = await fetch(url)
      const result = await response.json()
      setUrlArray([...result.results])
      setPokemonNumber(result.count)
    }
    getUrl()

  },[counter])

  useEffect(() => {

    let pokeArray = []
    Promise.all(urlArray.map(url => {
      fetch(url.url)
      .then(response => response.json())
      .then(response => {
        pokeArray.push(response)
        pokeArray.sort((a,b) => {
          return a.id  - b.id
        })
        setPokemonArray([...pokeArray])
      })
    }))
  },[urlArray])

  const createID = () => {

    const date = Date.now().toString(32)
    const random = Math.random().toString(32).substring(2)

    return date+random

  } 
  console.log(urlArray)
  return (
    <div className="container mt-20 mx-auto">
      
      <Header/>
      
      {
        card ? <Card 
                setCard={setCard}
                pokemon = {pokemon}
                /> :
        ""
      }
      
      <div className="md:grid grid-cols-3 gap-4 mt-20">

        {

          pokemonArray.map((pokemon) => {
              return (
                <Pokemon
                    key = {createID()}
                    name = {pokemon.name}
                    weight = {pokemon.weight}
                    height = {pokemon.height}
                    number = {pokemon.id}
                    type = {pokemon.types[1]  ? `${pokemon.types[0].type.name}/${pokemon.types[1].type.name}` : pokemon.types[0].type.name}
                    img = {pokemon.sprites.front_default}
                    pokemon = {pokemon}
                    setCard = {setCard}
                    setPokemon = {setPokemon}
                  />
              )
          })
        }

      </div>

      <Pagination 
        setCounter = {setCounter} 
        pokemonNumber = {pokemonNumber}
        />
    </div>
  )
}

export default App
