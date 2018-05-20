import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    // constructor(props) {
    //     super(props);
    //     // this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     // this.handlePick = this.handlePick.bind(this);
    //     // this.handleAddOption = this.handleAddOption.bind(this);
    //     // this.handleDeleteOption = this.handleDeleteOption.bind(this);
    // };

    
    handleDeleteOptions = ()=> {
        this.setState(()=> ({options: []}));
    };

    //this takes individual option and removes it
    handleDeleteOption = (optionToRemove)=> {
        //prevState is a parameter setState gets access to, which reflects the prior state
        this.setState((prevState)=> ({
            //take each option in prevState options array, 
            options: prevState.options.filter((option)=> option !==optionToRemove)
        }));
    };

    handlePick = ()=> {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption: option
        }));
    };

    handleClearSelectedOption = ()=> {
        this.setState(()=> ({
            selectedOption: undefined
        }));
    };

    handleAddOption = (option)=> {
        //if option is just an empty string i.e. falsy, then send error msg
        if(!option) {
            return 'Enter valid value to add item';
            //if item already exists in array, send another error msg
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This item already exists';
        }

        this.setState((prevState)=> {
            return {
                options: prevState.options.concat(option) 
            };
        });
    };

    componentDidMount() {
        try {
            //gets JSON object/array in localStorage
            const json = localStorage.getItem('options');
            //parses it to make it JS object/array
            const options = JSON.parse(json);
            if(options) {
                this.setState(()=> ({options}));
                // console.log('fetching data');
            }
        } catch(e) {
            //do nothing
        }
       
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            // console.log('saving data', prevProps, prevState);
            // console.log('is it saving?');
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['thing one', 'thing two','thing four'];
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                    <OptionModal 
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                </div>
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };