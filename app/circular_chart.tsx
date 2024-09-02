"use client"

import { Chart, ArcElement } from "chart.js"
import { Doughnut } from "react-chartjs-2"
Chart.register(ArcElement)

const CircularChart = ({ user_data } : { user_data: Object }) => {
  // Use this as an example data.
  let data = {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [200, 150, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };

  user_data = data

  return (
    <div className="w-1/4 h-1/4">
      <Doughnut data={user_data} width={400} height={400} />
    </div>
  )
}

export default CircularChart
