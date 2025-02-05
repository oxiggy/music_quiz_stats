import { memo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  brainstormColorMain,
  brainstormColorSoft,
  disgustColorMain,
  disgustColorSoft,
  meikuColorMain,
  meikuColorSoft,
  oxiggyColorMain,
  oxiggyColorSoft,
  tehfreakColorMain,
  tehfreakColorSoft, trexColorMain, trexColorSoft, volskaColorMain, volskaColorSoft
} from '@/components/shared/colors.jsx';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Guess By Round Chart',
    },
  },
};

const labels = ['Game OST', 'Rainy Mood Pick', 'Movie OST', 'Hard Game Mode', 'Strangest Track', 'Best MV'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Brainstorm',
      data: [3,5,3,4,6,6],
      borderColor: brainstormColorMain,
      backgroundColor: brainstormColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'Disgust',
      data: [4,4,5,5,5,5],
      borderColor: disgustColorMain,
      backgroundColor: disgustColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'MeiKu',
      data: [4,4,4,4,7,6],
      borderColor: meikuColorMain,
      backgroundColor: meikuColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'oxiggy',
      data: [7,9,7,7,5,6],
      borderColor: oxiggyColorMain,
      backgroundColor: oxiggyColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'tehfreak',
      data: [7,4,7,5,5,5],
      borderColor: tehfreakColorMain,
      backgroundColor: tehfreakColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'TREX',
      data: [6,7,6,7,7,7],
      borderColor: trexColorMain,
      backgroundColor: trexColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'Volska',
      data: [5,5,5,6,6,5],
      borderColor: volskaColorMain,
      backgroundColor: volskaColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
  ],
};

const GuessByRoundChart = () => {
  return (
    <Line options={options} data={data} />
  );
}

export default memo(GuessByRoundChart);

