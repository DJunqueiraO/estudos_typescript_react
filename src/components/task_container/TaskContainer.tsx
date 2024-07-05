import { createElement } from 'react'
import { Task } from '../../models/Models'
import { UseStateObject } from '../../utils/Utils'
import './TaskContainer.css'
import { TaskList } from '../Components'
import { Droppable } from 'react-beautiful-dnd'

interface TaskContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  tasks: UseStateObject<Task[]>,
  completed_tasks: UseStateObject<Task[]>
}

export function TaskContainer(props: TaskContainerProps) {
  return (
    <div
      {...props}
      className={`task-container ${props.className || ''}`}>
      <Droppable droppableId='tasks'>
        {
          (provided, snapshot) => (
            <div 
              className={`task-container-active-list-div ${snapshot.isDraggingOver? 'is-active-dragging-over' : ''}`}
              ref={provided.innerRef} {...provided.droppableProps}>
              <span className="tasks-heading">Active Tasks</span>
              <TaskList 
                className='task-container-active-list' 
                tasks={props.tasks}/>
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>  
      <Droppable droppableId='completed_tasks'>
        {
          (provided, snapshot) => (
            <div 
              className={`task-container-completed-list-div ${snapshot.isDraggingOver? 'is-completed-dragging-over' : ''}`}
              ref={provided.innerRef} {...provided.droppableProps}>
              <span className="tasks-heading">Completed Tasks</span>
              <TaskList 
                className='task-container-completed-list' 
                tasks={props.completed_tasks}/>
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>  
    </div>
  )
}