import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from './actions';

class Task extends React.Component {
    constructor() {
        super();

        this.state = {
            todoVal: '',
            doneclass: ''
        }

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }

    componentWillMount() {
        this.doneClass();

        this.setState({
            todoVal: this.props.task.val
        })
    }

    edit(e) {
        this.setState({
            todoVal: e.target.value
        })
        this.props.editTask(this.refs.task_edit.value, this.props.id)
    }

    delete() {
        this.props.deleteTask(this.props.id)
    }

    doneClass() {
        if (this.props.task.isdone) {
            this.setState({
                doneclass: 'done-true'
            })
        } else {
            this.setState({
                doneclass: 'done-false'
            })
        }
    }

    toggleDone() {
        if (this.props.task.isdone) {
            this.setState({
                doneclass: 'done-false'
            })
        } else {
            this.setState({
                doneclass: 'done-true'
            })
        }
        this.props.toggleDone(this.props.id)
    }

    render() {
        return (
            <tr>
                <td className="tasks">
                    <input type="text" ref="task_edit" className="input-edit" value={this.state.todoVal} onChange={this.edit.bind(this)} />
                </td>
                <td className="actions">
                    <button onClick={this.toggleDone} className={this.state.doneclass}>
                        <i className="fa fa-check"></i>
                    </button>
                    <button onClick={this.delete} className="delete">
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

export default connect(()=>{return {}}, mapDispatchToProps)(Task);