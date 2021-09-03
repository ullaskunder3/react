class App extends React.Component {
    render() {
        return (
            <div>
                <Header title = 'Header Title' subtitle = "subtitle"/>
                <NameList />
                {/* react components are reusabe */ }
                <NameList />
                <Button />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title.toUpperCase()}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
// Name list component
class NameList extends React.Component {
    render() {
        const people = [
            { name: 'Ullas' },
            { name: 'Captain' },
            { name: 'America' }
        ]
        return (
            <ul>
                <p>List Component</p>

                { people.map(person => (
                    <li key={ person.name }>{ person.name}</li>
                )) }

            </ul>
        )
    }
}
// creating button component
class Button extends React.Component {
    render() {
        return (
            <button>
                Add
            </button>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));