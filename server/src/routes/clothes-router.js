const express = require('express');
const { v4: generateId } = require('uuid');

const router = express.Router();

const clothesTypes = [
  {
    id: "1",
    title: "dress"
  },
  {
    id: "2",
    title: "shirt"
  },
  {
    id: "3",
    title: "set"
  }
];

router.get('/', (req, res) => {
  res.status(200).json({ clothesTypes });
});


router.post('/', (req, res) => {
  const { title } = req.body;
  clothesTypes.push({
    id: generateId(),
    title
  })
  res.send('New clothes type successfully added');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json(clothesTypes.find(x => x.id === id));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const ii = clothesTypes.findIndex(x => x.id === id);
  if (ii >= 0) {
    const [deletedType] = clothesTypes.splice(ii, 1);
    res.status(200).json(deletedType);
  } else {
    res.status(404).json({
      message: 'This type does not exist'
    })
  }
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const type = clothesTypes.find(x => x.id === id);
  if (type) {
    if (title) type.title = title;
    res.status(200).json(type);
  } else {
    res.status(404).json({ message: 'This type does not exist' })
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const type = clothesTypes.find(x => x.id === id);
  if (type) {
    if (title) {
      type.title = title;
      res.status(200).json(type);
    } else {
      res.status(400).json({ message: 'Data is missing' })
    }
  } else {
    res.status(404).json({ message: 'This type does not exist' })
  }
});

module.exports = router;
