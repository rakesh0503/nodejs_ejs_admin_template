const express = require('express')

const { indexView,tableView } = require('../controllers/homeController')
const router = express.Router();



router.get('/',indexView)
router.get('/table',tableView)


module.exports = { 
    routes:router
}

