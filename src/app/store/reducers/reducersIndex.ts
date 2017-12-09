import { counterReducer} from './counter/couter';
import {userReducer} from './user/user';
import { routerReducer } from './router/router';

export const reducers = { counter: counterReducer, user: userReducer, router: routerReducer};
