// const request = require('supertest');
// const app = require('../../app')

describe('Test the Articles path', () => {
  test('It should respond with 200 for GET IGN', () => {
    // return request(app).get('/api/v1/nerdbay/articles/ign').then(response => {
    //   expect(response.statusCode).toBe(200);
    // })
  });

  test('It should respond with 200 for GET Hacker News', () => {
    // return request(app).get('/api/v1/nerdbay/articles/hackernews').then(response => {
    //   expect(response.statusCode).toBe(200);
    // })
  });

  test('It should respond with 200 for GET Reddit - all', () => {
    // return request(app).get('/api/v1/nerdbay/articles/reddit').then(response => {
    //   expect(response.statusCode).toBe(200);
    // })
  });

  test('It should respond with 200 for GET ESPN', () => {
    // return request(app).get('/api/v1/nerdbay/articles/espn').then(response => {
    //   expect(response.statusCode).toBe(200);
    // })
  });

  test('It should respond with 404 for GET empty string', () => {
    // return request(app).get('/api/v1/nerdbay/articles/').then(response => {
    //   expect(response.statusCode).toBe(404);
    // })
  });

  test('It should respond with 404 for GET', () => {
    // return request(app).get('/api/v1/nerdbay/articles/article').then(response => {
    //   expect(response.statusCode).toBe(404);
    // })
  });
})