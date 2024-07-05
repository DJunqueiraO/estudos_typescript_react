import { Grid, Table } from '../../components/Components'
import './Home.css'

export function Home(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className='home'>
      <Grid align_columns='true'>
        {
          [
            [1, 2, 3],
            [1, 2],
            [1, 2, 3, 4, 5],
          ]
        }
      </Grid>
      <Table
        thead_children={[
          ['Item 1', 'Item 2', 'Item 3'],
          ['Item 1', 'Item 2'],
          ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        ]}
        tbody_children={[
          ['Item 1', 'Item 2', 'Item 3'],
          ['Item 1', 'Item 2'],
          ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        ]}
        />
    </div>
  )
}

Home.href = '/'