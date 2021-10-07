import React from 'react'
import withCounter from './hoc/withCounter'

const Hover = ({counter, onClickHandler}) => {
  return (
    <h1 onMouseOver = {onClickHandler}>Hovered {counter} times</h1>
  )
}

export default  withCounter(Hover)
