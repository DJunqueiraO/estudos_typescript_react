import './CssProTips9.css'

type CssProTips9Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips9(props: CssProTips9Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips9 ${props.className || ''}`}>
        <h1>Hello World!</h1>
    </div>
  )
}