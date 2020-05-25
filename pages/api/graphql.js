import { ApolloServer } from 'apollo-server-micro'
import typeDefs from '../../graphql/schema'
import resolvers from '../../graphql/resolvers'
import { ResolverContext } from '../../graphql/ResolverContext'
import db from '../../graphql/db'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: () => {
    return { db }
  },
})

// THIS IS IMPORTANT
// https://twitter.com/timer150/status/1216688103554977793
export const config = {
  api: {
    bodyParser: false,
  },
}

export default server.createHandler({ path: '/api/graphql' })
