import React, { useContext } from 'react'
import styled from 'styled-components'
import PokemonCard from './PokemonCard'
import { MockContext } from '../context/MockContextProvider'

const SelectedList = () => {
  const {selected} = useContext(MockContext)
  const curSelected = [...selected];
  if (curSelected.length < 6) {
    const n = selected.length;
    for (let i = 0; i < 6 - n; i++) {
      curSelected.push({ korean_name: 'empty', id: 0 });
    }
  }
  console.log('curSelected :', curSelected)

  return (
    <>
      <h3>My Pokemons</h3>
      <CardsContainer>
        {curSelected.map((card, idx) => {
          return <PokemonCard card={card} key={`selected${idx}`} />
        })}
      </CardsContainer>
    </>
  )
}

export default SelectedList

const CardsContainer = styled.div`
  width: 100%;

  background-color: gray;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`