const { transactions } = require("../../stubs");

exports.getTransactionsById = (_, { id }) => {
  if (id) {
    return transactions.find(t => t.belongsTo === id);
  }
  throw new Error("User is not authorized to access transaction data.");
};
