export const TrialFragment = `
  fragment TrialFragment on Trial {
    id
    name
    difficulty
    minWordLength
    maxWordLength
    wordSet
    results {
      id
      createdAt
      cpm
      rawCpm
      wpm
      correct
      incorrect
      corrections
      type
      account {
        username
        id
      }
    }
  }
`