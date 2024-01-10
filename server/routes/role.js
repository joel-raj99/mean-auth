import express from 'express';
const router = express.Router();
//import Role from '../model/Role.js'; 
import { createRole, deteleRole, getaAllRole } from '../controllers/role.controller.js';
import { updateRole } from '../controllers/role.controller.js';

// create on db
router.post('/create',createRole)

// update on db
router.put('/update/:id',updateRole)

// get role on db
router.get('/getAll',getaAllRole)

// delete role on db
router.delete('/deleteRole/:id',deteleRole)

export default router;