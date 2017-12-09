import { Action } from '@ngrx/store';

export const NAVIGATION_START = '[router] navigation start';
export const NAVIGATION_END = '[router] navigation end';
export const NAVIGATION_RECOGNIZED = '[router] navigation recognized';
export const NAVIGATION_CANCEL = '[router] navigation cancel';

interface UrlState {
  url: string;
  params: Object;
  queryParams: Object;
}

interface RouterState {
  current: UrlState;
  to: UrlState;
  last: UrlState;
}

const defaultState: RouterState = {
  current: {
    url: null,
    params: null,
    queryParams: null,
  },
  to: {
    url: null,
    params: null,
    queryParams: null,
  },
  last: {
    url: null,
    params: null,
    queryParams: null,
  }

};



export function routerReducer(state: RouterState = defaultState, action: any) {
  switch (action.type) {
    case NAVIGATION_START:
      const newStateStart = {...state};
      newStateStart.to.url = action.payload.url;
      newStateStart.to.params = {};
      newStateStart.to.queryParams = {};
      console.log('start', JSON.stringify(newStateStart));
      return newStateStart;
    case NAVIGATION_RECOGNIZED:
      const newStateRecognized = {...state};
      newStateRecognized.current.url = action.payload.url;
      newStateRecognized.current.params = action.payload.params;
      newStateRecognized.current.queryParams = action.payload.queryParams;
      newStateRecognized.to.url = null;
      newStateRecognized.to.params = null;
      newStateRecognized.to.queryParams = null;
      console.log('recognized', JSON.stringify(newStateRecognized));
      return newStateRecognized;
    case NAVIGATION_END:
      const newStateEnd = {...state};
      newStateEnd.last.url = newStateEnd.current.url;
      newStateEnd.last.params = newStateEnd.current.params;
      newStateEnd.last.queryParams = newStateEnd.current.queryParams;
      newStateEnd.current.url = action.payload.url;
      newStateEnd.current.params = action.payload.params;
      newStateEnd.current.queryParams = action.payload.queryParams;
      newStateEnd.to.url = null;
      newStateEnd.to.params = null;
      newStateEnd.to.queryParams = null;
      console.log('end', JSON.stringify(newStateEnd));
      return newStateEnd;

    case NAVIGATION_CANCEL:
      const newStateCancel = {...state};
      newStateCancel.to.url = null;
      newStateCancel.to.params = null;
      newStateCancel.to.queryParams = null;
      console.log('end', JSON.stringify(newStateEnd));
      return newStateCancel;

    default:
      console.log('router state', JSON.stringify(state));
      return state;
  }
}

