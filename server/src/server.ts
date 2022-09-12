import TodoAPI from "./datasources/todo";
import {typeDefs} from "./schema";

const { ApolloServer } = require('apollo-server');
const CommentAPI = require('./datasources/comment');
const resolvers = require('./resolvers');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        commentAPI: new CommentAPI(),
        todoAPI: new TodoAPI()
    }),
});

server.listen().then(({ url }: any) => {
    console.log(`Gateway ready at ${url}`);
}).catch((err: any) => {console.error(err)});