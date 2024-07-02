import { TaskContainer, TaskForm, TaskList } from '../../components/Components'
import { Task } from '../../models/Models'
import { useStateAsObject } from '../../utils/Utils'
import './AboutReactTypescript.css'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'

export function AboutReactTypescript(props: React.HTMLAttributes<HTMLDivElement>) {

  const task_name = useStateAsObject('')
  const tasks = useStateAsObject<Task[]>([])
  const completed_tasks = useStateAsObject<Task[]>([])
  
  const add = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(task_name.get()) {
      tasks.set(
        [...tasks.get(),
          new Task(tasks.get().length, task_name.get())
        ]
      )
      task_name.set('')
    }
  }

  const onDragEnd = (result: DropResult) => {
    console.log(result)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='AboutReactTypescript'>
        <span className='heading'>taskify</span>
        <TaskForm
          onSubmit={add}
          state={task_name}/>
        <TaskContainer
          completed_tasks={completed_tasks}
          tasks={tasks}/>
      </div>
    </DragDropContext> 
  )
}