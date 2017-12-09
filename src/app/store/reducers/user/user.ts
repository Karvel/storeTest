import { Action } from '@ngrx/store';

export const UPDATE_NAME = '[user] update name';
export const UPDATE_FINGERPRINT = '[user] update fingerprint';
export const UPDATE_TOKEN = '[user] update token';

interface UserState {
  name: string;
  fingerprint: string;
  token: string;
}

const defaultState: UserState = {
  name: null,
  fingerprint: null,
  token: null
};



export function userReducer(state: UserState = defaultState, action: any) {
    switch (action.type) {
    case UPDATE_NAME: return testUpdate(state, action);
    case UPDATE_FINGERPRINT:
      const newStateUpdateFingerprint = {...state};
      newStateUpdateFingerprint.fingerprint = action.payload.fingerprint;
      return newStateUpdateFingerprint;

    case UPDATE_TOKEN:
      const newStateUpdateToken = {...state};
      newStateUpdateToken.token = action.payload.token;
      return newStateUpdateToken;
    default:
      return state;
  }
}


function testUpdate(state , action) {
  console.log('action', action)
  const newStateUpdateName = {...state};
  newStateUpdateName.name = action.payload.name;
  return newStateUpdateName;
}
