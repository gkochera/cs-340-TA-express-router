const express = require('express');
const router = express.Router();

// This is the route after what was looked for in app.use.
router.get('/blue', function(req, res) {
    res.send('<body bgcolor="#CCCCFF"><h1>Hello! I am the <style color=blue>Blue</style> Page</h1><p><a href="/red">Red</a></p><p><a href="/blue">Blue</a></p><p><a href="/">Home</a></p></body>');
})

module.exports = router;