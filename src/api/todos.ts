import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2183;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodos = (newTodo: Omit<Todo, 'id' | 'userId'>) => {
  return client.post<Todo>(`/todos`, { ...newTodo, userId: USER_ID });
};

export const deleteTodos = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodos = (todo: Todo) => {
  return client.patch<Todo>(`/todos/${todo.id}`, todo);
};
