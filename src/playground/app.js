class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
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
            console.log('is it saving?');
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    handleDeleteOptions() {
        this.setState(()=> ({options: []}));
    };

    //this takes individual option and removes it
    handleDeleteOption(optionToRemove) {
        //prevState is a parameter setState gets access to, which reflects the prior state
        this.setState((prevState)=> ({
            //take each option in prevState options array, 
            options: prevState.options.filter((option)=> option !==optionToRemove)
        }));
    };

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption(option) {
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
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['thing one', 'thing two','thing four'];
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };

//STATELESS FUNCTIONAL VERSION OF HEADER
const Header = (props)=> {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision App"       
};

//STATEFUL CLASS BASED VERSION OF HEADER
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
            
//         );
//     }
// }

const Action = (props)=> {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    );  
}
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

//STATELESS FUNCTIONAL VERSION OF OPTIONS
const Options = (props)=> {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length && <p>Please add an option to get started</p>}
            {
                props.options.map((option)=>(
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
            ))
            }
        </div>
    );
};

//STATEFUL CLASS BASED OPTIONS
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.options.map((option)=><Option key={option} optionText={option}/>)
//                 }
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//             </div>
//         );
//     }
// }

//STATELESS FUNCTIONAL VERSION OF OPTION
const Option = (props)=> {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e)=> {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

// class Option extends React.Component {
//     render() {
//         return(
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
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
                    <button >Add option</button>
                </form>
            </div>
        );
    }
}

// const User = (props)=> {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));