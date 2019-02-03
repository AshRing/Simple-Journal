import React from 'react';
import { connect } from 'react-redux';
import { toggleNotebook } from '../actions/content';

const Notebooks = (props) => {
    console.log(props.notebooks);
    return props.notebooks.map((notebook) => {
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        return <a href="#" onClick={(e) => {
            e.preventDefault();
        
            props.toggleNotebook();
        }}>{notebook.name}</a>
    })
}

const mapStateToProps = (state) => { //function determines what info from the store we want our component to access
    return {
        notebooks: state.notebooks
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleNotebook: () => dispatch(toggleNotebook())
});

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);