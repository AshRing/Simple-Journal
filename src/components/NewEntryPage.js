import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { addEntry } from '../actions/entries';
import { addCategory } from '../actions/categories';
import Category from './Category';

class NewEntryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: 'Begin writing here...',
            tag: '',
            selectedCategories: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        if(this.state.content !== 'Begin writing here...') {
            const entry = {
                name: this.state.name,
                content: this.state.content,
                tags: this.state.tags,
                createdAt: moment().format('dddd, MMMM Do YYYY')
            }

            this.props.addEntry(entry);
            this.setState({toEntryList: true});
        }
    }

    handleSubmitTag = (e) => {
        e.preventDefault();

        if(this.state.tag) {
            const tag = this.state.tag.toLowerCase();
            const found = this.props.categories.find((x) => {
                return x === tag;
            });
            if(found === undefined) {
                this.props.addCategory(tag);
                this.setState({tag: ''});
            } //ADD ERROR MESSAGE
        }

    }

    handleChange = (e) => {
        if(e.target.nodeName === 'TEXTAREA') {
            this.setState({content: e.target.value});
        } else {
            this.setState({tag: e.target.value});
        }
    }

    handlePickCategory = (category) => {
        const found = this.state.selectedCategories.find((x) => x === category);
        console.log(found);
        if(found === undefined) {
            this.setState({selectedCategories: [...this.state.selectedCategories, category]});
        }
    }

    render() {
        if(this.state.toEntryList === true) {
            return <Redirect to='/yournotebook/' />
        }

        return (
            <div className='notebook dashboard NewEntry'>
                
                    <Link to='/yournotebook/' className="NewEntry__backLink">&larr; Back</Link>
                    <h1 className='NewEntry__date'>{moment().format('dddd, MMMM Do YYYY')}</h1>
                    <form id='newEntryForm' onSubmit={this.handleSubmit}></form>
                    <form id='tagForm' onSubmit={this.handleSubmitTag}></form>
                    <div className='NewEntry__body'>
                        <textarea form='newEntryForm' onChange={this.handleChange} value={this.state.content}></textarea>
                        <h2>Tags</h2>
                        {this.props.categories.length === 0 ? null : this.props.categories.map((category) => <Category category={category} key={category} handlePickCategory={this.handlePickCategory} />)}
                        <input form='tagForm' type="text" value={this.state.tag} onChange={this.handleChange} />
                        <input form='tagForm' type="submit" value='+' />
                        <input form='newEntryForm' type="submit" value='Submit' className='NewEntry__submitBtn'/>
                    </div>
                <div className='notebook__lines'></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories
});

const mapDispatchToProps = (dispatch) => ({
    addEntry: (entry) => dispatch(addEntry(entry)),
    addCategory: (category) => dispatch(addCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEntryPage);