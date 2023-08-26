import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Pie } from 'react-chartjs-2';

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
      borderWidth: 1
    },
  ],
};

const PieChart = (props) => {

  const legendColor = props.theme === 'dark' ? '#F8F9FA' : '#212529';

  return <Pie data={data} width={300} height={300} options={{legend:true, color:legendColor, maintainAspectRatio:true, responsive:true}} />;
}

export default PieChart;