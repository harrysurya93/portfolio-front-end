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
        '#a9bcff',
        '#9affff',
        '#18ffb1',
        '#ffffad',
        '#ffd493',
        '#ff9f8c',
        '#ffbdda'
      ],
      borderColor: [
        '#a9bcff',
        '#9affff',
        '#18ffb1',
        '#ffffad',
        '#ffd493',
        '#ff9f8c',
        '#ffbdda'
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return <Pie data={data} width={300} height={300} options={{ maintainAspectRatio: true }} />;
}

export default PieChart;