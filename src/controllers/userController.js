const userService = require("../services/userService");

const getUsers = async(req,res) => {
    res.json({
        user: await userService.getUsers()
    });
}

const insertCar = async(req,res) =>{
    res.json({
        user: await userService.insertCar(req.params['car'],req.params['user'])
    })
}

const login = async(req,res) =>{
    res.json({
        user: await userService.login(req.params['user'],req.params['pass'])
    })
}

const signup = async(req,res) =>{
    res.json(
        await userService.signup(req.params['user'],req.params['email'],req.params['pass'])
    )
}

const getCarsById = async(req,res) => {
    res.json(
        await userService.getCarsById(req.params['user'])
    );
}

const deleteCarsById = async(req,res) => {
    res.json(
        await userService.deleteCarsById(req.params['id'],req.params['user'])
    );
}

const sendEmail = async(req,res) => {
    res.json(
        await userService.sendEmail(req.params['email'])
    );
}

const verifyCode = async(req,res) => {
    res.json(
        await userService.verifyCode(req.params['email'],req.params['code'])
    );
}

const changePassword = async(req,res) => {
    res.json(
        await userService.changePassword(req.params['email'],req.params['pass'])
    );
}

module.exports = {getUsers,insertCar,login,getCarsById,deleteCarsById,signup,sendEmail,verifyCode,changePassword};