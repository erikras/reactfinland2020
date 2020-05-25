import React from 'react'
import { Form, Field, useField } from 'react-final-form'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import onSubmit from '../../common/onSubmit'
import validate from './validate'
import Link from 'next/link'

export default function BookForm({ bookId }) {
  return (
    <div>
      <Link href="/13-loading-from-graphql">
        <a href="/13-loading-from-graphql">Back to list</a>
      </Link>
      <Form onSubmit={onSubmit} validate={validate}>
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
