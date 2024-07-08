import './Th.css'

export type ThProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement>

export function Th(props: ThProps) {
  return (
    <th
      {...props}
      className={`th ${props.className || ''}`}/>
  )
}