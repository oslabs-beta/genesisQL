
const request = require("supertest");
const assert = require("assert");
const app = require("../server/server.js");
// const request = supertest(app);

describe('Test the root path', () => {
    it('It should response the GET method', () => {
        return request(app).get('/').expect(200);
    });
})