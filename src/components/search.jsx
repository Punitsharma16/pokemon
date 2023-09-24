export const Search = ()=>{
    const searching = (e)=>{
        const {value} = e.target;
    }
    return(
        <>
        <input type="text"
         name="search"
         id="search"
         placeholder="search pokemons here.."
         onChange={searching}/>
        </>
    )
}