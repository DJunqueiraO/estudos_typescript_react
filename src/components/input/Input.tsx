import './Input.css'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
      className={`Input ${props.className || ''}`}
      placeholder={props.placeholder}
      type={props.type || "input"}/>
  )
}