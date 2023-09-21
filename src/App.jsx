// import { useEffect, useState } from 'react';
import { createContext, useEffect, useState } from 'react';
import './App.css';
// import { Characters } from './components/characters';

import { Pokemon } from "./components/pokemonKingdom";
import { Details } from './components/pokemonDetails';
import { Characters } from './components/characters';

export const pokemonContext = createContext();
export const modalContext = createContext();
function App() {
  const [pokemonDetail,setPokemonDetails] = useState({});
  const [showModal,setShowModal] = useState(false);

  useEffect(()=>{
    if(showModal){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'unset'
    }
  })

  return (
    <modalContext.Provider value={{setShowModal}}>
    <pokemonContext.Provider value={{pokemonDetail,setPokemonDetails}}>
      <Pokemon/>
      { showModal && <div className='modal-container'>
       <Details/>
      </div>}
      
    </pokemonContext.Provider>
    </modalContext.Provider>
  );
}

export default App;
