# React

React uses JavaScript Object to buid Ui interface

- Using **create-react-app** command
- create-react-app quickly setup projects without configuring, so you do not have to setup your project by yourself.
  - Using npm or npx: `npx create-react-app project-name`
  - This will install mainly `react`, `react-dom` and `react-script`
    - `react-script` setup __babel__ (for js syntax), __webpack__, __dev-server__ (auto reload functionality)

OR

- Creating react app from scratch

## Complete react from scratch

- Create folder structure

```cmd
react-proj
|
├───public
│   |└───script
|   |    └─── app.js
|   └─── index.html
|
└───src
    └─── index.js

```

We will need `live-server`

This is a little development server with live reload capability
You should probably install this globally by using `-g` flag.

```bash
npm install -g live-server
```

- Create `index.js` in `src` folder where we write all the react code

- Create `index.html` & `script` folder inside public folder, Add app.js in script folder

- Last do => `npm install` with package.json it will install all the required dependencies

- In the `src` /index.js add this basic code

```jsx
const template = <h1>Heading</h1>

ReactDOM.render(template, document.getElementById('app'))
```

## Compiling the file

- We are telling babel that we have written react code in src\index.js and out file to public\srcipt\app.js

- We will use presets env, react :
Babel preset-env is a preset that compiles down to a minimum of ES5 ( preset-es2015 )

- To compile a file every time that you change it, use the `--watch` or `-w`

  - In the `ps OR cmd` start `babel` by

    ```ps
    ❯ babel .\src\index.js --out-file=public\script\app.js --presets=env,react --watch
    ```

  - In the `bash` start `babel` by

    ```bash
    babel src/index.js --out-file=public/script/app.js --presets=env,react --watch
    ```

## live-sever

open another terminal `execute the command to to run the file`

```bash
live-server public/
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

Example. 1

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

Example. 1.1

```jsx
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header Component</h1>
            </div>
        )
    }
}

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
```

## Nesting Components

Example. 2

```js
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

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
                <h1>Header Component</h1>
            </div>
        )
    }
}

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
```

## Component Props

`Props` is a special keyword in React, which is used for passing data from one component to another.

Example. 3

```jsx
class App extends React.Component {
    render() {
        return (
            <div>
                <Header title = "Header Title"/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        // this is a reference to the current instance of this component
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
```

Important part here is the data with props are being passed in a `uni-directional flow` down the stream. (one way from parent to child)

Example. 3.1

```jsx
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
```

Passing data to Child component using this.props.nameOFTheKey

- When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its’ children.

- Ex: `<li key="uniqueId1" >Item1</li>`

- React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.

```jsx
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

                {
                    /**
                     * Warning: Each child in a list should have a unique "key" prop.
                     */
                }

                { this.props.nameList.map(person => (
                    <li key={ person.name }>{ person.name }</li>
                )) 
                }

            </ul>
        )
    }
}
```

In short, a key should be:

- `Unique` - A key cannot be identical to that of a sibling component.
- `Static` - A key should not ever change between renders.
