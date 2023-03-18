import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js';
import { chartData, chartOptions } from '@/utils/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const BarChart = () => {
  return (
    <div className="w-full h-[450px] md:col-span-2 p-4 bg-white border rounded-lg shadow-sm">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
