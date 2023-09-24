import { useContext } from "react"
import { modalContext, pokemonContext } from "../App"

export const Details = (props)=>{
    const {pokemonDetail:{name,image,weight,height,stats,type},} = useContext(pokemonContext);
    const {setShowModal} = useContext(modalContext);
    
    return(
        <section className={`modal ${type}`}>
            <section className="show-modal">
                <aside>
                <div className="div-1">
                    <img src={image} alt={`${name}`} />
                    <h3>{name}</h3>
                </div>
                <div className="div-2">
                    <p>Weight: {weight}</p>
                    <p>Height: {height}</p>
                </div>
                </aside>
                <aside className="attacks">
                <div className="div-3">
                    {
                        stats.map(({stat},i)=>{
                            return <p>{`stat-${i+1}: ${stat.name}`}</p>
                        })
                    }
                </div>
                    
                <div className="div-4">
                    {
                        stats.map(({base_stat},i)=>{
                            return <p>{`BS-${i+1}: ${base_stat}`}</p>
                        })
                    }
                </div>
                </aside>
            </section>
            <button className="close-btn" onClick={()=> setShowModal(false)}>x</button>
        </section>
    )
}