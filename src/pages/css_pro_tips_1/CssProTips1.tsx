import './CssProTips1.css'

type CssProTips1Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips1(props: CssProTips1Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips1 ${props.className || ''}`}>
      <div/><div/><div/>
    </div>
  )
}