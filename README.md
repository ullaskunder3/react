# React

React uses JavaScript Object to buid Ui interface

- React element are light weight js object

## Complete react from scratch

- Create folder structure

```cmd

├───public
│   └───script
└───src
```

- Add index.js in src folder where we write all the react code

- Add index.html and in public folder and app.js in script folder

- Last do => `npm install` with package.json it will install all the required dependencies

- In the `src` /index.js add this basic code 

```jsx
const template = <h1>Heading</h1>

ReactDOM.render(template, document.getElementById('app'))
```

## Component

- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

- Conceptually, components are like JavaScript functions.

ES6 class to define a component:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

```jsx
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
```
