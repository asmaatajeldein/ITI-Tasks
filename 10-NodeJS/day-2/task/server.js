const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(
                `<html>
                    <head>
                        <link rel="stylesheet" href="styles.css">
                        <link rel="icon" type="image/jpg" href="/favicon.ico">
                        <title>Norway</title>
                    </head>
                    <body>
                        <h1><i>Aurora in Norway</i></h1>
                        <div>
                            <img src="/norway.jpg"/>
                        </div>
                    </body>
                </html>`
            );
            break;
        case '/styles.css':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            const style = fs.readFileSync('styles.css');
            res.end(style);
            break;
        case '/norway.jpg':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image/jpeg');
            const image = fs.readFileSync('norway.jpg');
            res.end(image);
            break;
        case '/db.json':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            const json = fs.readFileSync('db.json');
            res.end(json);
            break;
        case '/favicon.ico':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image/png');
            const icon = fs.readFileSync('mountain.png');
            res.end(icon);
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Error!\n');
            break;
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});