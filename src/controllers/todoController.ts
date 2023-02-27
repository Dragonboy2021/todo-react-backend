import { Request, Response } from 'express';
import Todo from '../models/todo';

export const getAllTodos = async (req: Request, res: Response) => {
  const todos = await Todo.find();
  try {
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const singleTodo = await Todo.findById({ _id: id });
  try {
    return res.status(200).json(singleTodo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const todoToCreate = await Todo.create(req.body);
  try {
    return res.status(201).json(todoToCreate);
  } catch (error) {
    return res.status(500).json({ msg: "Couldn't create a todo" });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todoToUpgrade = await Todo.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(todoToUpgrade);
  } catch (error) {
    return res.status(500).json({ msg: "Couldn't update the todo" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  try {
    res.status(203).json({ message: 'deleted successfully' });
  } catch (error) {
    return res.status(500).json({ msg: "Couldn't delete the todo" });
  }
};
