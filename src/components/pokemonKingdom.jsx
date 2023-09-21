import { Characters } from './characters';
import { useEffect, useState } from 'react';

export const Pokemon = ()=>{
    const [pokemons,setPokemons] = useState([]);
    const [newUrl,setnewUrl] = useState('');

    
  const fetchPokemons = async(url)=>{
    const res = await fetch(url);
    const data = await res.json();
    setPokemons([...pokemons,...data[0].results]);
    setnewUrl(data[0].next)

  }
  useEffect(()=>{
    fetchPokemons("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1");
  },[]);

  const fetchMorePokemon = ()=>{
    fetchPokemons(newUrl);
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