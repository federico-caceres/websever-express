const http = require('http');
const { clearScreenDown } = require('readline');


http.createServer((req, res) => {


        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Federico',
            edad: 28,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log('Escuchando servidor');