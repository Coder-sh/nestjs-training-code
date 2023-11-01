const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'sh',
  database: 'practice',
});

// connection.query(
//   'select * from customers where name like ?',
//   ['李%'],
//   function (err, results, fields) {
//     console.log(err);
//     console.log(results);
//     console.log(fields);
//   }
// );

// connection.execute(
//   'insert into customers (name) values (?)',
//   ['光'],
//   (err, results, fields) => {
//     console.log(err);
//     console.log(results);
//     console.log(fields);
//   }
// );

// connection.execute(
//   'update customers set name = "guang" where name = "光"',
//   (err, results, fields) => {
//     console.log(err);
//     console.log(results);
//     console.log(fields);
//   }
// );

// connection.execute(
//   'delete from customers where name = ?',
//   ['guang'],
//   (err, results, fields) => {
//     console.log(err);
//     console.log(results);
//     console.log(fields);
//   }
// );
