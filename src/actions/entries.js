import uuid from 'uuid';

export const addEntry = ({content = '', createdAt = 0, tags = []} = {}) => ({
    type: 'add_entry',
    entry: {
        id: uuid(),
        tags,
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


