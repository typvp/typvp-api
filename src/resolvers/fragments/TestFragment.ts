export const TestFragment = `
  fragment TestFragment on Test {
    id
    cpm
    rawCpm
    wpm
    correct
    incorrect
    corrections
    createdAt
    type
    account {
      username
      id
    }
  }
`
