import uuid from 'uuid';

export const addEntry = ({content = '', createdAt = 0} = {}) => ({
    type: 'add_entry',
    entry: {
        id: uuid(),
        content,
        createdAt
    }
});

export const removeEntry = ({id} = {}) => ({
    type: 'remove_entry',
    id
});

export const editEntry = ({id, updates} = {}) => ({
    type: 'edit_entry',
    id,
    updates
});


