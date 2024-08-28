import React, { useContext } from 'react'
import styled from 'styled-components'
import PokemonCard from './PokemonCard'
import { MockContext } from '../context/MockContextProvider'
import { useSelector } from 'react-redux'

const PokemonList = () => {
  const mock = useSelector(state => state.mock);

  return (
    <CardsContainer>
      {mock.map(card => {
        return <PokemonCard card={card} key={card.id}/>
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