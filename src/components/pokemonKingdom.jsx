import { Characters } from './characters';
import { useEffect, useState } from 'react';
import { Loader } from './lodader';

export const Pokemon = ()=>{
    const [pokemons,setPokemons] = useState([]);
    const [newUrl,setnewUrl] = useState('');
    const [loader,setLoader] = useState(false);

    
  const fetchPokemons = async(url)=>{
    setLoader(true);
    const res = await fetch(url);
    const data = await res.json();
    setPokemons([...pokemons,...data[0].results]);
    setnewUrl(data[0].next)
    setLoader(false);

  }
  useEffect(()=>{
    fetchPokemons("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1");
  },[]);

  const fetchMorePokemon = ()=>{
    setLoader(true);
    fetchPokemons(newUrl);
    setLoader(false);
  }
  return (
    <main className='main-container'>
      <header className='header'>
        <div className='content'>
           <h2>Pokemon</h2>
           <h2>Pokemon</h2>
        </div>
        <div className='content2'>
           <h2>KingDom</h2>
           <h2>KingDom</h2>
        </div>
      
      </header>
      {loader && <Loader/>}
      <section className='pokemons'>
        {
          pokemons.map(({url})=>{
            return <Characters url={url}/>
          })
        }
      </section>
      <button className='morePokemon' onClick={fetchMorePokemon}>More Pokemons</button>
      
    </main>
  );
}