import React from 'react'
import { useNavigate } from 'react-router-dom'

const StartPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>StartPage</div>
      <button onClick={() => {
        navigate('/dashboard');
      }}>
        START!
      </button>
    </>
  )
}

export default StartPage