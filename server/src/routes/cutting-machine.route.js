const express = require("express");
const Router = express.Router();
const userController = require("../app/controllers/UserController");
const authenticateToken = require("../middleware/authenticateToken");
const multer = require("multer");
const cuttingMachineController = require("../app/controllers/CuttingMachineController");

const storageImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,  process.env.LOCATION_FILE);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const imageFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  }
};

const uploadImage = multer({ storage: storageImage });
Router.get("/", cuttingMachineController.readAll);
Router.post("/", uploadImage.fields([{ name: 'image', maxCount: 1 }, 
  { name: 'completedImages', maxCount: 3 },{ name: 'video', maxCount: 1 }]), cuttingMachineController.create);
Router.get("/:id", cuttingMachineController.read);
Router.put("/:id", uploadImage.fields([{ name: 'image', maxCount: 1 }, 
  { name: 'completedImages', maxCount: 3 },{ name: 'video', maxCount: 1 }]), cuttingMachineController.update);
Router.delete("/:id", cuttingMachineController.delete);

module.exports = Router;