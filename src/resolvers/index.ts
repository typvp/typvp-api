import {Auth} from './mutations/Auth'
import {SingleplayerMutations} from './mutations/Singleplayer'
import {RaceMutations} from './mutations/Race'
import {AccountQueries} from './queries/Account'
import {TestQueries} from './queries/Test'

export default {
  Mutation: {
    ...Auth,
    ...SingleplayerMutations,
    ...RaceMutations,
  },
  Query: {
    ...AccountQueries,
    ...TestQueries,
  },
}
