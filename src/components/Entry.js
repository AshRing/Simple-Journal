import React from 'react';
import moment from 'moment';


const Entry = (props) => {
    const date = moment(props.createdAt).format('dddd, MMMM Do YYYY');

    return (
        <div className='Entry' data-id={props.entry.id} onClick={props.handleClick}>
            <p className='Entry__date' data-id={props.entry.id}>{date}</p>
            <p>{props.entry.content}</p>
        </div>
        
    );
}

export default Entry;