import axios from 'axios';
import { call, put, take } from 'redux-saga/effects'
import entriesType from '../action/entries.action'

export function* deleteEntrySaga() {

   while(true){
      const {payload} = yield take(entriesType.REMOVE_ENTRY);
       yield call(deleteEntry, payload.id);
       yield put({type:'REMOVE_ENTRY_RESULT', payload: {id: payload.id}});
   }
}

function deleteEntry(id) {
 axios.delete(`http://localhost:4000/entries/${id}`);
 axios.delete(`http://localhost:4000/values/${id}`);
}