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
          new Task(tasks.get().length + completed_tasks.get().length, task_name.get())
        ]
      )
      task_name.set('')
    }
  }

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result
    if(
      !destination ||
      (
        destination.droppableId === source.droppableId && 
        destination.index === source.index
      )
    ) {
      return
    }

    let add
    let active = tasks.get()
    let completed = completed_tasks.get()

    if(source.droppableId === 'tasks') {
      add = tasks.get()[source.index]
      active.splice(source.index, 1)
    } else {
      add = completed[source.index]
      completed.splice(source.index, 1)
    }

    if(destination.droppableId === 'tasks') {
      active.splice(destination.index, 0, add)
    } else {
      completed.splice(destination.index, 0, add)
    }

    completed_tasks.set(completed)
    tasks.set(active)
    console.log(tasks.get())
    console.log(completed_tasks.get())
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='about-react-typescript'>
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