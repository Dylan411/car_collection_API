const { json } = require("express");
const carModel = require("../models/carModel");
const userS = require("../services/userService")

class CarService {
    CarService() { }
    

    async getCars() {
        try {
            return await carModel.find();
        } catch (error) {
            return error;
        }
    }

    async getCarsByModel(model) {
        try {
            return await carModel.find(
                { ModelName: { $regex: model, $options: 'i' } }
            );
        } catch (error) {
            return error;
        }
    }
    async getCarsByYear(year) {
        try {
            return await carModel.find(
                { Year: year }
            );
        } catch (error) {
            return error;
        }
    }

    async getCarsByBrand(brand) {
        try {
            return await carModel.find(
                { Brand: { $regex: brand, $options: 'i' } }
            );
        } catch (error) {
            return error;
        }
    }

    async getCarsByVersion(version) {
        try {
            return await carModel.find(
                { Version: { $regex: version, $options: 'i' } }
            );
        } catch (error) {
            return error;
        }
    }
    async getCarsById(user) {
        var ids = await userS.getCarsById(user)
        console.log(ids)

        try {
            return await carModel.find().where('_id').in(ids[0]['cars'])
        } catch (error) {
            return error;
        }
    }
}

module.exports = new CarService();