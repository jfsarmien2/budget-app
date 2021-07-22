import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import entriesTypes from '../action/entries.action';

export function* addEntrySaga() {
   yield takeLatest(entriesTypes.ADD_ENTRY, saveEntry);
 }
 
 function* saveEntry({ payload }) {
   yield call(addEntry, payload);
   yield call(addEntryDetails, payload);
   yield put({type: entriesTypes.ADD_ENTRY_RESULT, payload});
 }

 async function addEntry({id, description}) {
   await axios.post('http://localhost:4000/entries', {
      id,
      description
   });
 }

 async function addEntryDetails({id, isExpense, value}) {
   await axios.post('http://localhost:4000/values', {
      id,
      isExpense,
      value
   });
 }