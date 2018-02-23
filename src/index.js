import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { actionListUsers, actionListUsersSuccess } from './actions/actionUsers';
import { UsersList } from './components/UsersList';
import UsersListContainer from './containers/UsersListContainer';

/*
store.dispatch(actionListUsers()).then(result => {
    console.log("response",result);
    store.dispatch(actionListUsersSuccess(result.payload.data.data));
});
console.log('index.js');
*/
store.subscribe(() => {
    console.log('store.getState', store.getState());
})

import './styles/index.scss';

ReactDOM.render(<Provider store={store}>
    <UsersListContainer />
</Provider>, document.getElementById('root'));