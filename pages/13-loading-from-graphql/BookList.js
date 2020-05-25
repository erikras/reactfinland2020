import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'

/**
 * Provides a list of books from the GraphQL backend
 */
export default function BookList() {
  const { data } = useQuery(gql`
    query {
      books {
        id
        title
        author {
          firstName
          lastName
        }
        year
      }
    }
  `)
  const books = data?.books
  return books ? (
    <div className="booklist">
      {books.map((book) => (
        <Link key={book.id} href={`/13-loading-from-graphql/${book.id}`}>
          <a href={`/13-loading-from-graphql/${book.id}`}>
            <div className="title">{book.title}</div>
            <div className="author">
              {book.author.firstName} {book.author.lastName}
            </div>
            <div className="year">{book.year}</div>
          </a>
        </Link>
      ))}
    </div>
  ) : null
}
