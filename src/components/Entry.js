import React from 'react';
import moment from 'moment';


const Entry = (props) => {
    const date = moment(props.createdAt).format('dddd, MMMM Do YYYY');
    const content = props.entry.content.split('\n');

    return (
        <div className='Entry' data-id={props.entry.id} onClick={props.handleClick}>
            <p className='Entry__date' data-id={props.entry.id}>{date}</p>
            <p>{content.map((x) => {
                return <React.Fragment key={x}>{x}<br/></React.Fragment>
            })}</p>
        </div>
        
    );
}

export default Entry;