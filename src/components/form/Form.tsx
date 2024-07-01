import { UseStateObject } from '../../utils/Utils'
import { Button, Input } from '../Components'
import './Form.css'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  state: UseStateObject<string>
}

export function Form(props: FormProps) {
  return (
    <form className='Form'>
      <Input 
        className='FormInput'
        placeholder='Enter a task'/>
      <Button 
        type="submit"
        className='FormSubmitButton'>
        Go
      </Button>
    </form>
  )
}