import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { addEntry } from '../actions/entries';
import { addYear } from '../actions/filters';
import $ from 'jquery';

class NewEntryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: 'Begin writing here...'
        }
    }

    componentDidMount() {
        $(".NewEntry__textarea").scroll(function() {
            this.scrollTop = parseInt(this.scrollTop / 30) * 30;
         }); //Uses JQuery to fix scrolling in 30px increments so text always stays on the notebook lines
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const createdAt = moment();
        
        if(this.state.content !== 'Begin writing here...' && this.state.content !== '') {
            const entry = {
                content: this.state.content,
                createdAt: createdAt.toISOString()  //serializable ISOstring
            }

            this.props.addEntry(entry); //add entry to store
            if(this.props.filters.years.indexOf(createdAt.year()) === -1) { //if the current year doesn't exist in the filters.years array, add the current year to it
                this.props.addYear(createdAt.year());
            }
            this.setState({toEntryList: true}); //sets up redirect to EntryList page
        }
    }


    handleChange = (e) => {
        if(e.target.nodeName === 'TEXTAREA') {
            this.setState({content: e.target.value});
        }
    }

    render() {
        if(this.state.toEntryList === true) {
            return <Redirect to='/yournotebook/' />
        }

        return (
            <div className='notebook dashboard NewEntry'>
                
                    <Link to='/yournotebook/' className="NewEntry__backLink">Back</Link>
                    <h1 className='NewEntry__date'>{moment().format('dddd, MMMM Do YYYY')}</h1>
                    <form id='newEntryForm' onSubmit={this.handleSubmit}></form>
                    <div className='NewEntry__body'>
                        <textarea className='NewEntry__textarea' form='newEntryForm' onChange={this.handleChange} value={this.state.content}></textarea>  
                    </div>
                    <input form='newEntryForm' type="submit" value='Submit' className='NewEntry__submitBtn'/>
                <div className='notebook__lines'></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories,
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    addEntry: (entry) => dispatch(addEntry(entry)),
    addYear: (newYear) => dispatch(addYear(newYear))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEntryPage);