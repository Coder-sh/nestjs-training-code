const mysql = require('mysql2/promise');

(async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sh',
    database: 'practice',
  });

  const [results, fields] = await connection.query('select * from customers');

  console.log(results);
  console.log(fields);
})();
