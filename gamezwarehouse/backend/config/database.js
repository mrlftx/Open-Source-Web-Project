import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin128",
    database: "gamez",
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected successfully to MySql server")
});
export default db;