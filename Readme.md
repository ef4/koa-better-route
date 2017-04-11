# koa-route

Simple route middleware for koa. Originally forked from https://github.com/koajs/route. The difference is that we pass route params as `ctx.routeParams` instead of altering the function signature. This allows your routes to compose correctly with other middleware.

```js
const _ = require('koa-route');
app.use(_.get('/pets', pets.list));
app.use(_.get('/pets/:name', pets.show));
```


## Installation

```js
$ npm install koa-route
```

## Example

  Contrived resource-oriented example:

```js
const _ = require('koa-route');
const Koa = require('koa');
const app = new Koa();

const db = {
  tobi: { name: 'tobi', species: 'ferret' },
  loki: { name: 'loki', species: 'ferret' },
  jane: { name: 'jane', species: 'ferret' }
};

const pets = {
  list: (ctx) => {
    const names = Object.keys(db);
    ctx.body = 'pets: ' + names.join(', ');
  },

  show: (ctx) => {
    const pet = db[ctx.routeParams.name];
    if (!pet) return ctx.throw('cannot find that pet', 404);
    ctx.body = pet.name + ' is a ' + pet.species;
  }
};

app.use(_.get('/pets', pets.list));
app.use(_.get('/pets/:name', pets.show));

app.listen(3000);
console.log('listening on port 3000');
```

## License

  MIT
