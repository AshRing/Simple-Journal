import React from 'react';
import { connect } from 'react-redux';

const Content = (props) => (
    <div>
        {props.content.isEntryOpen && <p>Entry is open</p>}
    </div>
);

const mapStateToProps = (state) => ({
    content: state.content
})


export default connect(mapStateToProps)(Content);