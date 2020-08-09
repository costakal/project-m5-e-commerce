const items = require("./data/fixedItems.json");

const handleItems = (req, res) => {
  res.status(200).json({ status: 200, items: items });
};

const handleItem = (req, res) => {
  const _itemId = req.params.itemId;
  const item = items.find((item) => item._id.toString() === _itemId);
  item !== undefined
    ? res.status(200).json({ status: 200, item: item })
    : res.status(400).json({ status: 400, error: "Item not found." });
  res.status(200).json({ item: item });
};

module.exports = { handleItems, handleItem };
