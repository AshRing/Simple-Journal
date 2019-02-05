import React from 'react';
import moment from 'moment';


const Entry = (props) => {
    const date = moment(props.createdAt).format('dddd, MMMM Do YYYY');

    return (
        <div className='Entry' data-id={props.entry.id} onClick={props.handleClick}>
            <p className='Entry__date' data-id={props.entry.id}>{date}</p>
            {props.entry.tags !== [] ? (
                    <p className='Entry__tags' data-id={props.entry.id}><span className='Entry__tagLabel' data-id={props.entry.id}>Tags:</span> {props.entry.tags.map((tag) => <span className='Entry__tag' key={tag} data-id={props.entry.id}>{tag}&nbsp;</span>)}</p>
                ) : null}
        </div>
        
    );
}

export default Entry;