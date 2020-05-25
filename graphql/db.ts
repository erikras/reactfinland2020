import { ContentBase, TypedJsonDB } from 'ts-json-db'
import { Book, Author } from './types'

interface BookWithForeignKey extends Omit<Book, 'author'> {
  author: number
}

interface ContentDef extends ContentBase {
  paths: {
    '/books': {
      entryType: 'array'
      valueType: BookWithForeignKey
    }
    '/authors': {
      entryType: 'array'
      valueType: Author
    }
  }
}

export type Db = TypedJsonDB<ContentDef>

const db = new TypedJsonDB<ContentDef>('database.json')

export default db
