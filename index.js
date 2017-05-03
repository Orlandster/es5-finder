const walk = require('./src/walk');

walk(__dirname + '/../webpack', (err, results) => {
  if (err) throw err;
  console.log(results);
});