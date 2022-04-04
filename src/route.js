const express = require('express')
const router = express.Router()

const { postactivity, activities, activity, updateactivity, deleteactivity } = require('./activity')

router.post('/activity', postactivity)
router.get('/activities', activities)
router.get('/activity/:id', activity)
router.patch('/activity/:id', updateactivity)
router.delete('/activity/:id', deleteactivity)

module.exports = router