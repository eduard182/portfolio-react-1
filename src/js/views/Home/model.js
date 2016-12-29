import { routePaths } from '../../constants';

export const headersData = [
  {
    text: 'NICOLAS REICHERT\'S',
    path: routePaths.ABOUT,
    color: '#ff5f2e',
    isBig: true,
  },
  {
    text: 'PORTFOLIO',
    path: routePaths.PROJECTS,
    color: '#ffca35',
  },
];

export const buttonsData = [
  {
    index: 1,
    textFront: 'I LIKE IT FORMAL',
    textBack: 'SHOW ME YOUR CV',
    path: '',
  },
  {
    index: 2,
    textFront: 'IT\'S YOU, I KNOW IT!',
    textBack: 'LET\'S CHAT',
    path: routePaths.CONTACT,
  },
  {
    index: 3,
    textFront: 'LET\'S SEE WHAT YOU GOT',
    textBack: 'SHOW ME YOUR SKILLS',
    path: routePaths.SKILLS,
  },
];
