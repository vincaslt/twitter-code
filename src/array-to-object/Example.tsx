export const arrayOfObjects = [
  { id: 'item-1', value: 'one' },
  { id: 'item-2', value: 'two' },
  { id: 'item-3', value: 'three' },
  { id: 'item-4', value: 'four' },
  { id: 'item-5', value: 'five' },
  { id: 'item-6', value: 'six' },
  { id: 'item-7', value: 'seven' },
];

function arrayToObject<T>(array: T[], getKey: (item: T) => string) {
  return array.reduce<Record<string, T>>((obj, item) => {
    obj[getKey(item)] = item;
    return obj;
  }, {});
}

/*
  👇 Resulting object
  {
    "item-1": { "id": "item-1", "value": "one" },
    "item-2": { "id": "item-2", "value": "two" },
    "item-3": { "id": "item-3", "value": "three" },
    "item-4": { "id": "item-4", "value": "four" },
    "item-5": { "id": "item-5", "value": "five" },
    "item-6": { "id": "item-6", "value": "six" },
    "item-7": { "id": "item-7", "value": "seven" }
  }
*/

function Example() {
  return <>{JSON.stringify(arrayToObject(arrayOfObjects, (item) => item.id))}</>;
}

export default Example;
