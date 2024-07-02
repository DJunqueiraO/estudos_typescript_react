import { createElement } from 'react'
import './Button.css'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    createElement('button', {
        ...props,
        className: `Button ${props.className || ''}`
    })
  )
}