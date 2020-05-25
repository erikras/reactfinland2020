import React from 'react'
import { useRouter } from 'next/router'
import { Form, Field, useField } from 'react-final-form'
import { useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import validate from './validate'
import Link from 'next/link'

export default function BookForm({ bookId }) {
  const { data } = useQuery(
    gql`
      query($id: Int!) {
        book(id: $id) {
          title
          author {
            firstName
            lastName
          }
          year
        }
      }
    `,
    {
      variables: {
        id: bookId,
      },
    }
  )
  const book = data && data.book
  if (book) {
    // This is because Apollo adds these __typename keys onto each type of
    // object, but complains if they are included in the mutation, so we
    // must delete them before initializing the form with the book values.
    delete book.__typename
    delete book.author.__typename
  }

  const router = useRouter()
  return (
    <div>
      <Link href="/14-saving-with-graphql">
        <a href="/14-saving-with-graphql">Back to list</a>
      </Link>
      <Form
        onSubmit={async (values) => {
          // GraphQL is strongly typed and all form inputs give back strings,
          // so if we have edited the year, the value will be a strong, and we
          // need to convert it to a number.
          const adjustedValues = { ...values, year: Number(values.year) }

          // await updateBook() call with adjustedValues

          // Go back to list page...
          router.push('/14-saving-with-graphql')
        }}
        validate={validate}
        initialValues={book}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="bookForm">
            <div>
              <label htmlFor="title">Title</label>
              <Field
                component="input"
                type="text"
                id="title"
                name="title"
                placeholder="Title"
              />
              <Error name="title" />
            </div>
            <div>
              <label htmlFor="author.firstName">Author's First Name</label>
              <Field
                component="input"
                type="text"
                id="author.firstName"
                name="author.firstName"
                placeholder="Author's First Name"
              />
              <Error name="author.firstName" />
            </div>
            <div>
              <label htmlFor="author.lastName">Author's Last Name</label>
              <Field
                component="input"
                type="text"
                id="author.lastName"
                name="author.lastName"
                placeholder="Author's Last Name"
              />
              <Error name="author.lastName" />
            </div>
            <div>
              <label htmlFor="year">Year</label>
              <Field
                component="input"
                type="text"
                id="year"
                name="year"
                placeholder="Year"
              />
              <Error name="year" />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    </div>
  )
}

BookForm.getInitialProps = ({ query }) => {
  return { bookId: Number(query.bookId) }
}

const Error = ({ name }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { error: true, touched: true } })
  return error && touched ? <span>{error}</span> : null
}
