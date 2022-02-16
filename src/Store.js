import {createStore} from "redux"
import ItemOperations from "./Reducers/ItemOperations";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    ItemOperations
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;