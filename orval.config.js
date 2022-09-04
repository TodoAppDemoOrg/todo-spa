module.exports = {
    'todo-list': {
        input: './server/build/swagger.json',
        output: {
            target: './src/generated-openapi-client/api.ts',
            client: 'react-query'
        },
    },
};
