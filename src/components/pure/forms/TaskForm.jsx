import {useRef} from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../../models/task.class'
import { LEVELS } from '../../../models/levels.enum'

export const TaskForm = ({add}) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef('')

  function addTask(e) {
    e.preventDefault()
      const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
      
    );
    console.log(newTask);
    add(newTask)
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content aling-items-center mb=4'>
        <div className='from-outline flex-fill'>
          <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name' />
          <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Description Task' />
          <label htmlFor='selectPriority' className='sr-only'>Priority</label>
          <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
            <option value={LEVELS.NORMAL}>
              Normal
            </option>
            <option value={LEVELS.URGENT}>
              Urgent
            </option>
            <option value={LEVELS.BLOCKING}>
              Blocking
            </option>
          </select>          
        </div>
        <button type='submit' className='btn btn-success btn-lg ms-2'> Add</button>
    </form>
  )
}

TaskForm.propTypes = {  
  add : PropTypes.func.isRequired
}