const {Router} = require("express");
const{getCars,getCarsByModel,getCarsByYear,getCarsByBrand,getCarsByVersion,getCarsById} = require('../controllers/carController');
const router = Router();

router.get('/api/car', getCars);
router.get('/api/car/getCarsByModel/:car', getCarsByModel);
router.get('/api/car/getCarsByYear/:year', getCarsByYear);
router.get('/api/car/getCarsByBrand/:brand', getCarsByBrand);
router.get('/api/car/getCarsByVersion/:version', getCarsByVersion);
router.get('/api/car/getCarsById/:user', getCarsById);

module.exports = router;