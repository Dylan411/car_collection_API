const carService = require("../services/carService");

const getCars = async(req,res) => {
    res.json({
        car: await carService.getCars()
    });
}

const getCarsByModel= async(req,res) =>{
    res.json({
        car: await carService.getCarsByModel(req.params['car'])
    })
}

const getCarsByYear= async(req,res) =>{
    res.json({
        car: await carService.getCarsByYear(req.params['year'])
    })
}

const getCarsByBrand= async(req,res) =>{
    res.json({
        car: await carService.getCarsByBrand(req.params['brand'])
    })
}

const getCarsByVersion= async(req,res) =>{
    res.json({
        car: await carService.getCarsByVersion(req.params['version'])
    })
}

const getCarsById= async(req,res) =>{
    res.json({
        car: await carService.getCarsById(req.params['user'])
    })
}

module.exports = {getCars,getCarsByModel,getCarsByBrand,getCarsByYear,getCarsByVersion,getCarsById};