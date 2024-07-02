import { useEffect, useRef } from 'react'
import './TaskCell.css'
import { Task } from '../../models/Models'
import { UseStateObject, useStateAsObject } from '../../utils/Utils'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Draggable } from 'react-beautiful-dnd'

type TaskCellProps = React.FormHTMLAttributes<HTMLFormElement> & {
  task: Task,
  tasks: UseStateObject<Task[]>,
  index: number
}

interface Edit {
  enabled: boolean,
  name: string
}

export function TaskCell(props: TaskCellProps) {
  const input = useRef<HTMLInputElement>(null)
  const edit = useStateAsObject<Edit>(
    {
      enabled: false,
      name: ''
    }
  )

  useEffect(
    () => {
      if(edit.get().enabled) {
        input.current?.focus()
      }
    }, [edit]
  )

  const onEdit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const enabled = edit.get().enabled
    edit.set({name: props.task.name, enabled: !enabled})
    if(enabled) {
      props.tasks.set(
        props.tasks.get().map(
          task => {
            if(props.task.id === task.id) {
              return {...task, name: edit.get().name}
            }
            return task
          }
        )
      )
    }
  }

  const onDelete = () => {
    props.tasks.set(
      props.tasks.get().filter(
        task => task.name !== props.task.name
      )
    )
  }

  const onDone = () => {
    props.tasks.set(
      props.tasks.get().map(
        task => (
          task.id === props.task.id?
          {...task, isDone: true}
          :
          task
        )
      )
    )
  }

  const onField = () => {
    if(edit.get().enabled) return (
      <input
        ref={input}
        className="TaskCellInput"
        value={edit.get().name}
        onChange={event => edit.set({...edit.get(), name: event.target.value})}/>
    )
    if(props.task.isDone) return (
      <s className="TaskCellText TaskCellTextDone">{props.task.name}</s>
    )
    return (
      <span className="TaskCellText">{props.task.name}</span>
    )
  }
  
  return (
    <Draggable draggableId={`${props.className || ''}${props.index}`} index={props.index}>
      {
        (provided, snapshot) => (
          <form
            {...props}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`TaskCell ${props.className || ''} ${snapshot.isDragging? 'isTaskCellDragging' : ''}`}
            onSubmit={onEdit}
            ref={provided.innerRef}>
            {onField()}
            <div>
              {
                !props.task.isDone && <span 
                  onClick={onEdit}
                  className='TaskCellIcon'>
                  <AiFillEdit/>
                </span>
              }
              <span 
                onClick={onDelete}
                className='TaskCellIcon'>
                <AiFillDelete/>
              </span>
              <span 
                onClick={onDone}
                className='TaskCellIcon'>
                <MdDone/>
              </span>
            </div>
          </form>
        )
      }
    </Draggable>
  )
}