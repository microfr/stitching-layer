const { userCredit } = require("../../stubs");
const { AuthenticationError } = require("apollo-server");

exports.getCreditScore = (parent, { id }, { user }) => {
  console.log('creditscore ', id, user);
  if (parent && parent.id) {
    return userCredit.find(score => score.belongsTo === parent.id);
  }
  if (id) {
    return userCredit.find(score => score.belongsTo === id);
  }
  throw new AuthenticationError(
    "User is not authorized to access credit data."
  );
};
