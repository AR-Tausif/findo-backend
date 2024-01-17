import { RequestHandler } from "express";
import { AuthService } from "./auth.service";

const createUser: RequestHandler = async (req, res) => {
  try {
    console.log("hello");
    const result = await AuthService.createUser(req.body);
    res.status(200).json({
      success: true,
      message: "Wow, account created successfully",
      result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "You cannot create your account. please try again later",
      error,
    });
  }
};
const loginUser: RequestHandler = async (req, res) => {
  try {
    console.log("login");
    const credential = req.body;
    const result = await AuthService.loginUser(credential);

    res.status(200).json({
      success: true,
      message: "You are logged in successfully",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message:
        "This email and password not recognized. Enter correct email and password",
      error: error,
    });
  }
};

export const AuthController = {
  createUser,
  loginUser,
};
