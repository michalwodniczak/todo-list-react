import { Input } from "../../../common/Input/input";
import { Wrapper } from "./styled";
import { useQueryParamteres, useReplaceQueryParameters } from "../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";

export const Search = () => {
    const query = useQueryParamteres(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameters();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
}