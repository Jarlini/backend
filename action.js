const express = require('express');
const router = express.Router();

// router.get('/users', (req, res) => {
//   res.send('List of users');
// });

// module.exports = router;


module.exports = router;
router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Details of user ${userId}`);
  });
  
  router.post('/users', (req, res) => {
    
    res.send('Create a new user');
  });


  router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Update user ${userId}`);
  });
  
module.exports = router;
  

;module.exports = router;