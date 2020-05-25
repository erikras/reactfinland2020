import { Resolvers, Author, Book } from './types'
import db, { Db } from './db'

const resolvers: Resolvers = {
  Query: {
    books: async (_root, _args, { db }, _info) => db.get('/books'),
    book: async (_root, { id }, { db }, _info) => {
      const book = db.get('/books')?.find((book) => book.id === id)
      return book
    },
  },
  Mutation: {
    createBook: async (_root, { Book: book }, { db }, _info) => {
      const newBook = {
        ...book,
        id: getNextId(db.get('/books')),
        author: findOrCreateAuthor(
          db,
          book.author.firstName,
          book.author.lastName
        ),
      }

      db.push('/books', newBook)

      return {
        success: true,
        Book: newBook as Book,
      }
    },
    updateBook: async (
      _root,
      { id, Book: { title, author, year } },
      { db },
      _info
    ) => {
      const books = db.get('/books')
      if (!books) {
        return { success: false }
      }
      const existingBook = books?.find((book) => book.id === id)
      if (!existingBook) {
        return { success: false }
      }
      const copy = { ...existingBook }
      if (title) {
        copy.title = title
      }
      if (year) {
        copy.year = year
      }
      if (author) {
        copy.author = findOrCreateAuthor(db, author.firstName, author.lastName)
      }

      db.set(
        '/books',
        books?.map((book) => (book.id === id ? copy : book))
      )

      return { Book: copy as Book }
    },
    deleteBook: async (_root, { id }, { db }, _info) => {
      const books = db.get('/books')
      if (!books) {
        return { success: false }
      }
      db.set(
        '/books',
        books.filter((book) => book.id !== id)
      )
      return { success: true }
    },
  },
  Book: {
    author: async (root, _args, { db }, _info) =>
      db.get('/authors')?.find((author) => author?.id === root.author),
  },
  Author: {},
}

const getNextId = (list: Array<{ id?: number | null }> | null) =>
  !list ? 1 : list.reduce((result, obj) => Math.max(result, obj.id || 0), 0) + 1

const findOrCreateAuthor = (
  db: Db,
  firstName: string | null,
  lastName: string | null
): number => {
  const authors = db.get('/authors') as Author[]
  const existingAuthor = authors?.find(
    (author) => author.firstName === firstName && author.lastName === lastName
  )
  let authorId = existingAuthor?.id

  if (!authorId) {
    authorId = getNextId(authors)
    db.push('/authors', {
      id: authorId,
      firstName,
      lastName,
    })
  }
  return authorId
}
export default resolvers
