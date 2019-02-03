const contentReducerInitialState = {
    isEntryOpen: false,
    selectedEntry: undefined
}

const contentReducer = (state = contentReducerInitialState, action) => {
    switch(action.type) {
        case 'toggle_entry':
            return {
                ...state,
                isEntryOpen: true,
                selectedEntry: action.selectedEntry
            }
        default:
            return state;
    }
}

export default contentReducer;