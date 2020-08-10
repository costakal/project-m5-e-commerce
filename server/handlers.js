const items = require("./data/fixedItems.json");
const companies = require("./data/fixedCompanies.json");

const handleItems = (req, res) => {
  res.status(200).json({ status: 200, items: items });
};

const handleItem = (req, res) => {
  const _itemId = req.params.itemId;
  const item = items.find((item) => item._id.toString() === _itemId);
  item !== undefined
    ? res.status(200).json({ status: 200, item: item })
    : res.status(404).json({ status: 404, error: "Item not found." });
};

const handleCompanies = (req, res) => {
  res.status(200).json({ status: 200, companies: companies });
};

const handleCompany = (req, res) => {
  const _companyId = req.params.companyId;
  const company = companies.find(
    (company) => company._id.toString() === _companyId
  );
  company !== undefined
    ? res.status(200).json({ status: 200, company: company })
    : res.status(404).json({ status: 404, error: "Company not found." });
};

const handlePurchase = (req, res) => {
  const { order } = req.body;
  let outOfStock = false;

  order.forEach((orderItem) => {
    const item = items.find((item) => item._id === orderItem.itemId);
    item.numInStock < orderItem.quantity && (outOfStock = true);
  });

  if (outOfStock === true) {
    res.status(400).json({
      status: 400,
      error: "Sorry but one or more items in your order are out of stock.",
    });
  } else {
    order.forEach((orderItem) => {
      const item = items.find((item) => item._id === orderItem.itemId);
      item.numInStock -= orderItem.quantity;
    });
    res.status(200).json({ status: 200, order: order });
  }
};

module.exports = {
  handleItems,
  handleItem,
  handleCompanies,
  handleCompany,
  handlePurchase,
};
