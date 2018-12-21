const config = require('../config');
const assert = require('assert');
const http = require('http');

const server = require('../app.js');

describe('/', () => {
  it('should return 200', (done) => {
    http.get(`http://localhost:${config.port}`, function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should say "Welcome to Contoso!"', (done) => {
    http.get(`http://localhost:${config.port}`, (res) => {
      var data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        assert.ok(data.includes('Welcome to Contoso!'));
        done();
      });
    });
  });

  it('should say "Who We Are"', (done) => {
    http.get(`http://localhost:${config.port}/who`, (res) => {
      var data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        assert.ok(data.includes('Who We Are'));
        done();
      });
    });
  });  

  it('should say "Contact Us"', (done) => {
    http.get(`http://localhost:${config.port}/contact`, (res) => {
      var data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        assert.ok(data.includes('Contact Us'));
        done();
      });
    });
  }); 

});
