var faker = require('faker');

const sizes = [
  'small',
  'medium',
  'large,'
];

function generateBlock() {
  return {
    title: faker.commerce.productName(),
  };
}

function generateSize() {
  return sizes[Math.floor(Math.random()*sizes.length)];
}

function generateRow() {
  const id = faker.random.uuid();
  return {
    size: generateSize(),
    blocks: {
      id: generateBlock(),
    },
  };
}

function generatePage() {
  var rows = {};
  for (var i = 0; i < 5; i++) {
    const id = faker.random.uuid();
    rows[id] = generateRow();
  }

  return {
    title: 'Home',
    rows,
  };
}

function generateProject() {
  const project = {
    title: 'Lift Interactive',
    pages: [
      generatePage(),
    ],
  };
  // console.log(project);
  return project;
}

module.exports = {
  projects: generateProject(),
};
