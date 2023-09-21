import { createContext, useContext, useEffect, useState } from "react";
import { modalContext, pokemonContext } from "../App";

export const Characters = ({url})=>{
    const {setPokemonDetails} = useContext(pokemonContext);
    const {setShowModal} = useContext(modalContext);
    const [info,setInfo] = useState([]);
    const pokemonDetails = async()=>{
        const response = await fetch(url);
        const details = await response.json();
        console.log(details[0]);
        setInfo(details[0]);
    }

const knowMoreHandler = ()=>{
    setPokemonDetails(info);
    setShowModal(true);
    console.log(info);
}

    useEffect(()=>{
        pokemonDetails();
    },[]);

    return(
          <section className={`card ${info.type}`} key={info.id}>
                  <div>#{info.id}</div>
                  <img src={info.image} alt={`${info.name}`} />
                  <div className="pokemonName">{info.name}</div>
                 <div>Type : {info.type}</div>
                 <button className={`knowMore-btn ${info.type}-btn`} onClick={knowMoreHandler}>Know More</button>
        </section>
    )
}