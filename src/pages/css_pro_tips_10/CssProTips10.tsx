import './CssProTips10.css'

type CssProTips10Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips10(props: CssProTips10Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips10 ${props.className || ''}`}>
      <button>Click-Me &#8675;</button>
      <div>Click-Me &#8675;</div>
    </div>
  )
}