import jwt from "jsonwebtoken";
import User from '../models/User.js'

// export const verifyToken = (req, res, next)=>{
//     const token = req.cookies.accessToken;
//     if( !token ){
//         return res.status(401).json({success:false, message:"You are not Authorize"})
//     }
//     // if token is exist then verify the  token
//     jwt.verify( token, process.env.JWT_SECRET_KET, (err, user)=> {
//         if(err){
//             console.error(err);
//             return res.status(401).json({success: false, message:"token is invalid"})
//         }
//         req.user = user;
//         next(); // call to next
//     });
// };

// export const verifyUser = (req, res, next)=> {
//     verifyToken(req,res,next,()=>{
//         if(req.user.id === req.param.id || req.user.role === 'admin'){
//             next();
//         }else{
//             return res.status(401).json({success:false, message:"You are not Authenticated"})
//         }
//     });
// };

// export const verifyAdmin = (req, res, next)=> {
//     verifyToken(req, res, next, ()=>{
//         if(req.user.role === 'admin'){
//             next();
//         }else{
//             return res.status(401).json({success:false, message:"You are not Authorize"})
//         }
//     });
// };

//666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666

export var verifyToken = async (req, res, next) => {
    let token
    const { authorization } = req.headers
    if (authorization && authorization.startsWith('Bearer')) {
        try {
        // Get Token from header
        token = authorization.split(':')[1]
        // Verify Token
        const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY)
        // Get User from Token
        req.user = await User.findById(id).select('-password')

        next()
        } catch (error) {
        console.log(error)
        res.status(401).send({ "status": "failed", "message": "Unauthorized User" })
        }
    }
    if (!token) {
        console.log(token)
        res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" })
    }
}

export const verifyUser = (req, res, next)=> {
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.param.id || req.user.role === 'admin'){
            console.log(req);
            next();
        }else{
            return res.status(401).json({success:false, message:"You are not Authenticated"})
        }
    });
};

export const verifyAdmin = (req, res, next)=> {
    verifyToken(req, res, next, ()=>{
        if(req.user.role === 'admin'){
            next();
        }else{
            return res.status(401).json({success:false, message:"You are not Authorize"})
        }
    });
};





