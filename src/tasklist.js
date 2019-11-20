import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Task from './task';
import Actions from './actions';

class TaskList extends React.Component {

    componentWillMount() {
        let that = this;
        
        fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
            .then(response => response.json())
            .then(tasks => this.props.getTasks(tasks))
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th className="tasks">Tasks</th>
                        <th className="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map((task, i) => {
                        return <Task key={i} task={task} id={i} />
                    })}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);