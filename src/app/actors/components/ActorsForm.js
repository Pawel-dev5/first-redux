import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';

const ActorForm = ({ add }) => {

    const actorInput = React.createRef();

    const addActor = (event) => {
        event.preventDefault()
        add(actorInput.current.value)

        actorInput.current.value = ''
    };

    return (
        <form onSubmit={addActor}>
            <input ref={actorInput} />
            <button type="submit">Add actor</button>
        </form>
    )
};

const mapDispatchToProps = dispatch => ({
    add: actor => dispatch(actions.add(actor))
})

export default connect(null, mapDispatchToProps)(ActorForm);