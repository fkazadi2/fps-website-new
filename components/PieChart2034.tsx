'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart2034 = () => {
  const data = {
    labels: ['Partenaires PTF', 'État', 'Ménages', 'CSU & TPS'],
    datasets: [
      {
        data: [42, 34, 24, 12],
        backgroundColor: [
          '#f9b233', // Orange pour PTF (42%)
          '#035fa9', // Bleu pour État (34%)
          '#e5004c', // Rouge pour Ménages (24%)
          '#00a19a', // Vert pour CSU & TPS (12%)
        ],
        borderColor: [
          '#f9b233',
          '#035fa9', 
          '#e5004c',
          '#00a19a',
        ],
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // On cache la légende par défaut car on a notre propre légende
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  return (
    <div className="w-64 h-64 mx-auto relative">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <p className="text-lg font-bold text-gray-800">Vision 2034</p>
          <p className="text-sm text-gray-800 font-medium">Financement CSU</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart2034; 