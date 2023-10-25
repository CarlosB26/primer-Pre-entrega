const express = require('express');
const app = express();
const productRoutes = require('./routers/products.router');
const indexRoutes = require('./routers/index.router');
const cartRoutes = require('./routers/cart.router');

// Middleware para el análisis de JSON en las solicitudes
app.use(express.json());

// Usa las rutas definidas en los archivos importados
app.use('/', indexRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});