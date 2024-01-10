import Role from '../model/Role.js';
import User from "../model/User.js";

export const register = async (req, res, next) => {
   try {
       const role = await Role.findOne({ role: 'User' });
       const newUser = new User({
           firstname: req.body.firstname,
           lastname: req.body.lastname,
           username: req.body.username,
           email: req.body.email,
           password: req.body.password,
           roles: role ? [role._id] : [] // Assuming roles is an array of ObjectIds
       });
       await newUser.save();
       return res.status(200).send('User registered successfully');
   } catch (error) {
       console.error(error);
       return res.status(500).send('Internal Server Error');
   }
}


