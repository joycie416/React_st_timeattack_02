import React, { useState } from 'react'
import SelectedList from './SelectedList';
import PokemonList from './PokemonList';

const Dashboard = ({mock, setMock, selected, setSelected}) => {

  return (
    <div>
      <SelectedList mock={mock} setMock={setMock} selected={selected} setSelected={setSelected}/>
      <PokemonList mock={mock} setMock={setMock} selected={selected} setSelected={setSelected}/>
    </div>
  )
}

export default Dashboard