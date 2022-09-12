module.exports = {
    Query: {
        todos: (_, __, {dataSources}) => {
            return dataSources.todoAPI.getAllTodos()
        },
        todo: (_, {id}, {dataSources}) => dataSources.todoAPI.getTodoById({todoId: id}),
    },
    Todo: {
        comments: (parent, _, {dataSources}) => {
            return dataSources.commentAPI.getAllComments({todoId: parent.id})
        },
        commentCount: (parent, _, {dataSources}) => {
            return dataSources.commentAPI.getTodoStats({todoId: parent.id})
        }
    },
};