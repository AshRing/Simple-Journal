//EntryList - dashboard page
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Entry from './Entry';
import Filters from './Filters';
import selectEntries from '../selectors/entries';
import $ from 'jquery';

class EntryList extends React.Component {

    componentDidMount() {    
        $(".EntryList__body").scroll(function() {
            this.scrollTop = parseInt(this.scrollTop / 30) * 30;
        });

        $('.EntryList__body').css('height', Math.floor(($('.notebook').height() - 80) / 30) * 30); 
        $(window).resize(function() {      
           $('.EntryList__body').css('height', Math.floor(($('.notebook').height() - 80) / 30) * 30); 
         });   
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

    noEntries(message) {
        return <p>There are no entries to display. Please add an entry or change filter.</p>
    }

    render() {
        return (
            <div className="notebook dashboard">
                <div className='EntryList'>
                    <div className='EntryList__header'>
                        <Link to="/newEntry/" className='EntryList__link'><span className='EntryList__linkButton'>+</span> New Entry</Link>
                    </div>
                    {this.props.allEntries.length !== 0 ? <Filters /> : null}
                    <div className='EntryList__body'>
                        
                        {this.props.allEntries.length === 0 ? (
                            <p className="EntryList__noEntries">Please add an entry to get started</p>
                        ) : (
                            this.props.entries.length === 0 ? <p className="EntryList__noEntries">No entries match search criteria</p> : this.props.entries.reverse().map((entry) => {
                                return <Entry key={entry.id} handleClick={this.handleClick} entry={entry}/>
                            })
                        )
                        }
                    </div>
                    <div className='notebook__lines'></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => { //function determines what info from the store we want our component to access
    return {
        allEntries: state.entries,
        entries: selectEntries(state.entries, state.filters),
        categories: state.categories
    }
}

export default connect(mapStateToProps)(EntryList);