const expect = require("chai").expect;
const request = require("request");

describe("Calculator API", function () {
  const baseUrl = "http://localhost:8080";

  it("returns status 200 to check if api works", function(done) {
    request(baseUrl, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // ADDITION
  it("should return correct sum for valid numbers", function (done) {
    request.get(`${baseUrl}/add?a=10&b=5`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("15");
      done();
    });
  });

  it("should handle missing parameters in add", function (done) {
    request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  it("should return error for non-numeric input in add", function (done) {
    request.get(`${baseUrl}/add?a=hello&b=world`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  // SUBTRACTION
  it("should return correct difference for valid numbers", function (done) {
    request.get(`${baseUrl}/subtract?a=10&b=4`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("6");
      done();
    });
  });

  it("should handle missing parameters in subtract", function (done) {
    request.get(`${baseUrl}/subtract?a=10`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  it("should return error for non-numeric input in subtract", function (done) {
    request.get(`${baseUrl}/subtract?a=ten&b=four`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  // MULTIPLICATION
  it("should return correct product for valid numbers", function (done) {
    request.get(`${baseUrl}/multiply?a=6&b=7`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("42");
      done();
    });
  });

  it("should handle missing parameters in multiply", function (done) {
    request.get(`${baseUrl}/multiply?a=6`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  it("should return error for non-numeric input in multiply", function (done) {
    request.get(`${baseUrl}/multiply?a=six&b=seven`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  // DIVISION
  it("should return correct quotient for valid numbers", function (done) {
    request.get(`${baseUrl}/divide?a=20&b=4`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("5");
      done();
    });
  });

  it("should return error when dividing by zero", function (done) {
    request.get(`${baseUrl}/divide?a=20&b=0`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      expect(body).to.include("Cannot divide by zero");
      done();
    });
  });

  it("should handle missing parameters in divide", function (done) {
    request.get(`${baseUrl}/divide?a=20`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  it("should return error for non-numeric input in divide", function (done) {
    request.get(`${baseUrl}/divide?a=abc&b=xyz`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });
});
