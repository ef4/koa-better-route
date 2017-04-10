
'use strict';

let r = require('./');
let Koa = require('koa');
let app = new Koa();

let db = {
  tobi: { name: 'tobi', species: 'ferret' },
  loki: { name: 'loki', species: 'ferret' },
  jane: { name: 'jane', species: 'ferret' }
};

let pets = {
  list: (ctx) => {
    let names = Object.keys(db);
    ctx.body = 'pets: ' + names.join(', ');
  },

  show: (ctx, name) => {
    let pet = db[name];
    if (!pet) return ctx.throw('cannot find that pet', 404);
    ctx.body = pet.name + ' is a ' + pet.species;
  }
};

app.use(r.get('/pets', pets.list));
app.use(r.get('/pets/:name', pets.show));

app.listen(3000);
process.stdout.write('listening on port 3000\n');
