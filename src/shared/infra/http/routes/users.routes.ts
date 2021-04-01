import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../../../../modules/accounts/useCases/CreateUser/CreateUserController";
import { UpdateUserAvatarControler } from "../../../../modules/accounts/useCases/updatedUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarControler = new UpdateUserAvatarControler();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarControler.handle
);

export { usersRoutes };
