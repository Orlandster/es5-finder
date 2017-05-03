const walk = require('./src/walk');
const parse = require('./src/parse');

walk(__dirname + '/../webpack/lib', (err, files) => {
  if (err) throw err;
  parse(files);
});