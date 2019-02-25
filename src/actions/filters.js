export const setTextFilter = (text = '') => ({
    type: 'set_text_filter',
    text
});

export const setYearFilter = (year = undefined) => ({
    type: 'set_year_filter',
    year
});

export const setMonthFilter = (month = undefined) => ({
    type: 'set_month_filter',
    month
});

export const addYear = (newYear) => ({
    type: 'add_year',
    newYear
});