import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartPage from '../components/StartPage'
import Dashboard from '../components/Dashboard'
import Detail from '../components/Detail'
import MOCK_DATA from '../mock'

const Router = () => {
  const [mock, setMock] = useState(MOCK_DATA);
  const [selected, setSelected] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<StartPage/>}/>
        <Route path={'/dashboard'} element={<Dashboard mock={mock} setMock={setMock} selected={selected} setSelected={setSelected}/>}/>
        <Route path={'/detail'} element={<Detail mock={mock}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router