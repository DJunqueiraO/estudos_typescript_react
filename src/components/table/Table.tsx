import { Td, TdProps, Th, ThProps, Tr, TrProps } from '../Components'

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode,
  thead_children?: Array<Array<React.ReactNode>>,
  tbody_children?: Array<Array<React.ReactNode>>,
  tfoot_children?: Array<Array<React.ReactNode>>,
  on_tfoot_td?: (column: React.ReactNode, index: number) => React.ReactNode,
  on_tfoot_tr?: (column: React.ReactNode, index: number) => React.ReactNode,
  on_tbody_td?: (column: React.ReactNode, index: number) => React.ReactNode,
  on_tbody_tr?: (column: React.ReactNode, index: number) => React.ReactNode,
  on_thead_th?: (column: React.ReactNode, index: number) => React.ReactNode,
  on_thead_tr?: (column: React.ReactNode, index: number) => React.ReactNode,
  tfoot_td_props?: TdProps,
  tfoot_tr_props?: TrProps,
  tbody_td_props?: TdProps,
  tbody_tr_props?: TrProps,
  thead_th_props?: ThProps,
  thead_tr_props?: TrProps,
  caption?: React.ReactNode
}

export function Table(props: TableProps) {

  const on_tfoot_td = props.on_tfoot_td || (
    (column: React.ReactNode, index: number) => (
      <Td {...props.tfoot_td_props} className='tfoot-td' key={index}>{column}</Td>
    )
  )

  const on_tfoot_tr = props.on_tfoot_tr || (
    (line: Array<React.ReactNode>, index: number) => (
      <Tr {...props.tfoot_tr_props} className='tfoot-tr' key={index}>{line.map(on_tfoot_td)}</Tr>
    )
  )

  const on_tbody_td = props.on_tbody_td || (
    (column: React.ReactNode, index: number) => (
      <Td {...props.tbody_td_props} className='tbody-td' key={index}>{column}</Td>
    )
  )

  const on_tbody_tr = props.on_tbody_tr || (
    (line: Array<React.ReactNode>, index: number) => (
      <Tr {...props.tbody_tr_props} className='tbody-tr' key={index}>{line.map(on_tbody_td)}</Tr>
    )
  )

  const on_thead_th = props.on_thead_th || (
    (column: React.ReactNode, index: number) => (
      <Th {...props.thead_th_props} className='thead-th' key={index}>{column}</Th>
    )
  )

  const on_thead_tr = props.on_thead_tr || (
    (line: Array<React.ReactNode>, index: number) => (
      <Tr {...props.thead_tr_props} className='thead-tr' key={index}>{line?.map(on_thead_th)}</Tr>
    )
  )

  return (
    <table
      {...props}
      className={`table ${props.className || ''}`}>
      {props.caption &&
        <caption>{props.caption}</caption>
      }
      {props.thead_children &&
        <thead>{props.thead_children?.map(on_thead_tr)}</thead>
      }
      {props.tbody_children &&
        <tbody>{props.tbody_children?.map(on_tbody_tr)}</tbody>
      }
      {props.tfoot_children &&
        <tfoot>{props.tfoot_children?.map(on_tfoot_tr)}</tfoot>
      }
    </table>
  )
}
