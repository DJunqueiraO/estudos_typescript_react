import './CssProTips5.css'

type CssProTips5Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips5(props: CssProTips5Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips5 ${props.className || ''}`}>
      <div className="Glass"/>
    </div>
  )
}