import {useState} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx'
import UpdateForm from './components/UpdateForm'
import ToDo from './components/ToDo.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {
const [toDo, setToDo] = useState([]);

const [newTask, setNewTask] = useState('');
const [updateData, setUpdateData] = useState('');

// addTask
const addTask = () => {
  if(newTask) {
    let num = toDo.length + 1;
    let newEntry = { id: num, title: newTask, status: false }
    setToDo([...toDo, newEntry])
    setNewTask('');
  }
}

//deleteTask
const deleteTask = (id) => {
  let newTasks = toDo.filter( task => task.id !== id)
  setToDo(newTask);
//this-----------^ is plural in video
}

// markDone
const markDone = (id) => {
  let newTask = toDo.map( task => {
    if( task.id === id ) {
      return ({ ...task, status: !task.status })
    }
    return task;
  })
  setToDo(newTask);
}

//cancelUpdate
const cancelUpdate = () => {
  setUpdateData('');
}

//changeTask
const changeTask = (e) => {
  let newEntry = {
    id: updateData.id,
    title: e.target.value,
    status: updateData.status ? true : false
  }
  setUpdateData(newEntry);
}

//updateTask
const updateTask = () => {
  let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
  let updatedObject = [...filterRecords, updateData]
  setToDo(updatedObject);
  setUpdateData('');
}

return (
<div className="container_app">
  <br /><br />
  <h2>ToDo List</h2>
  <br /><br />

  {updateData && updateData ? (

    <UpdateForm
      updateData={updateData}
      updateTask={updateTask}
      cancelUpdate={cancelUpdate}
      changeTask={changeTask}
    />

  ) : (

    <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
    />
  )}

  {toDo && toDo.length ? '' : 'No Tasks...'}
    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />
  
</div>

);
}

export default App;
