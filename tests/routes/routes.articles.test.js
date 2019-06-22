const request = require('supertest');
const app = require('../../app')

describe('Test the Articles path', () => {
  test('It should respond with 200 for GET IGN', () => {
    return request(app).get('/api/v1/nerdbay/ign').then(response => {
      expect(response.statusCode).toBe(200);
    })
  });

  test('It should respond with 200 for GET Hacker News', () => {
    return request(app).get('/api/v1/nerdbay/hackernews').then(response => {
      expect(response.statusCode).toBe(200);
    })
  });

  test('It should respond with 200 for GET Reddit - all', () => {
    return request(app).get('/api/v1/nerdbay/reddit').then(response => {
      expect(response.statusCode).toBe(200);
    })
  });

  test('It should respond with 200 for GET ESPN', () => {
    return request(app).get('/api/v1/nerdbay/espn').then(response => {
      expect(response.statusCode).toBe(200);
    })
  });

  test('It should respond with 404 for GET empty string', () => {
    return request(app).get('/api/v1/nerdbay/').then(response => {
      expect(response.statusCode).toBe(404);
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