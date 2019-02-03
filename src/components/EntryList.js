import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEntry } from '../actions/entries';
import Entry from './Entry';
import moment from 'moment';

class EntryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedEntry: undefined,
            name: ''
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

    onSubmit = (e) => {
        e.preventDefault();
        
        if(this.state.name) {
            const entry = {
                name: this.state.name,
                content: [],
                createdAt: moment()
            }

            this.props.addEntry(entry);
            this.setState({name: ''});
        }
    }

    handleFocus(e) {
        e.target.select();
    }

    render() {
        return (
            <div className='EntryList'>
                <div className='EntryList__header'>
                    <Link to="/newEntry/" className='EntryList__link'><span className='EntryList__linkButton'>+</span> New Entry</Link>
                </div>
                <div className='EntryList__body'>
                    {this.props.entries.length === 0 ? <p>Please add an entry to get started</p> : this.props.entries.map((entry) => {
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        return <Entry key={entry.id} handleClick={this.handleClick} entry={entry}/>
                        //<a href="#" onClick={this.handleClick} key={entry.id} data-id={entry.id}>{entry.name}</a>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => { //function determines what info from the store we want our component to access
    return {
        entries: state.entries
    }
}

const mapDispatchToProps = (dispatch) => ({
    addEntry: (entry) => dispatch(addEntry(entry))
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);