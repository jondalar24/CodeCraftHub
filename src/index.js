const express = require('express');
const connectDB = require('./config/database'); // Asegúrate de que la ruta sea correcta
const userRoutes = require('./routes/userRoutes');

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use('/users', userRoutes);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});