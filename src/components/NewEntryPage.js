import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { addEntry } from '../actions/entries';
import { addCategory } from '../actions/categories';
import $ from 'jquery';

class NewEntryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: 'Begin writing here...',
            category: '',
            selectedCategories: []
        }
    }

    componentDidMount() {
        $(".NewEntry__textarea").scroll(function() {
            this.scrollTop = parseInt(this.scrollTop / 30) * 30;
         });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        if(this.state.content !== 'Begin writing here...' && this.state.content !== '') {
            const entry = {
                name: this.state.name,
                content: this.state.content,
                category: this.state.category,
                createdAt: moment().format('dddd, MMMM Do YYYY')
            }

            this.props.addEntry(entry);
            this.setState({toEntryList: true});
        }
    }


    handleChange = (e) => {
        if(e.target.nodeName === 'TEXTAREA') {
            this.setState({content: e.target.value});
        } else {
            this.setState({tag: e.target.value});
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
                    {/* <form id='tagForm' onSubmit={this.handleSubmitTag}></form> */}
                    <div className='NewEntry__body'>
                        <textarea className='NewEntry__textarea' form='newEntryForm' onChange={this.handleChange} value={this.state.content}></textarea>
                        {/* <h2>Tags</h2> */
                        //this.props.categories.length === 0 ? null : this.props.categories.map((category) => <Category category={category} key={category} handlePickCategory={this.handlePickCategory} />)
                        /* <input form='tagForm' type="text" value={this.state.tag} onChange={this.handleChange} />
                        <input form='tagForm' type="submit" value='+' /> */}
                        
                    </div>
                    <input form='newEntryForm' type="submit" value='Submit' className='NewEntry__submitBtn'/>
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