import { createElement } from 'react'
import { Task } from '../../models/Models'
import { UseStateObject } from '../../utils/Utils'
import './TaskList.css'
import { TaskCell } from '../Components'

interface TaskListProps extends React.HTMLAttributes<HTMLUListElement> {
  tasks: UseStateObject<Task[]>
}

export function TaskList(props: TaskListProps) {
  return (
    createElement('ul', {
        ...props,
        className: `TaskList ${props.className || ''}`,
        children: <>
          {
            props.tasks.get().reduce(
              ($0: Task[], $1: Task) => {
                if(!$0.some(task => task.name === $1.name)) $0.push($1)
                return $0
              },
              []
            ).map(
              (task: Task, index: number) => (
                <TaskCell key={index} index={index} task={task} tasks={props.tasks}/>
              )
            )
          }
        </>
    })
  )
}