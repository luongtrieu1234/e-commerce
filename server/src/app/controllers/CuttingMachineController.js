const CuttingMachine = require("../model/CuttingMachine");

class CuttingMachineController {
  
  async create(req, res, next) {
    if (req.files && req.files['image']) {
      const url = process.env.HOSTNAME + req.files['image'][0].path.substr(10);
      req.body.image = url;
    } else {
      return res.status(501).json({
        status: false,
        msg: "No image file uploaded!!!",
      });
    }
    if (req.files && req.files['completedImages']) {
      const completedImages = req.files['completedImages'].map(file => process.env.HOSTNAME + file.path.substr(10));
      req.body.completedImages = completedImages;
    }
    if (req.files && req.files['video']) {
      const url = process.env.HOSTNAME + req.files['video'][0].path.substr(10);
      req.body.video = url;
    } 
    try {
      const cuttingMachine = new CuttingMachine(req.body);
      await cuttingMachine.save();
      return res.json({ cuttingMachine, status: true });
    } catch (error) {
      next(error);
    }
  }

  async read(req, res, next) {
    try {
      const cuttingMachine = await CuttingMachine.findById(req.params.id);
      if (cuttingMachine) {
        return res.json({ cuttingMachine, status: true });
      } else {
        return res.json({ msg: "Cutting machine not found", status: false });
      }
    } catch (error) {
      next(error);
    }
  }

  async readAll(req, res, next) {
    try {
      const cuttingMachines = await CuttingMachine.find();
      if (cuttingMachines) {
        return res.json({ cuttingMachines, status: true });
      } else {
        return res.json({ msg: "Cutting machines not found", status: false });
      }
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    if (req.files && req.files['image']) {
      const url = process.env.HOSTNAME + req.files['image'][0].path.substr(10);
      req.body.image = url;
    } 
    if (req.files && req.files['completedImages']) {
      const completedImages = req.files['completedImages'].map(file => process.env.HOSTNAME + file.path.substr(10));
      req.body.completedImages = completedImages;
    }
    if (req.files && req.files['video']) {
      const url = process.env.HOSTNAME + req.files['video'][0].path.substr(10);
      req.body.video = url;
    } 
    try {
      const cuttingMachine = await CuttingMachine.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (cuttingMachine) {
        return res.json({ cuttingMachine, status: true });
      } else {
        return res.json({ msg: "Cutting machine not found", status: false });
      }
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const cuttingMachine = await CuttingMachine.findByIdAndDelete(req.params.id);
      if (cuttingMachine) {
        return res.json({ msg: "Cutting machine deleted", status: true });
      } else {
        return res.json({ msg: "Cutting machine not found", status: false });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CuttingMachineController();