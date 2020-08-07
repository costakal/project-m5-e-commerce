const items = require("./data/fixedItems.json");

const handleItems = (req, res) => {
  console.log("Test");
  res.status(200).json({ items: items });
};

const handleItem = (req, res) => {
  const _itemId = req.params.itemId;
  console.log(_itemId);
  const item = items.find((item) => item._id.toString() === _itemId);
  res.status(200).json({ item: item });
};

module.exports = { handleItems, handleItem };
