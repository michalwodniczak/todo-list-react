import Form from "./Form";

const tasks = [
  { id: 1, content: "przejść na reacta", done: false },
  { id: 2, content: "zjeść pierogi", done: true }
]

const hideDoneTasks = false;

function App() {
  return (
    <Form />
  );
}

export default App;
