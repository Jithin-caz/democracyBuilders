import {combineReducers} from 'redux'
import { constiReducer } from './constiReducer';

const reducers=combineReducers({
   
    ConstituencyReducer:constiReducer,
});

export default reducers