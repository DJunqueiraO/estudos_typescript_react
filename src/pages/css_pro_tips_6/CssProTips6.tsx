import './CssProTips6.css'

type CssProTips6Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips6(props: CssProTips6Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips6 ${props.className || ''}`}>
      <div/><div/><div/><div/><div/>
    </div>
  )
}