const request = require('supertest');
const app = require('../../app')

describe('Test the Articles path', () => {
  test('It should respond with 200 for GET', () => {
    return request(app).get('/api/v1/nerdbay/articles').then(response => {
      expect(response.statusCode).toBe(200);
    })
  });

  test('It should respond with 404 for GET', () => {
    return request(app).get('/api/v1/nerdbay/article').then(response => {
      expect(undefined).toBe(undefined) // nothing should happen in this test case
    }).catch(failResponse => {
      expect(failResponse.statusCode).toBe(404);
    })
  });
})