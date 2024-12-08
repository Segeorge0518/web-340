const http = require('http');
const url = require('url');

// TODO: Implement your server here


let character = {};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/create-character' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { class: charClass, gender, funFact } = JSON.parse(body);
            character = { charClass, gender, funFact };
            res.writeHead(201);
            res.end('Character has been created.');
        });
    } else if (pathname === '/confirm-character' && req.method === 'POST') {
        res.writeHead(200);
        res.end('Character creation has been confirmed.');
    } else if (pathname === '/view-character' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify(character));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;