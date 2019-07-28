export const RoomFragment = `
  fragment RoomFragment on Room {
    id
    createdAt
    updatedAt
    roomState
    race {
      players {
        id
        username
        email
      }
      raceState
      wordSet
    }
    roomHost
  }
`
