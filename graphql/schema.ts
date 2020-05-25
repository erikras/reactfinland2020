import { gql } from 'apollo-server-micro'

export default gql`
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    books: [Book]
    book(id: Int!): Book
  }
  type Author {
    id: Int
    firstName: String
    lastName: String
  }
  type Book {
    id: Int
    title: String
    author: Author
    year: Int
    pages: Int
  }

  type Mutation {
    createBook(Book: CreateBookInput!): BookMutationResult
    updateBook(id: Int!, Book: UpdateBookInput!): BookMutationResult
    deleteBook(id: Int!): GenericMutationResult
  }
  input CreateAuthorInput {
    firstName: String!
    lastName: String!
  }
  input UpdateAuthorInput {
    firstName: String
    lastName: String
  }
  input CreateBookInput {
    title: String!
    author: CreateAuthorInput!
    year: Int!
  }
  input UpdateBookInput {
    title: String
    author: UpdateAuthorInput
    year: Int
  }
  type BookMutationResult {
    success: Boolean
    Book: Book
  }
  type GenericMutationResult {
    success: Boolean
  }
  scalar Date
`
