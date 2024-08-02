import './CssProTips11.css'

type CssProTips11Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips11(props: CssProTips11Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips11 ${props.className || ''}`}>
      <h2>teste</h2>
      <h2>teste</h2>
      <h2>teste</h2>
      <h2>teste</h2>
      <h2>teste</h2>
      <h2>teste</h2>
    </div>
  )
}