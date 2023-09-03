import React from 'react'
import { ProductCard } from 'components/ProductCard'
import { useParts } from './model/useParts'
import { v4 as uuidv4 } from 'uuid';
import { Backdrop, CircularProgress } from '@material-ui/core';

export const Parts = () => {
  const {view} = useParts()
  
  return (
      view.loading ? (<div>
      <Backdrop
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>) : (
    <div style={{ width: "100%", display: "inline"}}>
      {console.log("!!!!!!!!!!!!!", view.parts[0].name)}
    {view.parts.map((part) => {
      return <ProductCard part={part} key={uuidv4()}/>;
    })}
  </div>)
    
  )
}

// сделать loader и map запчастей из backend