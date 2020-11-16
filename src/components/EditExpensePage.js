import React from 'react';

export default class EditExpensePage extends React.Component {
    render() {
        console.log(this.props);
        return <div>
            <p>Editing Expense {this.props.match.params.id}</p>
        </div>;
    }
}