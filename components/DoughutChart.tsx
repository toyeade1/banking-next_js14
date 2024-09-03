"use client"
/* the only reason this is a component in itself is because it is a client
side component and we are using a library that needs to be initialized 
on the client side */

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughutChart = ({accounts}: DoughnutChartProps) => {
    // here we will define the data we will be using for the chart
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1250,2000,4924],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']

            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
    // here we are configuring how we would like the chart to look
    // cutout is how wide we want the donut to be
    // we are also removing the legend
    // NOTE: for robinhood app we could show this
  return (
    <Doughnut data={data} options={{
        cutout: "60%",
        plugins: {
            legend: {
                display: false
            }
        }
    }} />
  )
}

export default DoughutChart
