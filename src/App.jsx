import { useState,useEffect } from 'react';
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import PrograssTracker from './components/PrograssTracker';
import './style.css'



export default function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });


  const addTask = (task)=>{
    setTasks([...tasks, task])
  }


  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i != index))
  }

  const clearTasks = () => {
    setTasks([]);
  }
  return (
    <div>
      <header>
        <h1>TaskMan</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks}
       updateTask = {updateTask} 
       deleteTask = {deleteTask}/>
      <PrograssTracker tasks={tasks}/>

      {tasks.length > 0 && (<button className='clear-btn'
        onClick={clearTasks}>clear All Tasks</button>)}
      
    </div>
  )
}