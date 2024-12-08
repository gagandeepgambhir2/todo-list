import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoListContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      const tasksFromStorage = localStorage.getItem("tasks") || "[]";
      setTasks(JSON.parse(tasksFromStorage));
      setFirstLoad(false);
    }
  }, [firstLoad, setFirstLoad]);

  const updateStorage = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const addTask = (description) => {
    const updatedTasks = [
      ...tasks,
      { id: Date.now(), done: false, description: description },
    ];
    updateStorage(updatedTasks);
  };

  const updateTask = (id, description) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) task.description = description;
      return task;
    });
    updateStorage(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) task.done = !task.done;
      return task;
    });
    updateStorage(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) task.deleted = true;
      return task;
    });
    updateStorage(updatedTasks);
  };

  return (
    <>
      <AddTodo addTask={addTask} />
      <TodoList
        tasks={tasks}
        updateTask={updateTask}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default TodoListContainer;
