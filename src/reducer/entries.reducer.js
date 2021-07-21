// eslint-disable-next-line import/no-anonymous-default-export
import entryType from '../action/entries.action'

const reducer = (state = initialEntries, action) => {
    let newEntries;
   switch (action.type) {
     case entryType.POPULATE_ENTRIES:
       return [
        ...state,
        ...action.payload
       ];
     case  entryType.ADD_ENTRY_RESULT:
       newEntries = state.concat(action.payload);
       return newEntries;
     case entryType.REMOVE_ENTRY_RESULT:
       newEntries = state.filter((entry) => entry.id !== action.payload.id);
       return newEntries;
     case entryType.POPULATE_ENTRY_DETAILS:
     case  entryType.EDIT_ENTRY:
       newEntries = [...state];
       const index = newEntries.findIndex((entry) => entry.id === action.payload.id);
       newEntries[index] = {...newEntries[index], ...action.payload.entry};
       return newEntries;
     default:
      return state;
   }
 }

 export default reducer;


 var initialEntries = [];