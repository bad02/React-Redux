import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
