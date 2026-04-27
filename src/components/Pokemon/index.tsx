import { PokemonType } from "@/utils/type";

const Pokemon = ({id, name, image, types}:PokemonType) =>{
    return(
        <div>
            <p>Id : {id}</p>
            <p>Name : {name}</p>
            <img src={image}/>
            <div>
                Types : {types.map((item:string, index)=> <p key={index}> {item} </p>)}
            </div>
        </div>
    )
}
export default Pokemon