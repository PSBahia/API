const { Router } = require("express")

const NotesController = require("../controllers/NotesController")
const ensureAutenticaded = require("../middlewares/ensureAutenticaded.js")

const notesRoutes = Router()
 
const notesController = new NotesController()

notesRoutes.use(ensureAutenticaded)

notesRoutes.get("/", notesController.index)
notesRoutes.post("/", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes