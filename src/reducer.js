import {combineReducers} from 'redux';

let data = [
    {val: 'buy an island', isdone: true},
    {val: 'go to mars', isdone: false},
    {val: 'climbed Everest for the 23th time', isdone: false}
];

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => {data = json; console.log(json)})
  
const taskReducer = (state = data, action) => {
    switch(action.type) {
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