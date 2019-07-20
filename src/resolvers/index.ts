import {Auth} from './mutations/Auth'
import {SingleplayerMutations} from './mutations/Singleplayer'
import {AccountQueries} from './queries/Account'
import {TestQueries} from './queries/Test'

export default {
  Mutation: {
    ...Auth,
    ...SingleplayerMutations,
  },
  Query: {
    ...AccountQueries,
    ...TestQueries,
  },
}
