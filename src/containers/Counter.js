import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../store/actions';
import CounterLabel from
    '../components/CounterLabel/CounterLabel';
import CounterButton from
    '../components/CounterButton/CounterButton';

import './Counter.css';

class Counter extends Component {
    render() {
        return (
            <div className="Counter">
                <CounterLabel value={this.props.ctr} />
                <CounterButton
                    clicked={this.props.onAdd}
                    label="Add" />
                <CounterButton
                    clicked={this.props.onSubtract}
                    label="Subtract" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: () => dispatch({ type: actionType.ADD }),
        onSubtract: () => dispatch({type: actionType.SUBTRACT})
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);