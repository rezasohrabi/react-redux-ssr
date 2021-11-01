import serialize from 'serialize-javascript';

export default function template(
  preloadedState = {},
  content = '',
  initialProps,
  helmet
) {
  let scripts = '';
  if (content) {
    scripts = ` <script>
              window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
                </script>
                <script>
                window.__INITIAL_PROPS__ = ${serialize(initialProps)}
                <script>
                <script src="assets/client.js"></script>
                `;
  }
  let page = `<!DOCTYPE html>
              <html ${helmet.htmlAttributes.toString()}>
              <head>
                <meta charset="utf-8">
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="assets/style.css">
              </head>
              <body ${helmet.bodyAttributes.toString()}>
                <div class="content">
                   <div id="root" class="wrap-inner">${content}</div>
                </div>${scripts}
              </body>
              </html>
              `;

  return page;
}
