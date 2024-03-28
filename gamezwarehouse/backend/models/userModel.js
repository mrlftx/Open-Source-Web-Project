import db from "../config/database.js";

export const addUsers = (data, result) => {
    db.query("INSERT INTO users SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

export const getUser = (username, result) => {
    db.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        }
    );
};