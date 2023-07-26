import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//user registration

export const register = async (req, res) => {
    const { username, email, password, } = req.body
    const user = await User.findOne({ email: email })
    if (user) {
        res.send({ "status": "failed", "message": "Email already exists" })
    } else{
        if (username && email && password){
            try {
                //hashing password
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);
                
                const newUser = new User({
                    username:username,
                    email:email,
                    password: hash,
                    // photo: req.body.photo
                });
                await newUser.save();
                res.status(200).json({ success: true, message: "Successfully Created"});
                // This by me for Registeraion
                const saved_user = await User.findOne({ email:email })
                // Generate JWT Token
                const token = jwt.sign({ id:saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '15d' })
                res.status(200).send({ "status": "success", "message": "Registration Success", "token": token })
            } catch (err) {
                console.log(err);
                return res.status(500).json({success:false, message:'Failed to create! Try again Rajesh'})
            }
        } else {
            res.send({ "status": "failed", "message": "All fields are required" })
        }
    }
};

// user login
export const login = async (req, res) => {
    try {
    const email = req.body.email
    const user = await User.findOne({ email : email });
    // if user doesn't exist
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    //if user is exist then check the password or compare the password
    const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);
    //if password is incorrect
    if (!checkCorrectPassword) {
        return res.status(401).json({ success: false, message: 'Incorrect email or password' });
    }
    
    const { password, role, ...rest } = user._doc;
    //create jwt token 
    const token = jwt.sign({ id: user._id, role: user.role },process.env.JWT_SECRET_KEY,{ expiresIn: '15d' });
        //set token in the browser cookies and send the response to the client
    res.cookie('accessToken', token, {
        httpOnly: true,
        expires:token.expiresIn // Set cookie expiration time
    }).status(200).json({
        token,
        success: true,
        message: 'Successfully logged in',
        data: { ...rest },
        role,
    });
    
    } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ success: false, message: 'Failed to login' });
    }

};


