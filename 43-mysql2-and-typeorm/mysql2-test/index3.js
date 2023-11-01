const mysql = require('mysql2/promise');

(async () => {
  const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sh',
    database: 'practice',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });

  // const [results] = await pool.query('select * from customers');

  const connection = await pool.getConnection();
  const [results] = await connection.query('select * from orders');
  console.log(results);
})();
