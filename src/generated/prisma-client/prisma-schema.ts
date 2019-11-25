// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type Account {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  username: String!
  usernameLowercase: String
  password: String!
  results(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test!]
  role: Role!
  lastSeen: Float
  lastPlayed: ResultType
  confirmed: Boolean!
}

type AccountConnection {
  pageInfo: PageInfo!
  edges: [AccountEdge]!
  aggregate: AggregateAccount!
}

input AccountCreateInput {
  id: ID
  email: String!
  username: String!
  usernameLowercase: String
  password: String!
  results: TestCreateManyWithoutAccountInput
  role: Role!
  lastSeen: Float
  lastPlayed: ResultType
  confirmed: Boolean
}

input AccountCreateOneWithoutResultsInput {
  create: AccountCreateWithoutResultsInput
  connect: AccountWhereUniqueInput
}

input AccountCreateWithoutResultsInput {
  id: ID
  email: String!
  username: String!
  usernameLowercase: String
  password: String!
  role: Role!
  lastSeen: Float
  lastPlayed: ResultType
  confirmed: Boolean
}

type AccountEdge {
  node: Account!
  cursor: String!
}

enum AccountOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  usernameLowercase_ASC
  usernameLowercase_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  lastSeen_ASC
  lastSeen_DESC
  lastPlayed_ASC
  lastPlayed_DESC
  confirmed_ASC
  confirmed_DESC
}

type AccountPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  username: String!
  usernameLowercase: String
  password: String!
  role: Role!
  lastSeen: Float
  lastPlayed: ResultType
  confirmed: Boolean!
}

type AccountSubscriptionPayload {
  mutation: MutationType!
  node: Account
  updatedFields: [String!]
  previousValues: AccountPreviousValues
}

input AccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AccountWhereInput
  AND: [AccountSubscriptionWhereInput!]
  OR: [AccountSubscriptionWhereInput!]
  NOT: [AccountSubscriptionWhereInput!]
}

input AccountUpdateInput {
  email: String
  username: String
  usernameLowercase: String
  password: String
  results: TestUpdateManyWithoutAccountInput
  role: Role
  lastSeen: Float
  lastPlayed: ResultType
  confirmed: Boolean
}

input AccountUpdateManyMutationInput {
  email: String
  username: String
  usernameLowercase: String
  password: String
  role: Role
  lastSeen: Float
  lastPlayed: ResultType
  confirmed: Boolean
}

input AccountUpdateOneRequiredWithoutResultsInput {
  create: AccountCreateWithoutResultsInput
  update: AccountUpdateWithoutResultsDataInput
  upsert: AccountUpsertWithoutResultsInput
  connect: AccountWhereUniqueInput
}

input AccountUpdateWithoutResultsDataInput {
  email: String
  username: String
  usernameLowercase: String
  password: String
  role: Role
  lastSeen: Float
  lastPlayed: ResultType
  confirmed: Boolean
}

input AccountUpsertWithoutResultsInput {
  update: AccountUpdateWithoutResultsDataInput!
  create: AccountCreateWithoutResultsInput!
}

input AccountWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  usernameLowercase: String
  usernameLowercase_not: String
  usernameLowercase_in: [String!]
  usernameLowercase_not_in: [String!]
  usernameLowercase_lt: String
  usernameLowercase_lte: String
  usernameLowercase_gt: String
  usernameLowercase_gte: String
  usernameLowercase_contains: String
  usernameLowercase_not_contains: String
  usernameLowercase_starts_with: String
  usernameLowercase_not_starts_with: String
  usernameLowercase_ends_with: String
  usernameLowercase_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  results_every: TestWhereInput
  results_some: TestWhereInput
  results_none: TestWhereInput
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  lastSeen: Float
  lastSeen_not: Float
  lastSeen_in: [Float!]
  lastSeen_not_in: [Float!]
  lastSeen_lt: Float
  lastSeen_lte: Float
  lastSeen_gt: Float
  lastSeen_gte: Float
  lastPlayed: ResultType
  lastPlayed_not: ResultType
  lastPlayed_in: [ResultType!]
  lastPlayed_not_in: [ResultType!]
  confirmed: Boolean
  confirmed_not: Boolean
  AND: [AccountWhereInput!]
  OR: [AccountWhereInput!]
  NOT: [AccountWhereInput!]
}

input AccountWhereUniqueInput {
  id: ID
  email: String
  username: String
  usernameLowercase: String
}

type AggregateAccount {
  count: Int!
}

type AggregateTest {
  count: Int!
}

type AggregateTrial {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

enum Difficulty {
  EASY
  NORMAL
  MEDIUM
  HARD
}

scalar Long

type Mutation {
  createAccount(data: AccountCreateInput!): Account!
  updateAccount(data: AccountUpdateInput!, where: AccountWhereUniqueInput!): Account
  updateManyAccounts(data: AccountUpdateManyMutationInput!, where: AccountWhereInput): BatchPayload!
  upsertAccount(where: AccountWhereUniqueInput!, create: AccountCreateInput!, update: AccountUpdateInput!): Account!
  deleteAccount(where: AccountWhereUniqueInput!): Account
  deleteManyAccounts(where: AccountWhereInput): BatchPayload!
  createTest(data: TestCreateInput!): Test!
  updateTest(data: TestUpdateInput!, where: TestWhereUniqueInput!): Test
  updateManyTests(data: TestUpdateManyMutationInput!, where: TestWhereInput): BatchPayload!
  upsertTest(where: TestWhereUniqueInput!, create: TestCreateInput!, update: TestUpdateInput!): Test!
  deleteTest(where: TestWhereUniqueInput!): Test
  deleteManyTests(where: TestWhereInput): BatchPayload!
  createTrial(data: TrialCreateInput!): Trial!
  updateTrial(data: TrialUpdateInput!, where: TrialWhereUniqueInput!): Trial
  updateManyTrials(data: TrialUpdateManyMutationInput!, where: TrialWhereInput): BatchPayload!
  upsertTrial(where: TrialWhereUniqueInput!, create: TrialCreateInput!, update: TrialUpdateInput!): Trial!
  deleteTrial(where: TrialWhereUniqueInput!): Trial
  deleteManyTrials(where: TrialWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  account(where: AccountWhereUniqueInput!): Account
  accounts(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account]!
  accountsConnection(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccountConnection!
  test(where: TestWhereUniqueInput!): Test
  tests(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test]!
  testsConnection(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TestConnection!
  trial(where: TrialWhereUniqueInput!): Trial
  trials(where: TrialWhereInput, orderBy: TrialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trial]!
  trialsConnection(where: TrialWhereInput, orderBy: TrialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TrialConnection!
  node(id: ID!): Node
}

enum ResultType {
  SINGLEPLAYER
  RACE
  TRIAL
}

enum Role {
  USER
  ADMIN
  PRO
}

type Subscription {
  account(where: AccountSubscriptionWhereInput): AccountSubscriptionPayload
  test(where: TestSubscriptionWhereInput): TestSubscriptionPayload
  trial(where: TrialSubscriptionWhereInput): TrialSubscriptionPayload
}

type Test {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  cpm: Int!
  rawCpm: Int!
  wpm: Int!
  correct: Int!
  incorrect: Int!
  corrections: Int!
  wordIndex: Int!
  account: Account!
  type: ResultType!
}

type TestConnection {
  pageInfo: PageInfo!
  edges: [TestEdge]!
  aggregate: AggregateTest!
}

input TestCreateInput {
  id: ID
  cpm: Int!
  rawCpm: Int!
  wpm: Int!
  correct: Int!
  incorrect: Int!
  corrections: Int!
  wordIndex: Int!
  account: AccountCreateOneWithoutResultsInput!
  type: ResultType!
}

input TestCreateManyInput {
  create: [TestCreateInput!]
  connect: [TestWhereUniqueInput!]
}

input TestCreateManyWithoutAccountInput {
  create: [TestCreateWithoutAccountInput!]
  connect: [TestWhereUniqueInput!]
}

input TestCreateWithoutAccountInput {
  id: ID
  cpm: Int!
  rawCpm: Int!
  wpm: Int!
  correct: Int!
  incorrect: Int!
  corrections: Int!
  wordIndex: Int!
  type: ResultType!
}

type TestEdge {
  node: Test!
  cursor: String!
}

enum TestOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  cpm_ASC
  cpm_DESC
  rawCpm_ASC
  rawCpm_DESC
  wpm_ASC
  wpm_DESC
  correct_ASC
  correct_DESC
  incorrect_ASC
  incorrect_DESC
  corrections_ASC
  corrections_DESC
  wordIndex_ASC
  wordIndex_DESC
  type_ASC
  type_DESC
}

type TestPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  cpm: Int!
  rawCpm: Int!
  wpm: Int!
  correct: Int!
  incorrect: Int!
  corrections: Int!
  wordIndex: Int!
  type: ResultType!
}

input TestScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  cpm: Int
  cpm_not: Int
  cpm_in: [Int!]
  cpm_not_in: [Int!]
  cpm_lt: Int
  cpm_lte: Int
  cpm_gt: Int
  cpm_gte: Int
  rawCpm: Int
  rawCpm_not: Int
  rawCpm_in: [Int!]
  rawCpm_not_in: [Int!]
  rawCpm_lt: Int
  rawCpm_lte: Int
  rawCpm_gt: Int
  rawCpm_gte: Int
  wpm: Int
  wpm_not: Int
  wpm_in: [Int!]
  wpm_not_in: [Int!]
  wpm_lt: Int
  wpm_lte: Int
  wpm_gt: Int
  wpm_gte: Int
  correct: Int
  correct_not: Int
  correct_in: [Int!]
  correct_not_in: [Int!]
  correct_lt: Int
  correct_lte: Int
  correct_gt: Int
  correct_gte: Int
  incorrect: Int
  incorrect_not: Int
  incorrect_in: [Int!]
  incorrect_not_in: [Int!]
  incorrect_lt: Int
  incorrect_lte: Int
  incorrect_gt: Int
  incorrect_gte: Int
  corrections: Int
  corrections_not: Int
  corrections_in: [Int!]
  corrections_not_in: [Int!]
  corrections_lt: Int
  corrections_lte: Int
  corrections_gt: Int
  corrections_gte: Int
  wordIndex: Int
  wordIndex_not: Int
  wordIndex_in: [Int!]
  wordIndex_not_in: [Int!]
  wordIndex_lt: Int
  wordIndex_lte: Int
  wordIndex_gt: Int
  wordIndex_gte: Int
  type: ResultType
  type_not: ResultType
  type_in: [ResultType!]
  type_not_in: [ResultType!]
  AND: [TestScalarWhereInput!]
  OR: [TestScalarWhereInput!]
  NOT: [TestScalarWhereInput!]
}

type TestSubscriptionPayload {
  mutation: MutationType!
  node: Test
  updatedFields: [String!]
  previousValues: TestPreviousValues
}

input TestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TestWhereInput
  AND: [TestSubscriptionWhereInput!]
  OR: [TestSubscriptionWhereInput!]
  NOT: [TestSubscriptionWhereInput!]
}

input TestUpdateDataInput {
  cpm: Int
  rawCpm: Int
  wpm: Int
  correct: Int
  incorrect: Int
  corrections: Int
  wordIndex: Int
  account: AccountUpdateOneRequiredWithoutResultsInput
  type: ResultType
}

input TestUpdateInput {
  cpm: Int
  rawCpm: Int
  wpm: Int
  correct: Int
  incorrect: Int
  corrections: Int
  wordIndex: Int
  account: AccountUpdateOneRequiredWithoutResultsInput
  type: ResultType
}

input TestUpdateManyDataInput {
  cpm: Int
  rawCpm: Int
  wpm: Int
  correct: Int
  incorrect: Int
  corrections: Int
  wordIndex: Int
  type: ResultType
}

input TestUpdateManyInput {
  create: [TestCreateInput!]
  update: [TestUpdateWithWhereUniqueNestedInput!]
  upsert: [TestUpsertWithWhereUniqueNestedInput!]
  delete: [TestWhereUniqueInput!]
  connect: [TestWhereUniqueInput!]
  set: [TestWhereUniqueInput!]
  disconnect: [TestWhereUniqueInput!]
  deleteMany: [TestScalarWhereInput!]
  updateMany: [TestUpdateManyWithWhereNestedInput!]
}

input TestUpdateManyMutationInput {
  cpm: Int
  rawCpm: Int
  wpm: Int
  correct: Int
  incorrect: Int
  corrections: Int
  wordIndex: Int
  type: ResultType
}

input TestUpdateManyWithoutAccountInput {
  create: [TestCreateWithoutAccountInput!]
  delete: [TestWhereUniqueInput!]
  connect: [TestWhereUniqueInput!]
  set: [TestWhereUniqueInput!]
  disconnect: [TestWhereUniqueInput!]
  update: [TestUpdateWithWhereUniqueWithoutAccountInput!]
  upsert: [TestUpsertWithWhereUniqueWithoutAccountInput!]
  deleteMany: [TestScalarWhereInput!]
  updateMany: [TestUpdateManyWithWhereNestedInput!]
}

input TestUpdateManyWithWhereNestedInput {
  where: TestScalarWhereInput!
  data: TestUpdateManyDataInput!
}

input TestUpdateWithoutAccountDataInput {
  cpm: Int
  rawCpm: Int
  wpm: Int
  correct: Int
  incorrect: Int
  corrections: Int
  wordIndex: Int
  type: ResultType
}

input TestUpdateWithWhereUniqueNestedInput {
  where: TestWhereUniqueInput!
  data: TestUpdateDataInput!
}

input TestUpdateWithWhereUniqueWithoutAccountInput {
  where: TestWhereUniqueInput!
  data: TestUpdateWithoutAccountDataInput!
}

input TestUpsertWithWhereUniqueNestedInput {
  where: TestWhereUniqueInput!
  update: TestUpdateDataInput!
  create: TestCreateInput!
}

input TestUpsertWithWhereUniqueWithoutAccountInput {
  where: TestWhereUniqueInput!
  update: TestUpdateWithoutAccountDataInput!
  create: TestCreateWithoutAccountInput!
}

input TestWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  cpm: Int
  cpm_not: Int
  cpm_in: [Int!]
  cpm_not_in: [Int!]
  cpm_lt: Int
  cpm_lte: Int
  cpm_gt: Int
  cpm_gte: Int
  rawCpm: Int
  rawCpm_not: Int
  rawCpm_in: [Int!]
  rawCpm_not_in: [Int!]
  rawCpm_lt: Int
  rawCpm_lte: Int
  rawCpm_gt: Int
  rawCpm_gte: Int
  wpm: Int
  wpm_not: Int
  wpm_in: [Int!]
  wpm_not_in: [Int!]
  wpm_lt: Int
  wpm_lte: Int
  wpm_gt: Int
  wpm_gte: Int
  correct: Int
  correct_not: Int
  correct_in: [Int!]
  correct_not_in: [Int!]
  correct_lt: Int
  correct_lte: Int
  correct_gt: Int
  correct_gte: Int
  incorrect: Int
  incorrect_not: Int
  incorrect_in: [Int!]
  incorrect_not_in: [Int!]
  incorrect_lt: Int
  incorrect_lte: Int
  incorrect_gt: Int
  incorrect_gte: Int
  corrections: Int
  corrections_not: Int
  corrections_in: [Int!]
  corrections_not_in: [Int!]
  corrections_lt: Int
  corrections_lte: Int
  corrections_gt: Int
  corrections_gte: Int
  wordIndex: Int
  wordIndex_not: Int
  wordIndex_in: [Int!]
  wordIndex_not_in: [Int!]
  wordIndex_lt: Int
  wordIndex_lte: Int
  wordIndex_gt: Int
  wordIndex_gte: Int
  account: AccountWhereInput
  type: ResultType
  type_not: ResultType
  type_in: [ResultType!]
  type_not_in: [ResultType!]
  AND: [TestWhereInput!]
  OR: [TestWhereInput!]
  NOT: [TestWhereInput!]
}

input TestWhereUniqueInput {
  id: ID
}

type Trial {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  results(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test!]
  wordSet: String!
  name: String!
  difficulty: Difficulty
  minWordLength: Int
  maxWordLength: Int
}

type TrialConnection {
  pageInfo: PageInfo!
  edges: [TrialEdge]!
  aggregate: AggregateTrial!
}

input TrialCreateInput {
  id: ID
  results: TestCreateManyInput
  wordSet: String!
  name: String!
  difficulty: Difficulty
  minWordLength: Int
  maxWordLength: Int
}

type TrialEdge {
  node: Trial!
  cursor: String!
}

enum TrialOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  wordSet_ASC
  wordSet_DESC
  name_ASC
  name_DESC
  difficulty_ASC
  difficulty_DESC
  minWordLength_ASC
  minWordLength_DESC
  maxWordLength_ASC
  maxWordLength_DESC
}

type TrialPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  wordSet: String!
  name: String!
  difficulty: Difficulty
  minWordLength: Int
  maxWordLength: Int
}

type TrialSubscriptionPayload {
  mutation: MutationType!
  node: Trial
  updatedFields: [String!]
  previousValues: TrialPreviousValues
}

input TrialSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TrialWhereInput
  AND: [TrialSubscriptionWhereInput!]
  OR: [TrialSubscriptionWhereInput!]
  NOT: [TrialSubscriptionWhereInput!]
}

input TrialUpdateInput {
  results: TestUpdateManyInput
  wordSet: String
  name: String
  difficulty: Difficulty
  minWordLength: Int
  maxWordLength: Int
}

input TrialUpdateManyMutationInput {
  wordSet: String
  name: String
  difficulty: Difficulty
  minWordLength: Int
  maxWordLength: Int
}

input TrialWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  results_every: TestWhereInput
  results_some: TestWhereInput
  results_none: TestWhereInput
  wordSet: String
  wordSet_not: String
  wordSet_in: [String!]
  wordSet_not_in: [String!]
  wordSet_lt: String
  wordSet_lte: String
  wordSet_gt: String
  wordSet_gte: String
  wordSet_contains: String
  wordSet_not_contains: String
  wordSet_starts_with: String
  wordSet_not_starts_with: String
  wordSet_ends_with: String
  wordSet_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  difficulty: Difficulty
  difficulty_not: Difficulty
  difficulty_in: [Difficulty!]
  difficulty_not_in: [Difficulty!]
  minWordLength: Int
  minWordLength_not: Int
  minWordLength_in: [Int!]
  minWordLength_not_in: [Int!]
  minWordLength_lt: Int
  minWordLength_lte: Int
  minWordLength_gt: Int
  minWordLength_gte: Int
  maxWordLength: Int
  maxWordLength_not: Int
  maxWordLength_in: [Int!]
  maxWordLength_not_in: [Int!]
  maxWordLength_lt: Int
  maxWordLength_lte: Int
  maxWordLength_gt: Int
  maxWordLength_gte: Int
  AND: [TrialWhereInput!]
  OR: [TrialWhereInput!]
  NOT: [TrialWhereInput!]
}

input TrialWhereUniqueInput {
  id: ID
}
`