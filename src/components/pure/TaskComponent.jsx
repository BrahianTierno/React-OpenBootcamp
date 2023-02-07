import { useEffect }  from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../style/task.scss'
import { LEVELS } from '../../models/levels.enum'


const TaskComponent = ({task,complete,remove}) => {

useEffect(() => {
   
  console.log("Created task");

  return () => {
    console.log(`Task: ${task.name} is going to unmount`);
  }
}, [task])

function taskLevelBadge(){
  switch (task.level) {
    case LEVELS.NORMAL:
        return(<h6 className='mb-0'> <span className='badge bg-primary'>{task.level}</span></h6>)
    case LEVELS.URGENT:
        return(<h6 className='mb-0'> <span className='badge bg-warning'>{task.level}</span></h6>) 
    case LEVELS.BLOCKING:
         return(<h6 className='mb-0'> <span className='badge bg-danger'>{task.level}</span></h6>)
  
    default:
      break;
  }
}

function taskIconCompleted(){
  if(task.completed){
    return <i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color:'green', fontWeight:'bold'}}></i>
  }else{
    return <i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color:'gray'}}></i>
  }
}


  return (

        <tr className='fw-normal'>
          <th>
            <span className='ms-2'>{task.name}</span>
          </th>
          <td className='align-middle'>
             <span >{task.description}</span>
          </td>
          <td className='align-middle'>
             <span >{taskLevelBadge()}</span>
          </td>
          <td className='align-middle'>       
              {taskIconCompleted()}
              <i className='bi-trash task-action' style={{color:'tomato', fontWeight:'bold'}} onClick={() => remove(task)}></i>
          </td>          
        </tr>


        //<div>
         // <h2 className='task-name'>Name:</h2>
       //   <h3>{task.description}</h3>
          //<h4>Level:{task.level}</h4>
         // <h5> This task is: {task.completed ? 'Completed' : 'Pending'}</h5>
        //</div>

  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove : PropTypes.func.isRequired
}

export default TaskComponent