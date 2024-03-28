import db from "../config/database.js";

export const getProductByName = (name, result) => {
    name = '%' + name + '%';
    console.log(name); //For debugging purposes
    db.query(
        "SELECT * FROM products WHERE name LIKE ?",
        [name],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        }
    );
};
export const getProducts = (result) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};