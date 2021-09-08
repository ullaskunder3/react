import React from "react";

// stateless functional component
function DeveloperList(props) {
    return (
        <ol className="developer-list">

            { props.developerlist.map((developer) => (

                <li key={ developer.id } className="developer-item">
                    <div
                        className="developer-avatar"
                        style={ { backgroundImage: `url(${developer.avatarUrl})` } }
                    />

                    <div className="developer-details">
                        <span>{ developer.id }</span>
                        <p>{ developer.name }</p>
                        <p>{ developer.email }</p>
                    </div>

                    <button className="contact-remove"></button>
                </li>

            )) }
        </ol>
    );
}

// class DeveloperList extends React.Component{
//     render(){
//         // this.propes is an object contains arry property
//         console.log(this.props);
//         return(
//             //
//             <ol className="developer-list">
//                 {/* object like syntax inside that we will have expression */}
//             {
//                 this.props.developerlist.map((developer) => (
//                     <li key={ developer.id }
//                         className="developer-item">

//                         <div className= "developer-avatar"
//                             style={ { backgroundImage: `url(${developer.avatarUrl})`} }
//                              />

//                         <div className="developer-details">
//                             <span>{developer.id}</span>
//                             <p>{ developer.name }</p>
//                             <p>{ developer.email }</p>
//                         </div>

//                         <button className="contact-remove"></button>
//                     </li>
//                 ))
//             }
//         </ol>
//         )
//     }
// }

//exporting Component
export default DeveloperList;

// each child in an array or iterator should have unique "key" props.
/**
 * The reason we need to add key = {} to each child is
 * eventually one of those list item may change
 * and by having unique key attribute on each list item
 * react will know which item in the list has changed
 * and recreate only that item rather than whole list item
 */
