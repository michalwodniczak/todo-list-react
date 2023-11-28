import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom/";
import TasksPage from "./features/tasks/TasksPage/TasksPage";
import Author from "./features/author/Author";
import { Navigation } from "./common/Navigation";

export default () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor" >
                <Author />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
);
