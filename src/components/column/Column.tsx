export type ColumnProps = (
  React.HTMLAttributes<HTMLDivElement> & 
  {
    key?: number
  }
)

export function Column(props: ColumnProps) {
  return (
    <div
      {...props}
      className={`Column ${props.className || ''}`}/>
  )
}