import { take, call, put, fork } from 'redux-saga/effects';
import entryType, { populateEntries, populateEntryDetails } from '../action/entries.action';
import axios from 'axios';

export function* getAllEntries() {
    yield take(entryType.FETCH_ENTRIES);
    const result = yield call(axios, 'http://localhost:4000/entries');
    yield put(populateEntries(result.data));
}

export function* getEntryDetails(id){
    const { data } = yield call(axios, `http://localhost:4000/values/${id}`);
    yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails() {
   const { payload } = yield take(entryType.POPULATE_ENTRIES);
   for (let index = 0; index < payload.length; index++) {
       const entry = payload[index];
       yield fork(getEntryDetails, entry.id);
       
   }
}