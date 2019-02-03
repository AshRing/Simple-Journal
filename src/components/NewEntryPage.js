import React from 'react';
import moment from 'moment';

const NewEntryPage = () => (
    <div className='notebook dashboard NewEntry'>
        <h1 className='NewEntry__date'>{moment().format('dddd, MMMM Do YYYY')}</h1>
        <form>
            <textarea className='NewEntry__textarea'></textarea>
            <button className='NewEntry__submitBtn'>Submit</button>
        </form>
    </div>
);

export default NewEntryPage;