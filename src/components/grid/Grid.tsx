import { Column, Row } from '../Components'
import './Grid.css'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: Array<Array<React.ReactNode>>,
  align_columns?: 'true' | 'false',
  on_row?: (child: React.ReactNode) => React.ReactNode,
  on_column?: (child: React.ReactNode) => React.ReactNode
}

export function Grid(props: GridProps) {

  const on_row = props.on_row || function(row) {return row}
  const on_column = props.on_column || function(row) {return row}

  const on_max_items = () => {
    if(props?.align_columns) return props?.children?.reduce(
      (max, line) => Math.max(max, line.length),
      0
    )
    return 0
  }

  return (
    <div
      {...props}
      className={`grid ${props.className || ''}`}>
      {
        props?.children?.map(
          (line, index) => (
            on_row(
              <Row max_items={on_max_items()} key={index}>
                {
                  line.map(
                    (column, index) => (
                      on_column(
                        <Column key={index}>
                          {column}
                        </Column>
                      )
                    )
                  )
                }
              </Row>
            )
          )
        )
      }
    </div>
  )
}