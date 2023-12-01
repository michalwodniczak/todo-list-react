import { useLocation, useHistory } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

export const useQueryParamteres = () => {
    const location = useLocation();
    return (new URLSearchParams(location.search).get(searchQueryParamName));
};

export const useReplaceQueryParameters = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    return ({ key, value }) => {
        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        };
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
};