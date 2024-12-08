const http = require('http');
const server = require('../src/server');

afterAll(() => {
    server.close();
});

test('responds to /create-character POST request with character data', done => {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/create-character',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const req = http.request(options, res => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            expect(res.statusCode).toBe(201);
            expect(data).toBe('Character has been created.');
            done();
        });
    });
    req.write(JSON.stringify({ class: 'Warrior', gender: 'Male', funFact: 'Loves to fight dragons.' }));
    req.end();
});

test('responds to /confirm-character POST request', done => {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/confirm-character',
        method: 'POST',
    };
    const req = http.request(options, res => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            expect(res.statusCode).toBe(200);
            expect(data).toBe('Character creation has been confirmed.');
            done();
        });
    });
    req.end();
});

test('responds to /view-character GET request', done => {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/view-character',
        method: 'GET',
    };
    const req = http.request(options, res => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            expect(res.statusCode).toBe(200);
            expect(JSON.parse(data)).toEqual({ charClass: 'Warrior', gender: 'Male', funFact: 'Loves to fight dragons.' });
            done();
        });
    });
    req.end();
});