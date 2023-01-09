import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/TaskComponent'


const TaskListComponent = () => {

  const defaultTask = new Task('Example','Default description', false , LEVELS.NORMAL)

  return (
    <div>
      <h1>Your Task:</h1>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}


export default TaskListComponent