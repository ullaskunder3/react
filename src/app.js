class NameList extends React.Component {
    render() {
        const people = [
            { name: 'Ullas' },
            { name: 'Captain' },
            { name: 'America' }
        ]
        return (
            <ul>
                { people.map(person => (
                    <li key={ person.name }>{ person.name.toUpperCase() }</li>
                )) }
            </ul>
        )
    }
}

ReactDOM.render(<NameList />, document.getElementById('app'));