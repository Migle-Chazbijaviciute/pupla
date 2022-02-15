const ColorModel = require('../models/color-model');
const ColorViewModel = require('../view-models/color-view-model');

const getColors = async (req, res) => {
  const colorDocs = await ColorModel.find()
  res.status(200).json({
    color: colorDocs.map(color => new ColorViewModel(color))
  })
};

const createColor = async (req, res) => {
  const { title } = req.body;
  const colorDoc = await ColorModel({
    title
  });

  try {
    await colorDoc.save();
    const color = new ColorViewModel(colorDoc);
    res.status(200).json(color);
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: `Color '${title}' already exists`
    })
  }

};

const getColor = async (req, res) => {
  const { id } = req.params;
  try {
    const colorDoc = await ColorModel.findById(id);
    const color = new ColorViewModel(colorDoc);
    res.status(200).json(color);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' not found`
    })
  }

};

const deleteColor = async (req, res) => {
  const { id } = req.params;
  try {
    const colorDoc = await ColorModel.findByIdAndDelete(id)
    const color = new ColorViewModel(colorDoc);
    res.status(200).json(color);
  } catch (error) {
    res.status(404).json({
      message: 'Color not found'
    })
  }
};

const updateColor = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await ColorModel.findById(id);

    try {
      const colorDoc = await ColorModel.findByIdAndUpdate(
        id,
        { title },
        { new: true }
      );
      const color = new ColorViewModel(colorDoc);
      res.status(200).json(color);
    } catch (error) {
      res.status(400).json({ message: 'Invalid parameters' });
    }

  } catch (error) {
    res.status(404).json({ message: 'This color does not exist' });
  }
};

const replaceColor = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await ColorModel.findById(id);

    try {
      if (title) {
        const colorDoc = await ColorModel.findByIdAndUpdate(
          { _id: id },
          { title },
          {
            new: true,
            runValidators: true,
          }
        );
        const color = new ColorViewModel(colorDoc);
        res.status(200).json(color);
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(400).json({ message: 'Invalid parameters' });
    }

  } catch (error) {
    res.status(404).json({ message: 'This color does not exist' });
  }
};

module.exports = {
  getColors,
  createColor,
  getColor,
  deleteColor,
  updateColor,
  replaceColor
};
