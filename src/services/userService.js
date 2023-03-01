const userModel = require("../models/userModel");

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
                '-_id -__v -password -userName -email'
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

    async signup(user,pass,email) {
        try {
            var valid = await userModel.findOne({
                userName: user,
                email: email
            })
            console.log(valid)
            if (valid == null) {
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
}

module.exports = new UserService();