import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Buttons from "./Buttons";
import Header from "./Header";

const tasks = [
  { id: 1, content: "przejść na reacta", done: false },
  { id: 2, content: "zjeść pierogi", done: true }
]

const hideDoneTasks = false;

function App() {
  return (
    <>
      <Header title="List zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraBody={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </>
  );
}

export default App;
