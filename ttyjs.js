var tty = require('tty.js');

var app = tty.createServer({
  shell: 'bash',
  users: {
    foo: 'bar',
    rbn: 'rbn@123',
    azrul: 'mimos123',
    mimos123: 'mimos123'
  },
  port: 8001
});

app.get('/foo', function(req, res, next) {
  res.send('bar');
});

app.listen();
