const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación de gestión de productos!');
});

module.exports = router;