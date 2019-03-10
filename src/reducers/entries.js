
const entryReducer = (state = [], action) => {
    switch(action.type) {
        case 'add_entry':
            return [
                ...state,
                action.entry
            ]
        case 'remove_entry':
            return state.filter(({id}) => id !== action.id)
        case 'edit_entry':
            return state.map((entry) => {
                if(entry.id === action.id) {
                    return {...entry, ...action.updates}
                } else {
                    return entry;
                }
            });
        case 'set_entries':
            return action.entries;
        default:
            return state;
    }
}

export default entryReducer;