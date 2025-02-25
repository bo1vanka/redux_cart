import { createStore } from 'redux';
import cartReduser from './reducers/cartReduser';
const store = createStore(cartReduser);
export default store;