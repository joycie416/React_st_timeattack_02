import React from 'react'
import styled from 'styled-components'
import PokemonCard from './PokemonCard'

const PokemonList = ({mock, setMock, selected, setSelected}) => {
  return (
    <CardsContainer>
      {mock.map(card => {
        return <PokemonCard card={card} setMock={setMock} selected={selected} setSelected={setSelected} key={card.id}/>
      })}
    </CardsContainer>
  )
}

export default PokemonList

const CardsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`