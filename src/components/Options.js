import React from 'react';
import Option from './Option';
//STATELESS FUNCTIONAL VERSION OF OPTIONS
const Options = (props)=> (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                    Remove all
            </button>
        </div>
        {props.options.length===0 && <p className="widget__message">Please add an option to get started</p>}
        {
            props.options.map((option, index)=>(
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
        ))
        }
    </div>
);

export default Options;

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