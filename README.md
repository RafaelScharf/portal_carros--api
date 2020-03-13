# Portal Carros || Adonis API application

Esta é uma API de dados para um portal de carros.

## Guia de utilização

### Rotas


<<<<<<< HEAD
```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Routes
│ Route            │ Verb(s)   │ Handler                  │ Middleware │ Name             │ Domain │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /users           │ HEAD,GET  │ UserController.index     │            │ users.index      │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /users           │ POST      │ UserController.store     │            │ users.store      │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /users/:id       │ HEAD,GET  │ UserController.show      │            │ users.show       │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /users/:id       │ PUT,PATCH │ UserController.update    │            │ users.update     │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /users/:id       │ DELETE    │ UserController.destroy   │            │ users.destroy    │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /sessions        │ POST      │ SessionController.create │            │ /sessions        │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /cars            │ HEAD,GET  │ CarController.index      │ auth       │ cars.index       │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /cars            │ POST      │ CarController.store      │ auth       │ cars.store       │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /cars/:id        │ HEAD,GET  │ CarController.show       │ auth       │ cars.show        │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /cars/:id        │ PUT,PATCH │ CarController.update     │ auth       │ cars.update      │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /cars/:id        │ DELETE    │ CarController.destroy    │ auth       │ cars.destroy     │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /cars/:id/images │ POST      │ ImageController.store    │ auth       │ /cars/:id/images │        │
├──────────────────┼───────────┼──────────────────────────┼────────────┼──────────────────┼────────┤
│ /images/:path    │ HEAD,GET  │ ImageController.show     │            │ /images/:path    │        │
└──────────────────┴───────────┴──────────────────────────┴────────────┴──────────────────┴────────┘
=======
>>>>>>> 1e40fc0e4a0f75db329604e1c9f23538f56e9e7a
