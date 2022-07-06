import Users from "../models/user";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const {fullname,email, password} = req.body
    try {
        const exitUser = await Users.findOne({email}).exec();
        if(exitUser) {
            return res.status(400).json({
                messages: "Tai khoan da ton tai"
            })
        }

        const user = await new Users({fullname, email, password}).save();
        res.json({
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            }
        })
    } catch (error) {
        res.status(400).json({
            error: "Khong dang ky duoc"
        })
    }
}

export const login = async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body
    try {
        const user = await Users.findOne({email}).exec();
        if(!user) {
            res.status(400).json({
                messages: "Email không tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                messages: "Mật khẩu không đúng"
            })
        }
        const token = jwt.sign({_id: user._id}, "123456", { expiresIn: '1h'})
        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                fullname: user.fullname,
                role: user.role,
                status: user.status
            }
        });
    } catch (error) {
        res.status(400).json({
            error: "Dang nhap that bai"
        })
    }
}

export const getAll = async (req, res) => {
    try {
        const user = await Users.find({}).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            messages: "Không lấy được list người dùng"
        })
    }
}

export const read = async (req, res) => {
    try {
        const user = await Users.findOne({_id: req.params.id}).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            messages: "Không tìm thấy sản phẩm"
        })
    }
}