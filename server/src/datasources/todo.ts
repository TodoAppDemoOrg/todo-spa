const {RESTDataSource} = require('apollo-datasource-rest');

class TodoAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:4001/';
    }

    async getAllTodos() {
        const response = await this.get('todos/');
        return Array.isArray(response) ? response : [];
    }

    async getTodoById({ todoId }: {todoId: string}) {
        const response = await this.get('todos/', { id: todoId })
        return response[0]
    }

}

export default TodoAPI