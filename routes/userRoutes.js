import express from "express";
import {
  addToPlayList,
  changePassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  register,
  removeFromPlayList,
  resetPassword,
  updateProfile,
  updateProfilepicture,
  updateUserRole,
} from "../controllers/userController.js";
import { login } from "../controllers/userController.js";
import { logout } from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//To register a new user
router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router
  .route("/me")
  .get(isAuthenticated, getMyProfile)
  .delete(isAuthenticated, deleteMyProfile);
router.route("/changepassword").put(isAuthenticated, changePassword);
router
  .route("/updateprofile")
  .put(isAuthenticated, singleUpload, updateProfile);
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilepicture);

router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword/:token").post(resetPassword);
router.route("/addtoplaylist").post(isAuthenticated, addToPlayList);
router.route("/removefromplaylist").post(isAuthenticated, removeFromPlayList);

//Admin routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);
router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);

export default router;
