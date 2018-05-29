import {fromJS} from 'immutable';

const initialState = fromJS({
    index: 1,
});
const reducers = {
    ADD(state, {index}) {
        return state.set('index', state.get('index')+index);
    },
};
export const testReducers = (state = initialState, {type, param}) => {
    if (reducers[type]) {
        return reducers[type](state, param);
    } else {
        return state;
    }
};