import React, { Children, createContext, useState } from 'react'
import MOCK_DATA from '../mock'

export const MockContext = createContext(null);

const MockContextProvider = ({children}) => {
  const [mock, setMock] = useState(MOCK_DATA);
  const [selected, setSelected] = useState([]);

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
    <MockContext.Provider value={{mock, editMock, selected, handleSelected}}>
      {children}
    </MockContext.Provider>
  )
}

export default MockContextProvider