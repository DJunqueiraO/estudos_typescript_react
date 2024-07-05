import { A } from '../Components'
import './Nav.css'

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  routes: React.ReactElement[]
}

export function Nav(props: NavProps) {
  return (
    <nav 
      {...props}
      className='nav'>
      {
        props.routes.map(
          ($0, index) => (
            <A key={index} href={$0.props.path}>
              {$0.props.element.type.name}
            </A>
          )
        )
      }
    </nav>
  )
}