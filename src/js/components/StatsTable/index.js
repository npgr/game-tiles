import React from 'react'
//import PropTypes from 'prop-types';

const StatsTable = ({ stats }) => (
  <div>
    <div> User     Steps </div>
    {stats.map((stat, i) => (
      <div key={i}>
        {stat.user} <span>{stat.steps}</span>
      </div>
    ))}
  </div>
)

export default StatsTable
