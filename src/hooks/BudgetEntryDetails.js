import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux'
import { addEntryRedux, updateEntryRedux } from '../action/entries.action';
import {v4 as uuidv4 } from 'uuid';
import { closeModal } from '../action/modal.action';

function BudgetEntryDetails(desc="", val="", isExp=false) {
    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setExpense] = useState(isExp);
    const dispatch = useDispatch();
    
    useEffect(() => {
      setDescription(desc);
      setValue(val);
      setExpense(isExp);
    }, [desc, val, isExp]);

    function addEntry() {
      dispatch(addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense
      }));
      resetValues();
    }

    function updateEntry(id) {
       dispatch(updateEntryRedux(
         id,
         {
           id,
           description,
           value,
           isExpense
         }));
       dispatch(closeModal());
       resetValues();
    }

    function resetValues() {
      setDescription('');
      setValue('');
      setExpense(false);
    }

    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setExpense,
        addEntry,
        updateEntry
    };
}

export default BudgetEntryDetails
