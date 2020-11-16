import React from 'react';
import {Link} from "react-router-dom";

export default class NotFoundPage extends React.Component {
    render() {
        return <div>
            <p>Page Not Found</p>
            <Link to="/">Go Home</Link>
        </div>;
    }
}