# `usekey`

A React hook for generation key of list item

## Installation

**with NPM**

```bash
npm i usekey --save
```

**with YARN**

```bash
yarn add usekey
```

## Usages

```js
import useKey from "useKey";

// a todo list without key/id prop
const todos = [{ title: "Todo1" }, { title: "Todo2" }, { title: "Todo3" }];

export default function App() {
  // retrieve key generator
  const keyOf = useKey();
  return (
    <div className="App">
      {todos.map((todo) => (
        // generate key for todo object
        <div key={keyOf(todo)}>
          {keyOf(todo)}:{todo.title}
        </div>
      ))}
    </div>
  );
}
```
