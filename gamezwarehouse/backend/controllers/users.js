import {
    addUsers,
    getUser
} from "../models/userModel.js";

function validateUsername(username) {
    let errors = [];
    if (username.length == 0) {
        errors.push("Username is blank");
    }
    if (username.length > 35) {
        errors.push("Username cannot go over 35 characters");
    }
        return errors;
}
function validatePassword(password) {
    let errors = [];
    if (password.length == 0) {
        errors.push("Password is blank");
    }
    if (password.length > 20) {
        errors.push("Passwords cannot be more than 20 characters");
    }
    return errors;
}
function validateEmail(email) {
    let errors = [];
    if (email.length == 0) {
        errors.push("Email is empty");
    }
    if (email.length > 35) {
        errors.push("Email cannot exceed 35 characters");
    }
    if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email))) {
        errors.push("Not a valid email address");
    }
    return errors;
}
function validatePhone(phone) {
    let errors = [];
    if (phone.length == 0) {
        errors.push("Phone number is null");
    }
    if (phone.length > 10) {
        errors.push("Phone number can't exceed 10 digits");
    }
    return errors;
}

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
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let phone = req.body.phone;
    let errs = [];
    errs.push(validateUsername(username));
    errs.push(validatePassword(password));
    errs.push(validateEmail(email));
    errs.push(validatePhone(phone));
    if(errs[0].length || errs[1].length || errs[2].length || errs[3].length){
        console.log(errs)
        res.json(200, {msg: "Error!", errors:{errs}})
    }
    else{
    const data = req.body;
    addUsers(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
    }
};