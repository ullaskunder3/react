class DeveloperList extends React.Component {
    render() {
        console.log(this.props.developerlist);
        return (
            <ol className="developer-list">
                {
                    this.props.developerlist.map((developer) => (
                        <li key={ developer.id } className="developer-item">
                            <div className= "developer-avatar" style={ {
                                backgroundImage: `url(${developer.avatarUrl})`
                            } } />
                            <div className="developer-details">
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

class App extends React.Component {
    render() {
        // Lets use reference
        const developerlist = [
            {
                id: 'DevJr1',
                name: 'Ullas Kunder',
                email: "ullaskunder3@gmail.com",
                "avatarUrl": "https://randomuser.me/api/portraits/med/men/1.jpg"
            },
            {
                id: 'DevJr2',
                name: 'Captain',
                email: "ullaskunder3@gmail.com",
                "avatarUrl": "https://randomuser.me/api/portraits/med/men/1.jpg"
            },
            {
                id: 'DevJr3',
                name: 'America',
                email: "ullaskunder3@gmail.com",
                "avatarUrl": "https://randomuser.me/api/portraits/med/men/1.jpg"
            }
        ]
        return (
            <div>
                <DeveloperList developerlist={ developerlist } />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));