import React from 'react';

class DeveloperList extends React.Component{
    render(){
        console.log(this.props);
        return(
            <ol className="developer-list">
            {
                this.props.developerlist.map((developer) => (
                    <li key={ developer.id } className="developer-item">
                        <div className= "developer-avatar" style={ {
                            backgroundImage: `url(${developer.avatarUrl})`
                        } } />
                        <div className="developer-details">
                            <span>{developer.id}</span>
                            <p>{ developer.name }</p>
                            <p>{ developer.email }</p>
                        </div>
                        <button className="contact-remove">
                        </button>
                    </li>
                ))
            }
        </ol>
        )
    }
}
//exporting Component
export default DeveloperList