export const AccountFragment = `
  fragment AccountByIdFragment on Account {
    id
    email
    username
    role
    lastSeen
    lastPlayed
    updatedAt
    createdAt
    confirmed
    results {
      id
      cpm
      rawCpm
      wpm
      correct
      incorrect
      corrections
      createdAt
      type
      wordIndex
    }
  }
`
