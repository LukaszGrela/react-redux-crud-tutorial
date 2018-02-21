import { store } from './store/configureStore';
import { actionListUsers, actionListUsersSuccess } from './actions/actionUsers';

console.log('store.getState', store.getState());

store.dispatch(actionListUsers()).then(result => {
    console.log("response",result);
    store.dispatch(actionListUsersSuccess(result.payload.data.data));
});