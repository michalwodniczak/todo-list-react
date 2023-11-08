import { Wrapper, Container, Head } from "./styled";

export const Section = ({ title, body, extraBody }) => (
    <Wrapper>
        <Container>
            <Head>{title}</Head>
            {extraBody}
        </Container>
        {body}
    </Wrapper>
);