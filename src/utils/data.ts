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
    name: 'Mario Paredes',
    email: 'mparedes@gmail.com',
    phone: '0412-7654801',
    createdAt: '10/03/2023'
  },
  {
    id: 2,
    name: 'Laura Cárdenas',
    email: 'lcardenas@gmail.com',
    phone: '0414-9895643',
    createdAt: '07/03/2023'
  },
  {
    id: 3,
    name: 'Pedro Ramírez',
    email: 'pramirez@gmail.com',
    phone: '0424-5747321',
    createdAt: '05/03/2023'
  },
  {
    id: 4,
    name: 'Martha Quintero',
    email: 'mquintero@gmail.com',
    phone: '0426-3234511',
    createdAt: '04/03/2023'
  },
  {
    id: 5,
    name: 'Sofía Gómez',
    email: 'sgmomez@gmail.com',
    phone: '0426-3234511',
    createdAt: '04/03/2023'
  }
];

export const pets = [
  {
    id: 1,
    name: 'Hook',
    species: 'Perro',
    gender: 'M',
    age: '2 años',
    weight: '18 kg',
    owner: 'Mario Paredes',
    createdAt: '18/03/2023'
  },
  {
    id: 2,
    name: 'Redux',
    species: 'Perro',
    gender: 'M',
    age: '4 años',
    weight: '12 kg',
    owner: 'Laura Cárdenas',
    createdAt: '07/03/2023'
  },
  {
    id: 3,
    name: 'Canela',
    species: 'Gato',
    gender: 'F',
    age: '1 año',
    weight: '8 kg',
    owner: 'Pedro Ramírez',
    createdAt: '05/03/2023'
  },
  {
    id: 4,
    name: 'Chaos',
    species: 'Perro',
    gender: 'M',
    age: '1 año',
    weight: '6 kg',
    owner: 'Martha Quintero',
    createdAt: '04/03/2023'
  },
  {
    id: 5,
    name: 'Tuki',
    species: 'Páyaro',
    gender: 'F',
    age: '2 años',
    weight: '1 kg',
    owner: 'Sofía Gómez',
    createdAt: '04/03/2023'
  }
];

export const appointments = [
  {
    id: '1',
    pet: 'Hook',
    owner: 'Manuel Gómez',
    reason: 'El perro vomita cuando come',
    date: '15-05-2023'
  },
  {
    id: '2',
    pet: 'Hook',
    owner: 'Manuel Gómez',
    reason: 'El perro vomita cuando come',
    date: '15-05-2023'
  },
  {
    id: '3',
    pet: 'Hook',
    owner: 'Manuel Gómez',
    reason: 'El perro vomita cuando come',
    date: '15-05-2023'
  },
  {
    id: '4',
    pet: 'Hook',
    owner: 'Manuel Gómez',
    reason: 'El perro vomita cuando come',
    date: '15-05-2023'
  },
  {
    id: '5',
    pet: 'Hook',
    owner: 'Manuel Gómez',
    reason: 'El perro vomita cuando come',
    date: '15-05-2023'
  },
  {
    id: '6',
    pet: 'Hook',
    owner: 'Manuel Gómez',
    reason: 'El perro vomita cuando come',
    date: '15-05-2023'
  }
];
