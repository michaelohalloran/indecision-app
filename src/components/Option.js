import React from 'react';

//STATELESS FUNCTIONAL VERSION OF OPTION
const Option = (props)=> (
// console.log('option component loaded');
    <div>
        {props.optionText}
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