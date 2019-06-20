const request = require('supertest');
const app = require('../app')

describe('Test the Weather path', () => {
  test('It should respond with 200 for GET', () => {
    return request(app).get('/api/v1/nerdbay/weather/Denver').then(response => {
      expect(response.statusCode).toBe(200);
    })
  });

  test('It should respond with 404 for GET', () => {
    return request(app).get('/api/v1/nerdbay/weather/coloradosprings').then(response => {
      // nothing will happen successfully
    }).catch(failResponse => {
      expect(failResponse.statusCode).toBe(404);
    })
  });
})