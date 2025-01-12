export interface ITodo {
  _id: string;
  title: string;
  completed: boolean;
  created_at: string;
  __v: number;
}
export type todoState = {
  todos: ITodo[];
  isLoading: boolean;
  error: string;
};

export type ICreatePost = {
  title: string;
  body: string;
};
