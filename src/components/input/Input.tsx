import { forwardRef } from 'react'
import './Input.css'

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref
  ) {
    return (
      <input 
        {...props}
        ref={ref}
        className={`input ${props.className || ''}`}
        placeholder={props.placeholder}
        type={props.type || "input"}/>
    )
  }
)