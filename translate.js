const http = require('http');
const { parse } = require('url');
const { exec } = require('child_process');
const { promisify } = require('util');

const execPromised = promisify(exec);

const allowedOrigins = [
  'http://js-codebot.s3-website.ap-south-1.amazonaws.com',
  'http://localhost:3000',
];

const server = http.createServer(async (req, res) => {
  const { text, source, target } = parse(req.url, true).query;

  let response = '';

  try {
    const { stdout } = await execPromised(
      `aws translate translate-text --text '${text}' --source-language-code ${source} --target-language-code ${target}`
    );
    response = stdout;
  } catch (err) {
    response = JSON.stringify({
      TranslatedText: 'Call signature is not correct',
    });
    console.table({ Message: err.message });
  }

  console.table({ IP: req.connection.remoteAddress, text, source, target });

  res.writeHead(200, {
    'Content-type': 'application/json',
    'Access-control-allow-origin': allowedOrigins.includes(req.headers.origin)
      ? req.headers.origin
      : '',

    'Access-control-allow-methods': 'GET',
  });
  res.write(response);
  res.end();
});

server.listen(8888, () => console.log('At port ', 8888));
