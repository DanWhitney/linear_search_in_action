interface NameAge {
  name :string
  age: number
}

let findElement: <T>(arr: T[], element: T) => number = function findElement(arr, element){
  let index = 0
  for (const item of arr) {
    if(typeof element == 'object' && 
       element !== null && 
       ((element as unknown as NameAge).name === (item as unknown as NameAge).name)) {
      return index
    }
    if(item == element){
      return index
    }
    index++
  }
  return -1
}

const arr = [5,3,10,-10,33,,51]

console.log(findElement(arr, 10))

const object = [{name: 'Dan', age: 48}, {name: 'Becky', age: 36} ]


console.log(findElement(object, {name: 'Becky', age: 36}))