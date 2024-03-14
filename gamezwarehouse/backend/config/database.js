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
    //db.query("INSERT INTO users (username, password, email, phone) VALUES ('temp', 'test', 'test@gmail.com', '123456')", (err, result) => {
        //if (err) throw err;
        //console.log("1 record inserted");
    //}); Testing database connection
});
export default db;