'use client'
import { useState, useEffect } from "react"
import { PokemonType } from '@/utils/type'
import Pokemon from "@/components/Pokemon"
import FetchButton from "@/components/FetchButton"

const FetchPage = () => {
    const [caughtPokemon, setCaughtPokemon] = useState<PokemonType|null> (null)

    const fetchPokemon = async():Promise<void> => {
        const pokeId:number = Math.floor(Math.random() * 150 + 1)
        try{
        const response:Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        const data= await response.json()

        console.log(data)

        const pokeData:PokemonType ={ 
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map((item: {type:{name:string}}) => item.type.name)
        }

        setCaughtPokemon(pokeData)

        }catch(error){
            console.log("Error:", error)
        }
    }

    useEffect(()=> {
        fetchPokemon()
    },[])

    return (
        <>
            <h1>Gotta Catch em all</h1>
            <p>On page load random pokemon</p>
            <p>Add a button to fetch another pokemon</p>
            <p>Send info to Pokemon component</p>
            <p>We need state, we need an effect</p>
            <p>Funcrion to fectch the pokemon</p>
            <p>Create a type files and export the Pokemon type </p>

            {caughtPokemon && <Pokemon {...caughtPokemon}/>}

            <p >Want to catch another?</p>
            <FetchButton handleClick={fetchPokemon}/>

             <button onClick={() => fetchPokemon() }>Click Here!!</button>
        </>
        
    )
    
}
export default FetchPage 