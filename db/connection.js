const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql123",
  database: "nodejs_mysql",
  multipleStatements: true,
});

mysqlConnection.connect((err) =>
  err
    ? console.error("MySQL DB connection failed", err)
    : console.info("MySQL DB Connected")
);

module.exports = mysqlConnection;
