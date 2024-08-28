import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MockContext } from '../context/MockContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { handleSelected } from '../redux/slices/selectedSlice';
import { editMock } from '../redux/slices/mockSlice';

const PokemonCard = ({ card }) => {
  const { img_url, korean_name, id, isSelcted } = card;
  const navigate = useNavigate();

  // const {editMock, selected, handleSelected} = useContext(MockContext);
  const selected = useSelector(state => state.selected);
  const dispatch = useDispatch();

  return (
    <Card onClick={() => {
      id !== 0 ? navigate(`/detail?id=${id}`) : navigate(`/dashboard`)
    }}>
      <img src={img_url} style={{ height: '100px', width: '100px' }} />
      <p>{korean_name}</p>
      <p>{id}</p>
      {korean_name !== 'empty' ?
        (<button onClick={(e) => {
          e.stopPropagation();
          if (!isSelcted && selected.length < 6) {
            const newCard = { ...card };
            newCard.isSelcted = !newCard.isSelcted;
            dispatch(handleSelected(newCard));
            dispatch(editMock(newCard));
          } else if (!isSelcted && selected.length === 6) {
            alert('최대 6장까지');
          } else {
            const newCard = { ...card };
            newCard.isSelcted = !newCard.isSelcted;
            dispatch(handleSelected(newCard));
            dispatch(editMock(newCard));
          }
        }}>{isSelcted ? '해제' : '선택'}</button>)
        : <button>빈칸</button>}
      {/* <button onClick={(e) => {
        e.stopPropagation();
        if (!isSelcted && selected.length < 6) {
          const newCard = { ...card };
          newCard.isSelcted = !newCard.isSelcted;
          handleSelected(newCard);
          editMock(newCard);
        } else if (!isSelcted && selected.length === 6) {
          alert('최대 6장까지');
        } else {
          const newCard = { ...card };
          newCard.isSelcted = !newCard.isSelcted;
          handleSelected(newCard);
          editMock(newCard);
        }
      }}>{isSelcted ? '해제' : '선택'}</button> */}
    </Card>
  )
}

export default PokemonCard

const Card = styled.div`
  width: 150px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`