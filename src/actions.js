const Actions = {
    getTasks(value) {
        return {
            type: 'GET',
            val: value
        }
    },
    addTask(value) {
        return {
            type: 'ADD',
            val: value
        }
    },
    deleteTask(id) {
        return {
            type: 'DELETE',
            id: id
        }
    },
    editTask(value, id) {
        return {
            type: 'EDIT',
            val: value,
            id: id
        }
    },
    toggleDone(id) {
        return {
            type: 'TOGGLE_DONE',
            id: id
        }
    }
}

export default Actions;