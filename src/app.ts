import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(4000, () => {
  console.log('listening on port 4000');
});
