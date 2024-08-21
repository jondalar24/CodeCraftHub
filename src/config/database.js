const mongoose = require('mongoose');

// Información de conexión obtenida de Skills Network Toolbox
const dbHost = '127.0.0.1';
const dbPort = 27017;
const dbName = 'local'; // Puedes cambiar esto a cualquier nombre de base de datos que prefieras
const dbUser = 'jondalar24';
const dbPassword = encodeURIComponent('NzA4OC1qb25kYWxh'); // Escapar caracteres especiales si es necesario

// URI de conexión
const dbURI = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
