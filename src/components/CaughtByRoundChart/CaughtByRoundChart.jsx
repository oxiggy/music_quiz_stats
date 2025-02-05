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
  meikuColorSoft, nokiColorMain, nokiColorSoft,
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
      text: 'Caught By Round Chart',
    },
  },
};

const labels = ['Game OST', 'Rainy Mood Pick', 'Movie OST', 'Hard Game Mode', 'Strangest Track', 'Best MV'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Brainstorm',
      data: [5,3,4,7,5,7],
      borderColor: brainstormColorMain,
      backgroundColor: brainstormColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'Disgust',
      data: [5,5,4,3,6,3],
      borderColor: disgustColorMain,
      backgroundColor: disgustColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'MeiKu',
      data: [7,7,6,7,6,2],
      borderColor: meikuColorMain,
      backgroundColor: meikuColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'oxiggy',
      data: [3,2,3,3,3,3],
      borderColor: oxiggyColorMain,
      backgroundColor: oxiggyColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'tehfreak',
      data: [1,5,2,3,4,5],
      borderColor: tehfreakColorMain,
      backgroundColor: tehfreakColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'TREX',
      data: [1,2,1,2,2,5],
      borderColor: trexColorMain,
      backgroundColor: trexColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'Volska',
      data: [6,3,6,3,5,5],
      borderColor: volskaColorMain,
      backgroundColor: volskaColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'Noki',
      data: [1,4,4,3,3,3],
      borderColor: nokiColorMain,
      backgroundColor: nokiColorSoft,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
  ],
};

const CaughtByRoundChart = () => {
  return (
    <Line options={options} data={data} />
  );
}

export default memo(CaughtByRoundChart);

