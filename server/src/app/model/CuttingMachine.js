const mongoose = require('mongoose');
const CuttingMachine = new mongoose.Schema(
	{
		productName: { type: String },
		description: { type: String },
		image: { type: String },
		video: { type: String },
		intro: { type: String },
		highlights: { type: String },
		completedImages: { type: [String] },
		machineCode: { type: String },
		workingSize: { type: String },
		configuration: { type: String },
		function: { type: String },
		cuttingMaterial: { type: String },
		materialFixingMethod: { type: String },
		includedSupportWheel: { type: String },
		maximumSpeed: { type: String },
		minimumCuttingDiameter: { type: String },
		maximumCuttingThickness: { type: String },
		accuracy: { type: String },
		vacuumPower: { type: String },
		voltage: { type: String },
		fileSample: { type: String },
		options: { type: [String] },
		occupiedSize: { type: String },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('CuttingMachine', CuttingMachine);