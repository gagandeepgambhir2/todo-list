import {
  Box,
  Checkbox,
  ListItem,
  TextField,
  IconButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import CancelIcon from "@mui/icons-material/Cancel";

const TodoListItem = ({
  id,
  done,
  toggleTask,
  updateTask,
  deleteTask,
  description,
}) => {
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleOnClick = () => {
    setEditing(true);
  };

  const handleChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setEditing(false);
      updateTask(id, newDescription);
    }
  };

  const handleCancelClick = () => {
    let confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      deleteTask(id);
    }
  };

  const handleCheckboxClick = () => {
    toggleTask(id);
  };

  return (
    <Box>
      <ListItem sx={{ borderBottom: 1, borderColor: grey[400], padding: 1 }}>
        <Checkbox checked={done} onClick={handleCheckboxClick} />
        {editing ? (
          <TextField
            value={newDescription}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            fullWidth={true}
            variant="standard"
            autoFocus={true}
          />
        ) : (
          <ListItemText onClick={handleOnClick}>{description}</ListItemText>
        )}
        <IconButton onClick={handleCancelClick}>
          <CancelIcon />
        </IconButton>
      </ListItem>
    </Box>
  );
};

export default TodoListItem;
