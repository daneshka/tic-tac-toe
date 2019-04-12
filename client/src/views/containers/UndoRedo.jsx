import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

class UndoRedo extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { canUndo, canRedo, onUndo, onRedo } = this.props;
        return (
            <p>
                <button onClick={onUndo} disabled={!canUndo}>
                    Undo
    </button>
                <button onClick={onRedo} disabled={!canRedo}>
                    Redo
    </button>
            </p>
        )
    }
}

const { func, bool } = PropTypes;

UndoRedo.propTypes = {
    canUndo: bool.isRequired,
    canRedo: bool.isRequired,
    onUndo: func.isRequired,
    onRedo: func.isRequired
};


const mapStateToProps = state => {
    return {
        canUndo: state.gameState.past.length > 1,
        canRedo: state.gameState.future.length > 0
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo)
