const TypeModel = require('../models/type-model');
const TypeViewModel = require('../view-models/type-view-model');

const getTypes = async (req, res) => {
  const typeDocs = await TypeModel.find()
  res.status(200).json({
    type: typeDocs.map(type => new TypeViewModel(type))
  })
};

const createType = async (req, res) => {
  const { title } = req.body;
  const typeDoc = await TypeModel({
    title
  });

  try {
    await typeDoc.save();
    const type = new TypeViewModel(typeDoc);
    res.status(400).json(type);
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: `Type '${title}' already exists`
    })
  }

};

const getType = async (req, res) => {
  const { id } = req.params;
  try {
    const typeDoc = await TypeModel.findById(id);
    const type = new TypeViewModel(typeDoc);
    res.status(200).json(type);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' not found`
    })
  }

};

const deleteType = async (req, res) => {
  const { id } = req.params;
  try {
    const typeDoc = await TypeModel.findByIdAndDelete(id)
    const type = new TypeViewModel(typeDoc);
    res.status(200).json(type);
  } catch (error) {
    res.status(404).json({
      message: 'Fruit not found'
    })
  }
};

const updateType = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await TypeModel.findById(id);

    try {
      const typeDoc = await TypeModel.findByIdAndUpdate(
        id,
        { title },
        { new: true }
      );
      const type = new TypeViewModel(typeDoc);
      res.status(200).json(type);
    } catch (error) {
      res.status(400).json({ message: 'Invalid parameters' });
    }

  } catch (error) {
    res.status(404).json({ message: 'This type does not exist' });
  }
};

const replaceType = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    await TypeModel.findById(id);

    try {
      if (title) {
        const typeDoc = await TypeModel.findByIdAndUpdate(
          { _id: id },
          { title },
          {
            new: true,
            runValidators: true,
          }
        );
        const type = new TypeViewModel(typeDoc);
        res.status(200).json(type);
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(400).json({ message: 'Invalid parameters' });
    }

  } catch (error) {
    res.status(404).json({ message: 'This type does not exist' });
  }
};

module.exports = {
  getTypes,
  createType,
  getType,
  deleteType,
  updateType,
  replaceType
};
