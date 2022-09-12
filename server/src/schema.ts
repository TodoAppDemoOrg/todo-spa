const {gql} = require('apollo-server');

export const typeDefs = gql`
    type Todo  {
        id: ID!
        title: String
        comments: [Comment]
        commentCount: Int
    }

    type Comment {
        id: ID!
        todo: Todo
        text: String
        author: String
    }
    
    type Query {
        comments: [Comment]!
        comment(id: ID!): Comment
        todos: [Todo]!
        todo(id: ID!): Todo
        
    }
`;
