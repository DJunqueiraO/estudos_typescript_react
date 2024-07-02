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
      className={`TaskContainer ${props.className || ''}`}>
      <Droppable droppableId='tasks'>
        {
          (provided, snapshot) => (
            <div 
              className={`TaskContainerActiveListDiv ${snapshot.isDraggingOver? 'isActiveDraggingOver' : ''}`}
              ref={provided.innerRef} {...provided.droppableProps}>
              <span className="TasksHeading">Active Tasks</span>
              <TaskList 
                className='TaskContainerActiveList' 
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
              className={`TaskContainerCompletedListDiv ${snapshot.isDraggingOver? 'isCompletedDraggingOver' : ''}`}
              ref={provided.innerRef} {...provided.droppableProps}>
              <span className="TasksHeading">Completed Tasks</span>
              <TaskList 
                className='TaskContainerCompletedList' 
                tasks={props.completed_tasks}/>
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>  
    </div>
  )
}