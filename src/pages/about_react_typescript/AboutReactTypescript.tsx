import { Form } from '../../components/Components'
import { useStateAsObject } from '../../utils/Utils'
import './AboutReactTypescript.css'

const AboutReactTypescript: React.FC = function(props: React.HTMLAttributes<HTMLDivElement>) {

  const todo = useStateAsObject('teste')
  
  return (
    <div className='AboutReactTypescript'>
      <span className='heading'>taskify</span>
      <Form
        state={todo}/>
    </div>
  )
}

export { AboutReactTypescript }