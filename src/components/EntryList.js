import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Entry from './Entry';
import Filters from './Filters';
import selectEntries from '../selectors/entries';
import moment from 'moment';
import $ from 'jquery';

class EntryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedEntry: undefined,
            name: ''
        }
    }

    componentDidMount() {    
        $(".EntryList__body").scroll(function() {
            this.scrollTop = parseInt(this.scrollTop / 30) * 30;
        });

        if(this.props.entries.length === 0) {
            return document.querySelector('.EntryList__body').style.paddingLeft = '2rem';
        }

        
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({name: e.target.value});
    }

    handleClick = (e) => {
        e.preventDefault();
        const entryMatch = this.props.entries.find((x) => {
            return x.id === parseInt(e.target.getAttribute('data-id'));
        });
        console.log(entryMatch);
        this.setState({selectedEntry: entryMatch});
    }

    handleFocus(e) {
        e.target.select();
    }

    noEntries() {

        return <p>Please add an entry to get started</p>
    }

    render() {
        return (
            <div className='EntryList'>
                <div className='EntryList__header'>
                    <Link to="/newEntry/" className='EntryList__link'><span className='EntryList__linkButton'>+</span> New Entry</Link>
                </div>
                <div className='EntryList__body'>
                    <Filters />
                    {this.props.entries.length === 0 ? this.noEntries() : this.props.entries.map((entry) => {
                        return <Entry key={entry.id} handleClick={this.handleClick} entry={entry}/>
                        //<a href="#" onClick={this.handleClick} key={entry.id} data-id={entry.id}>{entry.name}</a>
                    })}
                </div>
                <div className='notebook__lines'></div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => { //function determines what info from the store we want our component to access
    return {
        entries: selectEntries(state.entries, state.filters),
        categories: state.categories
    }
}

export default connect(mapStateToProps)(EntryList);