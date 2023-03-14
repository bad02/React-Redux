// hooks for react to redux conection and accessing store

import React from 'react'
import {useSelector, useDispatch} from 'react-redux'  // accessing store
import { buyCake } from '../redux'  //imported action creator function


function HooksCakeContainer() {
   const numOfCakes = useSelector(state => state.cake.numOfCakes)
   const dispatch = useDispatch() 
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake with hooks</button>
    </div>
  )
}

export default HooksCakeContainer
 