import {combineReducers} from 'redux';

const taskReducer = (state = [], action = {type: ''}) => {
    switch(action.type) {
        case 'GET':
            state = action.val;
            return state;
        case 'ADD':
            state = state.concat({val: action.val, isdone: false});
            return state;
        case 'DELETE':
            return state.filter((task, index) => {
                return action.id !== index
            })
        case 'EDIT':
            return state.map((task, i) => {
                if (i == action.id) {
                    task.val = action.val
                }

                return task;
            })
        case 'TOGGLE_DONE':
            return state.map((task, i) => {
                if (i == action.id) {
                    task.isdone = !task.isdone
                }

                return task;
            })
        default:
            return state; 
    }
},
reducers = combineReducers({
    tasks : taskReducer
})

export default reducers;