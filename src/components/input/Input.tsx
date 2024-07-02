import { createElement, forwardRef } from 'react'
import './Input.css'

export const Input = forwardRef(
  function (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref
  ) {
    return (
      createElement('input', {
        ...props, ref,
        className: `Input ${props.className || ''}`,
        placeholder: props.placeholder,
        type: props.type || "input"
      })
    )
  }
)