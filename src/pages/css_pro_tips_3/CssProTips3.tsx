import './CssProTips3.css'

type CssProTips3Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips3(props: CssProTips3Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips3 ${props.className || ''}`}>
      <div>
        <input type="checkbox" id='input_checkbox' />
        <label htmlFor='input_checkbox'>CheckboxInputButton</label>
        <div className="ExampleBox"></div>
      </div>
    </div>
  )
}