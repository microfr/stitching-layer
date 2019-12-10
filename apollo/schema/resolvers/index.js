const fromQueries  = require('./queries')

exports.resolvers = {
    Query: {
      viewer: fromQueries.getUserById,
      creditScore: fromQueries.getCreditScore,
      transactions: fromQueries.getTransactionsById,
      asset: fromQueries.getAsset
    },
    User: {
      creditScore: fromQueries.getCreditScore,
      transactions: fromQueries.getTransactionsById
    }
  }