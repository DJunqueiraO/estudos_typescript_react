import './Td.css'

export function Td(props: React.HTMLAttributes<HTMLTableDataCellElement>) {
  return (
    <td
      {...props}
      className={`td ${props.className || ''}`}/>
  )
}