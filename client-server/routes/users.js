const express = require('express')
const router = express.Router()
const assert = require('assert')
const restify = require('restify-clients');

//CREATE A JSON CLIENT
const client = restify.createJsonClient({
  url: 'http://localhost:4000'
})

/* GET users listing. */
router.get('/', (req, res, next) => {

  client.get('/users', (err, request, response, obj) => {
    assert.ifError(err);
  
    res.json(obj)
  })

})

router.get('/:id', (req, res, next) => {

  client.get(`/users/${req.params.id}`, (err, request, response, obj) => {
    assert.ifError(err);
  
    res.json(obj)
  })
})

router.put('/:id', (req, res, next) => {

  client.put(`/users/${req.params.id}`, req.body, (err, request, response, obj) => {
    assert.ifError(err);
  
    res.json(obj)
  })
})

router.delete('/:id', (req, res, next) => {

  client.del(`/users/${req.params.id}`, (err, request, response, obj) => {
    assert.ifError(err);
  
    res.json(obj)
  })
})

router.post('/', (req, res, next) => {

  client.post('/users', req.body, (err, request, response, obj) => {
    assert.ifError(err);
  
    res.json(obj)
  })
})
module.exports = router
