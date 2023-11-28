import { Container } from "../../common/Container";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";

export default function AuthorPage() {
    return (
        <Container>
            <Header
                title="o Autorze"
            />
            <main>
                <Section
                    title="Michał Wodniczak"
                />
            </main>
        </Container>
    );
}
