import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// imports all routes we define in the routes foulder
// this allows us to define routes in seperate files
// for better file organization
import v1Routes from './routes/v1/index.ts';
const app = express();
app.use(express.json());
// attatch all routes to the api version route
// for n version do:
// app.use('/api/v<n>', v<n>Routes);
app.use('/api/v1', v1Routes);
// serve frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, '../../client/dist');
// point express to the frontend build
app.use(express.static(clientPath));
app.get('*', (_req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
});
// read port from environment variables, if none, set to 3000
const PORT = Number(process.env.PORT) || 3000;
// listen on port and print message to console
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
