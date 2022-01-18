const SizeModel = require('../models/size-model');
const SizeViewModel = require('../view-models/size-view-model');

const getSizes = async (req, res) => {
  const sizeDocs = await SizeModel.find()
  res.status(200).json({
    size: sizeDocs.map(size => new SizeViewModel(size))
  })
};

const createSize = async (req, res) => {
  const { title } = req.body;
  const sizeDoc = await SizeModel({
    title
  });

  try {
    await sizeDoc.save();
    const size = new SizeViewModel(sizeDoc);
    res.status(400).json(size);
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: `Size '${title}' already exists`
    })
  }

};

const getSize = async (req, res) => {
  const { id } = req.params;
  try {
    const sizeDoc = await SizeModel.findById(id);
    const size = new SizeViewModel(sizeDoc);
    res.status(200).json(size);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' not found`
    })
  }

};

const deleteSize = async (req, res) => {
  const { id } = req.params;
  try {
    const sizeDoc = await SizeModel.findByIdAndDelete(id)
    const size = new SizeViewModel(sizeDoc);
    res.status(200).json(size);
  } catch (error) {
    res.status(404).json({
      message: 'Size not found'
    })
  }
};

const updateSize = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await SizeModel.findById(id);

    try {
      const sizeDoc = await SizeModel.findByIdAndUpdate(
        id,
        { title },
        { new: true }
      );
      const size = new SizeViewModel(sizeDoc);
      res.status(200).json(size);
    } catch (error) {
      res.status(400).json({ message: 'Invalid parameters' });
    }

  } catch (error) {
    res.status(404).json({ message: 'This size does not exist' });
  }
};

const replaceSize = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await SizeModel.findById(id);

    try {
      if (title) {
        const sizeDoc = await SizeModel.findByIdAndUpdate(
          { _id: id },
          { title },
          {
            new: true,
            runValidators: true,
          }
        );
        const size = new SizeViewModel(sizeDoc);
        res.status(200).json(size);
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(400).json({ message: 'Invalid parameters' });
    }

  } catch (error) {
    res.status(404).json({ message: 'This size does not exist' });
  }
};

module.exports = {
  getSizes,
  createSize,
  getSize,
  deleteSize,
  updateSize,
  replaceSize
};
