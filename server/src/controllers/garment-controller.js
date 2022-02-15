const GarmentModel = require('../models/garment-model');
const GarmentViewModel = require('../view-models/garment-view-model');

const getGarments = async (req, res) => {
  const garmentDocs = await GarmentModel.find()
    .populate('color')
    .populate('category')
    .populate('sizes');
  const garment = garmentDocs.map(garment => new GarmentViewModel(garment))
  res.status(200).json({ garment: garment })
};

const createGarment = async (req, res) => {
  const { label, color, category, price, sizes, limitedEdition, inStock } = req.body;
  const garmentDocs = await GarmentModel({
    label, color, category, price, sizes, limitedEdition, inStock
  });

  try {
    await garmentDocs.save();
    const garment = new GarmentViewModel(garmentDocs);
    res.status(200).json(garment);
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: `Garment '${label}' already exists`
    })
  }
};

const getGarment = async (req, res) => {
  const { id } = req.params;
  try {
    const garmentDocs = await GarmentModel.findById(id)
      .populate('color')
      .populate('category')
      .populate('sizes');
    const garment = new GarmentViewModel(garmentDocs);
    res.status(200).json(garment);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' was not found`
    })
  }
};

const deleteGarment = async (req, res) => {
  const { id } = req.params;
  try {
    const garmentDocs = await GarmentModel.findByIdAndDelete(id)
      .populate('color')
      .populate('category')
      .populate('sizes');
    const garment = new GarmentViewModel(garmentDocs);
    res.status(200).json(garment);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' was not found`
    })
  }
}

const updateGarment = async (req, res) => {
  const { id } = req.params;
  const { label } = req.body;
  try {
    await GarmentModel.findById(id)
      .populate('color')
      .populate('category')
      .populate('sizes');
    try {
      const garmentDocs = await GarmentModel.findByIdAndUpdate(
        id,
        { label },
        { new: true }
      );
      const garment = new GarmentViewModel(garmentDocs);
      res.status(200).json(garment);
    } catch (error) {
      res.status(400).json({ message: 'Invalid parameters' });
    }

  } catch (error) {
    res.status(404).json({ message: 'This clothe does not exist' });
  }
};

module.exports = {
  getGarments,
  createGarment,
  getGarment,
  deleteGarment,
  updateGarment
};
