import './Th.css'

export function Th(props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) {
  return (
    <th
      {...props}
      className={`th ${props.className || ''}`}/>
  )
}