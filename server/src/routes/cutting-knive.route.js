const express = require("express");
const Router = express.Router();
const multer = require("multer");
const cuttingKniveController = require("../app/controllers/CuttingKniveController");

const storageImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.LOCATION_FILE);
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


const uploadImage = multer({ storage: storageImage});

Router.get("/", cuttingKniveController.readAll);
Router.post("/", uploadImage.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]), cuttingKniveController.create);
Router.get("/:id", cuttingKniveController.read);
Router.put("/:id", uploadImage.fields([{ name: 'image', maxCount: 1 } ,{ name: 'video', maxCount: 1 }]), cuttingKniveController.update);
Router.delete("/:id", cuttingKniveController.delete);

module.exports = Router;