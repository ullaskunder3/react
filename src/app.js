class NameList extends React.Component {
    render() {
        const people = [
            { name: 'ullas' },
            { name: 'kunder' },
            { name: 'Villas' }
        ]
        return (
            <ul>
                { people.map(person => (
                    <li key={ person.name }>{ person.name }</li>
                )) }
            </ul>
        )
    }
}

ReactDOM.render(<NameList />, document.getElementById('app'));