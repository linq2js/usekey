// we use WeakMap to make sure all object references will be disposed when they are not in use
const keys = new WeakMap<any, number>();
let uniqueId = 1;

const typePrefixes: Record<string, string> = {
  string: "s",
  number: "n",
  undefined: "u",
  boolean: "b",
};

const keyOf = (value: any) => {
  const type = typeof value;
  const isObject = value && (type === "object" || type === "function");

  if (!isObject) {
    // create map key from primitive value
    return `${typePrefixes[type] || type}:${value}`;
  }

  let key = keys.get(value);
  if (!key) {
    key = uniqueId++;
    keys.set(value, key);
  }

  return `o:${key}`;
};

export default keyOf;
