const { Router } = require("express")
const uploadConfig = require("../configs/upload")
const multer = require("multer")

const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAutenticaded = require("../middlewares/ensureAutenticaded")



const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAutenticaded, usersController.update)
usersRoutes.patch("/avatar", ensureAutenticaded, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes