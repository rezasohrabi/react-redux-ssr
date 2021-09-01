import express from 'express'
import path from 'path'
import template from './template'
import ssr from './ssr'

const app = express()

app.use('/assets', express.static(path.resolve(__dirname, '..','assets')));
app.use('/media', express.static(path.resolve(__dirname, '..','media')));

app.disable('x-powered-by');
app.listen(process.env.PORT || 3000);

app.get('*', (req, res) => {
  const { preloadedState, content}  = ssr()
  const response = template("Server Rendered Page", preloadedState, content)
  //res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});
