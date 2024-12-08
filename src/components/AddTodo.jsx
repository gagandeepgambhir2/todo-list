import { TextInput } from "@sahilkhosla/react-components";
// import { TextInput } from "@gagandeepgambhir/react-components";
import { useState } from "react";

const AddTodo = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <TextInput
      value={value}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      placeholder="Enter a new task"
    />
  );
};

export default AddTodo;
