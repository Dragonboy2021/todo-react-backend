import { Schema, model } from 'mongoose';

export interface Todo {
  title: string;
  content: string;
  date: Date | string;
}

const TodoSchema = new Schema<Todo>({
  title: { type: String, required: true },
  content: { type: String },
  date: { type: Date },
});

export default model<Todo>('Todo', TodoSchema);
