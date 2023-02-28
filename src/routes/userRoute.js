const {Router} = require("express");
const{getUsers,insertCar,login,getCarsById,deleteCarsById,signup} = require('../controllers/userController');
const router = Router();

router.get('/api/user', getUsers);
router.put('/api/user/insertCar/:user/:car',insertCar)
router.get('/api/user/login/:user/:pass',login)
router.get('/api/user/getCarsById/:user',getCarsById)
router.put('/api/user/deleteCarsById/:user/:id',deleteCarsById)
router.post('/api/user/signup/:user/:pass/:email',signup)


module.exports = router;