//Entry - renders single entry on the EntryList
import React from 'react';
import moment from 'moment';


const Entry = (props) => {
    const date = moment(props.entry.createdAt).format('dddd, MMMM Do YYYY');
    const content = props.entry.content.split('\n'); //split content by new line

    return (
        <div className='Entry'>
            <p className='Entry__date'>{date}</p>
            <p>{content.map((x) => { //Adds a line break after each new line split
                return <React.Fragment key={x}>{x}<br/></React.Fragment>
            })}</p>
        </div>
        
    );
}

export default Entry;