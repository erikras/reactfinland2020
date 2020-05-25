import { MDXProvider } from '@mdx-js/react'
import 'normalize.css'
import 'github-markdown-css'
import Link from 'next/link'
import CodeBlock from '../components/CodeBlock'
import '../styles.css'
import 'prism-theme-night-owl'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import fetch from 'isomorphic-unfetch'

const TwitterLink = ({ username }) => (
  <a href={`https://twitter.com/${username}`} target="_blank">
    @{username}
  </a>
)

const components = {
  code: CodeBlock,
}

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  fetch,
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <MDXProvider components={components}>
        <header>
          <h1>
            <Link href="/">
              <a>Modern Forms in React</a>
            </Link>
          </h1>
          <h3>
            <Link href="/">
              <a>React Finland 2020</a>
            </Link>
          </h3>
          <section>
            <TwitterLink username="erikras" />
            <TwitterLink username="finalformjs" />
          </section>
        </header>
        <div className="markdown-body">
          <Component {...pageProps} />
        </div>
      </MDXProvider>
    </ApolloProvider>
  )
}

export default MyApp
