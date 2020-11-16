import React from 'react';
import {NavLink} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return <header>
            <h1>Expensify</h1>
            <ul>
                <li><NavLink to="/" activeClassName={"is-active"} exact={true}>Dashboard</NavLink></li>
                <li><NavLink to="/create" activeClassName={"is-active"}>New Expense</NavLink></li>
                <li><NavLink to="/help" activeClassName={"is-active"}>Help</NavLink></li>
            </ul>
        </header>;
    }
}