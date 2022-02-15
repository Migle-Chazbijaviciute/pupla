const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');

const getUsers = async (req, res) => {
  const userDocs = await UserModel.find().populate('saved');
  const users = userDocs.map(userDoc => new UserViewModel(userDoc));
  res.status(200).json({ users });
};

const updateUser = async (req, res) => {
  const { email, name, surname, phoneNumber, country, address, city, zipcode, saved } = req.body;

  const expectedProps = { email, name, surname, phoneNumber, country, address, city, zipcode, saved };
  const props = Object.entries(expectedProps)
    .reduce((result, [name, value]) => {
      if (value !== undefined) {
        result[name] = value;
      }
      return result;
    }, {});

  const userDoc = await UserModel.findOneAndUpdate(
    { email: req.user.email },
    props,
    { new: false },
  ).populate('saved');

  res.status(200).json({
    message: 'Vartotojas atnaujintas',
    user: new UserViewModel(userDoc)
  })
}

module.exports = {
  getUsers,
  updateUser,
};
