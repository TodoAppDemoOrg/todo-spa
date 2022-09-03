const axios = require('axios');

interface Todo {
  id: string;
  title: string;
  description: string;
}

export async function fetchTodos(): Promise<Todo[]> {
  return (await axios.get('http://localhost:8001/todos/')).data;
}

interface CommentStatistics {
  topic: string;
  comment_count: number;
}

export async function fetchCommentStatistics(topics: string[]): Promise<CommentStatistics[]> {
  const queryparams = topics.map(topic => `topics=${topic}`).join('&');
  return (await axios.get('http://localhost:8002/topic-statistics/?' + queryparams)).data;
}
