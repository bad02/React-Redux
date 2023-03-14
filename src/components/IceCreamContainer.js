import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCream - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {   // accessing redux state in component
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams  // key specified in root reducer
    }
}

const mapDispatchToProps = dispatch => {   //dispatching state                                                   
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)