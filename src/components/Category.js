import React from 'react';

class Category extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategories: []
        }
    }

    handleClick = (e) => {
        const category = e.target.getAttribute('data-id');
        this.props.handlePickCategory(category);
        
    }

    render() {
        return <span className='category' key={this.props.category} data-id={this.props.category} onClick={this.handleClick}>{this.props.category.toUpperCase()}</span>
    }
    
}

export default Category;