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
