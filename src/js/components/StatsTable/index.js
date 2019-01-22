import React from 'react'
import Table from 'rc-table';
import 'rc-table/assets/index.css';

const StatsTable = ({ stats }) => {
  const columns = [
    { title: 'Name', dataIndex: 'user', key: 'user', width: 250 },
    { title: 'Steps', dataIndex: 'steps', key: 'steps', width: 80 }
  ]
  const data = stats.map((stat, i) => ({ ...stat, key:`${i}`}))

  return (
    <Table
      data={data}
      columns={columns}
    />
  )
}

export default StatsTable
