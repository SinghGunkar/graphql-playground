const { gql, ApolloServer } = require("apollo-server")

// interface
const schemaDef = gql`
    type Query {
        message: String
    }
`

// resolves the value of the greeting field (implementation)
const resolvers = {
    Query: {
        message: () => "Hello Graphql world!"
    }
}

// set up server
const server = new ApolloServer({ typeDefs: schemaDef, resolvers: resolvers })
server
    .listen({ port: 9000 })
    .then(({ port }) => console.log(`Server running on ${port}`))
