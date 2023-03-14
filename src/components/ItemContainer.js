// mapsstatetoprops but recommended using useSelector and useDispatch hooks for accessinf store and react redux connection

import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFuncton = ownProps.cake ? () => dispatch(buyCake()) : dispatch(buyIceCream())

    return {
        buyItem: dispatchFuncton
    }
}


export default connect(null, mapStateToProps, mapDispatchToProps)(ItemContainer)
