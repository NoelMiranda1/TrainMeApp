export const courseList = [
  {
    id: 1,
    state: 'Público',
    image: 'https://miro.medium.com/max/3840/0*oZLL-N4dGNlBe4Oh.png',
    title: 'Curso de react',
    rate: 4,
    docente: 'Noel Miranda',
    lecciones: 25,
    alumnos: 50,
    reuniones: 4,
  },
  {
    id: 2,
    state: 'Privado',
    image: 'https://miro.medium.com/max/3840/0*oZLL-N4dGNlBe4Oh.png',
    title: 'Curso de react Native',
    rate: 3,
    docente: 'Noel Miranda',
    lecciones: 50,
    alumnos: 30,
    reuniones: 2,
  },
];

export const courseDetail = [
  {
    id: 1,
    image:
      'https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png',
    title: 'React Hooks',
    lesson: [
      {
        id: 1,
        title: 'Intro',
        type: 'Audio',
      },
      {
        id: 2,
        title: 'useState',
        type: 'Video',
      },
      {
        id: 3,
        title: 'useEffect',
        type: 'Audio',
      },
      {
        id: 4,
        title: 'useLayoutEffectt',
        type: 'Video',
      },
      {
        id: 5,
        title: 'useRef',
        type: 'Audio',
      },
    ],
  },
  {
    id: 2,
    image: 'https://media.ma-no.org/imgr/1280-640/admin-redux-react.jpg',
    title: 'React-Redux',
    lesson: [
      {
        id: 1,
        title: 'Intro',
        type: 'Audio',
      },
      {
        id: 2,
        title: 'Actions',
        type: 'Video',
      },
      {
        id: 3,
        title: 'Types',
        type: 'Audio',
      },
      {
        id: 4,
        title: 'Reducers',
        type: 'Video',
      },
      {
        id: 5,
        title: 'State',
        type: 'Audio',
      },
    ],
  },
];
export const Publicaciones = [
  {
    id: 1,
    docente: 'Noel Miranda',
    titleCourse: 'Curso React Hooks',
    date: '28/12/20',
    titleResumen: 'useState',
    resumen:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    activity: [
      {
        activity: true,
        name: 'Trabajo useState',
        image: false,
      },
    ],
    like: 3,
    comment: 2,
  },
  {
    id: 2,
    docente: 'Noel Miranda',
    titleCourse: 'Curso React Native',
    date: '28/12/20',
    titleResumen: 'Text y View',
    resumen:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    activity: [
      {
        activity: false,
        name: '',
        image: 'https://miro.medium.com/max/3840/1*QDQvlCg420lzRElCK4AYhw.png',
      },
    ],
    like: 3,
    comment: 2,
  },
];
export const reuniones = [
  {
    id: 1,
    corse: 'React Hooks',
    meetings: [
      {
        title: 'React',
        date: '14/04/21',
        horaInit: '02:30 PM',
        horaFin: '05:30 PM',
      },
      {
        title: 'React',
        date: '14/04/21',
        horaInit: '02:30 PM',
        horaFin: '05:30 PM',
      },
    ],
  },
  {
    id: 1,
    corse: 'React Native',
    meetings: [
      {
        title: 'React Natitve-refreshState',
        date: '14/04/21',
        horaInit: '02:30 PM',
        horaFin: '05:30 PM',
      },
      {
        title: 'StyleSheet',
        date: '14/04/21',
        horaInit: '02:30 PM',
        horaFin: '05:30 PM',
      },
    ],
  },
];

export const notes = [
  {
    id: 1,
    course: 'React Hooks',
    modulo: '1',
    resumen:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    date: '10/05/21',
  },
  {
    id: 2,
    course: 'React Hooks',
    modulo: '2',
    resumen:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    date: '10/05/21',
  },
];
export const modulos = [
  {
    value: 'Visitados Recientemente',
    label: 'Visitados Recientemente',
  },
  {
    value: 'Modulo 2',
    label: 'Modulo 2',
  },
  {
    value: 'Modulo 3',
    label: 'Modulo 3',
  },
  {
    value: 'Modulo 4',
    label: 'Modulo 4',
  },
  {
    value: 'Modulo 5',
    label: 'Modulo 5',
  },
];
export const evaluations = [
  {
    id: 1,
    corse: 'React Hooks',
    evaluations: [
      {
        title: 'Evaluacion useState Hook',
        date: '14/04/21',
        evaluationsFinish: 1,
        correct: '20/30',
        note: '80%',
      },
      {
        title: 'Evaluacion useRef Hook',
        date: '15/04/21',
        evaluationsFinish: 2,
        correct: '25/30',
        note: '85%',
      },
    ],
  },
  {
    id: 1,
    corse: 'React Native',
    evaluations: [
      {
        title: 'Evaluacion Orientation',
        date: '14/04/21',
        evaluationsFinish: 1,
        correct: '20/30',
        note: '80%',
      },
      {
        title: 'Evaluacion Stylesheet',
        date: '15/04/21',
        evaluationsFinish: 2,
        correct: '25/30',
        note: '85%',
      },
    ],
  },
];

export const calendar = [
  {
    id: 1,
    month: 'Junio 2021',
    week: [
      {
        id: 1,
        currentDay: true,
        day: 'Lun',
        date: '12',
        task: [
          {
            id: 1,
            title: 'Reunión',
            hour: '10:30-12:30',
            evaluation: false,
          },
          {
            id: 2,
            title: 'Evaluación',
            hour: '12:30-01:30',
            evaluation: true,
          },
          {
            id: 3,
            title: 'Reunión',
            hour: '01:30-02:30',
            evaluation: false,
          },
        ],
      },
      {
        id: 2,
        currentDay: false,
        day: 'Mar',
        date: '13',
        task: [
          {
            id: 1,
            title: 'Reunión',
            hour: '10:30-12:30',
            evaluation: false,
          },
        ],
      },
      {
        id: 3,
        currentDay: false,
        day: 'Mie',
        date: '14',
        task: [],
      },
      {
        id: 4,
        currentDay: false,
        day: 'Jue',
        date: '15',
        task: [
          {
            id: 1,
            title: 'Evaluación',
            hour: '10:30-12:30',
            evaluation: true,
          },
        ],
      },
      {
        id: 5,
        currentDay: false,
        day: 'Vie',
        date: '16',
        task: [],
      },
    ],
  },
];
export const events = [
  {
    id: 1,
    title: 'Reunión de practica',
    date: '12/06/2021',
    hour: '12:30-01:30',
  },
  {
    id: 2,
    title: 'Evaluacion',
    date: '12/06/2021',
    hour: '12:30-01:30',
  },
  {
    id: 3,
    title: 'Reunion',
    date: '12/06/2021',
    hour: '12:30-01:30',
  },
];
