import './A.css'

export function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a 
      href={props.href}
      className='A'>
      {props.children}
    </a>
  )
}