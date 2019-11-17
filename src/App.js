import React from 'react';
import TaskBar from './taskbar';
import TaskList from './tasklist';

class App extends React.Component {
  render() {
    return (
      <div className="todo">
        <h1 className="title">TODO Aplication</h1>
        <TaskBar />
        <TaskList />
      </div>
    )
  }
}

export default App;
