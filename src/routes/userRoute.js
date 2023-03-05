const {Router} = require("express");
const{getUsers,insertCar,login,getCarsById,deleteCarsById,signup,sendEmail,verifyCode,changePassword} = require('../controllers/userController');
const router = Router();

router.get('/api/user', getUsers);
router.post('/api/user/sendEmail/:email', sendEmail);
router.put('/api/user/verifyCode/:email/:code', verifyCode);
router.put('/api/user/changePassword/:email/:pass', changePassword);
router.put('/api/user/insertCar/:user/:car',insertCar)
router.get('/api/user//:user/:pass',login)
router.get('/api/user/getCarsById/:user',getCarsById)
router.put('/api/user/deleteCarsById/:user/:id',deleteCarsById)
router.post('/api/user/signup/:user/:pass/:email',signup)


module.exports = router;