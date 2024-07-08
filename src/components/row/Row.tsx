import './Row.css'

export type RowProps = (
  React.HTMLAttributes<HTMLDivElement> & 
  React.CSSProperties &
  {
    children?: Array<React.ReactNode>,
    max_items?: number,
    key?: number
  }
)

export function Row(props: RowProps) {

  const onStyle = () => {
    const max_items = props.max_items || props.children?.length
    return {...props,
      gridTemplateColumns: `repeat(${max_items}, 1fr)`
    }
  }

  const onClassName = () => {
    return `Row ${props.className || ''}`
  }

  return (
    <div
      {...props}
      style={onStyle()}
      className={onClassName()}/>
  )
}