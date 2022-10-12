'use strict';
console.log('Starting up');

var gProj = [
  {
    id: 1,
    name: 'Super-Heros',
    desc: 'Turn-Based-RPG lorem ipsum lorem ipsum"',
    imgFile: 'super.png',
    date: 'Oct 6th, 2022',
    url: 'https://2008ronel.github.io/Turn-Based-RPG/',
  },

  {
    id: 2,
    name: 'MineSweeper',
    desc: 'MineSweeper lorem ipsum lorem ipsum"',
    imgFile: 'Mine.png',
    date: 'Aug 8th, 2021',
    url: 'https://2008ronel.github.io/mineSweeper1/',
  },

  {
    id: 3,
    name: 'Guess Me',
    desc: 'Guess Me lorem ipsum lorem ipsum"',
    imgFile: 'guess.png',
    date: 'Sep 1st, 2022',
    url: 'https://2008ronel.github.io/mineSweeper1/',
  },
];
console.log(gProj);

function getProjById(projId) {
  const proj = gProj.find((proj) => +projId === proj.id);
  return proj;
}
