const { response } = require('express');
const express = require('express');
const router = express.Router()

router.post('/signup', (req, res) => {
    response.send('send')
})