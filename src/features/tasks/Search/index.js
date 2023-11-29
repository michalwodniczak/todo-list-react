import { Input } from "../../../common/Input/input";
import { Wrapper } from "./styled";

export const Search = () => {
    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
            />
        </Wrapper>
    )
}