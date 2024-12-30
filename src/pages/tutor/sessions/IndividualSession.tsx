import React from 'react'
import { useParams } from 'react-router-dom';

export const IndividualSession = () => {
  
    let params = useParams();
  // params.teamId
  return (
    <div>
        <h1>Individual session: {params.id}</h1>
    </div>
    )
}
