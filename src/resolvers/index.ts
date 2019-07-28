import {Auth} from './mutations/Auth'
import {SingleplayerMutations} from './mutations/Singleplayer'
import {RaceMutations} from './mutations/Race'
import {AccountQueries} from './queries/Account'
import {TestQueries} from './queries/Test'
import {RaceSubscriptions} from './subscriptions/Race'
import {RoomMutations} from './mutations/Room'
import {RoomSubscriptions} from './subscriptions/Room'

export default {
  Mutation: {
    ...Auth,
    ...SingleplayerMutations,
    ...RaceMutations,
    ...RoomMutations,
  },
  Query: {
    ...AccountQueries,
    ...TestQueries,
  },
  Subscription: {
    ...RaceSubscriptions,
    ...RoomSubscriptions,
  },
}
