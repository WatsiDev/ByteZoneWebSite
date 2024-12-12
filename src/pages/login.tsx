import Fastify from 'fastify';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';

const fastify = Fastify();

// Configuración de la base de datos
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root', // Cambia esto por tu usuario de MySQL
  password: '', // Cambia esto por tu contraseña de MySQL
  database: 'bytezone',
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
    process.exit(1); // Finaliza la aplicación si no puede conectarse
  }
  console.log('Conectado a la base de datos.');
});

// Ruta de login
fastify.post('/login', async (request, reply) => {
  const { username, password } = request.body as { username: string; password: string };

  if (!username || !password) {
    return reply.status(400).send({ message: 'Faltan campos requeridos' });
  }

  // Busca el usuario en la base de datos
  const query = 'SELECT * FROM usuarios WHERE nombre_usuario = ?';
  db.query(query, [username], (err, results: any[]) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return reply.status(500).send({ message: 'Error en el servidor' });
    }

    if (results.length === 0) {
      return reply.status(401).send({ message: 'Usuario no encontrado' });
    }

    const user = results[0];

    // Verifica la contraseña usando bcrypt
    bcrypt.compare(password, user.contrasena, (bcryptErr, isMatch) => {
      if (bcryptErr) {
        console.error('Error al verificar la contraseña:', bcryptErr);
        return reply.status(500).send({ message: 'Error en el servidor' });
      }

      if (isMatch) {
        reply.status(200).send({ message: 'Login exitoso', user });
      } else {
        reply.status(401).send({ message: 'Contraseña incorrecta' });
      }
    });
  });
});

// Inicia el servidor
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err);
    process.exit(1);
  }
  console.log(`Servidor corriendo en ${address}`);
});
