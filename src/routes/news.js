const express = require('express');
const router = express.Router();

const NewsController = require('../app/controllers/NewsController')

// newsController.index

router.use('/news/:slug', NewsController.show);
router.use('/news', NewsController.index);


module.exports = router;