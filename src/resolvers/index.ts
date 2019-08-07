import {Auth} from './mutations/Auth'

import {SingleplayerMutations} from './mutations/Singleplayer'
import {TrialMutations} from './mutations/Trial'

import {AccountQueries} from './queries/Account'
import {TestQueries} from './queries/Test'
import {TrialQueries} from './queries/Trial'

export default {
  Mutation: {
    ...Auth,
    ...SingleplayerMutations,
    ...TrialMutations,
  },
  Query: {
    ...AccountQueries,
    ...TestQueries,
    ...TrialQueries,
  },
}
