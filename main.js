const fs = require('fs');

const ehnois = {
  nome: 'noiz',
  sobrenome: 'eh',
};

fs.writeFileSync('./ehnois-nessa-krl.json', JSON.stringify(ehnois, null, '\t'));
