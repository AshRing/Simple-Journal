import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setYearFilter, setMonthFilter } from '../actions/filters';
import moment from 'moment';

class Filters extends React.Component {
    state = {
        monthValue: undefined
    }

    onTextChange = e => {
        this.props.setTextFilter(e.target.value);
    }

    onYearChange = e => {
        this.props.setYearFilter(e.target.value);
    }

    onMonthChange = e => {
        this.props.setMonthFilter(parseInt(e.target.value));
        this.setState({monthValue: e.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
                {this.props.filters.years.length !== 0 ? (<select value="" onChange={this.onYearChange}>
                    {
                        this.props.filters.years.map((year) => {
                            return <option value={year} key={year}>{year}</option>
                        })
                    }
                </select>) : null
                }
                <select value={this.state.monthValue} onChange={this.onMonthChange}>
                    <option value={13}>Select month</option>
                    <option value={0}>January</option>
                    <option value={1}>February</option>
                    <option value={2}>March</option>
                    <option value={3}>April</option>
                    <option value={4}>May</option>
                    <option value={5}>June</option>
                    <option value={6}>July</option>
                    <option value={7}>August</option>
                    <option value={8}>September</option>
                    <option value={9}>October</option>
                    <option value={10}>November</option>
                    <option value={11}>December</option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    entries: state.entries,
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setYearFilter: (year) => dispatch(setYearFilter(year)),setMonthFilter: (month) => dispatch(setMonthFilter(month)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);