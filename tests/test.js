const request = require('supertest');
const app = request('./../index.js');

describe('GET /', () => {
    it('should return 200', async () => {
        const res = await app.get('/');
        expect(res.status).toBe(200);
        expect(res.text).toBe('Hello Cruel World')
    });
});