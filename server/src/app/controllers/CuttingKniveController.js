const CuttingKnive = require("../model/CuttingKnive");

class CuttingKniveController {
  async create(req, res, next) {
    if (req.files && req.files['image']) {
      const url = process.env.HOSTNAME + req.files['image'][0].path.substr(10);
      req.body.image = url;
    } 
    if (req.files && req.files['video']) {
      const url = process.env.HOSTNAME + req.files['video'][0].path.substr(10);
      req.body.video = url;
    } 
    try {
      const cuttingKnive = new CuttingKnive(req.body);
      await cuttingKnive.save();
      return res.json({ cuttingKnive, status: true });
    } catch (error) {
      next(error);
    }
  }

  async read(req, res, next) {
    try {
      const cuttingKnive = await CuttingKnive.findById(req.params.id);
      if (cuttingKnive) {
        return res.json({ cuttingKnive, status: true });
      } else {
        return res.json({ msg: "Cutting knive not found", status: false });
      }
    } catch (error) {
      next(error);
    }
  }

  async readAll(req, res, next) {
    try {
      const cuttingKnives = await CuttingKnive.find();
      if (cuttingKnives) {
        return res.json({ cuttingKnives, status: true });
      } else {
        return res.json({ msg: "Cutting knives not found", status: false });
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
    if (req.files && req.files['video']) {
      const url = process.env.HOSTNAME + req.files['video'][0].path.substr(10);
      req.body.video = url;
    } 
    try {
      const cuttingKnive = await CuttingKnive.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (cuttingKnive) {
        return res.json({ cuttingKnive, status: true });
      } else {
        return res.json({ msg: "Cutting knive not found", status: false });
      }
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const cuttingKnive = await CuttingKnive.findByIdAndDelete(req.params.id);
      if (cuttingKnive) {
        return res.json({ msg: "Cutting knive deleted", status: true });
      } else {
        return res.json({ msg: "Cutting knive not found", status: false });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CuttingKniveController();