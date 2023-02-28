const userModel = require("../models/userModel");

class UserService {
    UserService() { }

    async getUsers() {
        try {
            return await find();
        } catch (error) {
            return error;
        }
    }

    async insertCar(car, user) {
        try {
            await findOneAndUpdate({
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
            return await findOne({
                userName: user,
                password: pass
            })
        } catch (error) {
            console.log(error)
        }
    }

    async getCarsById(user) {
        try {
            return await find(
                { userName: user },
                '-_id -__v -password -userName'
            )
        } catch (error) {
            return error;
        }
    }

    async deleteCarsById(id, user) {
        try {
            return await updateOne(
                { userName: user },
                { $pull: { cars: id } }
            )
        } catch (error) {
            return error;
        }
    }

    async signup(user,pass,email) {
        try {
            var valid = await findOne({
                userName: user,
                email: email
            })
            console.log(valid)
            if (valid == null) {
                await updateOne({
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