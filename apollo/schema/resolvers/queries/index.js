const { getCreditScore } = require("./credit.query");
const { getTransactionsById } = require("./transactions.query");
const { getUserById } = require("./user.query");
const { getAsset } = require("./asset.query");

module.exports = {
  getCreditScore,
  getTransactionsById,
  getUserById,
  getAsset
};
