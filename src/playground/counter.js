

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //used to be count: props.count before using localStorage
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            //parse JSON
            const count = parseInt(stringCount,10);
            if(!isNaN(count)) {
                this.setState({count});
            }
        } catch(e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //if state length has changed, commit this change to localStorage
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }


    handleAddOne() {
        this.setState((prevState)=> {
            return {
                count: prevState.count + 1
            };
        });
    };
    handleMinusOne() {
        this.setState((prevState)=> {
            return {
                count: prevState.count - 1
            };            
        });
    };
    handleReset() {
        this.setState(()=> {
            return {
                count:0
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter count = {-10}/>, document.getElementById('app'));

//********************************************************* */
//STATELESS
//********************************************************* */
// let count = 0;
// const appRoot = document.getElementById('app');
// const addOne = ()=> {
//     count++;
//     renderCounterApp();
// };

// const minusOne = ()=> {
//     count--;
//     renderCounterApp();
//     console.log(count);
// };

// const reset = ()=> {
//     count = 0;
//     renderCounterApp();
// };
// const renderCounterApp = ()=> {
//     const template2= (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button><br/>
//             <button onClick={minusOne}>-1</button><br/>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();