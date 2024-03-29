import { Form} from "./Form";
import { TasksList } from "../TasksList";
import { Section } from "../../../common/Section";
import { Buttons } from "./Buttons";
import { Header} from "../../../common/Header";
import { Container } from "../../../common/Container";
import { Button } from "./Button"
import { Search } from "../Search";

export const theme = {
  color: {
    white: "#fff",
    gallery: "#eee",
    teal: "#008080",
    bondiBlue: "##00b3b3",
    gray: "#808080",
    japaneseLaurel: "#008000",
    green: "#00b300",
    red: "#ff0000",
    sunsetOrange: "#ff5452",
    persianGreen: "#009999"
  },
  breakPoint: {
    mobile: 768,
  }
}

function TasksPage() {
  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <main>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
          extraBody={<Button />}
        />
        <Section
          title="Wyszukiwarka"
          body={<Search/>}
        >

        </Section>
        <Section
          title="Lista zadań"
          body={<TasksList />}
          extraBody={<Buttons />}
        />
      </main>
    </Container>
  )
}

export default TasksPage;
