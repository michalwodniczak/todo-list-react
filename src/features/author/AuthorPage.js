import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { Author } from "./Author";

export default function AuthorPage() {
    <Container>
        <Header
            title="o Autorze"
        />
        <main>
            <Section
                title="Michał Wodniczak"
                body={<Author />}
            />
        </main>
    </Container>
}
