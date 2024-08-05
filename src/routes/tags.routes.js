const { Router } = require("express")

const TagsController = require("../controllers/TagsController")
const ensureAutenticaded = require("../middlewares/ensureAutenticaded.js")

const tagsRoutes = Router()
 

const tagsController = new TagsController()

tagsRoutes.get("/", ensureAutenticaded,  tagsController.index)

module.exports = tagsRoutes