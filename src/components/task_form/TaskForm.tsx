import { createElement, useRef } from 'react'
import { UseStateObject } from '../../utils/Utils'
import { Button, Input } from '../Components'
import './TaskForm.css'

interface TaskFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  state: UseStateObject<string>
}

const TaskForm: React.FC<TaskFormProps> = (props) => {

  const input = useRef<HTMLInputElement>(null)

  return (
    createElement('form', {
      ...props,
      onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        if(props.onSubmit) props.onSubmit(event)
        input.current?.blur()
      },
      className: `TaskForm ${props.className || ''}`,
      children: <>
        <Input 
          ref={input}
          value={props.state.get()}
          onChange={
            event => props.state.set(event.target.value)
          }
          placeholder='Enter a task'/>
        <Button 
          type="submit">
          Go
        </Button>
      </>
    })
  )
}

export { TaskForm }