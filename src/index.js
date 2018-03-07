import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import UsersListContainer from './containers/UsersListContainer';

import './styles/index.scss';

ReactDOM.render(<Provider store={store}>
    <UsersListContainer />
</Provider>, document.getElementById('root'));