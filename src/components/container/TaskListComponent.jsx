import {useState, useEffect} from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/TaskComponent'
import '../../style/task.scss'
import { TaskForm } from '../pure/forms/TaskForm'


const TaskListComponent = () => {



  const defaultTask1 = new Task('Example1','Description', true , LEVELS.NORMAL)
  const defaultTask2 = new Task('Example2','Description2', false , LEVELS.URGENT)
  const defaultTask3 = new Task('Example3','Description3', false , LEVELS.BLOCKING)
  /**
   * Estado del componente
   */
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2,defaultTask3])

  const [loading, setLoading] = useState(true)

  /**
   * Control del ciclo de vida del componente
   */
  useEffect(() => {
    
    console.log("Task Sate has been modfied");
    setLoading(false)
  
    return () => {
      console.log("TaskLisComponent is going to anmount ");
    }
  }, [tasks])
  
  function completeTask(task) {
    console.log("Complete this task", task);
    const index = tasks.indexOf(task);
    const tempTask = {...tasks}
    console.log(tempTask);     
    tempTask[index].completed = !  tempTask[index].completed;     
    setTasks(Object.values(tempTask));

  }

  function deleteTask(task) {
    console.log("Detelet this task:", task);
    const index = tasks.indexOf(task);
    const tempTask = Object.values(tasks);
    tempTask.splice(index,1);
    setTasks(tempTask);    
  }

  function addTask(task) {
    console.log("Add  task:", task);    
    const tempTask = Object.values(tasks);
    tempTask.push(task)
    setTasks(tempTask); 
  }


 
  return (
    <div className='col-12'>
      <div className='card'>
        <div className='card-header p-3'>
          <h5>
            Your Task:
          </h5>
        </div>
        <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position:'relaitve', height: '400px'}}>
            <table>
              <thead>
                <tr>
                    <th scope='col'>Titel</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>                    
                  </tr>
              </thead>
              <tbody>
                  {tasks.map((task, index) => {
                   return <TaskComponent task={task} key={index} complete={completeTask} remove={deleteTask}></TaskComponent>
                  })}
                 
              </tbody>             
            </table>
        </div>      
      </div>      
      <TaskForm add={addTask}></TaskForm>
    </div>
  )
}


export default TaskListComponent