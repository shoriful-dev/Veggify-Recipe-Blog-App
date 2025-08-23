//fetch items based on category

const Category = require('../model/categoryModel');
const Item = require('../model/itemModel');

const getCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const categoryData = await Category.findOne({ name: category });
    if (!categoryData)
      return res.status(404).json({ message: 'Category not found' });
    const items = await Item.find({ menuId: categoryData.menuId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getCategory,
};
