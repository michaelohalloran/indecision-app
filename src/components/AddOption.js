import React from 'react';

export default class AddOption extends React.Component {
    state = {error: undefined};
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        //ES6 shorthand for error:error
        this.setState(()=> ({error}));

        //if there was no error in submitting, clear the input 
        if(!error) {
            e.target.elements.option.value = '';
        }
    };
    //the following checks if there's an error; if so, print error msg, uses && operator
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button className="button">Add option</button>
                </form>
            </div>
        );
    }
}