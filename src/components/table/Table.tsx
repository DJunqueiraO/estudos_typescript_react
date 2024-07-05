import { Td, Th, Tr } from '../Components'
import './Table.css'

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode,
  thead_children?: Array<Array<React.ReactNode>>,
  tbody_children?: Array<Array<React.ReactNode>>,
  tfoot_children?: Array<Array<React.ReactNode>>,
  on_thead_row?: (child: React.ReactNode) => React.ReactNode,
  on_tbody_row?: (child: React.ReactNode) => React.ReactNode,
  on_tfoot_row?: (child: React.ReactNode) => React.ReactNode,
  on_thead_column?: (child: React.ReactNode) => React.ReactNode,
  on_tbody_column?: (child: React.ReactNode) => React.ReactNode,
  on_tfoot_column?: (child: React.ReactNode) => React.ReactNode,
  caption?: React.ReactNode
}

export function Table(props: TableProps) {

  const on_thead_row = props.on_thead_row || function(row) {return row}
  const on_tbody_row = props.on_tbody_row || function(row) {return row}
  const on_tfoot_row = props.on_tfoot_row || function(row) {return row}

  const on_thead_column = props.on_thead_column || function(row) {return row}
  const on_tbody_column = props.on_tbody_column || function(row) {return row}
  const on_tfoot_column = props.on_tfoot_column || function(row) {return row}

  return (
    <table
      {...props}
      className={`table ${props.className || ''}`}>
      {props.caption &&
        <caption>{props.caption}</caption>
      }
      {props.thead_children &&
        <thead>
          {
            props.thead_children?.map(
              (line, index) => (
                on_thead_row(
                  <Tr className='thead-tr' key={index}>
                    {
                      line.map(
                        (column, index) => (
                          on_thead_column(
                            <Th className='thead-th' key={index}>
                              {column}
                            </Th>
                          )
                        )
                      )
                    }
                  </Tr>
                )
              )
            )
          }
        </thead>
      }
      {props.tbody_children &&
        <tbody>
          { 
            props.tbody_children?.map(
              (line, index) => (
                on_tbody_row(
                  <Tr className='tbody-tr' key={index}>
                    {
                      line.map(
                        (column, index) => (
                          on_tbody_column(
                            <Td className='tbody-td' key={index}>
                              {column}
                            </Td>
                          )
                        )
                      )
                    }
                  </Tr>
                )
              )
            )
          }
        </tbody>
      }
      {props.tfoot_children &&
        <tfoot>
          {
            props.tfoot_children?.map(
              (line, index) => (
                on_tfoot_row(
                  <Tr className='tfoot-tr' key={index}>
                    {
                      line.map(
                        (column, index) => (
                          on_tfoot_column(
                            <Td className='tfoot-td' key={index}>
                              {column}
                            </Td>
                          )
                        )
                      )
                    }
                  </Tr>
                )
              )
            )
          }
        </tfoot>
      }
    </table>
  )
}
