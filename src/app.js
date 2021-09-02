const people = [
    { name: 'ullas' },
    { name: 'kunder' },
    { name: 'Villas' }
]
const template = (
    <ul>
        { people.map(person => (
            <li key={ person.name }>{ person.name }</li>
        )) }
    </ul>
)
ReactDOM.render(template, document.getElementById('app'));