// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialEntries, action) => {
    let newEntries;
   switch (action.type) {
     case  'ADD_ENTRY':
       newEntries = state.concat(action.payload);
       return newEntries;
     case 'REMOVE_ENTRY':
       newEntries = state.filter((entry) => entry.id !== action.payload.id);
       return newEntries;
     default:
      return state;
   }
 }


 var initialEntries = [
    {
      id: 1,
      description: 'Work Income',
      value: 500.00,
      isExpense: false
    },
    {
      id: 2,
      description: 'Electric Bill',
      value: 50.00,
      isExpense:  true
    },
    {
      id: 3,
      description: 'Rent',
      value: 100.00,
      isExpense:  true
    },
    {
      id: 4,
      description: 'Water Bill',
      value: 30.00,
      isExpense:  true
    }
  ];