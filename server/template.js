export default function template(title, preloadedState = {}, content = "") {
  let scripts = '';
  if (content) {
    scripts = ` <script>
              window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\\u003c')}
                </script>
                <script src="assets/client.js"></script>
                `
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link rel="stylesheet" href="assets/style.css">
              </head>
              <body>
                <div class="content">
                   <div id="root" class="wrap-inner">${content}</div>
                </div>${scripts}
              </body>
              </html>
              `;

  return page;
}
