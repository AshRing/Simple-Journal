import { createReducer } from 'redux-starter-kit';

const categoryReducer = createReducer(['2018', '2019'], {
    add_category: (state, action) => [...state, action.category]
});

export default categoryReducer;