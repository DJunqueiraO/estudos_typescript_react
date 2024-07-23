import './CssProTips4.css'

type CssProTips4Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips4(props: CssProTips4Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips4 ${props.className || ''}`}>
      <div className="ExampleBox1"/>
      <div className="ExampleBox2"/>
    </div>
  )
}