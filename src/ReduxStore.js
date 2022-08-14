import {
    createStore
} from 'redux';
import Reducer from '../src/Reducers/CounterReducer';

const initialState = {
    formData: {}
}
const store = createStore(Reducer, initialState);

export default store;