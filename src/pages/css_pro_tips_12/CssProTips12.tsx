import './CssProTips12.css'

type CssProTips12Props = React.CSSProperties & React.HTMLAttributes<HTMLDivElement> & {

}

export function CssProTips12(props: CssProTips12Props) {

  return (
    <div
      {...props}
      style={props}
      className={`CssProTips12 ${props.className || ''}`}>
      <div className="wrapper">
        {
          new Array(5).fill(
            <div className="card">
              <h2>Card</h2>
              <p>lorem ipsum dolor sit amet</p>
            </div>
          )
        }
      </div>
    </div>
  )
}