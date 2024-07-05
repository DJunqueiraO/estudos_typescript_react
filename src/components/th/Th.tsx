import './Th.css'

export function Th(props: React.HTMLAttributes<HTMLTableHeaderCellElement>) {
  return (
    <th
      {...props}
      className={`th ${props.className || ''}`}/>
  )
}