const router = require('express').Router()
const { Create, Delete } = require('../controllers/companyController')
const { Getall } = require('../controllers/companyController')
const { Update } = require('../controllers/companyController')

//
router.post('/', Create)

router.get('/', Getall)
router.put('/:id', Update)
router.delete('/:id', Delete)


module.exports = router