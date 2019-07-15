export const AccountFragment = `
  fragment AccountByIdFragment on Account {
    id
    email
    username
    role
    results {
      id
      cpm
      rawCpm
      wpm
      correct
      incorrect
      corrections
      createdAt
    }
  }
`
