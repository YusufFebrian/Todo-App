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
    }

    componentWillMount() {
        this.doneClass();

        this.setState({
            todoVal: this.props.task.title
        })
    }

    componentDidMount() {
        setInterval(() => {
            this.doneClass();
        }, 100);
    }

    edit(e) {
        this.setState({
            todoVal: e.target.value
        })
        this.props.editTask(this.refs.task_edit.value, this.props.id)
    }

    doneClass() {
        if (this.props.task.completed) {
            this.setState({
                doneclass: 'done-true'
            })
        } else {
            this.setState({
                doneclass: 'done-false'
            })
        }
    }

    render() {
        return (
            <tr>
                <td className="tasks">
                    <input type="text" ref="task_edit" className="input-edit" value={this.props.task.title} onChange={this.edit.bind(this)} />
                </td>
                <td className="actions">
                    <button onClick={() => {this.props.toggleDone(this.props.id)}} className={this.state.doneclass}>
                        <i className="fa fa-check"></i>
                    </button>
                    <button onClick={() => {this.props.deleteTask(this.props.id)}} className="delete">
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