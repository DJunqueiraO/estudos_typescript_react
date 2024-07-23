import './CssProTips7.css'

type CssProTips7Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips7(props: CssProTips7Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips7 ${props.className || ''}`}>
      <button/>
      <button/>
      <button children={<a href="https://pianoweb-aa440.web.app/">piano</a>}/>
      <button>
        <a href="https://pianoweb-aa440.web.app/">piano</a>
      </button>
      <button/>
    </div>
  )
}