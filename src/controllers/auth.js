
import Users from "../models/user";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const existUser = await Users.findOne({email}).exec();
        if(existUser){
            res.status(400).json({
                message: "tài khoan da ton tai"
            })
        }
        const user = await new Users({ email, name, password }).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        });
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "dang ki that bai"
        })
    }
}

export const login = async (req, res) => {
    const { email, password} = req.body;
    try {
        const user = await Users.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message: "Email không tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message: "Mật khẩu không đúng"
            })
        }
        const token = jwt.sign({_id: user._id},"123456",{expiresIn: '1h'})
        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "Đăng nhập thất bại"
        })
    }
}