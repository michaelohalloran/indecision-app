import React from 'react';

//STATELESS FUNCTIONAL VERSION OF OPTION
const Option = (props)=> (
// console.log('option component loaded');
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button 
            className="button button--link"
            onClick={(e)=> {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>
);

export default Option;

// class Option extends React.Component {
//     render() {
//         return(
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }