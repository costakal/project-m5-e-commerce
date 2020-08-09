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
    : res.status(400).json({ status: 404, error: "Item not found." });
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
    : res.status(400).json({ status: 404, error: "Company not found." });
};

module.exports = { handleItems, handleItem, handleCompanies, handleCompany };
