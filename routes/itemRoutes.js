const router = require('express').Router()
const { item } = require('../models')

// GET all items 
router.get('/items', (req, res) => {
    item.find()
        .then(items => )
        .catch(err => console.log(err))
})

// POST one item 
router.post('/items', (req, res) => {

})

// PUT one item
router.put('./items/:id', (req, res) => {

})

// DELETE one item 
router.delete('./items/:id', (req, res) => {

})

module.exports = router