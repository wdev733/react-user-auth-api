import http from 'http';
import { env, port, ip, apiRoot } from './config';
import express from './services/express';
import api from './api';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const app = express(apiRoot, api);
const server = http.createServer(app);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', async (req, res) => {
  res.send('<h2>Amusingly</h2>');
});

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log(
      'Express server listening on http://%s:%d, in %s mode',
      ip,
      port,
      env
    );
  });
});

export default app;
