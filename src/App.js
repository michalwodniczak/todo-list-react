import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "przejść na reacta", done: false },
  { id: 2, content: "zjeść pierogi", done: true }
]

const hideDoneTasks = false;

function App() {
  return (
    <>
      <Form />
      <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
    </>
  );
}

export default App;
