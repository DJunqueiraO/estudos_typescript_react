import { Grid, Row, Table, Td } from '../../components/Components'
import './Home.css'

export function Home(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className='home'>
      <Grid align_columns='true'>
        {[
            [1, 2, 3],
            [1, 2],
            [1, 2, 3, 4, 5]
        ]}
      </Grid>
      <Table
        thead_children={[
          [1, 2, 3],
          [1, 2],
          [1, 2, 3, 4, 5]
        ]}
        tbody_children={[
          [1, 2, 3],
          [1, 2],
          [1, 2, 3, 4, 5]
        ]}
        />
    </div>
  )
}

Home.href = '/'