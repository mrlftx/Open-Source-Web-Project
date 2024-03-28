import {
    getProductByName,
    getProducts
} from "../models/productModel.js";

export const showProductByName = (req, res) => {
    getProductByName(req.params.name, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
        console.log(results); //For debugging purposes
    });
};

export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};