import { ITaskItem } from './task.type';

export const TASKS_LIST: ITaskItem[] = [
  {
    id: '1',
    date: new Date('2024-03-13'),
    title: 'Разработка обложки',
    description: 'Finish writing the project proposal document for client X.',
    priority: 'Высокий',
    userId: 'Ирина Якушевич',
  },
  {
    id: '2',
    date: new Date('2024-02-14'),
    title: 'Разработка внутреннего дизайна',
    description: 'Create slides for the upcoming meeting with the team.',
    priority: 'Средний',
    userId: 'Екатерина Смирнова',
  },
  {
    id: '3',
    date: new Date('2023-03-15'),
    title: 'Цветовая схема',
    description:
      'Review and merge the latest code changes from the development branch.',
    priority: 'Низкий',
    userId: 'Дмитрий Кузнецов',
  },
  {
    id: '4',
    date: new Date('2023-06-15'),
    title: 'Типография',
    description: 'Arrange a meeting with client Y to discuss project updates.',
    priority: 'Высокий',
    userId: 'Анна Федорова',
  },
  {
    id: '5',
    date: new Date('2024-03-17'),
    title: 'Добавление разделов',
    description:
      'Revise and update the project documentation based on the latest changes.',
    priority: 'Средний',
    userId: 'Максим Морозов',
  },
  {
    id: '6',
    date: new Date('2021-09-18'),
    title: 'Разработка специфических шаблонов',
    description: 'Conduct thorough testing of newly implemented features.',
    priority: 'Высокий',
    userId: 'София Волкова',
  },
  {
    id: '7',
    date: new Date('2024-03-02'),
    title: 'Тематические дизайны',
    description: 'Design mockups for the new user interface.',
    priority: 'Средний',
    userId: 'Михаил Васильев',
  },
  {
    id: '8',
    date: new Date('2024-01-22'),
    title: 'Тестирование удобства использования',
    description: 'Identify and optimize slow database queries.',
    priority: 'Высокий',
    userId: 'Алиса Попова',
  },
  {
    id: '9',
    date: new Date('2024-06-30'),
    title: 'Тестирование прототипа',
    description: 'Gather data on competitors and market trends.',
    priority: 'Низкий',
    userId: 'Кирилл Русецкий',
  },
  {
    id: '10',
    date: new Date('2023-09-09'),
    title: 'Подготовить брендбук для презентации',
    description: 'Apply security patches to server infrastructure.',
    priority: 'Высокий',
    userId: 'Ирина Якушевич',
  },
  {
    id: '11',
    date: new Date('2024-03-23'),
    title: 'Write unit tests',
    description: 'Create unit tests for critical components.',
    priority: 'Средний',
    userId: 'user2',
  },
  {
    id: '12',
    date: new Date('2024-03-24'),
    title: 'Prepare project budget',
    description: 'Estimate project costs and prepare the budget report.',
    priority: 'Высокий',
    userId: 'user3',
  },
  {
    id: '13',
    date: new Date('2024-03-25'),
    title: 'Document API endpoints',
    description: 'Document all API endpoints for external use.',
    priority: 'Средний',
    userId: 'user1',
  },
  {
    id: '14',
    date: new Date('2024-03-26'),
    title: 'Conduct usability testing',
    description: 'Test the usability of the application with real users.',
    priority: 'Высокий',
    userId: 'user2',
  },
  {
    id: '15',
    date: new Date('2024-03-27'),
    title: 'Review project timeline',
    description:
      'Review and update the project timeline based on current progress.',
    priority: 'Средний',
    userId: 'user3',
  },
  {
    id: '16',
    date: new Date('2024-03-28'),
    title: 'Prepare for client demo',
    description:
      'Prepare demonstration materials for the upcoming client demo.',
    priority: 'Высокий',
    userId: 'user1',
  },
  {
    id: '17',
    date: new Date('2024-03-29'),
    title: 'Conduct code review',
    description: 'Perform a thorough code review to ensure code quality.',
    priority: 'Средний',
    userId: 'user2',
  },
  {
    id: '18',
    date: new Date('2024-03-30'),
    title: 'Update server software',
    description: 'Update server software to the latest stable version.',
    priority: 'Высокий',
    userId: 'user3',
  },
  {
    id: '19',
    date: new Date('2024-03-31'),
    title: 'Create marketing materials',
    description: 'Design marketing materials for the upcoming product launch.',
    priority: 'Средний',
    userId: 'user1',
  },
  {
    id: '20',
    date: new Date('2024-04-01'),
    title: 'Plan team building activity',
    description: 'Organize a team building activity for the project team.',
    priority: 'Высокий',
    userId: 'user2',
  },
  {
    id: '21',
    date: new Date('2024-02-02'),
    title: 'Monitor server performance',
    description:
      'Monitor server performance metrics and identify potential issues.',
    priority: 'Средний',
    userId: 'user3',
  },
  {
    id: '22',
    date: new Date('2024-03-14'),
    title: 'Prepare quarterly report',
    description:
      'Compile data and prepare the quarterly report for stakeholders.',
    priority: 'Высокий',
    userId: 'user1',
  },
];

export const TASK_PRIORITY_OPTIONS = [
  {
    displayName: 'Высокий',
    value: 'Высокий',
    color: 'peer-checked:after:bg-ax-red border-ax-red',
  },
  {
    displayName: 'Средний',
    value: 'Средний',
    color: 'peer-checked:after:bg-ax-orange border-ax-orange',
  },
  {
    displayName: 'Низкий',
    value: 'Низкий',
    color: 'peer-checked:after:bg-ax-blue border-ax-blue',
  },
];

export const TASK_MOCK_USERS = [
  {
    displayName: 'Кирилл Русецкий',
    value: 'Кирилл Русецкий',
  },
  {
    displayName: 'Ирина Якушевич',
    value: 'Ирина Якушевич',
  },
  {
    displayName: 'Дмитрий Кузнецов',
    value: 'Дмитрий Кузнецов',
  },
  {
    displayName: 'Максим Морозов',
    value: 'Максим Морозов',
  },
  {
    displayName: 'Анна Федорова',
    value: 'Анна Федорова',
  },
  {
    displayName: 'Екатерина Смирнова',
    value: 'Екатерина Смирнова',
  },
  {
    displayName: 'София Волкова',
    value: 'София Волкова',
  },
  {
    displayName: 'Михаил Васильев',
    value: 'Михаил Васильев',
  },
  {
    displayName: 'Алиса Попова',
    value: 'Алиса Попова',
  },
  {
    displayName: 'user1',
    value: 'user1',
  },
  {
    displayName: 'user2',
    value: 'user2',
  },
  {
    displayName: 'user3',
    value: 'user3',
  },
];
