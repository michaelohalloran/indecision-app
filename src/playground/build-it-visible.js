class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }

    };
    toggleVisibility() {
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            };            
        });
    }
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>
                    Some text here
                </p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//********************************************************* */
//STATELESS VERSION
//********************************************************* */
// const appRoot = document.getElementById('app');

// //this flag tells if the msg is showing and if hide details is up; we start with show details
// let visibility = false;

// //visibility is true and msg = 'Some details' when 'Hide details' is text
// //visibility is false and msg = '' when 'Show details' is text

// const toggleClick = ()=> {
//     //change flag to its opposite
//     visibility = !visibility;
//     render();
// };

// const render= ()=> {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleClick}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && 
//             <p>
//                 Some text here
//             </p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }


// render();