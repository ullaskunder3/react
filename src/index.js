class App extends React.Component {
    render() {
        // Lets use reference
        const title = "Header Title";
        const subTitle = "Sub Title";
        const people = [
            { name: 'Ullas' },
            { name: 'Captain' },
            { name: 'America' }
        ]
        return (
            <div>
                <Header title = {title} subTitle = {subTitle} />
                <NameList nameList = {people}/>
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
                <h3>{this.props.subTitle}</h3>
            </div>
        )
    }
}
// Name list component
class NameList extends React.Component {
    render() {
        console.log(this.props.nameList);
        return (
            <ul>
                <p>List Component</p>
                { this.props.nameList.map(person => (
                    <li key={ person.name }>{ person.name }</li>
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