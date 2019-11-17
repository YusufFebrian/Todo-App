import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Actions from './actions';

class TaskBar extends React.Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.refs.task_add.value != "") {
            this.props.addTask(this.refs.task_add.value)
        }

        this.refs.task_add.value = "";
    }

    render() {
        return (
            <div className="taskbar">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="task_add" placeholder="Type a task" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(()=>{return {}}, mapDispatchToProps)(TaskBar);