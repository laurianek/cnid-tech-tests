
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8080));
function initApp() {
  app.listen(app.get('port'),() => {
    //a message to indicate a successful startup of the http server
    console.log('Application is listening on port #: ' + app.get('port'));
  });
}

app.use(express.static('dist'));
app.use('/data', express.static('data'));

// Start app server
initApp();
