import { createElement } from 'react'
import './Button.css'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`button ${props.className || ''}`}/>
  )
}