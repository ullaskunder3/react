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
                    <li key={ person.name }>{ person.name.toUpperCase() }</li>
                )) }
                
            </ul>
        )
    }
}
// creating button component
class Button extends React.Component{
    render(){
        return(
            <button>
                Add
            </button>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Header Component</h1>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header />

        <NameList />
        {/* react components are reusabe */}
        <NameList />

        <Button />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));