const types = {
    FETCH_ENTRIES: 'FETCH_ENTRIES',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    POPULATE_ENTRY_DETAILS: 'POPULATE_ENTRY_DETAILS',
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    EDIT_ENTRY: 'EDIT_ENTRY',
    REMOVE_ENTRY_RESULT: 'REMOVE_ENTRY_RESULT',
    ADD_ENTRY_RESULT: 'ADD_ENTRY_RESULT'
}

export default types;

export const addEntryRedux = (payload) => {
    return { type: types.ADD_ENTRY, payload };
}

export const removeEntryRedux = (id) => {
    return {type: types.REMOVE_ENTRY, payload: { id }}
}

export const updateEntryRedux = (id, entry) => {
    return { type: types.EDIT_ENTRY, payload: {id, entry} }
}

export const getAllEntries = () => {
    return { type: types.FETCH_ENTRIES }
}

export const populateEntries = (entries) => {
    return { type: types.POPULATE_ENTRIES, payload: entries }
 }

 export const populateEntryDetails = (id, entry) => {
    return { type: types.POPULATE_ENTRY_DETAILS, payload: {id, entry}};
 }