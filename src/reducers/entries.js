import { createReducer } from 'redux-starter-kit';



const entryReducer = createReducer([], {
    add_entry: (state, action) => [...state, action.entry],
    remove_entry: (state, action) => state.filter(({id}) => id !== action.id),
    edit_entry: (state, action) => state.map((entry) => {
        if(entry.id === action.id) {
            return {...entry, ...action.updates}
        } else {
            return entry;
        }
    })
});

export default entryReducer;