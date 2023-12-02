import { toAuthor, toTasks } from "../../route";
import { StyledNavLink, NaviList } from "./styled";

export const Navigation = () => {
    return (
        <nav>
            <NaviList>
                <li><StyledNavLink to={toTasks()}>Zadania</StyledNavLink></li>
                <li><StyledNavLink to={toAuthor()}>o Autorze</StyledNavLink></li>
            </NaviList>
        </nav>
    )
};