## Development

```
> npm run install
> npx prisma db push
> npx prisma db seed
> npm run dev
```

Only modify the edit section in [`app.js`](./app.js), files inside [`routes/*`](./routes).

Edit database stuff in [`schema.prisma`](./prisma/schema.prisma) and [`seed.js`](./prisma/seed.js).

To reset the database, simply delete `prisma/db.sqlite`.
