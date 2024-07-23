import './CssProTips8.css'

type CssProTips8Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips8(props: CssProTips8Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips8 ${props.className || ''}`}>
      <input type="checkbox" id='input_checkbox'/>
      <label htmlFor='input_checkbox'>Click-Me</label>
    </div>
  )
}