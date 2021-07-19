import { take, call, put, fork } from 'redux-saga/effects';
import entryType from '../action/entries.action';
import axios from 'axios';

export function* getAllEntries() {
    yield take(entryType.FETCH_ENTRIES);
    console.log('I need to get entries now');
    const result = yield call(axios, 'http://localhost:4000/entries');
    console.log(result);
    yield put({ type: entryType.POPULATE_ENTRIES, payload: result.data });
}

export function* getEntryDetails(id){
    const { data } = yield call(axios, `http://localhost:4000/values/${id}`);
    console.log(data);
    yield put({ type: entryType.POPULATE_ENTRY_DETAILS, payload: data});
}

export function* getAllEntriesDetails() {
   const { payload } = yield take(entryType.POPULATE_ENTRIES);
   for (let index = 0; index < payload.length; index++) {
       const entry = payload[index];
       yield fork(getEntryDetails, entry.id);
       
   }
}