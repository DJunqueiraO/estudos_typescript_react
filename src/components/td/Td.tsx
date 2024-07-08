import './Td.css'

export type TdProps = React.TdHTMLAttributes<HTMLTableDataCellElement>

export function Td(props: TdProps) {
  return (
    <td
      {...props}
      className={`td ${props.className || ''}`}/>
  )
}