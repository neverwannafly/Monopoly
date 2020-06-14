import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev'

const app = express();
const port = process.env.PORT || 3000;
const dist_dirc = path.join(__dirname, '../dist');
const html_file = path.join(dist_dirc, 'index.html');

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/', (req, res) => {
  res.sendFile(html_file);
});

app.listen(port, () => console.log('Listening on: http://localhost:3000'));