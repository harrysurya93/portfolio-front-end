import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Programming Languages', 'Frameworks', 'Library', 'Cloud Computing', 'Databases', 'Applications','Others'],
  datasets: [
    {
      label: 'numbers of skills',
      data: [5,4,6,2,4,5,5],
      backgroundColor: [
        'green',
        'red',
        'cyan',
        'blue',
        'black',
        'orange',
        'grey'
      ],
      borderColor: [
        'green',
        'red',
        'cyan',
        'blue',
        'black',
        'orange',
        'grey'
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return <Pie className='' data={data} height={75} width={50} options={{ maintainAspectRatio: true }} />;
}

export default PieChart;