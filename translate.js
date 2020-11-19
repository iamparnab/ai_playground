const http = require('http');
const { parse } = require('url');
const { exec } = require('child_process');
const { promisify } = require('util');

const execPromised = promisify(exec);

const server = http.createServer(async (req, res) => {
  const { text, source, target } = parse(req.url, true).query;
  const { stdout } = await execPromised(
    `aws translate translate-text --text ${text} --source-language-code ${source} --target-language-code ${target}`
  );

  console.log('Request from ', req.connection.remoteAddress);

  res.writeHead(200, { 'Content-type': 'application/json' });
  res.write(stdout);
  res.end();
});

server.listen(8888, () => console.log('At port ', 8888));
