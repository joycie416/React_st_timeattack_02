import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PokemonCard = ({ card, setMock, selected, setSelected }) => {
  const { img_url, korean_name, id, isSelcted } = card;
  const navigate = useNavigate();

  const editMock = (newCard) => {
    setMock(prev => {
      const newMock = [...prev];
      newMock[newCard.id - 1] = newCard;
      return newMock;
    })
  }

  const handleSelected = (newCard) => {
    setSelected(prev => {
      let newSelected = [...prev];

      if (newCard.isSelcted) {
        if (newSelected.length === 6) {
          alert('최대 6장까지 선택 가능합니다.');
          return prev;
        } else if (newSelected.find(card => card.id === newCard.id)) {
          alert('이미 선택된 카드입니다.');
          return prev;
        } else {
          newSelected.push(newCard);
          console.log('added :', newSelected);
          return newSelected;
        }
      } else {
        newSelected = newSelected.filter(card => card.id !== newCard.id);
        console.log('removed :', newSelected)
        return newSelected;
      }


    })
  }

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