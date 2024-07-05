import './Tr.css'

export function Tr(props: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      {...props}
      className={`tr ${props.className || ''}`}/>
  )
}