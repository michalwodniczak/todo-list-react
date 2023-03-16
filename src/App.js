import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Buttons from "./Buttons";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na reacta", done: false },
  { id: 2, content: "zjeść pierogi", done: true }
]

const hideDone = false;

function App() {
  return (
    <Container>
      <Header
        title="List zadań"
      />
      <main>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDone={hideDone} />}
          extraBody={<Buttons tasks={tasks} hideDone={hideDone} />}
        />
      </main>
    </Container>
  );
}

export default App;
