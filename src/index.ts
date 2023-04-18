import express from 'express';
import type { ErrorRequestHandler, Request, Response } from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();
const errorHandler: ErrorRequestHandler = (err: any, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
};

app.use(cors());
//routes
app.use(routes);

app.use(errorHandler);

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});