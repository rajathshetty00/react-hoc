// hoc accepts arguement
 import React, { useState } from 'react'
 
 const withCounter = (WrappedComponent) => {

  const NewComponent = () => {
    const [counter, setCounter] = useState(0)
    const onClickHandler = () => {
      setCounter(counter+1)
    }
    return (
     <WrappedComponent counter = {counter}  onClickHandler = {onClickHandler}/>
    )
  }
   return NewComponent
 }
 
 export default withCounter
 