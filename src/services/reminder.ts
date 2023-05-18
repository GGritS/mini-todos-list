import axios from "axios";
import { Reminder } from "../models/reminder";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getReminders = async () => {
  const res = await apiClient.get<Reminder[]>("/todos");
  return res.data;
};

export const addReminder = async (title: string) => {
  const res = await apiClient.post<Reminder>("/todos", { title });
  return res.data;
};

export const removeReminder = async (id: number) => {
  const res = await apiClient.delete<Reminder>(`/todos/${id}`);
  return res.data;
};
