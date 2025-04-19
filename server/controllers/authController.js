import jwt from 'jsonwebtoken';
import User from '../models/User.js'
import bcrypt from 'bcrypt'



export const login = async (req, res) => {

    try {
        console.log(req.body);
        
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user) {
            res.status(404).json({success: false, error: "User Not Found"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            res.status(404).json({success: false, error: "Wrong Password"})
        }

        const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_KEY, {expiresIn:"10d"}
        )

        res.status(200).json({success: true, token, user: {_id: user._id, name: user.name, role:user.role},})
    } catch (error)
    {
        console.log(error.message);
        
    }
}