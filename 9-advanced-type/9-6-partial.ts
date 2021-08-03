{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "high",
    priority: "low",
  };

  console.log(updateTodo(todo, { priority: "low" }));
}
