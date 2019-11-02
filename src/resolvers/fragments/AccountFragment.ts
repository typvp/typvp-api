export const AccountFragment = `
  fragment AccountByIdFragment on Account {
    id
    email
    username
    role
    lastSeen
    lastPlayed
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
