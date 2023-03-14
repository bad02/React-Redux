// action payload

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function NewCakeContainer(props) {
    const [number, setnumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setnumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

const mapStateToProps = state => {   // accessing redux state in component
    return {
        numOfCakes: state.cake.numOfCakes  // cake key specified in root reducer
    }
}

const mapDispatchToProps = dispatch => {   //dispatching state                                                   
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
