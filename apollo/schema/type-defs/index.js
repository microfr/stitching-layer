const gql = require('graphql-tag')

exports.typeDefs = gql`

    type CreditScoreNode {
        agency: String!
        creditScore: String!
    }

    type CreditScoreConnection {
        id: ID!,
        belongsTo: ID!,
        scores: [CreditScoreNode]
    }

    type TransactionNode {
        datetime: String!,
        statementAs: String!,
        amount: Float!
    }

    type TransactionConnection {
        id: ID!
        belongsTo: ID!
        transactions: [TransactionNode]
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        creditScore: CreditScoreConnection
        transactions: TransactionConnection
    }

    type Asset {
        src: String!
    }

    type Query {
        viewer: User
        creditScore(id: ID!): CreditScoreConnection
        transactions(id: ID!): TransactionConnection
        asset(namespace: String!): Asset
    }
`