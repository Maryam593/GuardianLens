import BlackListTokenModel from "../Model.js/BlackListTokenModel.js"
import UserAuthModel from "../Model.js/UserModel.js"

const UserAuthController = {
 getAll : async (req,res) => {
    try {
        const data = await UserAuthModel.find()
        if(data)
            return res.status(404).json({Warning : 'Not Found'})
        res.status(200).json({Success: "Survivours!", data : data})
    } catch (error) {
        res.status(500).json({Error: "Internal Server Error"})
    }
 },
 getProfile : async(req,res)=> {
    try {
        const {id} = req.params;
        const userProfile = await UserAuthModel.findById(id)
        if(!userProfile)
            return res.status(404).json({Warning : 'Profile Not Found'})
        res.status(200).json({Success: "Survivour Profile", data: userProfile})
    } catch (error) {
        res.status(500).json({Error: "Internal Server Error"})
    }
 },
 SignUp : async (req,res) => {
    try {
        const {email,password, FullName :{firstName,lastName}} = req.body;
        const hashed =await  UserAuthModel.hashPassword(password);
        const isSurvivorExist = await UserAuthModel.findOne({email : email})
        if(isSurvivorExist)
        {
            return res.status(404).json({Warning : "Survivor Already exist"})
        }
        const signUpAsSurvivor = await UserAuthModel.create({
            FullName : {firstName,lastName},
            email : email,
            password : hashed,
        })
        const token =  signUpAsSurvivor.generateAuthToken()
        res.status(200).json({Success : "Profile of survivor successfully created!", data: signUpAsSurvivor,token})  
    } catch (error) {
        console.log(error)
        res.status(500).json({Error: "Internal Server Error"})
    }
 },
 Login : async(req,res) => {
    try {
        const {email,password} = req.body;
        const user = await UserAuthModel.findOne({email}).select('+password')
        const isMatched = user.comparePassword(password)
        if(!isMatched)
            return res.status(404).json({Warning : 'Credentials doesnot Match! Try Again'})
        const token = user.generateAuthToken();
        res.cookie('token', token)
        res.status(200).json({Success : "Survivor enter into guradian galaxy successfully", data : user,token})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({Error: "Internal Server Error"}) 
    }
 },
 Logout: async (req, res) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(400).json({ Warning: 'Token is missing' });
        }

        // Clear cookie
        res.clearCookie('token');

        // Add token to blacklist
        await BlackListTokenModel.create({ token });

        res.status(200).json({ Success: "Logout Successfully" });
    } catch (error) {
        console.error("Logout Error:", error);
        res.status(500).json({ Error: "Internal Server Error" });
    }
},

}

export default UserAuthController