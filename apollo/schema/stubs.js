function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

exports.users = [
  {
    firstName: "Larry",
    lastName: "Gentlebread",
    phone: "612-555-5555",
    id: "1"
  }
];

exports.userCredit = [
  {
    id: "credit1",
    belongsTo: "1",
    scores: [
      {
        agency: "TransUnion",
        creditScore: "768"
      },
      {
        agency: "Equifax",
        creditScore: "750"
      }
    ]
  }
];

exports.transactions = [
  {
    id: "trans1",
    belongsTo: "1",
    transactions: [
      {
        datetime: randomDate(new Date(2019, 0, 1), new Date()),
        statementAs: "GBRA ENDEAVORS",
        amount: 12.48
      },
      {
        datetime: randomDate(new Date(2019, 0, 1), new Date()),
        statementAs: "CHIPOTLE INC",
        amount: 8.12
      },
      {
        datetime: randomDate(new Date(2019, 0, 1), new Date()),
        statementAs: "CUZZYS BAR",
        amount: 345.23
      },
      {
        datetime: randomDate(new Date(2019, 0, 1), new Date()),
        statementAs: "SPOTIFY INC",
        amount: 12.48
      },
      {
        datetime: randomDate(new Date(2019, 0, 1), new Date()),
        statementAs: "NETFLIX INC",
        amount: 12.48
      }
    ]
  }
];
