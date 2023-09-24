import { useContext } from "react"
import { pokemonContext } from "../App";

export const KnowMore = ({info})=>{
    const {setPokemonDetails} = useContext(pokemonContext);
    const knowMoreHandler = ()=>{
        setPokemonDetails(info);
        console.log(info);
    }
    return(
        <button onClick={knowMoreHandler} className={`knowMore-btn`}>Know More</button>
    )
}