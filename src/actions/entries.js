import database from '../firebase/firebase';

export const addEntry = (entry) => ({
    type: 'add_entry',
    entry
});

export const startAddEntry = (entryData = {}) => {
    return (dispatch) => {
        const {
            content = '',
            createdAt = 0
        } = entryData;
        const entry = {content, createdAt};

        return database.ref('entries').push(entry).then((ref) => {
            dispatch(addEntry({
                id: ref.key,
                ...entry
            }));
        })
    }
}

export const removeEntry = ({id} = {}) => ({
    type: 'remove_entry',
    id
});

export const editEntry = ({id, updates} = {}) => ({
    type: 'edit_entry',
    id,
    updates
});

export const setEntries = (entries) => ({
    type: 'set_entries',
    entries
});

export const startSetEntries = () => {
    return (dispatch) => {
        return database.ref('entries')
            .once('value')
            .then((snapshot) => {
                const entries = [];

                snapshot.forEach((childSnapshot) => {
                    entries.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                console.log(entries);
                dispatch(setEntries(entries));
            });
    }
}


