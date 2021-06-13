import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const fetch = require('node-fetch');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  (async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const json = await response.json();

      res.write(
        '<!DOCTYPE html><html><head><title>My Page</title></head><body>'
      );
      res.write("<div id='root'>");

      const stream = ReactDOMServer.renderToNodeStream(<App data={json} />);

      stream.pipe(res, { end: false });
      stream.on('end', () => {
        res.write('</div></body></html>');
        res.end();
      });
    } catch (error) {
      console.log(error);
    }
  })();
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
