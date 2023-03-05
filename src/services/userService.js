const userModel = require("../models/userModel");
const { transporter, mailDetails } = require("../services/mailService");
const crypto = require('crypto')
const bcrypt = require('bcrypt');
require('dotenv').config()

class UserService {
    UserService() { }

    async getUsers() {
        try {
            return await userModel.find();
        } catch (error) {
            return error;
        }
    }

    async insertCar(car, user) {
        try {
            await userModel.findOneAndUpdate({
                userName: user,
            }, {
                $addToSet: {
                    cars: car,
                }
            }, {
                upsert: true,
                new: true
            })
        } catch (error) {
            console.log(error)
        }
    }

    async login(user, pass) {
        try {
            return await userModel.findOne({
                userName: user,
                password: pass
            })
        } catch (error) {
            console.log(error)
        }
    }

    async getCarsById(user) {
        try {
            return await userModel.find(
                { userName: user },
                '-_id -__v -password -userName -email --token'
            )
        } catch (error) {
            return error;
        }
    }

    async deleteCarsById(id, user) {
        try {
            return await userModel.updateOne(
                { userName: user },
                { $pull: { cars: id } }
            )
        } catch (error) {
            return error;
        }
    }

    async signup(user, pass, email) {
        try {
            var valid = await userModel.findOne({
                userName: user,
                email: email
            })

            if (valid != null) {
                await userModel.updateOne({
                    userName: user
                }, {

                    userName: user,
                    email: email,
                    password: pass,
                    cars: []

                }, {
                    upsert: true,
                })
            }

        } catch (error) {
            console.log(error)
        }
    }
    async sendEmail(email) {
        var code = crypto.randomBytes(4).toString('hex');
        var hashsedCode = bcrypt.hashSync(code, 10);
        try {
            var valid = await userModel.findOne({
                email: email
            })
            if (valid != null) {
                transporter.sendMail(mailDetails(code, email), async function (err, data) {
                    if (err) {
                        console.log(err)
                    } else {
                        await userModel.updateOne(
                            { email: email },
                            { $set: { token: hashsedCode } })
                        console.log('Email sent sucessfully')
                    }
                })
            }
        } catch (error) {
            return error;
        }
    }

    async verifyCode(email, code) {

        try {
            var valid = await userModel.findOne({
                email: email,
            })
            var verify = bcrypt.compareSync(code, valid['token']);
            console.log(valid['token'])
            if (verify == true) {
                await userModel.updateOne(
                    { email: email },
                    { $set: { token: '' } }
                )
                return true
            }
        } catch (error) {
            return error;
        }
    }

    async changePassword(email, pass) {

        try {
            var hashsedPass = bcrypt.hashSync(pass, 10);
            return await userModel.updateOne(
                { email: email },
                { $set: { password: hashsedPass } }
            )

        } catch (error) {
            return error;
        }
    }
}

module.exports = new UserService();