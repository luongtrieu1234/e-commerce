const userRoutes = require("./user.route");
const authenticationRoutes = require("./authen.route");
const cuttingMachineRoutes = require("./cutting-machine.route");
const cuttingKniveRoutes = require("./cutting-knive.route");

function router(app) {
  // app.use("/api/user", userRoutes);
  // app.use("/api/auth", authenticationRoutes);
  app.use("/api/cutting-machine", cuttingMachineRoutes);
  app.use("/api/cutting-knive", cuttingKniveRoutes);
}

module.exports = router;
