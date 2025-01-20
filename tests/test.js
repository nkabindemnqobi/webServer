const {handler} = require('../index');

describe('Lambda Function', () => {
    it('should return 200', async () => {
        const res = await handler();
        expect(res.status).toBe(200);
        expect(res.body).toBe('Hello Cruel World');
    });
});