import './Button.css'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button 
      type={props.type}
      className={`Button ${props.className || ''}`}>
      {props.children}
    </button>
  )
}