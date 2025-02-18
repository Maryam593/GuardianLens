import Router from "express"
import SignLanguageController from "../Controller/SignLanguage.js"
const SignLanguageRouter = Router()

SignLanguageRouter.get("/AllSigns", SignLanguageController.getAll);
SignLanguageRouter.get("/single-sign-gesture", SignLanguageController.getSingle);
SignLanguageRouter.post("/new-sign-gesture", SignLanguageController.newSign);
SignLanguageRouter.put("/update-sign-gesture/:id", SignLanguageController.UpdateSign);
SignLanguageRouter.delete("/delete-sign-gesture/:id", SignLanguageController.deleteSign);
export default SignLanguageRouter
