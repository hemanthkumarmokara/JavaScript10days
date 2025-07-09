const request = require('supertest');
const app = require('../app');

describe('GET /user', () => {
  it('should return a user', async () => {
    const res = await request(app).get('/user');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ name: 'Hemanth' });
  });
});

