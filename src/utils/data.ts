import type { ChartOptions } from 'chart.js';

export const chartData = {
  labels: ['Lu', 'Ma', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
  datasets: [
    {
      label: 'Pacientes',
      data: [2, 1, 3, 1, 4, 1, 3],
      borderColor: 'rgb(20, 184, 166)',
      backgroundColor: 'rgb(53, 162, 235, 0.4)',
      tension: 0.3,
      pointBorderWidth: 2
    }
  ]
};

export const chartOptions: ChartOptions = {
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Pacientes Diarios'
    }
  },
  maintainAspectRatio: false,
  responsive: true
};

export const newPatients = [
  { id: 12, pet: 'Hook', owner: 'Mario Paredes', date: '10/03/2023' },
  { id: 34, pet: 'Redux', owner: 'Laura Cárdenas', date: '07/03/2023' },
  { id: 56, pet: 'Canelo', owner: 'Pedro Ramírez', date: '05/03/2023' },
  { id: 78, pet: 'Chaos', owner: 'Martha Quintero', date: '04/03/2023' },
  { id: 90, pet: 'Tuki', owner: 'Sofía Gómez', date: '04/03/2023' }
];

export const todayAppointments = [
  { id: 11, pet: 'Maya', owner: 'Leonardo Castillo', hour: '9:00 A.M.' },
  { id: 22, pet: 'Cass', owner: 'Andrea Contreras', hour: '10:00 A.M.' },
  { id: 33, pet: 'Charlie', owner: 'Camila Peña', hour: '2:00 P.M.' },
  { id: 44, pet: 'Charlie', owner: 'Camila Peña', hour: '2:00 P.M.' },
  { id: 55, pet: 'Charlie', owner: 'Camila Peña', hour: '2:00 P.M.' },
  { id: 66, pet: 'Charlie', owner: 'Camila Peña', hour: '2:00 P.M.' }
];

export const owners = [
  {
    id: 1,
    name: 'Jesús Valero',
    email: 'jvalerodev@gmail.com',
    phone: '0412-7654801',
    createdAt: '18/03/2023'
  },
  {
    id: 2,
    name: 'Carla Soto',
    email: 'csoto@gmail.com',
    phone: '0414-9895643',
    createdAt: '17/03/2023'
  },
  {
    id: 3,
    name: 'Sebastián Domínguez',
    email: 'sdominguez@gmail.com',
    phone: '0424-5747321',
    createdAt: '15/03/2023'
  },
  {
    id: 4,
    name: 'Susana Vázquez',
    email: 'svazquez@gmail.com',
    phone: '0426-3234511',
    createdAt: '15/03/2023'
  }
];
