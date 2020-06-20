import * as fs from 'fs';
import * as compression from 'compression';
import * as express from 'express';
import * as https from 'https';
import * as path from 'path';
import * as portfinder from 'portfinder-sync';

import { baseport } from '../package.json';

// import { api } from './controller';
const staticPath: string = path.join(__dirname, '..', 'public');

const application = express();

application.set('port', process.env.NODE_PORT || portfinder.getPort(baseport));
application.use(compression());
application.use('/ts-react-playground', express.static(staticPath));

// application.get('/api/*', api);

application.use((req: express.Request, res: express.Response) => {
  console.log(req.url);
  res.sendFile(path.join(staticPath, 'index.html'));
});

const sslPath = path.resolve(__dirname, '..', 'ssl');

const httpOptions = {
  key: fs.readFileSync(path.resolve(sslPath, 'development.fritz.box.key')),
  cert: fs.readFileSync(path.resolve(sslPath, 'development.fritz.box.crt')),
};

const server = https.createServer(httpOptions, application);

server.listen(application.get('port'), () => {
  console.log(
    ` Server is running at https://localhost:%d in %s mode\n %s`,
    application.get('port'),
    application.get('env'),
    staticPath,
  );
  console.log('  Press CTRL-C to stop\n');
});
