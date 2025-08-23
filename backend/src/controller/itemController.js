const Item = require("../model/itemModel");

const getAllItems = async (req, res) => {
  const rejult = await Item.find().sort({createAt: -1});
  res.status(200).json(rejult);
};

const getSeachedItems = async (req, res) => {
  const { q } = req.query;
  try {
    let items;
    if (q) {
      items = await Item.find({ name: { $regex: q, $options: 'i' } });
    }
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'No items found' });
  }
};

module.exports = { getAllItems, getSeachedItems };
