import {combineReducers} from 'redux';

const taskReducer = (state = [], action = {type: ''}) => {
    switch(action.type) {
        case 'GET':
            state = action.val;
            return state;
        case 'ADD':
            state = state.concat({title: action.val, completed: false});
            return state;
        case 'DELETE':
            return state.filter((task, index) => {
                return action.id !== index
            })
        case 'EDIT':
            return state.map((task, i) => {
                if (i == action.id) {
                    task.title = action.val
                }

                return task;
            })
        case 'TOGGLE_DONE':
            return state.map((task, i) => {
                if (i == action.id) {
                    task.completed = !task.completed
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