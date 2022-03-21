import Users from "../models/user";

export const register = async (req, res) => {
    try {
        const signup = await new Users(req.body).save();
        res.json(signup)
    } catch (error) {
        res.status(400).json({
            error: "Khong dang ky duoc"
        })
    }
}

export const login = async (req, res) => {
    try {
        const signin = await Users.findOne({_email: req.params.email}).exec();
        res.json(signin);
    } catch (error) {
        res.status(400).json({
            error: "Khong dang ky duoc"
        })
    }
}