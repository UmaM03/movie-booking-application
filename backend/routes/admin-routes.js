const express=require('express');
const { addAdmin } = require('../controllers/admin-controller');
const { adminLogin } = require('../controllers/admin-controller');
const { getAdmins } = require('../controllers/admin-controller');
const { getAdminByID } = require('../controllers/admin-controller');
 
const adminRouter=express.Router();

adminRouter.post('/signup',addAdmin);
adminRouter.post('/login',adminLogin);
adminRouter.get('/',getAdmins);
adminRouter.post('/id',getAdminByID);

module.exports=adminRouter;