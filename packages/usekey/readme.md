# `objkey`

Object key generator

## Installation

**with NPM**

```bash
npm i objkey --save
```

**with YARN**

```bash
yarn add objkey
```

## Usages

```js
import keyOf from "objkey";

// a todo list without key/id prop
const todos = [{ title: "Todo1" }, { title: "Todo2" }, { title: "Todo3" }];

export default function App() {
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

## Documentations
