// import * as fs from 'fs';
import * as path from 'path';

import * as express from 'express';
import * as https from 'http';
import * as compression from 'compression';

import { baseport } from './package.json';

// import { api } from './controller';
const hostname = 'localhost';
const staticPath: string = path.join(__dirname, 'public');

const application = express();

application.set('port', process.env.NODE_PORT || baseport);
application.use(compression());
application.use('/ts-react-playground', express.static(staticPath));

// application.get('/api/*', api);

application.use((req: express.Request, res: express.Response) => {
  console.log(req.url);
  res.sendFile(path.join(staticPath, 'index.html'));
});

const httpOptions = {
  // key: fs.readFileSync(path.resolve(__dirname, 'certs', 'key.pem')),
  // cert: fs.readFileSync(path.resolve(__dirname, 'certs', 'cert.pem')),
};

https.createServer(httpOptions, application).listen(application.get('port'), () => {
  console.log(
    `  App is running at http://${hostname}:%d in %s mode (%s) (%s)`,
    application.get('port'),
    application.get('env'),
    staticPath,
  );
  console.log('  Press CTRL-C to stop\n');
});
