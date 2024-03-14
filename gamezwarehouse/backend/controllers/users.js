import {
    addUsers,
    getUser
} from "../models/userModel.js";

export const showUsers = (req, res) => {
    getUser(req.params.username, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

export const createUser = (req, res) => {
    const data = req.body;
    addUsers(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};