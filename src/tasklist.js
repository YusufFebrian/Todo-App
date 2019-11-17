import React from 'react';
import {connect} from 'react-redux';
import Task from './task';

class TaskList extends React.Component {
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
                    {this.props.tasks.map( (task, i) => <Task key={i} task={task} id={i} />, console.log(this.props.tasks) )}
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

export default connect(mapStateToProps)(TaskList);