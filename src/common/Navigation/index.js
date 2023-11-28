
import { StyledNavLink, NaviList } from "./styled";


export const Navigation = () => {
    return (
        <nav>
            <NaviList>
                <li><StyledNavLink to="/zadania">Zadania</StyledNavLink></li>
                <li><StyledNavLink to="/autor">o Autorze</StyledNavLink></li>
            </NaviList>
        </nav>
    );
};