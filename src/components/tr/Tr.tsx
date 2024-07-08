import './Tr.css'

export type TrProps = React.HTMLAttributes<HTMLTableRowElement>

export function Tr(props: TrProps) {
  return (
    <tr
      {...props}
      className={`tr ${props.className || ''}`}/>
  )
}