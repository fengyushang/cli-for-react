import { createStore,combineReducers } from 'redux';
import { testReducers } from 'views/TestStore/reducers';

const rootReducer = combineReducers({
    testReducers,
});
export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
