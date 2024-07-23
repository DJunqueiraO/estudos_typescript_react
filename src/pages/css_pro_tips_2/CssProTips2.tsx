import './CssProTips2.css'

type CssProTips2Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips2(props: CssProTips2Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips2 ${props.className || ''}`}>
      <div/>
    </div>
  )
}