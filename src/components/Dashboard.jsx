import React, { useState } from 'react'
import SelectedList from './SelectedList';
import PokemonList from './PokemonList';

const Dashboard = () => {

  return (
    <div>
      <SelectedList/>
      <PokemonList/>
    </div>
  )
}

export default Dashboard