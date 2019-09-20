const supertest = require('supertest'),
app = require('../app'),
request = supertest(app),
assert = require('chai').assert

describe('/records', () => {
    it('post /records should be success with valid parameters', function (done) {      
      request.post('/records')
        .send({
          startDate: '2016-01-26',
          endDate: '2018-02-02',
          minCount: 2700,
          maxCount: 3000
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err)
          assert.equal(res.body.code, 0)          
          done()
        })
    })
    it('post /records should be failed with invalid or missing parameters', async () => {
      const result = await request.post('/records')
        .send({
          startDate: '2016-11-11',
          endDate: '01-01-2019',
          minCount: 500,
        })
      assert.equal(result.status, 400)
    })
    it('get /records should be failed, because endpoint accept post requests only', async () => {
        const result = await request.get('/records')
        assert.equal(result.status, 404)
      })
  })
  