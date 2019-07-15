import {Auth} from './mutations/Auth'
import {SingleplayerMutations} from './mutations/Singleplayer'
import {AccountQueries} from './queries/Account'

export default {
  Mutation: {
    ...Auth,
    ...SingleplayerMutations,
  },
  Query: {
    ...AccountQueries,
  },
}
