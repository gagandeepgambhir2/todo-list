import TodoListContainer from "components/TodoListContainer";
import { Box, Grid, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Box sx={{ padding: "16px" }}>
          <Typography variant="h4" align="center">
            Todo List
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1} md={2} lg={3} />
      <Grid item xs={10} md={8} lg={6}>
        <TodoListContainer />
      </Grid>
      <Grid item xs={1} md={2} lg={3} />
    </Grid>
  );
}

export default App;
