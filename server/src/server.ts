import { ApolloServer } from 'apollo-server'
import type { ServeMeshOptions } from '@graphql-mesh/runtime'

export default async function ({ getBuiltMesh, logger }: ServeMeshOptions): Promise<void> {
    const { schema, getEnveloped } = await getBuiltMesh()
    const apolloServer = new ApolloServer({
        schema,
        async executor(requestContext: any) {
            const { schema, execute, contextFactory } = getEnveloped({ req: requestContext.request.http })

            return execute({
                schema,
                document: requestContext.document,
                contextValue: await contextFactory(),
                variableValues: requestContext.request.variables,
                operationName: requestContext.operationName
            })
        }
    })

    const { url } = await apolloServer.listen({port: process.env.PORT})
    logger.info(`🚀 Server ready at ${url}`)
}