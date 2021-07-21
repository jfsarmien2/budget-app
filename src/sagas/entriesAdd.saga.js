import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects'
import entriesType from '../action/entries.action'

export function* addEntrySaga() {
   yield takeLatest(entriesType.ADD_ENTRY, addEntry);
}

 function* addEntry(payload) {
    console.log(payload);
}