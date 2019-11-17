import {combineReducers} from 'redux';

const taskReducer = (state = [{val: 'buy a house', isdone: true}], action) => {
    switch(action.type) {
        case 'ADD':
            state = state.concat({val: action.val, isdone: false});
            return state;
        case 'DELETE':
            return state.filter((todo, index) => {
                return index !== action.id
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