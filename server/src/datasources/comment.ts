import DataLoader = require("dataloader");
import {RESTDataSource} from 'apollo-datasource-rest';

class CommentAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:4002/';
    }

    async getAllComments({ todoId }: { todoId: string }) {
        const response = await this.get('comments/',{topic: todoId});
        return Array.isArray(response) ? response.map(comment => this.commentReducer(comment)) : [];
    }

    private todoStatsLoader = new DataLoader(async (todoIds) => {
        const url = 'topic-statistics/?topics=' +  todoIds.join('&topics=')
        const responseList = await this.get(url);
        return todoIds.map(id => responseList.find((item: any) => item.topic === id)?.comment_count || 0);
    });

    async getTodoStats({ todoId }: {todoId: [string]}) {
        return this.todoStatsLoader.load(todoId);
    }

    commentReducer(comment: any) {
        return {
            id: comment.id,
            todo: comment.topic,
            author: comment.author,
            text: comment.text,
        }
    }
}

module.exports = CommentAPI;