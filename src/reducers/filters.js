const filtersReducerDefaultState = {
    text: '',
    year: undefined,
    month: undefined,
    years: []
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'set_text_filter':
            return {
                ...state,
                text: action.text
            }
        case 'set_year_filter':
            return {
                ...state,
                year: action.year
            }
        case 'set_month_filter':
            return {
                ...state,
                month: action.month
            }
        case 'add_year':
            return {
                ...state,
                years: [...state.years, action.newYear]
            }
        default:
            return state;
    }
}

export default filtersReducer;