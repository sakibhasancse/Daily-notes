import cors from 'cors';
import express,{Express} from 'express';
import dbConnection from './config/dbConnection';
const port = 8080; // default port to listen
import todoRoutes from "./routes/todos"

const app: Express = express();

app.use(cors())
app.use(todoRoutes)
dbConnection()

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});