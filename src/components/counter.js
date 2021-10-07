import React, { useState } from 'react'
import withCounter from './hoc/withCounter'

const Counter = ({counter, onClickHandler}) => {


  return (
    <div>
      <button onClick = {onClickHandler}>
        clicked {counter} times
      </button>
    </div>
  )
}

export default  withCounter(Counter)
