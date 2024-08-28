import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Detail = ({mock}) => {
  const [searchParams, _] = useSearchParams();
  const id = +searchParams.get('id');
  const {img_url, korean_name, description, types} = mock[id-1];
  return (
    <div>
      <img src={img_url} style={{ height: '100px', width: '100px' }} />
      <p>{korean_name}</p>
      <p>{id}</p>
      <p>{types.join(',')}</p>
      <p>{description}</p>
      
    </div>
  )
}

export default Detail