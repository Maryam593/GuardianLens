import { Router } from "express";
import UserAuthController from "../Controller/User.js";

const UserRouter = Router()

UserRouter.get("/AllSurvivours", UserAuthController.getAll);
UserRouter.get("/survivour-profile/:id", UserAuthController.getProfile);
UserRouter.post("/register-yourself-as-survivour", UserAuthController.SignUp);
UserRouter.post("/lets-enter-into-guardian-galaxy", UserAuthController.Login);
UserRouter.get("/ByeByeSurvivour", UserAuthController.Logout);

export default UserRouter