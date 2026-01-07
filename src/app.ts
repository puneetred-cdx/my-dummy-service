import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();
const port = 3001;

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
