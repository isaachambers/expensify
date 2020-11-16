import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import AddNewExpensePage from "../AddNewExpensePage";
import ExpensesDashboardPage from "../ExpensesDashboardPage";
import EditExpensePage from "../EditExpensePage";
import Header from "../Header";
import HelpPage from "../HelpPage";
import NotFoundPage from "../NotFoundPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact={true} path="/" component={ExpensesDashboardPage}/>
                <Route path="/create" component={AddNewExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;