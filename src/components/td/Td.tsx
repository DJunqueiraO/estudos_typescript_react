import './Td.css'

export function Td(props: React.TdHTMLAttributes<HTMLTableDataCellElement>) {
  return (
    <td
      {...props}
      className={`td ${props.className || ''}`}/>
  )
}