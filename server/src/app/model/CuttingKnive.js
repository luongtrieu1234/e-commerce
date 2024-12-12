const mongoose = require('mongoose');

const CuttingKnive = new mongoose.Schema(
	{
		code: { type: String },
		material: { type: String },
		conner: { type: String },
		length: { type: String },
		width: { type: String },
		thickness: { type: String },
		holeDiameter: { type: String },
		image: { type: String },
		video: { type: String },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('CuttingKnive', CuttingKnive);